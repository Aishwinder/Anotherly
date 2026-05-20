import Link from "next/link";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";
import { ProjectsStreamStack } from "@/components/jelly/ProjectsStreamStack";
import { brandingProjects, websiteProjects } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Anotherly Studio",
  description:
    "Branding and websites — one case at a time. Swipeable galleries on mobile with minimal edge arrows.",
};

const nBrand = brandingProjects.length;
const nWeb = websiteProjects.length;

export default function ProjectsPage() {
  return (
    <div className="jelly-projects-work-root jelly-page-pad jelly-page-pad--projects relative">
      <div className="jelly-projects-work-canvas pointer-events-none" aria-hidden />
      <div className="projects-page-intro-wrap relative z-[1] mb-10 sm:mb-12 md:mb-14">
        <JellyGlassSlab className="jelly-projects-page-intro-slab relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellyThemeDeco preset="projectsPage" placement="top-right" />
          <JellyThemeDeco preset="finalCta" placement="bottom-left" className="hidden md:block" />
          <div className="relative z-[1] flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <JellyReveal className="min-w-0 max-w-xl flex-1" variant="lift">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">Selected work</p>
              <h1 className="font-display mt-3 text-[clamp(2.25rem,4.4vw,3rem)] font-extrabold tracking-[-0.035em] text-[var(--ink)]">
                Work
              </h1>
              <p className="jelly-section-lead jelly-section-lead--relaxed mt-6 max-w-xl">
                Full-bleed frames with quiet typography — performance and conversion without the template look. On mobile,
                swipe the gallery; overlays stay minimal so the work leads.
              </p>
              <div className="jelly-projects-work-intro__meta mt-8 flex flex-wrap items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                <span className="rounded-full border border-[color-mix(in_srgb,var(--glass-border)_85%,transparent)] bg-[color-mix(in_srgb,var(--bg-glass)_72%,transparent)] px-3 py-1">
                  {nBrand + nWeb} cases
                </span>
                <span className="hidden opacity-45 sm:inline" aria-hidden>
                  ·
                </span>
                <span className="font-bold normal-case tracking-normal">
                  <Link href="/contact" className="jelly-inline-svc-link text-[var(--ink)]">
                    Booking new work
                  </Link>
                </span>
              </div>
              <nav className="jelly-projects-work-intro__jumps mt-8" aria-label="Jump to work streams">
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
            <PageCraftMotif className="jelly-page-deco--projects-static mx-auto h-auto w-full max-w-[13rem] text-[var(--accent-teal)] opacity-[0.38] sm:mx-0 sm:mt-1 sm:w-28 md:w-36" aria-hidden />
          </div>
        </JellyGlassSlab>
      </div>

      <div className="relative z-[1] mt-2 sm:mt-3 md:mt-4">
        <JellySectionGeo variant="orbit" className="jelly-section-geo--projects-work" />
        <JellySectionGeo variant="lines" className="jelly-section-geo--projects-work-lines" />

        <div className="jelly-projects-streams jelly-slab-width flex flex-col gap-16 sm:gap-24">
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
