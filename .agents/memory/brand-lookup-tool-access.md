---
name: Brand lookup tool access
description: Paid-mode restrictions can block brand extraction and image search during a build.
---

When branding extraction or image search is denied because it requires a paid mode, do not retry or block a small page build. Use the public page's visible design and fetched text for context, and omit unavailable logo assets rather than fabricating one.

**Why:** Both brand lookup callbacks were gated in this environment, while a direct public page fetch and screenshot were available.

**How to apply:** For future branded pages, try available public page references first; if asset-search tools are unavailable, proceed with text branding and clearly described visual cues.
