"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Dual-layer backgrounds for silky crossfade between light/dark art-directed plates.
 */
export function JellyBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const mode = mounted ? resolvedTheme : "light";
  const isDark = mode === "dark";

  return (
    <div className="jelly-bg-root" aria-hidden>
      <div
        className="jelly-bg-photo jelly-bg-photo--light"
        data-active={!isDark ? "true" : "false"}
        style={{ backgroundImage: "url(/assets/lightmodebg.png)" }}
      />
      <div
        className="jelly-bg-photo jelly-bg-photo--dark"
        data-active={isDark ? "true" : "false"}
        style={{ backgroundImage: "url(/assets/darkmodebg.png)" }}
      />
      <div className="jelly-bg-wash" />
    </div>
  );
}
