import React from "react";

/**
 * SectionLabel — the small UPPERCASE tracked eyebrow above every section title.
 * Renders in the accent colour. The paired title is passed as `title` (rendered
 * in the display face) or you can use just the label.
 */
export function SectionLabel({ children, title, style = {} }) {
  return (
    <div style={style}>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--accent)",
          fontWeight: 600,
          margin: 0,
          marginBottom: title ? 12 : 0,
        }}
      >
        {children}
      </p>
      {title && (
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--heading-weight)",
            fontSize: "var(--title-size, clamp(32px, 4vw, 52px))",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            color: "var(--text)",
            margin: 0,
            textWrap: "pretty",
          }}
        >
          {title}
        </h2>
      )}
    </div>
  );
}
