// Client-side search. The index is fetched once, on this page only, and every
// query is scored in the browser -- nothing about a search leaves the machine.
(function () {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    const status = document.getElementById('search-status');
    if (!input || !results || !status) return;

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
                docs = scope ? d.filter(x => x.n === scope) : d;
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

    // Show where the match actually is, rather than always the opening line.
    function excerpt(doc, terms) {
        const body = doc.b || doc.s || '';
        const low = norm(body);
        let at = -1;
        for (const term of terms) {
            const i = low.indexOf(term);
            if (i !== -1 && (at === -1 || i < at)) at = i;
        }
        if (at === -1) return doc.s || '';
        const start = Math.max(0, at - 70);
        return (start > 0 ? '…' : '') + body.slice(start, start + 200).trim() + '…';
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
            const bits = [doc.n, doc.k, doc.d].filter(Boolean);
            meta.textContent = bits.join(' · ');
            li.appendChild(meta);

            const p = document.createElement('p');
            p.className = 'search-excerpt';
            p.appendChild(mark(excerpt(doc, terms), terms));
            li.appendChild(p);

            results.appendChild(li);
        }
    }

    function run(q) {
        const terms = norm(q).split(/\s+/).filter(t => t.length > 1);
        if (!terms.length) {
            results.replaceChildren();
            status.textContent = '';
            return;
        }
        load().then(() => {
            if (!docs) return;
            const matches = docs
                .map(doc => ({ doc, s: score(doc, terms) }))
                .filter(m => m.s > 0)
                .sort((a, b) => b.s - a.s || (b.doc.d || '').localeCompare(a.doc.d || ''))
                .slice(0, 40);
            status.textContent = matches.length
                ? `${matches.length}${matches.length === 40 ? '+' : ''} result${matches.length === 1 ? '' : 's'} for “${q.trim()}”`
                : `No results for “${q.trim()}”`;
            render(matches, terms);
        });
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
