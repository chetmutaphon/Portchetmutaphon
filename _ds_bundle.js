/* @ds-bundle: {"format":3,"namespace":"ChetMutaphonDesignSystem_a09153","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"GalleryCard","sourcePath":"components/portfolio/GalleryCard.jsx"},{"name":"TimelineCard","sourcePath":"components/portfolio/TimelineCard.jsx"},{"name":"VideoCard","sourcePath":"components/portfolio/VideoCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"98a73c78d45c","components/core/SectionLabel.jsx":"d6c4c137b768","components/core/Tag.jsx":"0ade8b731def","components/portfolio/GalleryCard.jsx":"d8d28a7b15d1","components/portfolio/TimelineCard.jsx":"83b438d7e1c7","components/portfolio/VideoCard.jsx":"7eaec06f7f85","ui_kits/portfolio/app.jsx":"1ce2a50a5472","ui_kits/portfolio/image-slot.js":"9309434cb09c","ui_kits/portfolio/sections.jsx":"f6c5d2ae0277"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ChetMutaphonDesignSystem_a09153 = window.ChetMutaphonDesignSystem_a09153 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's quiet call-to-action.
 *
 * Variants:
 *  - "primary": near-black ink fill, white text (the loud one, used sparingly)
 *  - "outline": 1px hairline, transparent → fills with ink on hover (contact CTAs)
 *  - "ghost":   text-only, secondary grey → ink on hover (nav-like)
 * Sizes: "sm" | "md" (default) | "lg".
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: 13
    },
    md: {
      padding: "12px 26px",
      fontSize: 14
    },
    lg: {
      padding: "15px 34px",
      fontSize: 15
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    letterSpacing: "0.01em",
    lineHeight: 1,
    borderRadius: "var(--radius-pill, 100px)",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid transparent",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.15s ease, opacity 0.3s ease",
    transform: press && !disabled ? "scale(0.97)" : "scale(1)",
    opacity: disabled ? 0.4 : 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: hover ? "#000" : "var(--text)",
      color: "var(--text-on-accent, #fff)",
      borderColor: hover ? "#000" : "var(--text)"
    },
    outline: {
      background: hover ? "var(--text)" : "transparent",
      color: hover ? "var(--text-on-accent, #fff)" : "var(--text)",
      borderColor: hover ? "var(--text)" : "var(--border)"
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--text)" : "var(--text-secondary)",
      borderColor: "transparent"
    }
  };
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: {
      ...base,
      ...variants[variant],
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    "aria-disabled": disabled || undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/**
 * SectionLabel — the small UPPERCASE tracked eyebrow above every section title.
 * Renders in the accent colour. The paired title is passed as `title` (rendered
 * in the display face) or you can use just the label.
 */
function SectionLabel({
  children,
  title,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "var(--accent)",
      fontWeight: 600,
      margin: 0,
      marginBottom: title ? 12 : 0
    }
  }, children), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--heading-weight)",
      fontSize: "var(--title-size, clamp(32px, 4vw, 52px))",
      letterSpacing: "-0.03em",
      lineHeight: 1.15,
      color: "var(--text)",
      margin: 0,
      textWrap: "pretty"
    }
  }, title));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — pill used two ways:
 *  - "skill" (default): static capability pill. Inverts to ink fill on hover.
 *  - "filter": interactive filter chip. Pass `active` for the selected state.
 */
