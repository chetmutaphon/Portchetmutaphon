---
name: chet-mutaphon-design
description: Use this skill to generate well-branded interfaces and assets for Chet Mutaphon — a Marketing Executive & Graphic Designer whose portfolio specialises in F&B / hospitality brands. A quiet, Apple-inspired, typography-led minimal identity with four switchable themes. Contains essential design guidelines, colors, type, fonts, assets, and portfolio UI-kit components for prototyping or production.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files
(`styles.css` + `tokens/`, `components/`, `ui_kits/portfolio/`, `guidelines/`,
`assets/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy
assets out and create static HTML files for the user to view — link `styles.css`
for the tokens, reuse the components in `components/` and the section patterns in
`ui_kits/portfolio/`. If working on production code, copy assets and read the
rules here to become an expert in designing with this brand.

Key things to honour:
- **Restraint is the brand.** White page, near-black ink, one soft grey surface,
  large whitespace, sentence-case titles ending in a period. No emoji, no
  exclamation marks, no gradients/textures on real surfaces, at most one accent.
- **Default identity = Apple Minimal** (system font stack). Three alternate
  identities ship as `data-theme` scopes: `warm-editorial`, `cool-studio`,
  `ink-paper`.
- **Imagery is warm food/lifestyle photography.** Missing images use the
  diagonal-stripe placeholder, never a solid grey box.
- **Motion:** scroll-reveal (fade + 36px rise, `cubic-bezier(0.22,1,0.36,1)`,
  once only); cards lift + shadow only on hover.

If the user invokes this skill without any other guidance, ask them what they
want to build or design, ask a few questions, and act as an expert designer who
outputs HTML artifacts _or_ production code, depending on the need.
