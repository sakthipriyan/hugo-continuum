#!/usr/bin/env bash
# The theme serves Slidetake from assets/slidetake/slidetake.js, and that file must be a
# published npm release byte for byte, never a local build. npm checks a release's
# integrity on download and its provenance ties it to the commit and build that made it.
# The file's first line names its version (/* Slidetake 0.1.1 · … */), so the copy carries
# its own record.
#
#   scripts/slidetake.sh update 0.1.2   copy that release into the theme
#   scripts/slidetake.sh check          fail unless the copy is the release it names
set -euo pipefail

FILE="$(cd "$(dirname "$0")/.." && pwd)/assets/slidetake/slidetake.js"

# the release's dist/slidetake.js, downloaded into a temporary directory; prints its path
fetch(){
  local dir
  dir=$(mktemp -d)
  (cd "$dir" && npm pack "slidetake@$1" --silent >/dev/null && tar xzf ./*.tgz)
  echo "$dir/package/dist/slidetake.js"
}

case "${1:-}" in
  update)
    [ -n "${2:-}" ] || { echo "usage: $0 update <version>" >&2; exit 2; }
    cp "$(fetch "$2")" "$FILE"
    head -1 "$FILE"
    ;;
  check)
    VERSION=$(head -1 "$FILE" | sed -nE 's|^/\* Slidetake ([0-9]+\.[0-9]+\.[0-9]+[^ ]*) .*|\1|p')
    [ -n "$VERSION" ] || { echo "::error::$FILE does not start with a Slidetake version banner." >&2; exit 1; }
    if ! cmp -s "$(fetch "$VERSION")" "$FILE"; then
      echo "::error::assets/slidetake/slidetake.js is not the npm release slidetake@$VERSION. Run: scripts/slidetake.sh update <version>" >&2
      exit 1
    fi
    echo "assets/slidetake/slidetake.js is slidetake@$VERSION from npm."
    ;;
  *)
    echo "usage: $0 update <version> | check" >&2
    exit 2
    ;;
esac
