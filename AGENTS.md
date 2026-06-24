# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static, build-less design-system / portfolio export** (the
"Chet Mutaphon" design system). There is no package manager, no build step, no
automated tests, and no conventional lint setup. Everything is plain HTML/CSS/JS
plus React 18 + Babel loaded from CDN.

### Running the app (dev)
Serve the repo root with any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open pages directly, e.g. `http://localhost:8000/Helios%20Program.html`.
There is nothing to compile; React/Babel transpile `.jsx`/`text/babel` scripts in
the browser at runtime, so a hard refresh picks up edits with no rebuild.

### What renders, and important caveats
- `Helios Program.html` — a complete, fully self-contained landing page (inline
  CSS + Google Fonts CDN). Renders perfectly on its own.
- `*.card.html` specimen pages (`core.card.html`, `portfolio.card.html`, the
  `guidelines/*` cards, etc.) — render the design-system React components from
  the prebuilt `_ds_bundle.js` (exposes `window.ChetMutaphonDesignSystem_a09153`).
  They link `../../styles.css` / `../../_ds_bundle.js`; the `../../` is clamped to
  the server root by the browser, so they resolve correctly when served from root.
- `index.html` (the Vercel deploy entry) renders **blank** in this repo: it
  references `./ui_kits/portfolio/*` (kit.css, sections.jsx, app.jsx) and
  `./assets/imagery/`, which are **not present** in this flattened export (they
  404). `styles.css` likewise `@import`s `tokens/*.css` that are not included, so
  the design tokens are undefined. This is a content-completeness limitation of
  the export, not an environment/setup problem — do not try to "fix" it as a setup
  issue. The component specimen cards still look styled because their styling is
  largely baked into `_ds_bundle.js`.

### Lint / test / build
- No tests, no build.
- `_adherence.oxlintrc.json` is config for an internal design-system adherence
  tool (it contains a non-standard `x-omelette` field that vanilla `oxlint`
  rejects); it is **not** a runnable lint step here.

### Internet access
Pages depend on CDNs (`unpkg.com` for React/Babel, `fonts.googleapis.com` for
fonts). They require outbound network access to render.
