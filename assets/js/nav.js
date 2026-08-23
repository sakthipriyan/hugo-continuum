// Mobile navigation drawer: hamburger toggle, overlay, scroll lock, and the
// keyboard handling a modal drawer needs (focus trap, Escape, focus return).
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    const isOpen = () => hamburger.classList.contains('active');

    // Only elements that are actually reachable — the drawer is display:none
    // above the mobile breakpoint, and hidden links must not receive focus.
    function focusables() {
        return Array.from(navLinks.querySelectorAll('a[href]'))
            .filter(el => el.offsetParent !== null);
    }

    function open() {
        hamburger.classList.add('active');
        navLinks.classList.add('active');
        overlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
        const first = focusables()[0];
        if (first) first.focus();
    }

    function close({ restoreFocus = true } = {}) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        if (restoreFocus) hamburger.focus();
    }

    hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        isOpen() ? close() : open();
    });

    overlay.addEventListener('click', () => close());

    // Navigating away should close the drawer but not steal focus from the
    // page being loaded.
    navLinks.querySelectorAll('a').forEach(link =>
        link.addEventListener('click', () => close({ restoreFocus: false })));

    document.addEventListener('keydown', function (e) {
        if (!isOpen()) return;

        if (e.key === 'Escape') {
            e.preventDefault();
            close();
            return;
        }

        if (e.key !== 'Tab') return;

        // Trap focus inside the drawer while it is open, so tabbing cannot
        // reach the page hidden behind the overlay.
        const items = focusables();
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        const active = document.activeElement;

        if (e.shiftKey && (active === first || !navLinks.contains(active))) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && active === last) {
            e.preventDefault();
            first.focus();
        }
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && isOpen()) close({ restoreFocus: false });
    });
});
