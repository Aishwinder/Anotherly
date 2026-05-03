"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProjectsForHome } from "@/lib/site";
import { JellyReveal } from "@/components/jelly/JellyReveal";

export function HomeFeaturedProjects() {
  const items = featuredProjectsForHome();

  return (
    <section className="jelly-section relative overflow-hidden" aria-labelledby="featured-projects-heading">
      <div className="jelly-featured-projects-intro relative z-[1]">
        <JellyReveal variant="lift">
          <p className="jelly-section-eyebrow">Selected work</p>
          <h2 id="featured-projects-heading" className="jelly-section-title">
            Featured projects
          </h2>
          <p className="jelly-section-lead jelly-section-lead--relaxed mt-4 max-w-2xl">
            A glimpse of branding and sites we&apos;ve shipped — full case studies on{" "}
            <Link href="/projects" className="jelly-inline-svc-link">
              Work
            </Link>
            .
          </p>
        </JellyReveal>
      </div>
      <ul className="relative z-[1] mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {items.map((p, i) => {
          const cover = p.images[0] ?? "/assets/logo-minimal.png";
          return (
            <JellyReveal key={p.slug} delay={i * 0.06} variant={i === 1 ? "drift" : "default"}>
              <li>
                <Link href={`/projects#${p.slug}`} className="jelly-featured-project-card group block no-underline">
                  <div className={`jelly-featured-project-card__thumb bg-gradient-to-br ${p.gradient}`}>
                    <Image
                      src={cover}
                      alt={p.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--ink)_28%,transparent)] via-transparent to-transparent opacity-70" />
                    <span className="jelly-featured-project-card__pill">
                      {p.kind === "branding" ? "Branding" : "Website"}
                    </span>
                  </div>
                  <div className="jelly-featured-project-card__body">
                    <p className="jelly-featured-project-card__eyebrow">{p.category}</p>
                    <p className="jelly-featured-project-card__title">{p.name}</p>
                    <p className="jelly-featured-project-card__blurb">{p.blurb}</p>
                  </div>
                </Link>
              </li>
            </JellyReveal>
          );
        })}
      </ul>
    </section>
  );
}
