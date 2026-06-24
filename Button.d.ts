import * as React from "react";

/**
 * The brand's quiet call-to-action button.
 *
 * @startingPoint section="Core" subtitle="Primary / outline / ghost CTA" viewport="700x150"
 */
export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Visual weight. @default "primary" */
  variant?: "primary" | "outline" | "ghost";
  /** @default "md" */
  size?: "sm" | "md" | "lg";
  /** Render as an anchor when set. */
  href?: string;
  /** Element to render when no href. @default "button" */
  as?: "button" | "a";
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
