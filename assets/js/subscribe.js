/* Newsletter sign-up: the card in partials/subscribe.html, progressively
   enhanced.

   Without this file the card is a plain POST form that the browser's own
   validation guards. With it, the card is a small state machine, drawn in
   place and never changing size:

     form       an address, and a button that waits for one worth sending
     sending    the field locked and the button busy while Kit answers
     pending    "check your inbox", with the address, a resend, and a way back
     confirmed  "subscribed", after Kit's confirmation link lands back, with the
                address and the date on a line of their own

   The request mirrors Kit's own ck.js: the fields as FormData, JSON asked for,
   and back a `status` of "success", "quarantined", or anything else with
   `errors`. Kit answers any origin (Access-Control-Allow-Origin: *), which is
   what lets a page on this site read the reply at all.

   State lives in localStorage under `continuum-subscribe` as
   {state, at, email}. subscribe-init.html reads it before first paint, so the
   right state is showing from the first frame, and records "confirmed" when
   the provider's redirect lands; this file records "pending", keeps every
   card on the page -- and in the reader's other tabs -- in step, and writes
   in what only this browser knows: the address and the date. */
(function () {
    var KEY = 'continuum-subscribe';
    /* A pending sign-up older than this is let go: the link was most likely
       followed on another device, or never will be, and the card goes back to
       offering the form rather than waiting on an inbox for good. Mirrored in
       subscribe-init.html. */
    var PENDING_DAYS = 7;
    /* Rest after a resend, so an impatient second press cannot pile
       confirmation emails into an inbox. */
    var RESEND_REST = 30000;
    /* A browser's type="email" accepts "a@b"; nothing at a dotless domain
       receives mail, so the button waits for a dot. */
    var ADDRESS = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;
    var root = document.documentElement;
    var cards = Array.prototype.slice.call(document.querySelectorAll('.subscribe'));

    function read() {
        try {
            var saved = JSON.parse(localStorage.getItem(KEY));
            if (!saved || !saved.at || (saved.state !== 'pending' && saved.state !== 'confirmed')) {
                return null;
            }
            if (saved.state === 'pending' && Date.now() - new Date(saved.at).getTime() > PENDING_DAYS * 864e5) {
                return null;
            }
            return saved;
        } catch (e) {
            return null;
        }
    }

    function write(saved) {
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch (e) {}
    }

    function forget() {
        try { localStorage.removeItem(KEY); } catch (e) {}
    }

    function valid(value) {
        return ADDRESS.test(value.trim());
    }

    /* "Sep 14, 2026": the format the theme gives every other date on the site
       (Go's "Jan 2, 2006"), not the browser's locale, which would write the
       same day three ways across three readers. The reader's own day, though:
       the stored timestamp read in local time is what keeps a reader west of
       UTC from seeing the day before. */
    var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    function formatDate(iso) {
        var when = new Date(iso);
        if (isNaN(when.getTime())) { return ''; }
        return MONTHS[when.getMonth()] + ' ' + when.getDate() + ', ' + when.getFullYear();
    }

    /* Writes an address into its slot, shortening the name and never the
       domain when it is too wide: a mistyped domain is the likeliest reason a
       confirmation never arrives, and the part worth checking. Measured, not
       counted -- letters differ in width -- against the width its line leaves
       it, fitted again when the card changes width. A domain too wide even then
       is shortened in its middle, keeping how it starts and its last label
       (".com"), where typos show; only a last label too wide on its own is left
       to the stylesheet's ellipsis. The whole address is the slot's title, and
       what is announced. */
    function fitEmail(slot, email) {
        /* In fractions of a pixel, the drawn text against the slot's own box:
           scrollWidth and clientWidth are whole pixels, and 136.4 of text in
           136 of slot reads as a fit to them while the stylesheet's ellipsis,
           which works in fractions, still cuts the domain it was kept for. */
        var range = document.createRange();
        function fits(text) {
            slot.textContent = text;
            range.selectNodeContents(slot);
            return range.getBoundingClientRect().width <= slot.getBoundingClientRect().width + 0.01;
        }
        slot.title = email;
        if (fits(email)) { return; }
        var at = email.lastIndexOf('@');
        if (at < 1) { return; }
        var name = email.slice(0, at);
        var domain = email.slice(at);
        /* The name keeps how it starts and its last few letters -- often a
           "+tag" or the digits that tell one address from another -- and
           gives up its middle. */
        function keepEnds(text, n) {
            var tail = Math.min(3, Math.floor(n / 2));
            return text.slice(0, n - tail) + '\u2026' + (tail ? text.slice(-tail) : '');
        }
        for (var n = name.length - 1; n >= 1; n--) {
            if (fits(keepEnds(name, n) + domain)) { return; }
        }
        var dot = domain.lastIndexOf('.');
        if (dot < 2) { return; }
        var head = domain.slice(0, dot);
        var last = domain.slice(dot);
        for (var m = head.length - 1; m >= 2; m--) {
            if (fits(name.charAt(0) + '\u2026' + head.slice(0, m) + '\u2026' + last)) { return; }
        }
    }

    function panel(card, view) {
        return card.querySelector('.subscribe-panel-' + view);
    }

    /* Emptied first, then written a beat later: a change a screen reader
       reliably hears, even when the words are the same as last time. */
    function announce(card, text) {
        var live = card.querySelector('.subscribe-live');
        if (!live) { return; }
        live.textContent = '';
        window.setTimeout(function () { live.textContent = text; }, 60);
    }

    function setError(p, message) {
        if (!p) { return; }
        var slot = p.querySelector('.subscribe-error');
        if (message && slot) {
            slot.textContent = message;
            p.setAttribute('data-error', '');
        } else {
            if (slot) { slot.textContent = ''; }
            p.removeAttribute('data-error');
        }
    }

    function busy(button, on) {
        if (on) {
            button.disabled = true;
            button.setAttribute('aria-busy', 'true');
        } else {
            button.removeAttribute('aria-busy');
            button.disabled = false;
        }
    }

    function refreshSubmit(card) {
        var input = card.querySelector('.subscribe-panel-form input[type="email"]');
        var submit = card.querySelector('.subscribe-submit');
        if (!input || !submit || submit.getAttribute('aria-busy') === 'true') { return; }
        submit.disabled = !valid(input.value);
    }

    function focusView(card, view) {
        if (view === 'form') {
            var input = card.querySelector('.subscribe-panel-form input[type="email"]');
            if (input) { input.focus(); }
            return;
        }
        /* The chip, not the heading: the heading is the same in every state. */
        var status = panel(card, view).querySelector('.subscribe-status');
        if (status) { status.focus(); }
    }

    /* Draws one card in one state, writing in the address and the date. */
    function show(card, view, saved) {
        card.setAttribute('data-view', view);
        ['form', 'pending', 'confirmed'].forEach(function (v) {
            if (v !== view) { setError(panel(card, v), null); }
        });

        /* Pending: the address the link went to. Emptied in any other state,
           so a long address left in a hidden state cannot keep the card tall. */
        var pending = panel(card, 'pending');
        var sentTo = pending && pending.querySelector('.subscribe-email');
        if (sentTo) {
            if (saved && saved.state === 'pending' && saved.email) {
                fitEmail(sentTo, saved.email);
            } else {
                sentTo.textContent = '';
                sentTo.removeAttribute('title');
            }
        }
        var resend = card.querySelector('.subscribe-resend');
        if (resend) { resend.hidden = !(saved && saved.email); }

        /* Confirmed: which address, when this browser knows it, and since when.
           An address from another browser's sign-up is not known here, and
           then the line is the date alone. */
        var confirmedPanel = panel(card, 'confirmed');
        var who = confirmedPanel && confirmedPanel.querySelector('.subscribe-who');
        if (who) {
            var isConfirmed = !!saved && saved.state === 'confirmed';
            var address = isConfirmed && saved.email ? saved.email : '';
            var slot = who.querySelector('.subscribe-email');
            var sep = who.querySelector('.subscribe-sep');
            var when = who.querySelector('.subscribe-when');
            /* The date first: the address is fitted to what the date leaves of
               the line, so the date has to be on it when the address is
               measured. Fitted the other way round, on a line still empty, the
               whole address seemed to fit and the date then squeezed it. */
            var date = isConfirmed ? formatDate(saved.at) : '';
            when.textContent = date ? (who.getAttribute('data-detail') || '{date}').replace('{date}', date) : '';
            slot.hidden = !address;
            sep.hidden = !address;
            if (address) {
                fitEmail(slot, address);
            } else {
                slot.textContent = '';
                slot.removeAttribute('title');
            }
        }
        refreshSubmit(card);
    }

    function renderAll() {
        var saved = read();
        root.classList.toggle('is-subscribe-pending', !!saved && saved.state === 'pending');
        root.classList.toggle('is-subscribe-confirmed', !!saved && saved.state === 'confirmed');
        cards.forEach(function (card) {
            /* "Use another email" holds a confirmed card on the form; anything
               but confirmed lets it go. */
            if (!(saved && saved.state === 'confirmed')) { card.removeAttribute('data-editing'); }
            var view = card.hasAttribute('data-editing') ? 'form' : (saved ? saved.state : 'form');
            show(card, view, saved);
        });
    }

    /* The request, as Kit's ck.js makes it. Resolves with Kit's reply; rejects
       with 'network' when nothing came back, 'server' when Kit answered with an
       error status and nothing readable, or 'handover' when a reply is not the
       JSON this understands. */
    function send(action, email) {
        /* The same fields and headers as ck.js (version 6), so Kit answers this
           as it answers its own embed: with JSON. Kit's preflight allows the
           X-CKJS-Version header from any origin. */
        var data = new FormData();
        data.append('email_address', email);
        data.append('referrer', document.referrer);
        data.append('host', document.location.href);
        data.append('search', document.location.search);
        data.append('ckjs_version', '6');
        return fetch(action, {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json', 'X-CKJS-Version': '6' }
        }).then(function (response) {
            /* An error status with nothing readable is a failure to say so in
               the card; only a reply that succeeded but is not JSON is handed
               over to Kit's own page. */
            return response.json().catch(function () {
                throw response.ok ? 'handover' : 'server';
            });
        }, function () {
            throw 'network';
        });
    }

    function outcome(reply) {
        if (reply && reply.status === 'success') {
            /* A consent step (Kit's GDPR setting) is Kit's to show: ck.js opens
               it before finishing, and Kit's own page shows it to the plain
               POST. Marking the card pending here would skip it. */
            if (reply.consent && reply.consent.enabled) { return { handover: true }; }
            return { ok: true };
        }
        var messages = reply && reply.errors && reply.errors.messages;
        if (messages && messages.length) { return { error: messages.join(' ') }; }
        /* "quarantined", or anything else: Kit wants a human check it hosts
           itself, or said something this does not know. */
        return { handover: true };
    }

    function bind(card) {
        var form = panel(card, 'form');
        var pending = panel(card, 'pending');
        var confirmed = panel(card, 'confirmed');
        if (!form || form.hasAttribute('data-bound')) { return; }
        form.setAttribute('data-bound', '');

        var input = form.querySelector('input[type="email"]');
        var submit = form.querySelector('.subscribe-submit');
        var networkError = card.getAttribute('data-error-network');

        /* The plain POST, for when Kit's answer has to be Kit's own page: it
           carries the address there rather than losing the sign-up. submit()
           skips the listener below. */
        function handover(email) {
            /* Written before leaving: Kit's page takes it from here, and coming
               back the card should say where the link went, not offer the form
               as though nothing had happened. */
            write({ state: 'pending', at: new Date().toISOString(), email: email });
            busy(submit, false);
            input.readOnly = false;
            input.value = email;
            form.submit();
        }

        input.addEventListener('input', function () {
            setError(form, null);
            refreshSubmit(card);
        });
        input.addEventListener('change', function () { refreshSubmit(card); });
        /* A password manager can fill the field without an input event. */
        window.setTimeout(function () { refreshSubmit(card); }, 800);

        form.addEventListener('submit', function (e) {
            if (!window.fetch || !window.FormData) { return; }
            e.preventDefault();
            var email = input.value.trim();
            if (!valid(email) || submit.getAttribute('aria-busy') === 'true') { return; }

            busy(submit, true);
            input.readOnly = true;
            setError(form, null);

            function settle() {
                busy(submit, false);
                input.readOnly = false;
                refreshSubmit(card);
            }

            send(form.action, email).then(function (reply) {
                var result = outcome(reply);
                if (result.ok) {
                    write({ state: 'pending', at: new Date().toISOString(), email: email });
                    settle();
                    input.value = '';
                    renderAll();
                    var p = panel(card, 'pending');
                    /* Said with the whole address, however the slot had to shorten it. */
                    var slot = p.querySelector('.subscribe-email');
                    var said = Array.prototype.map.call(p.querySelectorAll('.subscribe-text > p'), function (line) {
                        return line.textContent.trim();
                    }).join(' ');
                    if (slot && slot.title) { said = said.replace(slot.textContent, slot.title); }
                    announce(card, p.querySelector('.subscribe-status').textContent.trim() + '. ' + said);
                    focusView(card, 'pending');
                    return;
                }
                if (result.error) {
                    settle();
                    setError(form, result.error);
                    announce(card, result.error);
                    input.focus();
                    return;
                }
                handover(email);
            }, function (reason) {
                if (reason === 'network' || reason === 'server') {
                    settle();
                    setError(form, networkError);
                    announce(card, networkError);
                    input.focus();
                    return;
                }
                handover(email);
            });
        });

        /* Escape while adding another address goes back to "subscribed". */
        form.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape' || !card.hasAttribute('data-editing')) { return; }
            card.removeAttribute('data-editing');
            renderAll();
            focusView(card, 'confirmed');
        });

        var resend = pending && pending.querySelector('.subscribe-resend');
        var rest = null;
        if (resend) {
            resend.addEventListener('click', function () {
                var saved = read();
                if (!saved || !saved.email || resend.getAttribute('aria-busy') === 'true' || resend.hasAttribute('data-done')) {
                    return;
                }
                busy(resend, true);
                setError(pending, null);
                send(form.action, saved.email).then(function (reply) {
                    var result = outcome(reply);
                    busy(resend, false);
                    if (result.ok) {
                        write({ state: 'pending', at: new Date().toISOString(), email: saved.email });
                        resend.setAttribute('data-done', '');
                        resend.disabled = true;
                        announce(card, resend.querySelector('.subscribe-label-done').textContent.trim() + ': ' + saved.email);
                        window.clearTimeout(rest);
                        rest = window.setTimeout(function () {
                            resend.removeAttribute('data-done');
                            resend.disabled = false;
                        }, RESEND_REST);
                        return;
                    }
                    if (result.error) {
                        setError(pending, result.error);
                        announce(card, result.error);
                        return;
                    }
                    handover(saved.email);
                }, function (reason) {
                    busy(resend, false);
                    if (reason === 'network' || reason === 'server') {
                        setError(pending, networkError);
                        announce(card, networkError);
                        return;
                    }
                    handover(saved.email);
                });
            });
        }

        /* Back to the form with the address it was sent to, selected: a typo
           is most often why. */
        var change = pending && pending.querySelector('.subscribe-change');
        if (change) {
            change.addEventListener('click', function () {
                var saved = read();
                forget();
                renderAll();
                if (saved && saved.email) { input.value = saved.email; }
                refreshSubmit(card);
                input.focus();
                input.select();
            });
        }

        var another = confirmed && confirmed.querySelector('.subscribe-another');
        if (another) {
            another.addEventListener('click', function () {
                card.setAttribute('data-editing', '');
                show(card, 'form', read());
                input.focus();
            });
        }
    }

    cards.forEach(bind);
    renderAll();

    /* Another tab signed up, confirmed, or started over. */
    window.addEventListener('storage', function (e) {
        if (e.key === KEY || e.key === null) { renderAll(); }
    });

    /* The confirmed line gives the address whatever width the card has left.
       A card's width can change without the window's -- a scrollbar arriving
       as the page grows is enough, after the address was already fitted -- so
       it is each card that is watched, not the window, and the address is
       fitted again once the width settles. Only a change of width counts:
       fitting an address never changes the card's width, so this cannot loop. */
    var refit = null;
    function scheduleRefit() {
        window.clearTimeout(refit);
        refit = window.setTimeout(renderAll, 100);
    }
    if (window.ResizeObserver) {
        var widths = new WeakMap();
        var observer = new ResizeObserver(function (entries) {
            var changed = false;
            entries.forEach(function (entry) {
                var width = Math.round(entry.contentRect.width * 100) / 100;
                if (widths.get(entry.target) !== width) {
                    widths.set(entry.target, width);
                    changed = true;
                }
            });
            if (changed) { scheduleRefit(); }
        });
        cards.forEach(function (card) { observer.observe(card); });
    } else {
        window.addEventListener('resize', scheduleRefit);
    }

    /* The welcome raised by subscribe-init.html closes by taking its class away. */
    var dismiss = document.querySelectorAll('.subscribe-welcome-note .subscribe-dismiss');
    for (var i = 0; i < dismiss.length; i++) {
        dismiss[i].addEventListener('click', function () {
            root.classList.remove('is-subscribe-welcome');
        });
    }
})();
