# Continuum

A Hugo theme for sites that publish more than one kind of thing — blogs, books,
slide decks, videos and interactive tools — across two or more top-level
sections, each with its own identity.

Built for and used by [sakthipriyan.com](https://sakthipriyan.com/).

## Requirements

Hugo **extended** v0.164.0 or newer.

## Install

As a Hugo Module (recommended):

```yaml
# hugo.yaml
module:
  imports:
    - path: github.com/sakthipriyan/hugo-continuum
```

```bash
hugo mod get github.com/sakthipriyan/hugo-continuum
```

Or as a git submodule:

```bash
git submodule add https://github.com/sakthipriyan/hugo-continuum.git themes/continuum
```
…and set `theme: continuum`.

## How sections work

Continuum has no built-in knowledge of your sections. Each top-level section
describes itself in its own `_index.md`, and the theme reads that:

```yaml
---
title: "Building Wealth"
weight: 20            # ordering in nav and on the home page
emoji: "💰"
taxonomy: "wealth_tags"   # the taxonomy this section owns
accentFrom: "#f5c542"     # gradient start (header, buttons, card edges)
accentTo:   "#d4af37"     # gradient end
accentInk:  "#7a5c12"     # the accent as *text on white*
onAccent:   "#1a1408"     # text drawn *on* the accent
---
```

Add a third section and the nav, home page, breadcrumbs, tag pages and colours
follow automatically — no theme changes.

### About the colour tokens

Four tokens rather than one, because one colour cannot do all three jobs:

| token | drawn on | needs |
|---|---|---|
| `accentFrom` / `accentTo` | the gradient itself | — |
| `onAccent` | on top of the accent | ≥ 4.5:1 against both gradient stops |
| `accentInk` | the accent used as text on white | ≥ 4.5:1 against white |

A light accent (gold, amber, lime) **cannot** be used as text on white — gold on
white is about 1.6:1 — which is exactly what `accentInk` is for. Likewise a light
accent needs dark `onAccent` text rather than white.

The theme emits these as CSS custom properties (`--accent-from`, `--accent-to`,
`--accent-ink`, `--on-accent`, `--header-bg`) in a generated, fingerprinted
stylesheet, with `:root` fallbacks for pages that belong to no section.

### Newsletter sign-up

A section offers a sign-up card by naming its provider's form endpoint in its
`_index.md` front matter. Only `action` is required; every other key has a
default, and the words for each state sit under that state:

```yaml
subscribe:
  action: "https://app.kit.com/forms/<form-id>/subscriptions"   # required
  heading: "Newsletter"            # section heading above the card under posts
  title: "Subscribe"               # the card's heading, the same in every state
  another: "Use another email"     # back to the form, from pending and confirmed
  sending: "Sending…"              # a button while its request is out
  networkError: "Couldn't reach the newsletter service. Check your connection and try again."
  welcome: "**You're in.** Thanks for confirming your subscription."   # Markdown
  form:
    text: "Get new posts by email."          # Markdown
    placeholder: "you@example.com"
    button: "Subscribe"
  pending:
    status: "Check your inbox"               # the chip beside the heading
    text: "Link sent to {email}."            # the address is fitted to this line
    hint: "Not there? Check your spam folder."
    resend: "Resend link"
    resent: "Sent"
  confirmed:
    status: "Subscribed"
    detail: "since {date}"                   # after the address; the site's date format
    text: "Thanks for subscribing."          # Markdown
```

The same in TOML:

```toml
[subscribe]
action = "https://app.kit.com/forms/<form-id>/subscriptions"
heading = "Newsletter"

[subscribe.form]
text = "Get new posts by email."
button = "Subscribe"

[subscribe.pending]
hint = "Not there? Check your spam folder."

[subscribe.confirmed]
text = "Thanks for subscribing."
```

The card is the third track of the section landing's entry row, beside Start
Here and Search. Under every post in the section (after `heading`) and wherever
`{{< subscribe >}}` is placed it is the same card at the same width, one track
of that row. A page opts out with `subscribe: false`. Keep each `text` to two
lines on the narrowest card: every state shares one height, so a longer one
makes all of them taller.

The card holds every state in one cell, so it never changes size. The heading
is the same in all of them; a chip at the end of its line says which state the
card is in:

1. **Form.** The button waits for a valid address.
2. **Sending.** The field locks and the button shows progress; a refusal from
   the provider takes the place of the line under the heading.
3. **Pending.** Where the link went, what to do if it has not arrived, a
   resend (resting thirty seconds after each) and a way back to the form. A
   pending sign-up older than seven days is let go.
4. **Confirmed.** Set the provider's post-confirmation redirect to the section
   landing with `?subscribed=1` added. The page opens with the `welcome` note,
   and in that browser the card says so from then on, with the address and the
   date on a line of their own.

Every card on the page, and in the reader's other tabs, moves together. The
state lives in the reader's own browser (localStorage) and is never sent
anywhere. The parameter is removed from the URL on arrival, and so is Kit's
`ck_subscriber_id` on any page, before analytics can record either.

It posts `email_address` with the same fields and headers as Kit's own embed
script; the `action` is the one in a Kit form's HTML embed. Without JavaScript
the card is the form alone, a plain POST that lands on the provider's own page.

**Theming.** The card has no colours of its own. Its styles, in
`subscribe.css` and loaded only on sections that configure a sign-up, draw on
the theme's role tokens and the section accent (`accentFrom`, `accentTo`,
`accentInk` and their dark counterparts above), so it follows the section's
colours and the dark palette with nothing further to set.