function Tag({
  children,
  variant = "skill",
  active = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex",
    alignItems: "center",
    padding: "8px 20px",
    borderRadius: "var(--radius-pill, 100px)",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 1,
    border: "1px solid var(--border)",
    transition: "all 0.3s ease",
    cursor: variant === "filter" ? "pointer" : "default",
    whiteSpace: "nowrap"
  };
  let skin;
  if (variant === "filter") {
    skin = active ? {
      background: "var(--text)",
      color: "var(--bg)",
      borderColor: "var(--text)"
    } : {
      background: "transparent",
      color: hover ? "var(--text)" : "var(--text-secondary)",
      borderColor: hover ? "var(--text-secondary)" : "var(--border)"
    };
  } else {
    skin = hover ? {
      background: "var(--text)",
      color: "var(--bg)",
      borderColor: "var(--text)"
    } : {
      background: "var(--bg)",
      color: "var(--text)",
      borderColor: "var(--border)"
    };
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...skin,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/GalleryCard.jsx
try { (() => {
/**
 * GalleryCard — a media tile for the artwork / photography / dashboard grids.
 * Lifts + shadows on hover; a black caption gradient slides the title up.
 * If `image` is omitted it renders the brand's diagonal-stripe placeholder
 * with a mono label.
 */
function GalleryCard({
  title,
  label,
  image,
  hue = 250,
  aspectRatio = "4/3",
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const placeholderBg = `repeating-linear-gradient(-45deg, transparent, transparent 10px, oklch(0.9 0.015 ${hue}) 10px, oklch(0.9 0.015 ${hue}) 20px), var(--card)`;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      borderRadius: 0,
      overflow: "hidden",
      cursor: "pointer",
      transform: hover ? "scale(1.06) translateY(-6px)" : "scale(1) translateY(0)",
      boxShadow: hover ? "0 28px 64px rgba(0,0,0,0.18)" : "none",
      transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
      zIndex: hover ? 2 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: image ? undefined : placeholderBg
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.15em",
      color: "var(--text-secondary)",
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-secondary)",
      opacity: 0.5
    }
  }, "drop image here"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: hover ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
      display: "flex",
      alignItems: "flex-end",
      padding: 20,
      transition: "background 0.35s ease",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 600,
      fontSize: 15,
      opacity: hover ? 1 : 0,
      transform: hover ? "translateY(0)" : "translateY(8px)",
      transition: "all 0.35s ease"
    }
  }, title)));
}
Object.assign(__ds_scope, { GalleryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/GalleryCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/TimelineCard.jsx
try { (() => {
/**
 * TimelineCard — one experience entry. Pair with a vertical rail + dot in the
 * parent (see UI kit). Card nudges right on hover.
 */
function TimelineCard({
  role,
  company,
  period,
  desc,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--card)",
      borderRadius: "var(--radius)",
      padding: "28px 32px",
      transform: hover ? "translateX(4px)" : "translateX(0)",
      transition: "transform 0.5s ease",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      flexWrap: "wrap",
      gap: 8,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--heading-weight)",
      fontSize: 18,
      color: "var(--text)",
      margin: 0
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      fontWeight: 500,
      letterSpacing: "0.02em"
    }
  }, period)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--accent)",
      marginBottom: 10,
      marginTop: 0,
      fontWeight: 500
    }
  }, company), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--text-secondary)",
      margin: 0
    }
  }, desc));
}
Object.assign(__ds_scope, { TimelineCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/TimelineCard.jsx", error: String((e && e.message) || e) }); }

// components/portfolio/VideoCard.jsx
try { (() => {
/**
 * VideoCard — a 16:9 thumbnail with a stroked play glyph over the brand's
 * faint diagonal hatch, plus a title + description footer. Lifts on hover;
 * the play glyph brightens and scales.
 */
function VideoCard({
  title,
  desc,
  thumbnail,
  onClick,
  style = {},
  aspectRatio = "16/9"
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: "pointer",
      borderRadius: 0,
      overflow: "hidden",
      background: "var(--card)",
      transform: hover ? "translateY(-4px)" : "translateY(0)",
      boxShadow: hover ? "0 20px 50px rgba(0,0,0,0.08)" : "none",
      transition: "all 0.4s ease",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      background: thumbnail ? undefined : "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(0,0,0,0.03) 12px, rgba(0,0,0,0.03) 24px), var(--card)"
    }
  }, thumbnail && /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: title,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      color: thumbnail ? "#fff" : "var(--text)",
      opacity: hover ? 0.8 : thumbnail ? 0.9 : 0.3,
      transform: hover ? "scale(1.08)" : "scale(1)",
      transition: "all 0.35s ease"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 48 48",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "23",
    stroke: "currentColor",
    strokeWidth: "2",
    opacity: "0.8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 16l12 8-12 8V16z",
    fill: "currentColor",
    opacity: "0.9"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px"
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 15,
      color: "var(--text)",
      margin: 0,
      marginBottom: 4
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)",
      margin: 0
    }
  }, desc)));
}
Object.assign(__ds_scope, { VideoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/portfolio/VideoCard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;
__ds_ns.SectionLabel = __ds_scope.SectionLabel;
__ds_ns.Tag = __ds_scope.Tag;
__ds_ns.GalleryCard = __ds_scope.GalleryCard;
__ds_ns.TimelineCard = __ds_scope.TimelineCard;
__ds_ns.VideoCard = __ds_scope.VideoCard;

// ui_kits/portfolio/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/image-slot.js", error: String((e && e.message) || e) }); }
// ui_kits/portfolio/sections.jsx
try { (() => {
// Portfolio UI kit — sections. Uses design-system primitives from the bundle.
const DS = window.ChetMutaphonDesignSystem_a09153;
const {
  Button,
  Tag,
  SectionLabel,
  GalleryCard,
  TimelineCard,
  VideoCard
} = DS;
const IMG = window.__PORTFOLIO_IMG_BASE || "../../assets/imagery/";

// ============ DATA ============
const SKILLS = ["Graphic Design", "Photography", "Videography", "Marketing Strategy", "Social Media Management", "Adobe Creative Suite", "Content Creation", "Brand Development", "Art Direction", "Motion Graphics", "Print Design", "Analytics"];
const EXPERIENCES = [{
  role: "Marketing Executive",
  company: "Company Name",
  period: "2023 — Present",
  desc: "Led integrated marketing campaigns and brand strategy across digital and print channels. Managed social media presence and content creation."
}, {
  role: "Senior Graphic Designer",
  company: "Studio Name",
  period: "2021 — 2023",
  desc: "Created visual identities, marketing materials, and digital content. Directed photoshoots and video productions for diverse clients."
}];
const ARTWORK = [{
  id: "a1",
  title: "Brand Identity System",
  label: "BRAND IDENTITY",
  hue: 260,
  img: IMG + "AW1.jpg"
}, {
  id: "a2",
  title: "Event Poster Series",
  label: "POSTER DESIGN",
  hue: 280,
  img: IMG + "AW2.jpg"
}, {
  id: "a3",
  title: "Editorial Layout",
  label: "EDITORIAL",
  hue: 240,
  img: IMG + "AW3.jpg"
}, {
  id: "a4",
  title: "Annual Report Design",
  label: "REPORT",
  hue: 220,
  img: IMG + "AW4.jpg"
}, {
  id: "a5",
  title: "Packaging Design",
  label: "PACKAGING",
  hue: 300,
  img: IMG + "AW5.jpg"
}, {
  id: "a6",
  title: "Social Media Templates",
  label: "SOCIAL KIT",
  hue: 250,
  img: IMG + "AW6.jpg"
}];
const PHOTOS = [{
  id: "p1",
  title: "Food Photography",
  label: "FOOD",
  hue: 40,
  img: IMG + "Photo3.jpg"
}, {
  id: "p2",
  title: "Lifestyle & Dining",
  label: "LIFESTYLE",
  hue: 30,
  img: IMG + "Photo1.jpg"
}, {
  id: "p3",
  title: "Café Campaigns",
  label: "SOCIAL",
  hue: 180,
  img: IMG + "So5.png"
}, {
  id: "p4",
  title: "Brand Stories",
  label: "STORY",
  hue: 200,
  img: IMG + "So6.png"
}, {
  id: "p5",
  title: "Promo Series",
  label: "PROMO",
  hue: 160,
  img: IMG + "So7.png"
}, {
  id: "p6",
  title: "Menu Artwork",
  label: "MENU",
  hue: 20,
  img: IMG + "AW7.jpg"
}];
const VIDEOS = [{
  id: "v1",
  title: "Brand Story",
  desc: "Company brand narrative",
  vimeoId: "76979871"
}, {
  id: "v2",
  title: "Product Launch",
  desc: "New product reveal campaign",
  vimeoId: "76979871"
}, {
  id: "v3",
  title: "Behind the Scenes",
  desc: "Creative process documentary",
  vimeoId: "76979871"
}, {
  id: "v4",
  title: "Event Highlight",
  desc: "Corporate event recap",
  vimeoId: "76979871"
}, {
  id: "v5",
  title: "Social Reel",
  desc: "Short-form social content",
  vimeoId: "76979871"
}, {
  id: "v6",
  title: "Client Testimonial",
  desc: "Customer success story",
  vimeoId: "76979871"
}];
const DASHBOARDS = [{
  id: "d1",
  title: "Social Media Analytics",
  label: "SOCIAL ANALYTICS",
  hue: 210
}, {
  id: "d2",
  title: "Campaign Performance",
  label: "CAMPAIGN KPI",
  hue: 150
}, {
  id: "d3",
  title: "Content Calendar",
  label: "CONTENT PLAN",
  hue: 30
}, {
  id: "d4",
  title: "Engagement Metrics",
  label: "ENGAGEMENT",
  hue: 340
}, {
  id: "d5",
  title: "ROI Dashboard",
  label: "ROI REPORT",
  hue: 120
}, {
  id: "d6",
  title: "Monthly Performance",
  label: "MONTHLY REVIEW",
  hue: 270
}];

// ============ SCROLL UTILITIES ============
function useScrollReveal() {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.unobserve(el);
      }
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px"
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}
function ScrollReveal({
  children,
  delay = 0,
  style = {}
}) {
  const [ref, visible] = useScrollReveal();
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      willChange: "opacity, transform",
      ...style
    }
  }, children);
}
function useActiveSection(ids) {
  const [active, setActive] = React.useState("");
  React.useEffect(() => {
    const obs = ids.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) setActive(id);
      }, {
        threshold: 0.25,
        rootMargin: "-80px 0px -40% 0px"
      });
      o.observe(el);
      return o;
    });
    return () => obs.forEach(o => o && o.disconnect());
  }, []);
  return active;
}

