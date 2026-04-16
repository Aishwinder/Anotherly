"use client";

import { useEffect, useMemo, useState } from "react";
import type { ProjectShowcase } from "@/lib/site";

type Props = {
  projects: ProjectShowcase[];
};

export function ProjectScrollNav({ projects }: Props) {
  const branding = useMemo(() => projects.filter((p) => p.kind === "branding"), [projects]);
  const websites = useMemo(() => projects.filter((p) => p.kind === "website"), [projects]);
  const [active, setActive] = useState(projects[0]?.slug ?? "");

  useEffect(() => {
    const els = projects
      .map((p) => document.getElementById(p.slug))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, rootMargin: "-38% 0px -42% 0px", threshold: [0.06, 0.18, 0.38] },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [projects]);

  const scrollToId = (slug: string) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderGroup = (label: string, items: ProjectShowcase[]) => (
    <div key={label} className="jelly-project-scroll-nav__group">
      <p className="jelly-project-scroll-nav__group-label">{label}</p>
      <ol className="jelly-project-scroll-nav__list jelly-project-scroll-nav__list--stacked">
        {items.map((p) => {
          const on = active === p.slug;
          return (
            <li key={p.slug}>
              <button
                type="button"
                className={["jelly-project-scroll-nav__btn", on ? "jelly-project-scroll-nav__btn--active" : ""]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => scrollToId(p.slug)}
                aria-current={on ? "location" : undefined}
              >
                <span className="jelly-project-scroll-nav__dot" aria-hidden />
                <span className="jelly-project-scroll-nav__name">{p.name}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );

  return (
    <nav className="jelly-project-scroll-nav" aria-label="Work index">
      <p className="jelly-project-scroll-nav__label">Jump to</p>
      {renderGroup("Branding", branding)}
      {renderGroup("Websites", websites)}
    </nav>
  );
}
