import * as React from "react";

/**
 * Media tile for portfolio grids (artwork 4:3, photography 3:2, dashboards 16:9).
 *
 * @startingPoint section="Portfolio" subtitle="Hover-caption gallery tile" viewport="380x320"
 */
export interface GalleryCardProps {
  /** Caption shown on hover. */
  title: string;
  /** Mono placeholder label when no image, e.g. "BRAND IDENTITY". */
  label?: string;
  /** Image src. Omit to render the diagonal-stripe placeholder. */
  image?: string;
  /** Placeholder hue 0–360 (only used without an image). @default 250 */
  hue?: number;
  /** CSS aspect-ratio. @default "4/3" */
  aspectRatio?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function GalleryCard(props: GalleryCardProps): JSX.Element;
