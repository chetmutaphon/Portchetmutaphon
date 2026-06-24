import React from "react";

/**
 * Button — the brand's quiet call-to-action.
 *
 * Variants:
 *  - "primary": near-black ink fill, white text (the loud one, used sparingly)
 *  - "outline": 1px hairline, transparent → fills with ink on hover (contact CTAs)
 *  - "ghost":   text-only, secondary grey → ink on hover (nav-like)
 * Sizes: "sm" | "md" (default) | "lg".
 */
export function Button({
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
    sm: { padding: "8px 18px", fontSize: 13 },
    md: { padding: "12px 26px", fontSize: 14 },
    lg: { padding: "15px 34px", fontSize: 15 },
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
    transition:
      "background 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.15s ease, opacity 0.3s ease",
    transform: press && !disabled ? "scale(0.97)" : "scale(1)",
    opacity: disabled ? 0.4 : 1,
    ...sizes[size],
  };

  const variants = {
    primary: {
      background: hover ? "#000" : "var(--text)",
      color: "var(--text-on-accent, #fff)",
      borderColor: hover ? "#000" : "var(--text)",
    },
    outline: {
      background: hover ? "var(--text)" : "transparent",
      color: hover ? "var(--text-on-accent, #fff)" : "var(--text)",
      borderColor: hover ? "var(--text)" : "var(--border)",
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--text)" : "var(--text-secondary)",
      borderColor: "transparent",
    },
  };

  const Tag = href ? "a" : as;

  return (
    <Tag
      href={href}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setPress(false);
      }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
