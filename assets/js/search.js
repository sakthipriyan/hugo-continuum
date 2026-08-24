// Client-side search. The index is fetched once, on this page only, and every
// query is scored in the browser -- nothing about a search leaves the machine.
(function () {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    const status = document.getElementById('search-status');
    const filters = document.getElementById('search-filters');
    if (!input || !results || !status) return;

    let activeType = new URLSearchParams(location.search).get('type') || '';

    // A search page inside a section only searches that section.
    const scope = document.querySelector('.search-form')?.dataset.scope || '';

    let docs = null;
    let allKinds = [];
    let loading = null;

    function load() {
        if (loading) return loading;
        status.textContent = 'Loading index…';
        loading = fetch('/index.json')
            .then(r => {
                if (!r.ok) throw new Error(r.status);
                return r.json();
            })
            .then(d => {
                docs = scope ? d.filter(x => x.n === scope) : d;
                allKinds = docs.map(x => x.k).filter(Boolean);
                status.textContent = '';
                return docs;
            })
            .catch(() => { status.textContent = 'Could not load the search index.'; return []; });
        return loading;
    }

    const norm = s => (s || '').toLowerCase();

    // Weighted so a title or tag hit outranks a passing mention in the body.
    function score(doc, terms) {
        const t = norm(doc.t), g = norm((doc.g || []).join(' ')),
              s = norm(doc.s), b = norm(doc.b);
        let total = 0;
        for (const term of terms) {
            let hit = 0;
            if (t.includes(term)) hit += t.startsWith(term) ? 12 : 8;
            if (g.includes(term)) hit += 6;
            if (s.includes(term)) hit += 3;
            if (b.includes(term)) hit += 1;
            if (!hit) return 0;          // every term must appear somewhere
            total += hit;
        }
        return total;
    }

    // Several snippets per document, each around a different match, so a long
    // page shows where it is relevant rather than just its opening line.
    const MAX_SNIPPETS = 3;

    function excerpts(doc, terms) {
        const body = doc.b || doc.s || '';
        const low = norm(body);

        // Collect match positions for every term, earliest first.
        const hits = [];
        for (const term of terms) {
            let from = 0, i;
            while ((i = low.indexOf(term, from)) !== -1 && hits.length < 60) {
                hits.push(i);
                from = i + term.length;
            }
        }
        if (!hits.length) return doc.s ? [doc.s] : [];
        hits.sort((a, b) => a - b);

        // Merge positions that would produce overlapping windows.
        const out = [];
        let lastEnd = -1;
        for (const at of hits) {
            if (at < lastEnd) continue;
            const start = Math.max(0, at - 70);
            const end = Math.min(body.length, at + 150);
            out.push((start > 0 ? '…' : '') + body.slice(start, end).trim() + (end < body.length ? '…' : ''));
            lastEnd = end;
            if (out.length === MAX_SNIPPETS) break;
        }
        return out;
    }

    function mark(text, terms) {
        let out = '';
        let rest = text;
        // Build with text nodes so nothing from the index is ever parsed as HTML.
        const pattern = terms.filter(Boolean)
            .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .sort((a, b) => b.length - a.length).join('|');
        if (!pattern) return document.createTextNode(text);
        const frag = document.createDocumentFragment();
        const re = new RegExp('(' + pattern + ')', 'ig');
        let last = 0, m;
        while ((m = re.exec(rest)) !== null) {
            if (m.index > last) frag.appendChild(document.createTextNode(rest.slice(last, m.index)));
            const el = document.createElement('mark');
            el.textContent = m[0];
            frag.appendChild(el);
            last = m.index + m[0].length;
            if (m[0].length === 0) re.lastIndex++;
        }
        if (last < rest.length) frag.appendChild(document.createTextNode(rest.slice(last)));
        return frag;
    }

    // Pills are built from the matches themselves: only types that actually have
    // a hit for this query are offered.
    function renderFilters(all) {
        if (!filters) return;
        const counts = new Map();
        for (const { doc } of all) counts.set(doc.k, (counts.get(doc.k) || 0) + 1);
        const kinds = [...new Set(allKinds)].sort();

        filters.replaceChildren(filters.querySelector('legend'));
        const mk = (value, label, n) => {
            const wrap = document.createElement('label');
            wrap.className = 'search-filter';
            const r = document.createElement('input');
            r.type = 'radio'; r.name = 'search-type'; r.id = 'filter-' + (value || 'all');
            r.value = value;
            r.checked = activeType === value;
            r.addEventListener('change', () => { activeType = value; run(input.value); });
            const span = document.createElement('span');
            span.textContent = `${label} (${n})`;
            wrap.append(r, span);
            return wrap;
        };
        filters.appendChild(mk('', 'All', all.length));
        for (const k of kinds) {
            const n = counts.get(k) || 0;
            if (n === 0) continue;
            filters.appendChild(mk(k, k + 's', n));
        }
        // With one type left, All and that type mean the same thing.
        filters.hidden = all.length === 0 || filters.querySelectorAll('.search-filter').length < 3;
    }

    function render(matches, terms) {
        results.replaceChildren();
        for (const { doc } of matches) {
            const li = document.createElement('li');
            li.className = 'search-result';

            const a = document.createElement('a');
            a.href = doc.u;
            a.appendChild(mark(doc.t, terms));
            li.appendChild(a);

            const meta = document.createElement('p');
            meta.className = 'search-meta';
            if (doc.i) {
                const ic = document.createElement('span');
                ic.className = 'search-icon';
                ic.setAttribute('aria-hidden', 'true');
                ic.textContent = doc.i;
                meta.appendChild(ic);
            }
            // The section is only worth saying when results can span sections.
            const bits = [!scope ? doc.n : '', doc.k, doc.d].filter(Boolean);
            meta.appendChild(document.createTextNode(bits.join(' · ')));
            li.appendChild(meta);

            for (const snippet of excerpts(doc, terms)) {
                const p = document.createElement('p');
                p.className = 'search-excerpt';
                p.appendChild(mark(snippet, terms));
                li.appendChild(p);
            }

            results.appendChild(li);
        }
    }

    function run(q) {
        const terms = norm(q).split(/\s+/).filter(t => t.length > 1);
        if (!terms.length) {
            results.replaceChildren();
            status.textContent = '';
            if (filters) filters.hidden = true;
            syncUrl('');
            return;
        }
        load().then(() => {
            if (!docs) return;
            const all = docs
                .map(doc => ({ doc, s: score(doc, terms) }))
                .filter(m => m.s > 0)
                .sort((a, b) => b.s - a.s || (b.doc.d || '').localeCompare(a.doc.d || ''));

            // Resolve the fallback before drawing the pills, or the row shows a
            // type as selected while All is actually in effect.
            if (activeType && !all.some(m => m.doc.k === activeType)) activeType = '';

            renderFilters(all);

            const matches = (activeType ? all.filter(m => m.doc.k === activeType) : all).slice(0, 40);
            const label = activeType ? `${activeType.toLowerCase()} result` : 'result';
            status.textContent = matches.length
                ? `${matches.length}${matches.length === 40 ? '+' : ''} ${label}${matches.length === 1 ? '' : 's'} for “${q.trim()}”`
                : `No results for “${q.trim()}”`;
            syncUrl(q);
            render(matches, terms);
        });
    }

    function syncUrl(q) {
        const p = new URLSearchParams();
        if (q.trim()) p.set('q', q.trim());
        if (activeType) p.set('type', activeType);
        const url = location.pathname + (p.toString() ? '?' + p : '');
        history.replaceState(null, '', url);
    }

    let timer;
    input.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => run(input.value), 120);
    });

    // Deep-link support: /search/?q=term
    const q = new URLSearchParams(location.search).get('q');
    if (q) { input.value = q; run(q); }
    input.focus();
})();
