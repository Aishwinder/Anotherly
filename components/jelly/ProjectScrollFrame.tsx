"use client";

import Image from "next/image";
import type { MotionValue } from "framer-motion";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import type { ProjectShowcase } from "@/lib/site";

type Props = {
  project: ProjectShowcase;
  index: number;
};

function ParallaxHero({
  src,
  alt,
  className,
  priority,
  scrollYProgress,
  reduce,
  onError,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  scrollYProgress: MotionValue<number>;
  reduce: boolean;
  onError?: () => void;
}) {
  const [ok, setOk] = useState(true);
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [10, -8]);

  return (
    <motion.div className={className} style={{ y }}>
      <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
        {ok ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(min-width: 900px) min(520px, 40vw), 92vw"
            priority={priority}
            onError={() => {
              setOk(false);
              onError?.();
            }}
          />
        ) : null}
      </div>
    </motion.div>
  );
}

export function ProjectScrollFrame({ project, index }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;
  const images = project.images;
  const [heroOk, setHeroOk] = useState(true);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.48"],
  });

  const fromX = index % 2 === 0 ? 56 : -56;
  const x = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [fromX, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.32], reduce ? [1, 1] : [0.06, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0.94, 1]);

  const hero = images[0];
  const gallery = images.slice(1);
  const multi = gallery.length > 0;

  return (
    <motion.article
      ref={ref}
      id={project.slug}
      className="jelly-project-scroll-frame scroll-mt-28"
      style={{ opacity, scale }}
    >
      <motion.div className="jelly-project-scroll-frame__motion" style={{ x }}>
        <div
          className={[
            "jelly-project-scroll-frame__visual",
            multi ? "jelly-project-scroll-frame__visual--cluster" : "",
            !heroOk && !multi ? `bg-gradient-to-br ${project.gradient}` : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {!multi ? (
            heroOk && hero ? (
              <Image
                src={hero}
                alt={`${project.name} — screenshot`}
                fill
                className="object-cover object-top"
                sizes="(min-width: 900px) min(960px, 88vw), 96vw"
                priority={index < 2}
                onError={() => setHeroOk(false)}
              />
            ) : (
              <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} aria-hidden />
            )
          ) : (
            <>
              <div className="jelly-project-cluster__hero">
                {!heroOk || !hero ? (
                  <div className={`h-full w-full bg-gradient-to-br ${project.gradient}`} aria-hidden />
                ) : (
                  <ParallaxHero
                    src={hero}
                    alt={`${project.name} — primary`}
                    className="jelly-project-cluster__hero-inner"
                    priority={index < 2}
                    scrollYProgress={scrollYProgress}
                    reduce={reduce}
                    onError={() => setHeroOk(false)}
                  />
                )}
              </div>
              <div className="jelly-project-gallery">
                {gallery.map((src, i) => (
                  <div key={src} className="jelly-project-gallery__cell">
                    <Image
                      src={src}
                      alt={`${project.name} — frame ${i + 2}`}
                      fill
                      className="object-cover object-top"
                      sizes="(min-width: 900px) 280px, 45vw"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div className="jelly-project-scroll-frame__meta">
          <p className="jelly-project-scroll-frame__kind">{project.kind === "branding" ? "Branding" : "Website"}</p>
          <p className="jelly-project-scroll-frame__eyebrow">{project.category}</p>
          <h2 className="jelly-project-scroll-frame__title">{project.name}</h2>
          <p className="jelly-project-scroll-frame__blurb">{project.blurb}</p>
          <p className="jelly-project-scroll-frame__year">{project.year}</p>
        </div>
      </motion.div>
    </motion.article>
  );
}
