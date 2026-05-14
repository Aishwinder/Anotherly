import type { CSSProperties } from "react";

export type JellyDoodleVariant =
  | "sparkle"
  | "asterisk"
  | "squiggle"
  | "arrow"
  | "underline"
  | "loop"
  | "dot-trail"
  | "circle-scribble"
  | "burst"
  | "bracket-l"
  | "bracket-r"
  | "scribble-line"
  | "wave";

type Props = {
  variant: JellyDoodleVariant;
  className?: string;
  style?: CSSProperties;
  strokeWidth?: number;
  /** Color override — defaults to `currentColor` so it inherits text color */
  stroke?: string;
  fill?: string;
  /** Accessible label; if absent, doodle is treated as decorative */
  label?: string;
};

/**
 * Inline-SVG hand-drawn doodles. Stroke uses `currentColor` so parent text color drives it.
 * Inline SVGs (over external PNG fetches) keep the whole site self-contained, themable
 * via CSS variables, and free of network jitter / 3rd-party dependency.
 */
export function JellyDoodle({
  variant,
  className,
  style,
  strokeWidth = 1.8,
  stroke = "currentColor",
  fill = "none",
  label,
}: Props) {
  const accessibleProps = label
    ? { role: "img" as const, "aria-label": label }
    : { "aria-hidden": true as const };

  const common = {
    fill,
    stroke,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (variant) {
    case "sparkle":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} {...accessibleProps}>
          <path d="M16 4c0.6 6.4 3.6 9.4 10 10c-6.4 0.6-9.4 3.6-10 10c-0.6-6.4-3.6-9.4-10-10c6.4-0.6 9.4-3.6 10-10z" {...common} />
        </svg>
      );
    case "asterisk":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} {...accessibleProps}>
          <path d="M16 5v22M6.5 9 25.5 23M6.5 23 25.5 9M5 16h22" {...common} />
        </svg>
      );
    case "squiggle":
      return (
        <svg viewBox="0 0 64 16" className={className} style={style} {...accessibleProps}>
          <path d="M2 8c4-6 8 6 12 0s8 6 12 0 8 6 12 0 8 6 12 0 4-3 6-2" {...common} />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 100 14" className={className} style={style} {...accessibleProps}>
          <path d="M2 7c8-8 14 8 22 0s14 8 22 0 14 8 22 0 14 8 22 0" {...common} />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 48 24" className={className} style={style} {...accessibleProps}>
          <path d="M3 14c6-4 14-8 24-8c4 0 9 1 16 4" {...common} />
          <path d="M36 4c3 2 5 4 7 6c-2 2-5 4-8 6" {...common} />
        </svg>
      );
    case "underline":
      return (
        <svg viewBox="0 0 120 14" className={className} style={style} {...accessibleProps}>
          <path d="M3 9c14-7 32-7 54-3c18 3 38 1 60-3" {...common} />
          <path d="M10 12c12-2 28-2 46 0c10 1 22 0 32-1" {...common} strokeWidth={(strokeWidth as number) * 0.65} opacity="0.5" />
        </svg>
      );
    case "loop":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} {...accessibleProps}>
          <path d="M14 10c-6 0-8 6-4 10c4 4 12 0 12-6c0-6-6-8-10-6c-4 2-6 6-4 12" {...common} />
        </svg>
      );
    case "dot-trail":
      return (
        <svg viewBox="0 0 32 8" className={className} style={style} {...accessibleProps}>
          <circle cx="3.5" cy="4" r="1.2" fill={stroke} stroke="none" />
          <circle cx="11" cy="4" r="1.2" fill={stroke} stroke="none" />
          <circle cx="19" cy="4" r="1.2" fill={stroke} stroke="none" />
          <circle cx="27" cy="4" r="1.2" fill={stroke} stroke="none" />
        </svg>
      );
    case "circle-scribble":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} {...accessibleProps}>
          <path d="M16 4c-6 0-12 4-12 12c0 6 4 12 12 12c8 0 12-6 12-12c0-7-6-11-10-12c-3-1-6 0-7 1" {...common} />
        </svg>
      );
    case "burst":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} {...accessibleProps}>
          <path d="M16 4v6M16 22v6M4 16h6M22 16h6M8 8l4 4M20 20l4 4M24 8l-4 4M12 20l-4 4" {...common} />
        </svg>
      );
    case "bracket-l":
      return (
        <svg viewBox="0 0 12 60" className={className} style={style} {...accessibleProps}>
          <path d="M9 4c-3 0-5 2-5 6v40c0 4 2 6 5 6" {...common} />
        </svg>
      );
    case "bracket-r":
      return (
        <svg viewBox="0 0 12 60" className={className} style={style} {...accessibleProps}>
          <path d="M3 4c3 0 5 2 5 6v40c0 4-2 6-5 6" {...common} />
        </svg>
      );
    case "scribble-line":
      return (
        <svg viewBox="0 0 100 20" className={className} style={style} {...accessibleProps}>
          <path d="M2 12c6-4 12 4 20 0c8-4 16 4 24 0c8-4 16 4 24 0c8-4 16 4 24 0" {...common} />
        </svg>
      );
    default:
      return null;
  }
}
