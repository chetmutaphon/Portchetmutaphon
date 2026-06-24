import React from "react";

/**
 * GalleryCard — a media tile for the artwork / photography / dashboard grids.
 * Lifts + shadows on hover; a black caption gradient slides the title up.
 * If `image` is omitted it renders the brand's diagonal-stripe placeholder
 * with a mono label.
 */
export function GalleryCard({
  title,
  label,
  image,
  hue = 250,
  aspectRatio = "4/3",
  onClick,
  style = {},
}) {
  const [hover, setHover] = React.useState(false);

  const placeholderBg = `repeating-linear-gradient(-45deg, transparent, transparent 10px, oklch(0.9 0.015 ${hue}) 10px, oklch(0.9 0.015 ${hue}) 20px), var(--card)`;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: 0,
        overflow: "hidden",
        cursor: "pointer",
        transform: hover ? "scale(1.06) translateY(-6px)" : "scale(1) translateY(0)",
        boxShadow: hover ? "0 28px 64px rgba(0,0,0,0.18)" : "none",
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
        zIndex: hover ? 2 : 1,
        ...style,
      }}
    >
      <div
        style={{
          aspectRatio,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          background: image ? undefined : placeholderBg,
        }}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        ) : (
          <>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.15em",
                color: "var(--text-secondary)",
                fontWeight: 500,
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--text-secondary)",
                opacity: 0.5,
              }}
            >
              drop image here
            </span>
          </>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hover ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          display: "flex",
          alignItems: "flex-end",
          padding: 20,
          transition: "background 0.35s ease",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: 15,
            opacity: hover ? 1 : 0,
            transform: hover ? "translateY(0)" : "translateY(8px)",
            transition: "all 0.35s ease",
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );
}
