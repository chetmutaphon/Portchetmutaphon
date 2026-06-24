# Chet Mutaphon — Design System

A design system for **Chet Mutaphon**, a Marketing Executive & Graphic Designer
whose portfolio specialises in **F&B and hospitality brands** (restaurant menu
design, food & lifestyle photography, café social campaigns — much of it for
venues in Phuket and Ubon Ratchathani, Thailand).

The brand is a **quiet, typography-led, Apple-inspired minimal identity**:
white page, near-black ink, soft grey alternating surfaces, large whitespace,
a magazine-style single-page scroll with gentle parallax fade-ins. Restraint is
the point — there is no loud accent colour in the default identity; the accent
*is* the ink.

The system is **multi-theme by design**. The canonical identity is **Apple
Minimal** (the `:root` default). Three alternate identities ship as opt-in
`data-theme` scopes for when a project wants a different temperature:

| Theme | Type | Mood |
|-------|------|------|
| **Apple Minimal** (default) | System UI stack, 700 | White, near-black, centered |
| **Warm Editorial** | DM Serif Display / DM Sans, 400 | Sand & taupe, left-aligned, serif |
| **Cool Studio** | Space Grotesk, 600 | Slate + electric blue (#4361ee) |
| **Ink & Paper** | Syne, 800 | Pure black, zero radius, brutalist |

## Sources

This system was reverse-engineered from the designer's own hi-fi portfolio
prototype. Explore these repositories to build richer artefacts:

- **Primary source** — `github.com/chetmutaphon/chetmutaphonport`
  (full HTML/JSX portfolio prototype + handoff README + real imagery)
- Related: `github.com/chetmutaphon/Chetportfolio2026`,
  `github.com/chetmutaphon/Chet.mutaphon`

The source repo's `README.md` is itself an exhaustive hifi handoff spec (every
section, token, animation curve). Read it if you have access — it is the ground
truth this system encodes.

---

## CONTENT FUNDAMENTALS

How the brand writes.

- **Voice:** first person singular, warm and assured but understated. *"I bring
  a multidisciplinary approach to every project."* The designer speaks as a
  craftsperson, not a salesperson.
- **Tone:** confident minimalism. Short declarative section titles end with a
  period — they read like captions, not headlines: *"Design work."*,
  *"Through the lens."*, *"Where I've worked."*, *"Motion & storytelling."*
- **Casing:** Sentence case everywhere for prose and titles. UPPERCASE is
  reserved for two roles only: the small tracked **section labels**
  (`About`, `Experience`, `Marketing`) and the mono **placeholder labels** on
  empty media tiles (`BRAND IDENTITY`, `URBAN`).
- **Hero formula:** Name → role (`Marketing Executive & Graphic Designer`) →
  one-line tagline. The tagline is a single human sentence about *why*, not a
  feature list: *"Crafting visual stories that connect brands with people."*
- **Punctuation:** the ampersand is a brand signature — used in the role, in
  titles (*"Motion & storytelling."*, *"Dashboard & analytics."*) and section
  pairings. Em-dashes separate role from company in experience
  (`Marketing Executive — Company Name`) and years (`2023 — Present`).
- **No emoji. No exclamation marks.** Enthusiasm is carried by typography and
  whitespace, never by punctuation or icons.
- **Skills as nouns:** capabilities are listed as short noun phrases in pill
  tags — `Graphic Design`, `Art Direction`, `Motion Graphics`, `Analytics` —
  never as sentences or with proficiency bars.
- **Microcopy is literal and quiet:** empty states say `drop image here`;
  copyright says `© 2026 All rights reserved.` Nothing is cute.

---

## VISUAL FOUNDATIONS

- **Colour:** white (`#fff`) page, near-black ink (`#1d1d1f`), one soft grey
  alt surface (`#f5f5f7`), a single hairline grey (`#d2d2d7`), and a muted
  secondary grey (`#86868b`) for all supporting text. The **accent equals the
  ink** in the default identity — underlines, timeline dots and section labels
  are the same near-black, not a colour. Alternate themes introduce a
  temperature (taupe `#8a7054`, blue `#4361ee`) but never more than one accent.
- **Type:** the native system UI stack by default (the Apple feel), tightly
  tracked. Display headings are large and negative-tracked (`-0.04em` on the
  hero, `-0.03em` on titles) with line-height pulled to `1.05–1.15`. Body copy
  is the calm grey secondary colour at a relaxed `1.75` line-height. A mono
  stack (`SF Mono`/`Menlo`) is used only for tiny tracked technical labels.
- **Imagery:** warm, premium, naturally-lit **food & lifestyle photography** —
  golden hour curtains, ceramic tableware, plated dishes, café interiors. Warm
  not cool; rich not washed-out; no heavy filters or grain. Design work is
  restaurant menus and campaign artwork (bold display type over food). When an
  image is absent, a **diagonal-stripe placeholder** stands in (a 45° repeating
  hatch in a faint hue) with a mono label centered — never a solid grey box.
- **Layout:** single 1120px centered column, 48px gutters (24px mobile), 120px
  vertical section rhythm. Sections **alternate** between white and `#f5f5f7`
  backgrounds for cadence. Galleries are CSS-grid (3–4 cols, 20px gap) with
  fixed aspect ratios per section (4:3 artwork, 3:2 photography, 16:9 video &
  dashboards). Nav is fixed, 56px, full-bleed.
