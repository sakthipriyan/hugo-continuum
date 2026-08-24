// Filters an already-rendered collection in place. The cards come from Hugo, so
// nothing is reconstructed in the browser and a reader without JavaScript still
// gets the whole list -- just unfiltered.
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
            count.textContent = value
                ? `${shown} of ${total} items`
                : `${total} item${total === 1 ? '' : 's'}`;
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
