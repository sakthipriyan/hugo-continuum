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
