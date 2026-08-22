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
