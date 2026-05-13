"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionLink = motion(Link);

export function JellyHeroHome() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const blockY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -5]);
  const blockOpacity = useTransform(scrollYProgress, [0, 0.92], reduce ? [1, 1] : [1, 0.99]);

  const polaroidY = useTransform(scrollYProgress, [0, 0.2, 0.45, 0.72, 1], reduce ? [0, 0, 0, 0, 0] : [0, 22, -10, 36, 56]);
  const polaroidRot = useTransform(scrollYProgress, [0, 0.28, 0.55, 1], reduce ? [-9, -9, -9, -9] : [-9, 2, -15, 4]);
  const polaroidX = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? [0, 0, 0] : [0, -10, -22]);
  const polaroidScale = useTransform(scrollYProgress, [0, 0.4, 1], reduce ? [1, 1, 1] : [1, 1.03, 0.98]);

  const polaroidSpringY = useSpring(polaroidY, { stiffness: 160, damping: 16, mass: 0.38 });
  const polaroidSpringRot = useSpring(polaroidRot, { stiffness: 120, damping: 18, mass: 0.35 });
  const polaroidSpringX = useSpring(polaroidX, { stiffness: 140, damping: 17, mass: 0.34 });
  const polaroidSpringScale = useSpring(polaroidScale, { stiffness: 100, damping: 22, mass: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="jelly-hero jelly-hero--home jelly-hero-photo"
      aria-labelledby="jelly-hero-heading"
      data-jelly-hero
    >
      <motion.div
        className="jelly-hero-photo__inner relative z-[1] mx-auto w-full max-w-[min(72rem,calc(100%-2rem))]"
        style={{ y: blockY, opacity: blockOpacity }}
      >
        <div className="jelly-hero-photo__grid">
          <div className="jelly-hero-photo__main min-w-0">
            <p className="jelly-hero-photo-we font-hand m-0 font-bold leading-[1.05] tracking-tight text-[var(--ink)]">
              <span className="jelly-hero-photo-we__w">
                <span className="jelly-hero-photo-splat jelly-hero-photo-splat--a" aria-hidden />
                we
              </span>
              <span className="jelly-hero-photo-we__do"> do </span>
              <span className="jelly-hero-photo-we__it">
                <span className="jelly-hero-photo-splat jelly-hero-photo-splat--b" aria-hidden />
                it
              </span>
            </p>

            <h1
              id="jelly-hero-heading"
              className="jelly-hero-photo__brand jelly-hero-h1 jelly-hero-h1--anotherly relative m-0 mt-3 inline-block max-w-full font-display font-extrabold tracking-[-0.05em] sm:mt-4"
            >
              <span className="jelly-hero-anotherly-word jelly-hero-anotherly-word--photo">anotherly</span>
            </h1>

            <p className="jelly-hero-sub--photo mt-5 max-w-[34rem] font-display text-[1.2rem] font-medium leading-[1.5] tracking-[-0.018em] text-[var(--ink)] sm:mt-6 sm:text-[1.35rem]">
              A design agency that bends rules, colors outside lines, and turns &lsquo;what if&rsquo; into &lsquo;watch
              this.&rsquo;
            </p>

            <div className="jelly-hero-photo__ctas mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:max-w-[18rem] sm:items-start">
              <MotionLink
                href="/projects"
                className="jelly-cta-peach jelly-cta-peach--photo w-full sm:w-auto"
                draggable={false}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                See the work ↗
              </MotionLink>
              <MotionLink
                href="/#studio"
                className="jelly-cta-misfits jelly-cta-misfits--photo w-full sm:w-auto"
                draggable={false}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Meet the misfits ✦
              </MotionLink>
            </div>
          </div>

          <aside className="jelly-hero-photo__rail relative flex w-full min-w-0 flex-col items-stretch lg:items-end">
            <motion.div
              className="jelly-hero-photo__polaroid-wrap flex w-full justify-center will-change-transform lg:justify-end"
              style={
                reduce
                  ? { rotate: -9 }
                  : {
                      y: polaroidSpringY,
                      rotate: polaroidSpringRot,
                      x: polaroidSpringX,
                      scale: polaroidSpringScale,
                    }
              }
            >
              <div className="jelly-polaroid jelly-polaroid--ref jelly-polaroid--photo-ref">
                <div className="jelly-polaroid__inner jelly-polaroid__inner--photo">
                  <div className="jelly-polaroid__img-wrap jelly-polaroid__img-wrap--photo">
                    <Image
                      src="/assets/hero-section-small-image.png"
                      alt="Hand holding a yellow creative mood board with sketches and color swatches."
                      width={960}
                      height={960}
                      className="jelly-polaroid__img jelly-polaroid__img--natural"
                      sizes="(max-width: 1024px) 78vw, 320px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </motion.div>
    </section>
  );
}
