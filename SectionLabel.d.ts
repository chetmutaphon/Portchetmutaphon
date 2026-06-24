import * as React from "react";

/**
 * The tracked uppercase eyebrow + optional display title that opens every section.
 *
 * @startingPoint section="Core" subtitle="Section eyebrow + title" viewport="700x180"
 */
export interface SectionLabelProps {
  /** The small uppercase eyebrow text, e.g. "About". */
  children: React.ReactNode;
  /** Optional display title rendered below in the heading face, e.g. "Design work." */
  title?: React.ReactNode;
  style?: React.CSSProperties;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
