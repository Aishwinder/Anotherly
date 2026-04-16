import { ProjectScrollFrame } from "@/components/jelly/ProjectScrollFrame";
import { ProjectScrollNav } from "@/components/jelly/ProjectScrollNav";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { brandingProjects, showcaseProjects, websiteProjects } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Anotherly Studio",
  description: "Branding systems and live websites — full frames and every project asset on view.",
};

export default function ProjectsPage() {
  return (
    <div className="jelly-page-pad jelly-page-pad--projects">
      <div className="relative">
        <div className="jelly-page-deco jelly-page-deco--projects" aria-hidden>
          <PageCraftMotif className="h-auto w-full max-w-[14rem] text-[var(--accent-teal)] opacity-[0.28]" />
        </div>
        <JellyReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Selected</p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Work</h1>
          <p className="jelly-section-lead jelly-section-lead--relaxed relative z-[1] mt-5 max-w-2xl">
            Branding and websites, split the same way your assets are organised. Every frame we have is below — scroll
            slowly; the index tracks where you are.
          </p>
        </JellyReveal>
      </div>

      <div className="jelly-projects-layout__grid mt-12 sm:mt-14">
        <div className="jelly-projects-stack flex min-w-0 flex-col gap-16 sm:gap-20 lg:gap-24">
          <header className="jelly-projects-category">
            <h2 className="jelly-projects-category__title">Branding</h2>
            <p className="jelly-projects-category__lede">Identity, packaging, and print-ready systems.</p>
          </header>
          {brandingProjects.map((p, i) => (
            <ProjectScrollFrame key={p.slug} project={p} index={i} />
          ))}

          <header className="jelly-projects-category jelly-projects-category--spaced">
            <h2 className="jelly-projects-category__title">Websites &amp; product</h2>
            <p className="jelly-projects-category__lede">Live sites, dashboards, and marketing surfaces.</p>
          </header>
          {websiteProjects.map((p, i) => (
            <ProjectScrollFrame key={p.slug} project={p} index={brandingProjects.length + i} />
          ))}
        </div>
        <ProjectScrollNav projects={showcaseProjects} />
      </div>
    </div>
  );
}
