---
title: "Observing the Build"
date: 2026-01-15
summary: "A post with a code block, to show build-time syntax highlighting."
notes_tags: ["Hugo", "Tooling"]
---

Ordinary fences are highlighted by Chroma at build time. No highlighter runs in
the browser, and the stylesheet ships only to pages that contain code.

```go
func main() {
    fmt.Println("highlighted at build time")
}
```
