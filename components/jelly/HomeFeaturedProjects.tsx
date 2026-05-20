"use client";

import Image from "next/image";
import Link from "next/link";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { featuredProjectsForHome } from "@/lib/site";

export function HomeFeaturedProjects() {
  const items = featuredProjectsForHome();

  return (
    <section aria-labelledby="featured-projects-heading">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellyThemeDeco preset="featured" placement="top-right" />
          <JellyThemeDeco preset="howWeWorkStar" placement="bottom-left" className="hidden lg:block" />
        <div className="jelly-featured-projects-intro relative z-[1]">
          <JellyReveal variant="lift">
            <p className="jelly-section-eyebrow">Selected work</p>
            <div className="jelly-featured-heading-row mt-2 flex flex-wrap items-end gap-x-5 gap-y-3">
              <h2 id="featured-projects-heading" className="jelly-section-title jelly-section-title--featured-art m-0">
                <span className="jelly-section-title__feat">Featured </span>
                <span className="jelly-section-title__art">art</span>
              </h2>
              <span
                className="jelly-featured-heading-rule min-h-[2px] min-w-[4rem] flex-1 border-t-[3px] border-dashed border-[color-mix(in_srgb,var(--play-purple)_45%,transparent)] pb-1 opacity-80"
                aria-hidden
              />
            </div>

            <p className="jelly-section-lead jelly-section-lead--relaxed mt-5 max-w-2xl">
              Brand systems, industrial identity, and export-grade web — one thread from strategy to shipped pixels. Full
              case studies on{" "}
              <Link href="/projects" className="jelly-inline-svc-link">
                Work
              </Link>
              .
            </p>
          </JellyReveal>
        </div>
        <ul className="relative z-[1] mt-10 grid gap-8 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {items.map((p, i) => {
            const cover = p.images[0] ?? "/assets/logo-minimal.png";
            const craft = p.kind === "branding" ? (p.slug === "sector-span" ? "Identity & industry" : "Brand system") : "Web & digital";

            return (
              <JellyReveal key={p.slug} delay={i * 0.06} variant={i === 1 ? "drift" : "default"} parallax={8}>
                <li>
                  <Link
                    href={`/projects#${p.slug}`}
                    className={`jelly-featured-project-card group block no-underline motion-safe:transition-transform motion-safe:duration-500 motion-safe:[transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:motion-safe:-translate-y-1.5 ${i === 0 ? "jelly-featured-project-card--tone-a" : i === 1 ? "jelly-featured-project-card--tone-b" : "jelly-featured-project-card--tone-c"}`}
                  >
                    <div className={`jelly-featured-project-card__thumb bg-gradient-to-br ${p.gradient}`}>
                      <span
                        className="jelly-featured-project-card__shimmer pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden
                      />
                      <Image
                        src={cover}
                        alt={p.name}
                        fill
                        className="relative z-0 object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_42%,transparent)] via-transparent to-transparent opacity-80 z-[2]" />
                      <span className="jelly-featured-project-card__pill z-[3]">{craft}</span>
                    </div>
                    <div className="jelly-featured-project-card__body jelly-featured-project-card__body--ref">
                      <p className="jelly-featured-project-card__title">{p.name}</p>
                      <p className="jelly-featured-project-card__tagline">{p.category}</p>
                      <p className="jelly-featured-project-card__blurb jelly-featured-project-card__blurb--muted">{p.blurb}</p>
                    </div>
                  </Link>
                </li>
              </JellyReveal>
            );
          })}
        </ul>
      </JellyGlassSlab>
    </section>
  );
}
