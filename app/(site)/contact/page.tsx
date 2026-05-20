import { ContactForm } from "@/components/contact/ContactForm";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { JellyDoodle } from "@/components/jelly/JellyDoodle";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Anotherly Studio",
  description:
    "Tell us your budget and goals — we'll reply with a clear plan and exactly what you get. hello@anotherly.studio",
};

export default function ContactPage() {
  return (
    <div className="jelly-contact-page jelly-page-pad relative">
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <div className="jelly-sketch-grid" aria-hidden />
          <JellyThemeDeco preset="contactHero" placement="top-left" />
          <JellyThemeDeco preset="contactAccent" placement="bottom-right" />
          <JellyThemeDeco preset="contactStar" placement="top-right" className="hidden md:block" />
          <div className="jelly-contact-deco" aria-hidden>
            <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="jelly-contact-deco__svg">
              <path d="M24 36h52v52H24V36zm220 76h52v52h-52v-52z" stroke="currentColor" strokeWidth="1.1" opacity="0.2" />
              <path
                d="M108 100h104M108 108h72M108 116h88"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.16"
              />
              <circle cx="160" cy="48" r="22" stroke="currentColor" strokeWidth="0.9" opacity="0.14" />
            </svg>
          </div>

          <div className="relative z-[1]">
            <JellyReveal>
              <div className="mb-6 flex justify-end sm:mb-0 sm:justify-start">
                <PageCraftMotif className="h-auto w-36 text-[var(--accent-teal)] opacity-35" />
              </div>
              <p className="jelly-contact-combined__eyebrow">Contact</p>
              <h1 className="jelly-contact-combined__title relative mt-3 inline-block">
                Begin the Dialogue
                <JellyDoodle
                  variant="underline"
                  className="jelly-doodle jelly-doodle--purple pointer-events-none absolute -bottom-[0.05em] left-[4%] h-[0.18em] w-[92%] opacity-60"
                />
              </h1>
              <p className="jelly-section-lead jelly-section-lead--relaxed mt-6 max-w-2xl">
                Share goals, timeline, and a rough budget — we reply with clear fit and next steps. No chase, no playbook
                theatre.
              </p>
            </JellyReveal>

            <div className="jelly-contact-combined mt-10 sm:mt-12">
              <JellyReveal variant="drift">
                <div>
                  <div className="jelly-contact-principal">
                    <p className="jelly-contact-principal__name">Aishwinder Singh</p>
                    <p className="jelly-contact-principal__role">Creative Director &amp; Creative Frontend Designer</p>
                    <div className="jelly-contact-principal__channels">
                      <a href="tel:+16476466101" className="jelly-contact-principal__phone">
                        +1 647 646 6101
                      </a>
                      <span className="jelly-contact-principal__sep" aria-hidden>
                        ·
                      </span>
                      <a href="mailto:hello@anotherly.studio" className="jelly-contact-principal__mail">
                        hello@anotherly.studio
                      </a>
                    </div>
                  </div>

                  <p className="jelly-team-block-heading mt-10">
                    <span className="jelly-script-accent">The studio</span>
                  </p>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    <li className="jelly-team-card">
                      <div className="jelly-team-avatar" aria-hidden>
                        AS
                      </div>
                      <div className="min-w-0">
                        <p className="jelly-team-name">Aishwinder Singh</p>
                        <p className="jelly-team-title">Creative Director &amp; Creative Frontend Designer</p>
                      </div>
                    </li>
                    <li className="jelly-team-card">
                      <div className="jelly-team-avatar" aria-hidden>
                        GP
                      </div>
                      <div className="min-w-0">
                        <p className="jelly-team-name">Gurpreet Singh</p>
                        <p className="jelly-team-title">Backend Engineer &amp; Technical Developer</p>
                      </div>
                    </li>
                  </ul>

                  <p className="mt-8 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                    Prefer email? Tap the address above or use the form to the side — we route everything to the same inbox.
                  </p>
                </div>
              </JellyReveal>

              <JellyReveal variant="lift" delay={0.05}>
                <ContactForm />
              </JellyReveal>
            </div>
          </div>
        </JellyGlassSlab>

        <JellyReveal delay={0.1}>
          <JellyGlassSlab className="relative overflow-hidden">
            <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
            <JellySectionGeo variant="orbit" className="opacity-[0.07]" />
            <JellyThemeDeco preset="contactCta" placement="top-right" />
            <div id="audit" className="relative z-[1] scroll-mt-28 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <div className="min-w-0 max-w-xl">
                <div className="jelly-section-title-row">
                  <h2 className="jelly-cta-band-title m-0">Quick clarity call</h2>
                  <JellyDoodle
                    variant="sparkle"
                    className="jelly-doodle jelly-doodle--mint jelly-doodle-twinkle jelly-section-title-doodle"
                  />
                </div>
                <p className="jelly-cta-band-copy">
                  Book a short call and we&apos;ll give you{" "}
                  <strong className="font-semibold text-[var(--ink)]">three concrete improvements</strong> for your current
                  brand or site — no pitch deck, no obligation.
                </p>
              </div>
              <a
                href="mailto:hello@anotherly.studio?subject=Clarity%20call%20request"
                className="jelly-cta-pill jelly-cta-pill--emphasis inline-flex shrink-0 items-center gap-2"
              >
                Email to book
                <JellyDoodle variant="arrow" className="h-[0.8em] w-[1.4em]" strokeWidth={2.2} />
              </a>
            </div>
          </JellyGlassSlab>
        </JellyReveal>
      </div>
    </div>
  );
}
