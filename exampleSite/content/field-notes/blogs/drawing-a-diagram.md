---
title: "Drawing a Diagram"
date: 2026-02-02
summary: "A post that opts into Graphviz rendering with js_tools."
notes_tags: ["Diagrams", "Tooling"]
js_tools: ["viz"]
---

Diagram fences skip syntax highlighting entirely and are rendered in the browser.

```dot
digraph {
    rankdir=LR;
    content -> theme -> page;
}
```
