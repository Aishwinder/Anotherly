"use client";

import { useEffect, useState } from "react";

/**
 * True when vertical scroll exceeds `threshold`px. Throttled via rAF; listens for Lenis bridge too.
 */
export function useScrolledPast(threshold: number) {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const y = window.scrollY ?? document.documentElement.scrollTop ?? 0;
      const next = y > threshold;
      setPast((p) => (p === next ? p : next));
    };
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(read);
    };

    read();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("jelly-lenis-scroll", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("jelly-lenis-scroll", schedule);
      cancelAnimationFrame(raf);
    };
  }, [threshold]);

  return past;
}
