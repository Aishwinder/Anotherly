"use client";

import { Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  /**
   * `minimal` — icon-only glass button (header).
   * `orbit` — same as minimal (backward compatible with previous header).
   * `studio` — wide glass control (footer only; prefer removing from layout).
   * `round` / `pill` — aliases.
   */
  variant?: "minimal" | "orbit" | "studio" | "round" | "pill";
};

function resolvedVariant(v: ThemeToggleProps["variant"]): "minimal" | "studio" {
  if (v === "studio" || v === "pill") return "studio";
  return "minimal";
}

/** Theme control — minimal icon (chrome) or studio horizon bar. */
export function ThemeToggle({ variant = "minimal" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const mode = resolvedVariant(variant);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={mode === "minimal" ? "jelly-theme-minimal jelly-theme-minimal--placeholder" : "jelly-theme-studio jelly-theme-studio--placeholder"}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  if (mode === "minimal") {
    return (
      <button
        type="button"
        className={["jelly-theme-minimal", isDark ? "jelly-theme-minimal--dark" : "jelly-theme-minimal--light"].join(" ")}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Moon className="jelly-theme-minimal__icon" strokeWidth={2} aria-hidden /> : <Sun className="jelly-theme-minimal__icon" strokeWidth={2} aria-hidden />}
      </button>
    );
  }

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      className={["jelly-theme-studio", isDark ? "jelly-theme-studio--dark" : "jelly-theme-studio--light"].join(" ")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="jelly-theme-studio__wash" aria-hidden />
      <span className="jelly-theme-studio__spectrum" aria-hidden />
      <span className="jelly-theme-studio__icons" aria-hidden>
        <Sun className="jelly-theme-studio__sun" strokeWidth={2} />
        <Moon className="jelly-theme-studio__moon" strokeWidth={2} />
      </span>
      <span className="jelly-theme-studio__thumb-wrap" aria-hidden>
        <span className="jelly-theme-studio__thumb">
          {isDark ? <Moon className="jelly-theme-studio__thumb-ico" strokeWidth={2} /> : <Sun className="jelly-theme-studio__thumb-ico" strokeWidth={2} />}
        </span>
      </span>
      <span className="jelly-theme-studio__sparkle" aria-hidden>
        <Sparkles className="h-3 w-3" strokeWidth={2} />
      </span>
    </button>
  );
}
