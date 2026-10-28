# Changelog

All notable changes to this theme are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and the theme adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Sites pin this theme by version, so an entry here is what a consumer reads when
deciding whether to bump. Layouts, partials, config keys and template behaviour
belong here; CI and tooling do not — they change nothing a consuming site
receives.

Entries begin at the next release. For `v0.17.0` and earlier the commit history
is the record.

## [Unreleased]

## [0.24.0] - 2026-10-28

### Changed

- Slidetake 0.3.3: ` ```svg ` drawings in a deck are drawn inline, so they can
  use the deck's colours (`currentColor`, `var(--text)`, `var(--accent)`) and
  switch with dark and light. Scripts, styles and links inside them are removed.

## [0.23.0] - 2026-10-28

### Changed

- Slidetake 0.3.2: `<!-- steps -->` reveals everything after it on the card
  until a `<!-- steps: off -->`; diagrams and charts get carousels like images;
  the header trail and active layout button stay readable on a header in the
  section's own colour.

### Fixed

- Slidetake decks: in dark mode, sub-headings use a lightened shade of the
  section accent instead of the raw accent, which sank into the card for a
  dark accent such as navy. A section can set `accentSoftDark` to choose it.

## [0.22.0] - 2026-10-28

### Changed

- Slidetake 0.3.1: its own colour is seafoam; full-screen cards are a 16:9
  frame placed like other slides; layouts are offered alphabetically with path
  as the default; live editing fixed; the keys card links to slidetake.com/docs.
  Sections that set `accentFrom` keep their own colours.

## [0.21.0] - 2026-10-27

### Added

- Slidetake decks wear their section's colours: the accent band behind the
  header and the accent ink in light mode, the dimmed wash and brighter ink in
  dark, from the section's `accentFrom`, `accentTo`, `accentInk`, `onAccent`
  and dark-mode keys, as its other pages do. A section without `accentFrom`
  leaves the deck in Slidetake's own colours, and a deck's own `accent:` still
  wins.

### Changed

- Slidetake 0.2.0, whose own colour is now terminal green rather than gold.

## [0.20.1] - 2026-10-27

### Fixed

- The vendored Slidetake is now the npm release `slidetake@0.1.1` byte for byte.
  v0.20.0 shipped a local build of the same code whose banner still read 0.1.0.

### Changed

- `assets/slidetake/slidetake.js` is updated with `scripts/slidetake.sh update
  <version>`, which copies that release from npm, rather than by copying a
  build. The file's first line names its release, and the theme's checks fail
  if the file is not that release.

## [0.20.0] - 2026-10-26

### Added

- Slide pages can use [Slidetake](https://slidetake.com) instead of reveal.js: set
  `engine: slidetake` in a deck's frontmatter. The deck (reveal.js `---` / `--`
  markdown and plain heading decks both work) becomes a spatial deck with tree,
  radial, path and focus layouts, a camera and OBS recording, following the
  site's light/dark choice, with a link back to its section. Decks without the
  key keep reveal.js. Slidetake 0.1.1 is vendored at
  `assets/slidetake/slidetake.js` and served fingerprinted; update it by
  copying `dist/slidetake.js` from a Slidetake release.
- Slidetake decks are plain markdown with rich cards: `<!-- steps -->` before a
  list reveals one item per press; ` ```d2 `, ` ```dot `, ` ```echarts ` and
  ` ```svg ` blocks draw diagrams and charts in the site's light or dark
  palette; an image card lays itself out by the image's shape; a list of images
  under `<!-- steps -->` is a carousel; a YouTube link alone on a line embeds
  the video; `<!-- view: full -->` makes a card fill the screen.
- On the site a Slidetake deck opens as a viewer: no recording bar. Add `?obs`
  to the page's address for the camera and recording controls.

## [0.19.1] - 2026-10-16

### Fixed

- The mobile navigation menu in dark mode. The header's frosted-glass blur made
  it the containing block for the fixed nav drawer, so the closed drawer doubled
  the page's width on phones — sideways scroll, a zoomed-out page, and taps on
  the hamburger landing on the invisible drawer instead. The blur and scrim now
  sit on a layer behind the header, looking the same.

## [0.19.0] - 2026-10-12

### Added

- The newsletter sign-up card on book pages: under each chapter and the book's
  chapter list, with the confirmation welcome, for sections that configure a
  `subscribe` block, in the reader's blue rather than the section accent. The
  book layouts render their own document, so they had missed the card, its
  styles and its script.

## [0.18.0] - 2026-09-14

### Added

- Newsletter sign-up card (Kit), enabled per section with a `subscribe` block
  in `_index.md`. It appears on the section landing, under posts and via
  `{{< subscribe >}}`; see the README.

## [0.17.1] - 2026-09-06

### Added

- This changelog. Sites pin the theme by version, so there is now a record to
  read before bumping one; `v0.17.0` and earlier stay documented by commit
  history alone.
