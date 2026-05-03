import type { Config } from "tailwindcss";

/** Tailwind v4 types omit legacy `safelist`; keep it so blur utilities are never purged from CSS. */
type ConfigWithSafelist = Config & { safelist?: string[] };

const config: ConfigWithSafelist = {
  safelist: [
    "backdrop-blur-none",
    "backdrop-blur-sm",
    "backdrop-blur",
    "backdrop-blur-md",
    "backdrop-blur-lg",
    "backdrop-blur-xl",
    "backdrop-blur-2xl",
    "backdrop-blur-3xl",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 42s linear infinite",
        float: "float 5s ease-in-out infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
      },
    },
  },
};

export default config;
