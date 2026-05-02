"use client";

import { AnimatePresence, animate, motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const LOADER_DONE = "jelly-loader-done";

function dispatchLoaderDone() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(LOADER_DONE));
}

/**
 * Stage over the live shell: plate + dim + “a” fill. Quick, smooth handoff to the page when the overlay lifts.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const doneRef = useRef(false);
  const { resolvedTheme } = useTheme();
  const progress = useMotionValue(0);

  const isDark = mounted && resolvedTheme === "dark";
  const bgUrl = isDark ? "/assets/darkmodebg.png" : "/assets/lightmodebg.png";

  const blurPx = useTransform(progress, [0, 1], [18, 0]);
  const bright = useTransform(progress, [0, 1], [0.5, 1]);
  const plateFilter = useMotionTemplate`blur(${blurPx}px) saturate(1.08) brightness(${bright})`;

  const dimOpacity = useTransform(progress, [0, 1], [0.55, 0]);

  const plateStackOpacity = useTransform(progress, [0, 0.42, 0.72, 1], [1, 1, 0.22, 0]);

  const markOpacity = useTransform(progress, [0, 0.58, 0.82, 1], [1, 1, 0.2, 0]);

  const fillClipPath = useTransform(progress, (p) => {
    let top = (1 - p) * 100;
    const wave = Math.sin(p * Math.PI * 5.5) * 2.4 * Math.sin(p * Math.PI);
    const waveB = Math.cos(p * Math.PI * 3.2 + 0.4) * 1 * (1 - p);
    top = Math.min(100, Math.max(0, top - wave - waveB));
    return `inset(${top}% 0 0 0)`;
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    let cancelled = false;
    const fallback = window.setTimeout(() => {
      if (!cancelled) setFontsReady(true);
    }, 1100);
    void document.fonts.ready.then(() => {
      if (cancelled) return;
      window.clearTimeout(fallback);
      setFontsReady(true);
    });
    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (!reduceMotion || !mounted) return;
    setVisible(false);
  }, [reduceMotion, mounted]);

  useEffect(() => {
    if (reduceMotion || !fontsReady || !mounted) return;

    const controls = animate(progress, 1, {
      duration: 0.92,
      ease: [0.25, 0.08, 0.18, 1],
      onComplete: () => {
        setVisible(false);
      },
    });

    return () => controls.stop();
  }, [fontsReady, mounted, progress, reduceMotion]);

  const exitEase = [0.33, 1, 0.32, 1] as const;

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
          key="loader"
          className="jelly-page-loader jelly-page-loader--v2"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reduceMotion ? 0.12 : 0.36, ease: exitEase },
          }}
          aria-hidden
        >
          <motion.div className="jelly-page-loader__plate" style={{ opacity: plateStackOpacity }} aria-hidden>
            <motion.div
              className="jelly-page-loader__plate-img"
              style={{
                backgroundImage: `url(${bgUrl})`,
                filter: plateFilter,
              }}
            />
            <motion.div className="jelly-page-loader__plate-dim" style={{ opacity: dimOpacity }} />
          </motion.div>

          <motion.div
            className="jelly-page-loader__mark-wrap"
            style={{ opacity: fontsReady && mounted ? markOpacity : 0 }}
          >
            <div className="jelly-page-loader__mark" aria-hidden>
              <span className="jelly-page-loader__letter-base">a</span>
              <motion.span className="jelly-page-loader__letter-layer" style={{ clipPath: fillClipPath }}>
                <span className="jelly-page-loader__letter-fill">a</span>
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
