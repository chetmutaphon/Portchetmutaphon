import React from "react";

/**
 * Tag — pill used two ways:
 *  - "skill" (default): static capability pill. Inverts to ink fill on hover.
 *  - "filter": interactive filter chip. Pass `active` for the selected state.
 */
export function Tag({
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
    whiteSpace: "nowrap",
  };

  let skin;
  if (variant === "filter") {
    skin = active
      ? { background: "var(--text)", color: "var(--bg)", borderColor: "var(--text)" }
      : {
          background: "transparent",
          color: hover ? "var(--text)" : "var(--text-secondary)",
          borderColor: hover ? "var(--text-secondary)" : "var(--border)",
        };
  } else {
    skin = hover
      ? { background: "var(--text)", color: "var(--bg)", borderColor: "var(--text)" }
      : { background: "var(--bg)", color: "var(--text)", borderColor: "var(--border)" };
  }

  return (
    <span
      style={{ ...base, ...skin, ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </span>
  );
}
