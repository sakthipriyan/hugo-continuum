// Client-side search. The index is fetched once, on this page only, and every
// query is scored in the browser -- nothing about a search leaves the machine.
//
// The results are the cards Hugo already rendered into the page: a query shows,
// ranks and annotates them rather than building new markup. So a search result
// and a term-page entry are the same card, by construction.
(function () {
    const input = document.getElementById('search-input');
    const grid = document.getElementById('collection');
    const status = document.getElementById('collection-count');
    const filters = document.getElementById('filter-row');
    const empty = document.getElementById('collection-empty');
    if (!input || !grid || !status) return;

    const slots = [...grid.querySelectorAll('.card-slot')];
    const byUrl = new Map(slots.map(s => [s.dataset.url, s]));

    const params = new URLSearchParams(location.search);
    let activeType = params.get('type') || '';
    let activeSort = params.get('sort') === 'latest' ? 'latest' : '';
    const sortInputs = [...document.querySelectorAll('input[name="search-sort"]')];

    // A search page inside a section only searches that section.
    const scope = document.querySelector('.search-form')?.dataset.scope || '';

    let docs = null;
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
                docs = (scope ? d.filter(x => x.n === scope) : d).filter(x => byUrl.has(x.u));
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

    // Two snippets per card, each around a different match, so a long page
    // shows where it is relevant without the card growing without bound.
    const MAX_SNIPPETS = 2;

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
        // Build with text nodes so nothing from the index is ever parsed as HTML.
        const pattern = terms.filter(Boolean)
            .map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .sort((a, b) => b.length - a.length).join('|');
        if (!pattern) return document.createTextNode(text);
        const frag = document.createDocumentFragment();
        const re = new RegExp('(' + pattern + ')', 'ig');
        let last = 0, m;
        while ((m = re.exec(text)) !== null) {
            if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
            const el = document.createElement('mark');
            el.textContent = m[0];
            frag.appendChild(el);
            last = m.index + m[0].length;
            if (m[0].length === 0) re.lastIndex++;
        }
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        return frag;
    }

    // Annotating a card is reversible: the card's own summary is hidden rather
    // than overwritten, and the title keeps its original text in a dataset.
    function annotate(slot, doc, terms) {
        const title = slot.querySelector('.card-title');
        if (title) {
            if (title.dataset.orig === undefined) title.dataset.orig = title.textContent.trim();
            title.replaceChildren(mark(title.dataset.orig, terms));
        }
        const summary = slot.querySelector('.card-summary');
        const lines = excerpts(doc, terms);
        slot.querySelector('.card-snippets')?.remove();
        if (!lines.length) { if (summary) summary.hidden = false; return; }
        if (summary) summary.hidden = true;

        const box = document.createElement('div');
        box.className = 'card-snippets';
        for (const line of lines) {
            const p = document.createElement('p');
            p.className = 'card-snippet';
            p.appendChild(mark(line, terms));
            box.appendChild(p);
        }
        const anchor = summary || slot.querySelector('.card-meta');
        if (anchor) anchor.parentNode.insertBefore(box, summary ? summary.nextSibling : anchor);
        else slot.querySelector('.card-content')?.appendChild(box);
    }

    function reset(slot) {
        const title = slot.querySelector('.card-title');
        if (title && title.dataset.orig !== undefined) title.textContent = title.dataset.orig;
        slot.querySelector('.card-snippets')?.remove();
        const summary = slot.querySelector('.card-summary');
        if (summary) summary.hidden = false;
    }

    // Pills are built from the matches themselves: only types that actually have
    // a hit for this query are offered.
    function renderFilters(shown) {
        if (!filters) return;
        const counts = new Map();
        for (const s of shown) counts.set(s.dataset.type, (counts.get(s.dataset.type) || 0) + 1);

        filters.replaceChildren(filters.querySelector('legend'));
        const mk = (value, label, n) => {
            const wrap = document.createElement('label');
            wrap.className = 'filter-pill';
            const r = document.createElement('input');
            r.type = 'radio'; r.name = 'type'; r.value = value;
            r.checked = activeType === value;
            r.addEventListener('change', () => { activeType = value; run(input.value); });
            const span = document.createElement('span');
            span.textContent = `${label} (${n})`;
            wrap.append(r, span);
            return wrap;
        };
        filters.appendChild(mk('', 'All', shown.length));
        for (const k of [...counts.keys()].sort()) {
            filters.appendChild(mk(k, k.charAt(0).toUpperCase() + k.slice(1), counts.get(k)));
        }
        // With one type left, All and that type mean the same thing.
        filters.hidden = filters.querySelectorAll('.filter-pill').length < 3;
    }

    // No query, nothing to show. The cards stay in the page, hidden, ready to
    // be revealed and ranked as soon as there is something to rank them by.
    function clear() {
        for (const slot of slots) { reset(slot); slot.hidden = true; }
        if (filters) filters.hidden = true;
        if (empty) empty.hidden = true;
        status.textContent = '';
        syncUrl('');
    }

    function run(q) {
        const terms = norm(q).split(/\s+/).filter(t => t.length > 1);
        if (!terms.length) { clear(); return; }

        load().then(() => {
            if (!docs) return;
            const all = docs
                .map(doc => ({ doc, s: score(doc, terms) }))
                .filter(m => m.s > 0)
                .sort(activeSort === 'latest'
                    // Newest first, with relevance only breaking exact date ties.
                    ? (a, b) => (b.doc.d || '').localeCompare(a.doc.d || '') || b.s - a.s
                    : (a, b) => b.s - a.s || (b.doc.d || '').localeCompare(a.doc.d || ''));

            // Resolve the fallback before drawing the pills, or the row shows a
            // type as selected while All is actually in effect.
            const kinds = new Set(all.map(m => byUrl.get(m.doc.u).dataset.type));
            if (activeType && !kinds.has(activeType)) activeType = '';

            renderFilters(all.map(m => byUrl.get(m.doc.u)));

            for (const slot of slots) { reset(slot); slot.hidden = true; }
            let shown = 0;
            for (const { doc } of all) {
                const slot = byUrl.get(doc.u);
                if (activeType && slot.dataset.type !== activeType) continue;
                annotate(slot, doc, terms);
                slot.hidden = false;
                grid.appendChild(slot);          // appending an existing node moves it
                shown++;
            }

            const label = activeType ? activeType.replace(/s$/, '') + ' result' : 'result';
            status.textContent = shown
                ? `${shown} ${label}${shown === 1 ? '' : 's'} for “${q.trim()}”`
                : `No results for “${q.trim()}”`;
            if (empty) empty.hidden = shown > 0;
            syncUrl(q);
        });
    }

    function syncUrl(q) {
        const p = new URLSearchParams();
        if (q.trim()) p.set('q', q.trim());
        if (activeType) p.set('type', activeType);
        if (activeSort) p.set('sort', activeSort);
        history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : ''));
    }

    for (const r of sortInputs) {
        r.checked = r.value === activeSort;
        r.addEventListener('change', () => {
            activeSort = r.value === 'latest' ? 'latest' : '';
            run(input.value);
        });
    }

    let timer;
    input.addEventListener('input', () => {
        clearTimeout(timer);
        timer = setTimeout(() => run(input.value), 120);
    });

    // Deep-link support: /search/?q=term
    const q = new URLSearchParams(location.search).get('q');
    if (q) { input.value = q; run(q); } else { clear(); }
    input.focus();
})();
