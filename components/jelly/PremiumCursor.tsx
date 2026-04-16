"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

/** Subtle desktop-only ring — transform-only, pointer-events none. */
export function PremiumCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 320, damping: 34, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 320, damping: 34, mass: 0.4 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      className="jelly-cursor-dot"
      style={{ position: "fixed", left: sx, top: sy, marginLeft: -14, marginTop: -14 }}
      aria-hidden
    />
  );
}