// ============ CHROME ============
function ScrollProgress() {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const fn = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setW(max > 0 ? window.scrollY / max * 100 : 0);
    };
    window.addEventListener("scroll", fn, {
      passive: true
    });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll-progress",
    style: {
      width: w + "%"
    }
  });
}
const NAV_LINKS = [{
  id: "about",
  label: "About"
}, {
  id: "experience",
  label: "Experience"
}, {
  id: "artwork",
  label: "Artwork"
}, {
  id: "photography",
  label: "Photo"
}, {
  id: "videos",
  label: "Video"
}, {
  id: "dashboard",
  label: "Social"
}];
function Navigation({
  active,
  loggedIn,
  onAuth
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, {
      passive: true
    });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const goTo = id => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-logo",
    onClick: () => window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, "Chet Mutaphon"), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, NAV_LINKS.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    className: "nav-link" + (active === l.id ? " nav-link--active" : ""),
    onClick: () => goTo(l.id)
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onAuth
  }, loggedIn ? "Logout" : "Login")));
}
function HeroSection() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);
  const go = id => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth"
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "hero",
    style: {
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-bg",
    shape: "rect",
    placeholder: "Drop a hero background image",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.45)",
      zIndex: 1,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-content",
    style: {
      position: "relative",
      zIndex: 2,
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(30px)",
      transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero-name",
    style: {
      color: "#fff"
    }
  }, "Chet Mutaphon"), /*#__PURE__*/React.createElement("p", {
    className: "hero-title",
    style: {
      color: "rgba(255,255,255,0.75)"
    }
  }, "Marketing Executive & Graphic Designer"), /*#__PURE__*/React.createElement("p", {
    className: "hero-tagline",
    style: {
      color: "rgba(255,255,255,0.6)"
    }
  }, "Crafting visual stories that connect brands with people."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => go("artwork")
  }, "View works"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#footer",
    onClick: e => {
      e.preventDefault();
      go("dashboard");
    }
  }, "Contact me"))), /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint",
    style: {
      position: "relative",
      zIndex: 2,
      opacity: show ? 1 : 0,
      transition: "opacity 1.2s ease 0.8s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "scroll-hint-line"
  })));
}
function AboutSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-left"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement(SectionLabel, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "A creative at the intersection", /*#__PURE__*/React.createElement("br", null), "of design and marketing.")
  }, "About")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("p", {
    className: "about-text"
  }, "With years of experience spanning graphic design, photography, videography, and marketing strategy, I bring a multidisciplinary approach to every project. From crafting brand identities to directing video content and analyzing campaign performance \u2014 I believe great design drives great results.")), /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.2
  }, /*#__PURE__*/React.createElement("div", {
    className: "skills-grid"
  }, SKILLS.map((s, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i
  }, s))))), /*#__PURE__*/React.createElement("div", {
    className: "about-right"
  }, /*#__PURE__*/React.createElement(ScrollReveal, {
    delay: 0.15
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-portrait-wrap"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "about-portrait",
    shape: "rect",
    placeholder: "Drop a portrait photo"
  })))))));
}
function ExperienceSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "experience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Where I've worked."
  }, "Experience"))), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, EXPERIENCES.map((exp, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: i,
    delay: i * 0.12
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "timeline-dot"
  }), /*#__PURE__*/React.createElement(TimelineCard, exp)))))));
}
function Grid({
  items,
  aspectRatio,
  columns = 3,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "gallery-grid",
    style: {
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: it.id,
    delay: i * 0.06
  }, /*#__PURE__*/React.createElement(GalleryCard, {
    title: it.title,
    label: it.label,
    image: it.img,
    hue: it.hue,
    aspectRatio: aspectRatio,
    onClick: () => onOpen(it)
  }))));
}
function ArtworkSection({
  onOpen
}) {
  const {
    images,
    loading
  } = window.useSupabaseImages ? window.useSupabaseImages("artwork") : {
    images: [],
    loading: false
  };
  const items = images.length > 0 ? images : ARTWORK;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "artwork"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Design work."
  }, "Artwork"))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: "var(--text-secondary)"
    }
  }, "Loading...") : /*#__PURE__*/React.createElement(Grid, {
    items: items,
    aspectRatio: "3/4",
    columns: 4,
    onOpen: onOpen
  })));
}
function PhotographySection({
  onOpen
}) {
  const {
    images,
    loading
  } = window.useSupabaseImages ? window.useSupabaseImages("photography") : {
    images: [],
    loading: false
  };
  const items = images.length > 0 ? images : PHOTOS;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "photography"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Through the lens."
  }, "Photography"))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 40,
      color: "var(--text-secondary)"
    }
  }, "Loading...") : /*#__PURE__*/React.createElement(Grid, {
    items: items,
    aspectRatio: "3/4",
    columns: 4,
    onOpen: onOpen
  })));
}
function VideoSection({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--alt",
    id: "videos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Video Reel."
  }, "Videographer"))), /*#__PURE__*/React.createElement("div", {
    className: "video-grid"
  }, VIDEOS.map((v, i) => /*#__PURE__*/React.createElement(ScrollReveal, {
    key: v.id,
    delay: i * 0.1
  }, /*#__PURE__*/React.createElement(VideoCard, {
    title: v.title,
    desc: v.desc,
    aspectRatio: "9/16",
    onClick: () => onOpen(v)
  }))))));
}
function DashboardSection({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "dashboard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-inner"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    title: "Social media post."
  }, "Marketing"))), /*#__PURE__*/React.createElement(Grid, {
    items: DASHBOARDS,
    aspectRatio: "4/3",
    onOpen: onOpen
  })));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer",
    id: "footer"
  }, /*#__PURE__*/React.createElement(ScrollReveal, null, /*#__PURE__*/React.createElement("div", {
    className: "footer-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "footer-name"
  }, "Chet Mutaphon"), /*#__PURE__*/React.createElement("span", {
    className: "footer-copy"
  }, "\xA9 2026 All rights reserved.")), /*#__PURE__*/React.createElement("div", {
    className: "footer-contact"
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:your.email@example.com",
    className: "footer-link"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "3",
    width: "14",
    height: "10",
    rx: "2",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 5l7 4 7-4",
    stroke: "currentColor",
    strokeWidth: "1.5"
  })), "your.email@example.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://linkedin.com",
    target: "_blank",
    rel: "noopener",
    className: "footer-link"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.6 1H2.4C1.63 1 1 1.63 1 2.4v11.2c0 .77.63 1.4 1.4 1.4h11.2c.77 0 1.4-.63 1.4-1.4V2.4c0-.77-.63-1.4-1.4-1.4zM5.3 13H3.2V6.5h2.1V13zM4.25 5.6c-.69 0-1.25-.56-1.25-1.25S3.56 3.1 4.25 3.1s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zM13 13h-2.1V9.85c0-.75-.01-1.72-1.05-1.72-1.05 0-1.21.82-1.21 1.67V13H6.55V6.5h2.01v.89h.03c.28-.53.96-1.09 1.98-1.09 2.12 0 2.51 1.4 2.51 3.21V13z"
  })), "LinkedIn")))));
}
function Lightbox({
  item,
  onClose
}) {
  if (!item) return null;
  const ph = `repeating-linear-gradient(-45deg, transparent, transparent 14px, oklch(0.9 0.015 ${item.hue}) 14px, oklch(0.9 0.015 ${item.hue}) 28px), var(--card)`;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-content",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "lightbox-image",
    style: {
      background: item.img ? undefined : ph
    }
  }, item.img && /*#__PURE__*/React.createElement("img", {
    src: item.img,
    alt: item.title
  })), /*#__PURE__*/React.createElement("div", {
    className: "lightbox-info"
  }, /*#__PURE__*/React.createElement("span", {
    className: "lightbox-title"
  }, item.title))));
}
function VideoModal({
  item,
  onClose
}) {
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay modal-overlay--dark",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal-close",
    onClick: onClose
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "video-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "video-embed"
  }, /*#__PURE__*/React.createElement("iframe", {
    src: `https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`,
    frameBorder: "0",
    allow: "autoplay; fullscreen; picture-in-picture",
    allowFullScreen: true,
    style: {
      width: "100%",
      height: "100%",
      border: "none"
    }
  })), /*#__PURE__*/React.createElement("p", {
    className: "video-modal-title"
  }, item.title)));
}

