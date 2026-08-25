// Controls for an already-rendered collection: filtering cards by type, and
// reordering a sortable list. The markup comes from Hugo either way, so nothing
// is reconstructed in the browser and a reader without JavaScript still gets
// the whole list -- just in the order it was served.

// Sorting: any [data-sort-list] whose children carry data-sort-* keys, driven
// by a .filter-row[data-sort]. The served order is the default, so it needs no
// key of its own.
(function () {
    const row = document.querySelector('.filter-row[data-sort]');
    const list = document.querySelector('[data-sort-list]');
    if (!row || !list) return;

    const param = row.dataset.sort;
    const items = [...list.children];
    const radios = [...row.querySelectorAll('input[type="radio"]')];

    function apply(value, push) {
        const ordered = value === 'alpha'
            ? [...items].sort((a, b) =>
                (a.dataset.sortName || '').localeCompare(b.dataset.sortName || ''))
            : items;
        for (const el of ordered) list.appendChild(el);   // appending moves it

        if (push) {
            const p = new URLSearchParams(location.search);
            if (value) p.set(param, value); else p.delete(param);
            history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : ''));
        }
    }

    for (const r of radios) {
        r.addEventListener('change', () => { if (r.checked) apply(r.value, true); });
    }

    // Deep-link support: /tags/?sort=alpha
    const wanted = new URLSearchParams(location.search).get(param) || '';
    const target = radios.find(r => r.value === wanted) || radios.find(r => r.value === '');
    if (target) { target.checked = true; apply(target.value, false); }
})();

// Filtering: cards in #collection shown or hidden by a .filter-row[data-filter].
(function () {
    const grid = document.getElementById('collection');
    const row = document.querySelector('.filter-row[data-filter]');
    if (!grid || !row) return;

    const key = row.dataset.filter;                 // also the query parameter
    const slots = [...grid.querySelectorAll('.card-slot')];
    const count = document.getElementById('collection-count');
    const empty = document.getElementById('collection-empty');
    const radios = [...row.querySelectorAll('input[type="radio"]')];
    const total = slots.length;

    function apply(value, push) {
        let shown = 0;
        for (const slot of slots) {
            const match = !value || slot.dataset[key] === value;
            slot.hidden = !match;
            if (match) shown++;
        }
        if (count) {
            // Named like a search result line -- "3 videos tagged Asset
            // Allocation" beside "4 video results for x" -- rather than a bare
            // ratio. The total cannot join the phrase: 18 is every item on the
            // page, not 18 videos, so "3 of 18 videos" would be a lie. It is
            // on the badge and the All pill already.
            const noun = shown === 1 ? value.replace(/s$/, '') : value;
            const suffix = count.dataset.suffix;
            count.textContent = value
                ? `${shown} ${noun}${suffix ? ' ' + suffix : ''}`
                : '';
        }
        if (empty) empty.hidden = shown > 0;

        if (push) {
            const p = new URLSearchParams(location.search);
            if (value) p.set(key, value); else p.delete(key);
            history.replaceState(null, '', location.pathname + (p.toString() ? '?' + p : ''));
        }
    }

    for (const r of radios) {
        r.addEventListener('change', () => { if (r.checked) apply(r.value, true); });
    }

    // Deep-link support: /tags/ibkr/?type=books
    const wanted = new URLSearchParams(location.search).get(key) || '';
    const target = radios.find(r => r.value === wanted) || radios.find(r => r.value === '');
    if (target) {
        target.checked = true;
        // Do not rewrite the URL on load; an unknown value simply falls back.
        apply(target.value, false);
    }
})();
