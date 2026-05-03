"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import type { ProjectShowcase } from "@/lib/site";

export type ProjectsStreamVariant = "branding" | "website";

type StackProps = {
  projects: ProjectShowcase[];
  streamId: string;
  variant: ProjectsStreamVariant;
};

function ProjectPhotoGallery({ project }: { project: ProjectShowcase }) {
  const imgs = project.images.length ? project.images : ["/assets/logo-minimal.png"];
  const [ix, setIx] = useState(0);
  const n = imgs.length;
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (d: -1 | 1) => {
      setIx((i) => (n <= 1 ? 0 : (i + d + n) % n));
    },
    [n],
  );

  const goTo = useCallback(
    (i: number) => {
      if (n <= 1) return;
      setIx(((i % n) + n) % n);
    },
    [n],
  );

  return (
    <div className="jelly-project-case-gallery">
      <div
        className="jelly-project-case-gallery__viewport"
        onTouchStart={(e) => {
          touchStart.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current == null || n <= 1) return;
          const x = e.changedTouches[0]?.clientX ?? touchStart.current;
          const dx = x - touchStart.current;
          touchStart.current = null;
          if (dx > 56) go(-1);
          else if (dx < -56) go(1);
        }}
      >
        <div className="jelly-project-case-gallery__track" style={{ transform: `translateX(-${ix * 100}%)` }}>
          {imgs.map((src, i) => (
            <div key={`${project.slug}-img-${i}`} className="jelly-project-case-gallery__cell">
              <div className={`jelly-project-case-gallery__cell-bg bg-gradient-to-br ${project.gradient}`}>
                <Image
                  src={src}
                  alt={i === 0 ? project.name : `${project.name} — ${i + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 640px, 92vw"
                  draggable={false}
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {n > 1 ? (
          <>
            <div className="jelly-project-case-gallery__overlay-nav">
              <button
                type="button"
                className="jelly-project-case-gallery__arrow jelly-project-case-gallery__arrow--edge"
                aria-label="Previous image"
                onClick={() => go(-1)}
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
              </button>
              <button
                type="button"
                className="jelly-project-case-gallery__arrow jelly-project-case-gallery__arrow--edge jelly-project-case-gallery__arrow--edge-right"
                aria-label="Next image"
                onClick={() => go(1)}
              >
                <ChevronRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </button>
            </div>
            <div className="jelly-project-case-gallery__dots jelly-project-case-gallery__dots--overlay" role="group" aria-label="Images">
              {imgs.map((_, di) => (
                <button
                  key={`${project.slug}-dot-${di}`}
                  type="button"
                  aria-current={di === ix ? "true" : undefined}
                  aria-label={`Image ${di + 1} of ${n}`}
                  className={["jelly-project-case-gallery__dot", di === ix ? "jelly-project-case-gallery__dot--on" : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => goTo(di)}
                />
              ))}
            </div>
            <p className="jelly-project-case-gallery__count jelly-project-case-gallery__count--overlay" aria-live="polite">
              {ix + 1} / {n}
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
}

function ProjectCaseCard({
  project,
  variant,
  index,
  reverse,
}: {
  project: ProjectShowcase;
  variant: ProjectsStreamVariant;
  index: number;
  reverse: boolean;
}) {
  const bullets = project.bullets?.filter(Boolean) ?? [];
  const mod = variant === "branding" ? "jelly-project-case--branding" : "jelly-project-case--website";
  const idx = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.slug}
      className={[
        "jelly-project-case scroll-mt-28",
        mod,
        reverse ? "jelly-project-case--reverse" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="jelly-project-case__index" aria-hidden>
        {idx}
      </span>
      <div className="jelly-project-case__grid">
        <div className="jelly-project-case__copy">
          <p className="jelly-project-case__kind">{project.kind === "branding" ? "Branding" : "Website"}</p>
          <p className="jelly-project-case__eyebrow">{project.category}</p>
          <h2 className="jelly-project-case__title">{project.name}</h2>
          <p className="jelly-project-case__blurb">{project.blurb}</p>
          {bullets.length ? (
            <ul className="jelly-project-case__bullets">
              {bullets.map((line, bi) => (
                <li key={`${project.slug}-b-${bi}`}>{line}</li>
              ))}
            </ul>
          ) : null}
          <p className="jelly-project-case__foot">
            <span>{project.year}</span>
            <span className="jelly-project-case__dot" aria-hidden>
              ·
            </span>
            <span>
              {project.images.length} {project.images.length === 1 ? "image" : "images"}
            </span>
          </p>
        </div>
        <ProjectPhotoGallery project={project} />
      </div>
    </article>
  );
}

export function ProjectsStreamStack({ projects, streamId, variant }: StackProps) {
  if (!projects.length) return null;

  const listMod =
    variant === "branding" ? "jelly-projects-stream-stack--branding" : "jelly-projects-stream-stack--website";

  return (
    <div id={streamId} className={["jelly-projects-stream-stack", listMod].join(" ")}>
      <div className="jelly-projects-stream-stack__list" role="list">
        {projects.map((p, i) => (
          <div key={p.slug} className="jelly-projects-stream-stack__item" role="listitem">
            <ProjectCaseCard project={p} variant={variant} index={i} reverse={i % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  );
}
