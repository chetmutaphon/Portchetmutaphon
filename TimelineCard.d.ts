import * as React from "react";

/**
 * One experience entry — soft-grey card, role + period header, accent company,
 * grey description. Nudges right on hover.
 *
 * @startingPoint section="Portfolio" subtitle="Experience timeline card" viewport="640x200"
 */
export interface TimelineCardProps {
  role: string;
  company: string;
  /** e.g. "2023 — Present" */
  period: string;
  desc: string;
  style?: React.CSSProperties;
}

export function TimelineCard(props: TimelineCardProps): JSX.Element;