- **Backgrounds:** flat colour only — **no gradients, no textures, no patterns**
  on real surfaces. The only "pattern" in the system is the diagonal hatch used
  for empty media placeholders.
- **Corners:** soft `18px` radius on cards and gallery tiles by default (8px
  Warm Editorial, 14px Cool Studio, **0px** Ink & Paper — radius is a key
  identity lever). Lightbox / video frames use a tighter `12px`.
- **Cards:** fill is the soft grey `#f5f5f7`, **no border, no resting shadow**.
  Elevation appears only on hover: a soft `0 20px 50px rgba(0,0,0,0.08)` lift
  paired with a `-4px` translateY (gallery) or `+4px` translateX (timeline).
  Cards are quiet at rest; motion reveals depth.
- **Borders:** a single 1px hairline (`#d2d2d7`) — on the scrolled nav bottom,
  the footer top, skill-tag outlines, and the timeline rail. Never heavier than
  1.5px.
- **Transparency & blur:** reserved for the navigation. When scrolled past 50px
  the nav fills with `rgba(255,255,255,0.72)` plus
  `backdrop-filter: saturate(180%) blur(20px)` — the Apple glass. Modal scrims
  are flat black at 85–95% opacity (no blur).
- **Motion:** everything enters; nothing loops (except the hero scroll-hint
  line and the loading dash). Scroll-reveal is the signature: `opacity 0→1` +
  `translateY(36px→0)` over `0.75s` on `cubic-bezier(0.22,1,0.36,1)`, staggered
  per element, **once only** (no re-hide on scroll-up). Theme/colour changes
  cross-fade over `0.5s ease`. Modals fade + scale-in from `0.96`.
- **Hover states:** cards lift + shadow; skill tags **invert** (ink fill, white
  text); nav links darken from secondary to ink and grow a 1.5px underline;
  gallery tiles darken with a black caption gradient that slides its title up;
  footer/contact links shift to the accent colour.
- **Press states:** none explicit — this is a scroll-and-reveal site, not an app.
  Interaction feedback is hover-led and gentle.
- **Scroll indicator:** a 1px vertical hairline at the hero base with a single
  accent dash travelling down it on a 2s ease-in-out loop.

---

## ICONOGRAPHY

The brand is **near-iconless by intent** — this is a typographic, image-led
portfolio, not a UI dense with affordances. What little iconography exists:

- **Inline SVG, hand-drawn at small sizes, stroke-led.** Two icons appear in the
  footer: an **envelope** (`16×16`, 1.5px stroke, no fill) for email and a
  **LinkedIn** glyph (`16×16`, solid fill) — both inline SVG, `currentColor`,
  sitting `-2px` baseline-aligned before their link text. Copied into
  `assets/icons/` (`mail.svg`, `linkedin.svg`).
- **A play button** on video tiles: a `48×48` circle (2px stroke) + triangle,
  rendered at `0.3` opacity, rising to `0.8` and scaling `1.08` on hover.
  Copied to `assets/icons/play.svg`.
- **A close glyph:** the unicode `✕` character in a translucent round button,
  top-right of modals. No icon asset — a character.
- **No icon font, no icon library, no emoji, no decorative pictograms.** If a
  new surface needs an icon, draw a single 1.5px-stroke line icon in
  `currentColor` at 16–24px, or use **Lucide** from CDN
  (`https://unpkg.com/lucide-static`) which matches the thin-stroke, rounded
  style — and flag the substitution. Never reach for emoji or a heavyweight set.

See the **Brand** cards in the Design System tab for the icon specimens.

---

## CAVEATS / SUBSTITUTIONS

- **Fonts:** the four theme families (DM Sans, DM Serif Display, Space Grotesk,
  Syne) are loaded from **Google Fonts** exactly as the source does — these are
  the designer's real choices, not substitutions. The default identity uses the
  native system stack (no download).
- **Profile photo:** the source `Profile.jpg` would not decode (corrupt in the
  repo) so it is **not** included. The hero portrait slot uses one of the food
  photographs as a stand-in — **please supply a real headshot** to drop in.
- **Imagery is a curated subset** of the source repo (artwork menus, two food
  photos, three social posts). The repo has more — import on demand.

---

## INDEX

Root manifest of this system.

| Path | What |
|------|------|
| `styles.css` | Global entry — `@import`s every token + font file. Consumers link this. |
| `tokens/fonts.css` | System stack + Google theme families |
| `tokens/colors.css` | Ink / surface scale + semantic aliases |
| `tokens/typography.css` | Fluid display scale, weights, tracking |
| `tokens/spacing.css` | Spacing, layout chrome, radius, shadow, motion curves |
| `tokens/themes.css` | The 3 alternate `data-theme` identity scopes |
| `components/core/` | `Button`, `Tag`, `SectionLabel` |
| `components/portfolio/` | `GalleryCard`, `TimelineCard`, `VideoCard` |
| `ui_kits/portfolio/` | Full single-page portfolio recreation (hero → footer) |
| `assets/imagery/` | Real artwork / photography / social imagery |
| `assets/icons/` | `mail.svg`, `linkedin.svg`, `play.svg` |
| `guidelines/` | Foundation specimen cards (Type, Colors, Spacing, Brand) |
| `SKILL.md` | Agent-Skill wrapper for use in Claude Code |

The **Design System tab** renders every specimen + component + UI-kit card.
