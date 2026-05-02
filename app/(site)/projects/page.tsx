import Link from "next/link";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { ProjectsStreamStack } from "@/components/jelly/ProjectsStreamStack";
import { brandingProjects, websiteProjects } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Anotherly Studio",
  description:
    "Branding and websites — scroll the page, one case at a time. Each card has its own gallery with arrows and dots.",
};

const nBrand = brandingProjects.length;
const nWeb = websiteProjects.length;

export default function ProjectsPage() {
  return (
    <div className="jelly-page-pad jelly-page-pad--projects jelly-projects-work-root relative">
      <div className="jelly-projects-work-canvas pointer-events-none" aria-hidden />
      <div className="jelly-projects-work-hero relative z-[1]">
        <div className="jelly-page-deco jelly-page-deco--projects" aria-hidden>
          <PageCraftMotif className="h-auto w-full max-w-[16rem] text-[var(--accent-teal)] opacity-[0.42] sm:max-w-[18rem]" />
        </div>
        <JellyReveal variant="lift">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Selected work</p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">Work</h1>
          <p className="jelly-section-lead jelly-section-lead--relaxed relative z-[1] mt-5 max-w-2xl">
            Plain scrolling: every case is a full card — read the story on the left or right, then step through images
            with the arrows or dots. No hidden rails, no scroll tricks.
          </p>
          <div className="jelly-projects-work-intro__meta relative z-[1] mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold text-[var(--text-muted)]">
            <span className="rounded-full border border-[var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-glass)_65%,transparent)] px-3 py-1">
              {nBrand + nWeb} cases on file
            </span>
            <span className="hidden sm:inline opacity-50" aria-hidden>
              ·
            </span>
            <span>
              Open for{" "}
              <Link href="/contact" className="jelly-footer-link font-semibold text-[var(--ink)]">
                new work
              </Link>
            </span>
          </div>
          <nav className="jelly-projects-work-intro__jumps relative z-[1] mt-6" aria-label="Jump to work streams">
            <ul className="flex flex-wrap gap-2.5">
              <li>
                <a
                  href="#work-branding"
                  className="jelly-projects-work-jump jelly-projects-work-jump--branding inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[color-mix(in_srgb,var(--accent-orange)_45%,var(--glass-border))]"
                >
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent-orange)]">
                    Branding
                  </span>
                  <span className="text-[var(--text-muted)]">{nBrand} projects</span>
                </a>
              </li>
              <li>
                <a
                  href="#work-websites"
                  className="jelly-projects-work-jump jelly-projects-work-jump--website inline-flex items-center gap-2 rounded-full border border-[var(--glass-border)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[color-mix(in_srgb,var(--accent-teal)_42%,var(--glass-border))]"
                >
                  <span className="text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-[var(--accent-teal)]">
                    Websites
                  </span>
                  <span className="text-[var(--text-muted)]">{nWeb} projects</span>
                </a>
              </li>
            </ul>
          </nav>
        </JellyReveal>
      </div>

      <div className="relative z-[1] mt-10 sm:mt-12">
        <JellySectionGeo variant="orbit" className="jelly-section-geo--projects-work" />
        <JellySectionGeo variant="lines" className="jelly-section-geo--projects-work-lines" />

        <div className="jelly-projects-streams flex flex-col gap-16 sm:gap-24">
          <section className="jelly-projects-stream jelly-projects-stream--branding" aria-labelledby="work-branding-heading">
            <header className="jelly-projects-stream__header">
              <div className="jelly-projects-stream__rule jelly-projects-stream__rule--branding" aria-hidden />
              <div className="jelly-projects-stream__titles">
                <p id="work-branding-heading" className="jelly-projects-stream__label">
                  Branding
                </p>
                <p className="jelly-projects-stream__lede">
                  Marks, systems, and packaging logic — everything a team needs before a site or campaign goes live.
                </p>
              </div>
              <p className="jelly-projects-stream__count" aria-hidden>
                {nBrand}
              </p>
            </header>
            <ProjectsStreamStack projects={brandingProjects} streamId="work-branding" variant="branding" />
          </section>

          <div className="relative min-h-[1px]">
            <JellySectionGeo variant="arc" className="jelly-section-geo--projects-divider" />
          </div>

          <section className="jelly-projects-stream jelly-projects-stream--websites" aria-labelledby="work-websites-heading">
            <header className="jelly-projects-stream__header">
              <div className="jelly-projects-stream__rule jelly-projects-stream__rule--website" aria-hidden />
              <div className="jelly-projects-stream__titles">
                <p id="work-websites-heading" className="jelly-projects-stream__label">
                  Websites
                </p>
                <p className="jelly-projects-stream__lede">
                  Marketing and product surfaces — performance, clarity, and conversion without the template look.
                </p>
              </div>
              <p className="jelly-projects-stream__count" aria-hidden>
                {nWeb}
              </p>
            </header>
            <ProjectsStreamStack projects={websiteProjects} streamId="work-websites" variant="website" />
          </section>
        </div>
      </div>
    </div>
  );
}
