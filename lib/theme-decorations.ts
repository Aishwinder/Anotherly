/** Studio theme PNGs — served from /public/assets/theme (sourced from Assets/Theme images) */

export const THEME_SPLATTERS = [
  "/assets/theme/splatter-1.png",
  "/assets/theme/splatter-2.png",
  "/assets/theme/splatter-3.png",
] as const;

export const THEME_STAR = "/assets/theme/handdrawn-star.png";

export type ThemeSplatterId = 1 | 2 | 3;
export type ThemeDecoSize = "xs" | "sm" | "md" | "lg";
export type ThemeDecoTone = "natural" | "peach" | "mint" | "pink" | "purple" | "sky";

export type ThemeDecoPreset = {
  id: string;
  kind: "splatter" | "star";
  splatter?: ThemeSplatterId;
  size: ThemeDecoSize;
  tone: ThemeDecoTone;
  rotate: number;
  scale?: number;
  /** Light-mode opacity (0–1) */
  opacityLight: number;
  /** Dark-mode opacity (0–1) */
  opacityDark: number;
};

/** Deterministic placements — varied asset, size, hue, rotation per section */
export const THEME_DECO_PRESETS = {
  heroCorner: {
    id: "hero-corner",
    kind: "splatter",
    splatter: 3,
    size: "md",
    tone: "purple",
    rotate: -22,
    scale: 0.92,
    opacityLight: 0.09,
    opacityDark: 0.2,
  },
  heroStar: {
    id: "hero-star",
    kind: "star",
    size: "sm",
    tone: "natural",
    rotate: 12,
    opacityLight: 0.55,
    opacityDark: 0.42,
  },
  howWeWork: {
    id: "how-we-work",
    kind: "splatter",
    splatter: 1,
    size: "sm",
    tone: "mint",
    rotate: 38,
    scale: 0.88,
    opacityLight: 0.08,
    opacityDark: 0.17,
  },
  howWeWorkStar: {
    id: "how-we-work-star",
    kind: "star",
    size: "xs",
    tone: "natural",
    rotate: -8,
    opacityLight: 0.5,
    opacityDark: 0.38,
  },
  howWeWorkAside: {
    id: "how-we-work-aside",
    kind: "splatter",
    splatter: 2,
    size: "xs",
    tone: "pink",
    rotate: 22,
    scale: 0.82,
    opacityLight: 0.09,
    opacityDark: 0.17,
  },
  featured: {
    id: "featured",
    kind: "splatter",
    splatter: 2,
    size: "xs",
    tone: "peach",
    rotate: -14,
    opacityLight: 0.07,
    opacityDark: 0.15,
  },
  services: {
    id: "services",
    kind: "splatter",
    splatter: 2,
    size: "sm",
    tone: "pink",
    rotate: 24,
    scale: 0.9,
    opacityLight: 0.075,
    opacityDark: 0.16,
  },
  testimonials: {
    id: "testimonials",
    kind: "splatter",
    splatter: 1,
    size: "md",
    tone: "sky",
    rotate: -18,
    scale: 0.85,
    opacityLight: 0.065,
    opacityDark: 0.14,
  },
  testimonialsStar: {
    id: "testimonials-star",
    kind: "star",
    size: "xs",
    tone: "natural",
    rotate: 22,
    opacityLight: 0.45,
    opacityDark: 0.35,
  },
  finalCta: {
    id: "final-cta",
    kind: "splatter",
    splatter: 3,
    size: "sm",
    tone: "purple",
    rotate: -32,
    scale: 0.78,
    opacityLight: 0.07,
    opacityDark: 0.15,
  },
  contactHero: {
    id: "contact-hero",
    kind: "splatter",
    splatter: 3,
    size: "lg",
    tone: "peach",
    rotate: -12,
    scale: 0.94,
    opacityLight: 0.08,
    opacityDark: 0.19,
  },
  contactAccent: {
    id: "contact-accent",
    kind: "splatter",
    splatter: 1,
    size: "sm",
    tone: "mint",
    rotate: 20,
    opacityLight: 0.065,
    opacityDark: 0.14,
  },
  contactStar: {
    id: "contact-star",
    kind: "star",
    size: "sm",
    tone: "natural",
    rotate: -15,
    opacityLight: 0.48,
    opacityDark: 0.36,
  },
  contactCta: {
    id: "contact-cta",
    kind: "splatter",
    splatter: 2,
    size: "xs",
    tone: "purple",
    rotate: 16,
    opacityLight: 0.085,
    opacityDark: 0.17,
  },
  loaderA: {
    id: "loader-a",
    kind: "splatter",
    splatter: 3,
    size: "lg",
    tone: "purple",
    rotate: -14,
    opacityLight: 0.42,
    opacityDark: 0.5,
  },
  loaderB: {
    id: "loader-b",
    kind: "splatter",
    splatter: 2,
    size: "md",
    tone: "mint",
    rotate: 18,
    opacityLight: 0.38,
    opacityDark: 0.45,
  },
  servicesPage: {
    id: "services-page",
    kind: "splatter",
    splatter: 1,
    size: "md",
    tone: "sky",
    rotate: -24,
    scale: 0.9,
    opacityLight: 0.07,
    opacityDark: 0.16,
  },
  projectsPage: {
    id: "projects-page",
    kind: "splatter",
    splatter: 2,
    size: "sm",
    tone: "peach",
    rotate: 32,
    opacityLight: 0.075,
    opacityDark: 0.15,
  },
  journalPage: {
    id: "journal-page",
    kind: "star",
    size: "xs",
    tone: "natural",
    rotate: -18,
    opacityLight: 0.42,
    opacityDark: 0.34,
  },
} as const satisfies Record<string, ThemeDecoPreset>;

export type ThemeDecoPresetKey = keyof typeof THEME_DECO_PRESETS;

export function splatterSrc(id: ThemeSplatterId): string {
  return THEME_SPLATTERS[id - 1];
}

const TONE_FILTER: Record<ThemeDecoTone, string> = {
  natural: "saturate(1.02)",
  peach: "saturate(1.08) hue-rotate(-18deg)",
  mint: "saturate(1.06) hue-rotate(155deg)",
  pink: "saturate(1.05) hue-rotate(12deg)",
  purple: "saturate(1.1) hue-rotate(268deg)",
  sky: "saturate(1.04) hue-rotate(198deg)",
};

export function themeDecoFilter(tone: ThemeDecoTone): string {
  return TONE_FILTER[tone];
}
