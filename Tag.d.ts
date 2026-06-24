import * as React from "react";

/**
 * Pill tag — capability chips and gallery filter chips.
 *
 * @startingPoint section="Core" subtitle="Skill + filter pills" viewport="700x150"
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  /** "skill" inverts on hover; "filter" is selectable. @default "skill" */
  variant?: "skill" | "filter";
  /** Selected state for filter variant. @default false */
  active?: boolean;
}

export function Tag(props: TagProps): JSX.Element;
