import React from "react";

/**
 * TimelineCard — one experience entry. Pair with a vertical rail + dot in the
 * parent (see UI kit). Card nudges right on hover.
 */
export function TimelineCard({ role, company, period, desc, style = {} }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--card)",
        borderRadius: "var(--radius)",
        padding: "28px 32px",
        transform: hover ? "translateX(4px)" : "translateX(0)",
        transition: "transform 0.5s ease",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          flexWrap: "wrap",
          gap: 8,
          marginBottom: 4,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: "var(--heading-weight)",
            fontSize: 18,
            color: "var(--text)",
            margin: 0,
          }}
        >
          {role}
        </h3>
        <span className="timeline-period">
          {period}
        </span>
      </div>
      <p className="timeline-company">
        {company}
      </p>
      <p
        className="timeline-desc"
        style={{
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
