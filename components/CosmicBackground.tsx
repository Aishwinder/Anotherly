"use client";

import { motion, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

type Star = { x: number; y: number; r: number; o: number };

function makeStars(seed: number, count: number): Star[] {
  let s = seed;
  const next = () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: next() * 100,
      y: next() * 100,
      r: 0.35 + next() * 1.35,
      o: 0.12 + next() * 0.55,
    });
  }
  return stars;
}

export function CosmicBackground() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useSpring(0, { stiffness: 26, damping: 18, mass: 0.9 });
  const my = useSpring(0, { stiffness: 26, damping: 18, mass: 0.9 });

  const nx = useTransform(mx, [-0.5, 0.5], [18, -18]);
  const ny = useTransform(my, [-0.5, 0.5], [14, -14]);
  const nebula1 = useMotionTemplate`radial-gradient(900px circle at ${nx}% ${ny}%, rgba(99, 102, 241, 0.22), transparent 62%)`;
  const nebula2 = useMotionTemplate`radial-gradient(720px circle at calc(100% - ${nx}%) calc(100% - ${ny}%), rgba(56, 189, 248, 0.16), transparent 58%)`;
  const nebula3 = useMotionTemplate`radial-gradient(640px circle at 50% calc(100% - ${ny}%), rgba(45, 212, 191, 0.12), transparent 55%)`;

  const stars = useMemo(() => makeStars(1337, reduced ? 48 : 110), [reduced]);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      mx.set(px);
      my.set(py);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduced]);

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,27,75,0.55),transparent_55%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.9),#050508)]" />
      {!reduced ? (
        <>
          <motion.div aria-hidden className="absolute inset-0 opacity-90" style={{ backgroundImage: nebula1 }} />
          <motion.div aria-hidden className="absolute inset-0 opacity-90" style={{ backgroundImage: nebula2 }} />
          <motion.div aria-hidden className="absolute inset-0 opacity-80" style={{ backgroundImage: nebula3 }} />
        </>
      ) : (
        <div
          aria-hidden
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(900px circle at 30% 20%, rgba(99, 102, 241, 0.18), transparent 62%), radial-gradient(720px circle at 80% 70%, rgba(56, 189, 248, 0.12), transparent 58%)",
          }}
        />
      )}

      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" aria-hidden>
        <defs>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {stars.map((st, i) => (
          <circle
            key={i}
            cx={`${st.x}%`}
            cy={`${st.y}%`}
            r={st.r}
            fill="white"
            opacity={st.o}
            filter="url(#softGlow)"
          />
        ))}
      </svg>

      <div className="noise-overlay" aria-hidden />
    </div>
  );
}
