"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Lenis smooth scroll only — lightweight rAF loop, no ScrollTrigger coupling.
 */
export function useLenisRoot() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /** Native scroll on narrow viewports — smoother + less main-thread work than Lenis + touch. */
    const narrow = window.matchMedia("(max-width: 640px)").matches;
    if (reduce || narrow) return;

    const lenis = new Lenis({
      lerp: 0.22,
      wheelMultiplier: 1.12,
      touchMultiplier: 1.06,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.16,
    });
    lenisRef.current = lenis;

    let bridgeQueued = false;
    const bridgeScroll = () => {
      if (bridgeQueued) return;
      bridgeQueued = true;
      requestAnimationFrame(() => {
        bridgeQueued = false;
        window.dispatchEvent(new CustomEvent("jelly-lenis-scroll"));
      });
    };
    const unLenisScroll = lenis.on("scroll", bridgeScroll);

    let raf = 0;
    const tick = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      unLenisScroll();
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  }, [pathname]);
}
