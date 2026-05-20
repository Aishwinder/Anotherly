"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { JellyDoodle } from "@/components/jelly/JellyDoodle";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";

const MotionLink = motion(Link);

const HERO_MANIFESTO =
  "Most brands are built to impress and websites built to fill space — cluttered, loud, noise dressed up as identity. Yours should do neither. It should connect, say something true, and feel like you before anyone reads a single word. We do the opposite of everything you've seen. Less, but felt more.";

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

  const polaroidSpringY = useSpring(polaroidY, { stiffness: 220, damping: 17, mass: 0.32 });
  const polaroidSpringRot = useSpring(polaroidRot, { stiffness: 180, damping: 18, mass: 0.3 });
  const polaroidSpringX = useSpring(polaroidX, { stiffness: 200, damping: 17, mass: 0.3 });
  const polaroidSpringScale = useSpring(polaroidScale, { stiffness: 150, damping: 22, mass: 0.35 });

  return (
    <section
      ref={sectionRef}
      className="jelly-hero jelly-hero--home jelly-hero-photo"
      aria-labelledby="jelly-hero-heading"
      data-jelly-hero
    >
      <JellyThemeDeco preset="heroCorner" placement="top-left" />
      <JellyThemeDeco preset="heroStar" placement="bottom-left" className="hidden sm:block" />

      <motion.div
        className="jelly-hero-photo__inner relative z-[1] mx-auto w-full max-w-[min(72rem,calc(100%-2rem))]"
        style={{ y: blockY, opacity: blockOpacity }}
      >
        <div className="jelly-hero-photo__grid">
          <div className="jelly-hero-photo__main relative min-w-0">
            <p className="jelly-hero-photo-we relative z-[1] m-0 tracking-tight text-[var(--ink)]">
              <span className="jelly-hero-photo-we__w">
                <span className="jelly-hero-photo-splat jelly-hero-photo-splat--a" aria-hidden />
                <span className="jelly-hero-photo-we__text">we</span>
              </span>
              <span className="jelly-hero-photo-we__do"> do </span>
              <span className="jelly-hero-photo-we__it">
                <span className="jelly-hero-photo-splat jelly-hero-photo-splat--b" aria-hidden />
                <span className="jelly-hero-photo-we__text">it</span>
              </span>
              <JellyDoodle
                variant="sparkle"
                className="jelly-doodle jelly-doodle--purple ml-2 inline-block h-[0.5em] w-[0.5em] align-[0.2em] opacity-[0.62]"
              />
            </p>

            <h1
              id="jelly-hero-heading"
              className="jelly-hero-photo__brand jelly-hero-h1 jelly-hero-h1--anotherly relative z-[1] m-0 mt-3 inline-block max-w-full font-display font-extrabold tracking-[-0.05em] sm:mt-4"
            >
              <span className="jelly-hero-anotherly-word jelly-hero-anotherly-word--photo">
                anotherly
              </span>
              <JellyDoodle
                variant="wave"
                className="jelly-doodle jelly-doodle--peach pointer-events-none absolute -bottom-[0.12em] left-0 h-[0.35em] w-[100%] max-w-none opacity-55 sm:left-[2%]"
              />
            </h1>

            <p className="jelly-hero-sub--photo relative z-[1] mt-5 font-display font-medium text-[var(--ink)] sm:mt-6">
              {HERO_MANIFESTO}
            </p>

            <div className="jelly-hero-photo__ctas relative z-[1] mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:max-w-[18rem] sm:items-start">
              <MotionLink
                href="/projects"
                className="jelly-cta-peach jelly-cta-peach--photo w-full sm:w-auto"
                draggable={false}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Our work
                <JellyDoodle variant="arrow" className="ml-2 h-[0.8em] w-[1.5em]" strokeWidth={2} />
              </MotionLink>
              <MotionLink
                href="/#how-we-work"
                className="jelly-cta-misfits jelly-cta-misfits--photo w-full sm:w-auto"
                draggable={false}
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={reduce ? undefined : { scale: 0.98 }}
              >
                Meet us
                <JellyDoodle variant="squiggle" className="ml-2 h-[0.55em] w-[2.25em]" strokeWidth={2} />
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
                      src="/assets/polaroid-hero.png"
                      alt="Polaroid photo in the hero."
                      width={1024}
                      height={1024}
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
