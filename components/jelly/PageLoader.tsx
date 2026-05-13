"use client";

import { AnimatePresence, animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const LOADER_DONE = "jelly-loader-done";

function dispatchLoaderDone() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(LOADER_DONE));
}

/**
 * White stage + paintbrush glide: soft gradient mask wipes the overlay away to reveal the site.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const doneRef = useRef(false);
  const progress = useMotionValue(0);

  const maskImage = useTransform(progress, (p) => {
    const edge = p * 115;
    const soft = 14 + (1 - p) * 8;
    return `linear-gradient(90deg, transparent 0%, transparent calc(${edge - soft}%), black calc(${edge}%), black 100%)`;
  });

  const brushX = useTransform(progress, [0, 1], ["-8%", "102%"]);
  const brushRotate = useTransform(progress, [0, 0.5, 1], [-6, 2, 4]);
  const brushY = useTransform(progress, [0, 0.35, 0.7, 1], ["42%", "44%", "43%", "45%"]);

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
    }, 800);
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
    if (reduceMotion || !fontsReady || !mounted) return;

    const controls = animate(progress, 1, {
      duration: 2.05,
      ease: [0.33, 0.06, 0.18, 1],
      onComplete: () => {
        setVisible(false);
      },
    });

    return () => controls.stop();
  }, [fontsReady, mounted, progress, reduceMotion]);

  useEffect(() => {
    if (!reduceMotion || !mounted) return;
    progress.set(1);
    setVisible(false);
  }, [reduceMotion, mounted, progress]);

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
          className="paint-page-loader fixed inset-0 z-[10001]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: reduceMotion ? 0.08 : 0.28, ease: exitEase },
          }}
          aria-hidden
        >
          <motion.div
            className="paint-page-loader__wash absolute inset-0 bg-[#fdfdfd]"
            style={{
              WebkitMaskImage: maskImage,
              maskImage,
            }}
          />

          {!reduceMotion && (
            <motion.div className="paint-page-loader__brush pointer-events-none absolute left-0 top-0 z-[2] -translate-x-1/2 -translate-y-1/2"
              style={{
                left: brushX,
                top: brushY,
                rotate: brushRotate,
              }}
            >
              <svg width="118" height="156" viewBox="0 0 118 156" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path
                  d="M92 28c6 8 10 17 11 26 3 31-42 71-74 93-13 9-29 13-37 11-13-5-33-61-38-109-10-104 101-134 138-21Z"
                  fill="url(#pb)"
                  stroke="#1f1530"
                  strokeWidth="1.75"
                  strokeLinejoin="round"
                />
                <path d="m28 138 72-104" stroke="#1f153048" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M18 146c42-42 118-146 146-146" stroke="url(#st)" strokeWidth="10" strokeLinecap="round" opacity="0.35" />
                <defs>
                  <linearGradient id="pb" x1="20" y1="140" x2="104" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c4b5fd" />
                    <stop offset="0.45" stopColor="#a78bfa" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                  <linearGradient id="st" x1="34" y1="146" x2="160" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f472b6" stopOpacity="0" />
                    <stop offset="0.35" stopColor="#e879f9" stopOpacity="0.85" />
                    <stop offset="0.85" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          )}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