// ============ LOGIN MODAL ============
function LoginModal({
  onLogin,
  onClose
}) {
  const [pwd, setPwd] = React.useState("");
  const [err, setErr] = React.useState(false);
  const submit = () => {
    if (onLogin(pwd)) {/* parent handles reload */} else {
      setErr(true);
      setPwd("");
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 20,
      marginBottom: 6,
      color: "var(--text)"
    }
  }, "Admin Login"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)",
      marginBottom: 24
    }
  }, "Enter password to enable text editing."), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: pwd,
    placeholder: "Password",
    autoFocus: true,
    onChange: e => {
      setPwd(e.target.value);
      setErr(false);
    },
    onKeyDown: e => e.key === "Enter" && submit(),
    style: {
      width: "100%",
      padding: "12px 16px",
      fontSize: 15,
      borderRadius: "var(--radius)",
      border: `1.5px solid ${err ? "oklch(0.55 0.2 25)" : "var(--border)"}`,
      background: "var(--bg)",
      color: "var(--text)",
      outline: "none",
      fontFamily: "var(--font-body)",
      boxSizing: "border-box",
      marginBottom: err ? 8 : 24
    }
  }), err && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "oklch(0.55 0.2 25)",
      marginBottom: 20
    }
  }, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: submit
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "Cancel"))));
}

