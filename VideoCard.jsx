import React from "react";

function VideoPreview({ src }) {
  const ref = React.useRef(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    setFailed(false);
    const video = ref.current;
    if (!video) return;

    const showFrame = () => {
      try {
        if (video.readyState >= 1) {
          video.currentTime = Math.min(0.8, Math.max(0, (video.duration || 1) * 0.04));
        }
      } catch (_) {}
    };

    const onError = () => setFailed(true);

    video.addEventListener("loadeddata", showFrame);
    video.addEventListener("error", onError);
    return () => {
      video.removeEventListener("loadeddata", showFrame);
      video.removeEventListener("error", onError);
    };
  }, [src]);

  if (failed) return null;

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="metadata"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        pointerEvents: "none",
        background: "#111",
      }}
    />
  );
}

/**
 * VideoCard — a 16:9 thumbnail with a stroked play glyph over the brand's
 * faint diagonal hatch, plus a title + description footer. Lifts on hover;
 * the play glyph brightens and scales.
 */
export function VideoCard({ title, desc, thumbnail, preview, onClick, style = {}, aspectRatio = "16/9" }) {
  const [hover, setHover] = React.useState(false);
  const hasMedia = !!(thumbnail || preview);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        borderRadius: 0,
        overflow: "hidden",
        background: "var(--card)",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hover ? "0 20px 50px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.4s ease",
        ...style,
      }}
    >
      <div
        className="video-card-media"
        style={{
          aspectRatio,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "100%",
          background: hasMedia
            ? "#111"
            : "repeating-linear-gradient(-45deg, transparent, transparent 12px, rgba(0,0,0,0.03) 12px, rgba(0,0,0,0.03) 24px), var(--card)",
        }}
      >
        {preview && <VideoPreview src={preview} />}
        {!preview && thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            color: hasMedia ? "#fff" : "var(--text)",
            opacity: hover ? 0.8 : hasMedia ? 0.9 : 0.3,
            transform: hover ? "scale(1.08)" : "scale(1)",
            transition: "all 0.35s ease",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" opacity="0.8" />
            <path d="M20 16l12 8-12 8V16z" fill="currentColor" opacity="0.9" />
          </svg>
        </div>
      </div>
      <div style={{ padding: "16px 20px" }}>
        <h4
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 15,
            color: "var(--text)",
            margin: 0,
            marginBottom: 4,
          }}
        >
          {title}
        </h4>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}
