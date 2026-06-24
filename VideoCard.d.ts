import * as React from "react";

/**
 * Video thumbnail card — 16:9 thumb with a stroked play glyph + title/description
 * footer. Lifts on hover; the play glyph brightens and scales.
 *
 * @startingPoint section="Portfolio" subtitle="Reel / video thumbnail card" viewport="380x300"
 */
export interface VideoCardProps {
  title: string;
  desc: string;
  /** Thumbnail image src. Omit for the faint-hatch placeholder. */
  thumbnail?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function VideoCard(props: VideoCardProps): JSX.Element;