## Site configuration

```yaml
params:
  author: "Your Name"
  initials: "YN"                 # fallback if the profile image fails to load
  description: "Tagline under your name on the home page"
  profileImage: "/images/profile.jpg"
  sourceRepo: "https://github.com/you/your-site"   # enables the "Source" link
  sourceBranch: "main"
  social:
    - id: "github"               # becomes a CSS class
      name: "GitHub"
      url: "https://github.com/you"
      color: "#333333"           # brand colour, applied via --social-color
      icon: "M12 .297c-6.63 0-12 …"   # raw SVG path data, 24x24 viewBox

services:
  disqus:
    shortname: "your-shortname"  # omit to disable comments
```

## Content layout

```
content/
  <section>/
    _index.md        # section identity (see above)
    about/
    blogs/           # type: blogs
    books/           # type: books
    slides/          # type: slides
    tools/           # type: tools
    videos/          # type: videos
    tags/            # type: tags, layout: terms
```

Each leaf subsection needs `type:` in its `_index.md` — Hugo gives every
subsection of a section the same `Type`, so `type:` is what lets the theme pick
`layouts/<type>/list.html`.

## Diagrams and charts

Opt in per page with `js_tools`, so the libraries load only where used:

```yaml
js_tools: ["echarts", "viz", "d2", "gsap"]   # or ["all"]
```

Then fence a block as ` ```echarts `, ` ```dot ` or ` ```d2 `. Those three
languages bypass syntax highlighting via render hooks and are rendered
client-side into charts and diagrams.

Ordinary code fences are highlighted at build time by Chroma; the stylesheet
ships only to pages that actually contain code.

## Example site

`exampleSite/` is a complete, buildable site used to develop the theme
standalone:

```bash
cd exampleSite && hugo server --themesDir ../..
```

## Developing against a real site

Point a Hugo Module at a local checkout so edits show up immediately:

```yaml
module:
  imports:
    - path: github.com/sakthipriyan/hugo-continuum
  replacements: "github.com/sakthipriyan/hugo-continuum -> /path/to/hugo-continuum"
```

Keep that replacement out of your production config — CI has no such path.

## License

MIT. See [LICENSE](LICENSE).
