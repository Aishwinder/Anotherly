"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/** Pill switch — sun / moon icons, sliding thumb. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <span className="jelly-theme-switch jelly-theme-switch--placeholder" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      className={["jelly-theme-switch", isDark ? "jelly-theme-switch--dark" : "jelly-theme-switch--light"]
        .filter(Boolean)
        .join(" ")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="jelly-theme-switch__thumb" aria-hidden />
      <span className="jelly-theme-switch__row" aria-hidden>
        <Sun className="jelly-theme-switch__icon" strokeWidth={2} />
        <Moon className="jelly-theme-switch__icon" strokeWidth={2} />
      </span>
    </button>
  );
}
