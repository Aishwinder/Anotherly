"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { JellyDoodle } from "@/components/jelly/JellyDoodle";

const LOADER_DONE = "jelly-loader-done";

function dispatchLoaderDone() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(LOADER_DONE));
}

/**
 * Sketch / torn-paper page loader with motion-gradient anotherly wordmark.
 * Lightweight: CSS animations + a single AnimatePresence fade. Self-dismisses
 * once fonts are ready (with a sensible fallback) for a fast first paint.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (typeof document === "undefined") return;

    let cancelled = false;
    const minStage = window.setTimeout(() => {
      if (cancelled) return;
      setVisible(false);
    }, 1100);

    const fallback = window.setTimeout(() => {
      if (cancelled) return;
      setVisible(false);
    }, 2200);

    void document.fonts?.ready.then(() => {
      if (cancelled) return;
      window.clearTimeout(minStage);
      window.setTimeout(() => {
        if (!cancelled) setVisible(false);
      }, 350);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(minStage);
      window.clearTimeout(fallback);
    };
  }, [mounted]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (doneRef.current) return;
        doneRef.current = true;
        dispatchLoaderDone();
      }}
    >
      {visible ? (
        <motion.div
          key="jelly-loader"
          className="jelly-loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.42, ease: [0.33, 1, 0.32, 1] } }}
          aria-hidden
        >
          <div className="jelly-loader-overlay__paper">
            <div className="jelly-loader-overlay__grid" aria-hidden />
            <span
              className="jelly-loader-overlay__splash jelly-splash-deco--peach"
              aria-hidden
              style={{
                left: "-6%",
                top: "-8%",
                width: "min(22rem, 40vmin)",
                height: "min(18rem, 32vmin)",
                opacity: 0.5,
                transform: "rotate(-14deg)",
              }}
            />
            <span
              className="jelly-loader-overlay__splash jelly-splash-deco--purple"
              aria-hidden
              style={{
                right: "-5%",
                bottom: "-9%",
                width: "min(20rem, 38vmin)",
                height: "min(16rem, 30vmin)",
                opacity: 0.45,
                transform: "rotate(18deg)",
              }}
            />
            <span
              className="jelly-loader-overlay__splash jelly-splash-deco--mint"
              aria-hidden
              style={{
                right: "6%",
                top: "8%",
                width: "min(8rem, 18vmin)",
                height: "min(6rem, 14vmin)",
                opacity: 0.45,
                transform: "rotate(28deg)",
              }}
            />

            <div className="jelly-loader-overlay__content">
              <div className="relative inline-block">
                <p className="jelly-loader-overlay__word">anotherly</p>
                <JellyDoodle
                  variant="sparkle"
                  className="jelly-doodle jelly-doodle--peach jelly-doodle-twinkle pointer-events-none absolute -right-6 -top-3 h-8 w-8 opacity-80"
                />
                <JellyDoodle
                  variant="underline"
                  className="jelly-doodle jelly-doodle--purple pointer-events-none absolute -bottom-1 left-[4%] h-3 w-[92%] opacity-65"
                />
              </div>
              <p className="jelly-loader-overlay__caption">
                <span className="jelly-script-accent">crafting</span> the page&hellip;
              </p>
              <div className="jelly-loader-overlay__bar" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