// ============ EDIT TOOLBAR ============
function EditToolbar() {
  const applyColor = c => {
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("foreColor", false, c);
  };
  const resetAll = () => {
    if (!confirm("รีเซ็ตข้อความทั้งหมดกลับค่าเดิม?")) return;
    Object.keys(localStorage).filter(k => k.startsWith("pe_")).forEach(k => localStorage.removeItem(k));
    window.location.reload();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "edit-toolbar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "edit-toolbar-label"
  }, "\u270F Edit Mode"), /*#__PURE__*/React.createElement("span", {
    className: "edit-toolbar-sep"
  }), /*#__PURE__*/React.createElement("label", {
    className: "edit-toolbar-color"
  }, "\u0E2A\u0E35\u0E15\u0E31\u0E27\u0E2D\u0E31\u0E01\u0E29\u0E23", /*#__PURE__*/React.createElement("input", {
    type: "color",
    defaultValue: "#000000",
    onChange: e => applyColor(e.target.value)
  })), /*#__PURE__*/React.createElement("span", {
    className: "edit-toolbar-sep"
  }), /*#__PURE__*/React.createElement("button", {
    className: "edit-toolbar-btn",
    onClick: resetAll
  }, "Reset All"));
}
Object.assign(window, {
  ScrollProgress,
  Navigation,
  HeroSection,
  AboutSection,
  ExperienceSection,
  ArtworkSection,
  PhotographySection,
  VideoSection,
  DashboardSection,
  Footer,
  Lightbox,
  VideoModal,
  useActiveSection,
  LoginModal,
  EditToolbar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/sections.jsx", error: String((e && e.message) || e) }); }
// ui_kits/portfolio/app.jsx
try { (() => {
// Portfolio UI kit — app root, theme switch, modal state, admin edit mode.
const THEMES = [{
  id: "",
  label: "Apple Minimal"
}, {
  id: "warm-editorial",
  label: "Warm Editorial"
}, {
  id: "cool-studio",
  label: "Cool Studio"
}, {
  id: "ink-paper",
  label: "Ink & Paper"
}];

// ---- Edit mode hook: adds contenteditable to text elements ----
function useEditMode(enabled) {
  React.useEffect(() => {
    if (!enabled) return;
    const pairs = [];
    const t = setTimeout(() => {
      const raw = [...document.querySelectorAll('.hero-name, .hero-title, .hero-tagline, .about-text, .footer-name, .footer-copy, .nav-logo'), ...document.querySelectorAll('.section-inner h1, .section-inner h2, .section-inner h3, .section-inner h4, .section-inner p')];
      const seen = new Set();
      raw.forEach((el, i) => {
        if (seen.has(el)) return;
        if (el.closest('.edit-toolbar, button, .btn, .theme-switch, .modal-overlay')) return;
        seen.add(el);
        const key = `pe_${i}_${el.tagName.toLowerCase()}`;
        const saved = localStorage.getItem(key);
        if (saved) el.innerHTML = saved;
        el.contentEditable = 'true';
        el.spellcheck = false;
        const fn = () => localStorage.setItem(key, el.innerHTML);
        el.addEventListener('blur', fn);
        pairs.push([el, fn]);
      });
      document.body.classList.add('edit-mode-active');
    }, 200);
    return () => {
      clearTimeout(t);
      pairs.forEach(([el, fn]) => {
        el.contentEditable = 'false';
        el.removeEventListener('blur', fn);
      });
      document.body.classList.remove('edit-mode-active');
    };
  }, [enabled]);
}
function App() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("portfolio_theme") || "");
  const [editMode] = React.useState(() => !!localStorage.getItem("portfolio_auth"));
  const [showLogin, setShowLogin] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);
  const [video, setVideo] = React.useState(null);
  const active = window.useActiveSection(["about", "experience", "artwork", "photography", "videos", "dashboard"]);
  useEditMode(editMode);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio_theme", theme);
  }, [theme]);
  const handleAuth = () => {
    if (editMode) {
      localStorage.removeItem("portfolio_auth");
      window.location.reload();
    } else {
      setShowLogin(true);
    }
  };
  const handleLogin = pwd => {
    if (pwd === "admin2026") {
      localStorage.setItem("portfolio_auth", "1");
      window.location.reload();
      return true;
    }
    return false;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.ScrollProgress, null), /*#__PURE__*/React.createElement(window.Navigation, {
    active: active,
    loggedIn: editMode,
    onAuth: handleAuth
  }), /*#__PURE__*/React.createElement(window.HeroSection, null), /*#__PURE__*/React.createElement(window.AboutSection, null), /*#__PURE__*/React.createElement(window.ExperienceSection, null), /*#__PURE__*/React.createElement(window.ArtworkSection, {
    onOpen: setLightbox
  }), /*#__PURE__*/React.createElement(window.PhotographySection, {
    onOpen: setLightbox
  }), /*#__PURE__*/React.createElement(window.VideoSection, {
    onOpen: setVideo
  }), /*#__PURE__*/React.createElement(window.DashboardSection, {
    onOpen: setLightbox
  }), /*#__PURE__*/React.createElement(window.Footer, null), /*#__PURE__*/React.createElement(window.Lightbox, {
    item: lightbox,
    onClose: () => setLightbox(null)
  }), /*#__PURE__*/React.createElement(window.VideoModal, {
    item: video,
    onClose: () => setVideo(null)
  }), showLogin && /*#__PURE__*/React.createElement(window.LoginModal, {
    onLogin: handleLogin,
    onClose: () => setShowLogin(false)
  }), editMode && /*#__PURE__*/React.createElement(window.EditToolbar, null), /*#__PURE__*/React.createElement("div", {
    className: "theme-switch"
  }, THEMES.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    className: theme === t.id ? "active" : "",
    onClick: () => setTheme(t.id)
  }, t.label))));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app.jsx", error: String((e && e.message) || e) }); }
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(window.App, null));


})();
