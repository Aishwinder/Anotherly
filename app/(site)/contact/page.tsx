import { ContactForm } from "@/components/contact/ContactForm";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
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
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Contact</p>
              <h1 className="font-display mt-3 text-[clamp(2.25rem,4.4vw,3rem)] font-extrabold tracking-[-0.035em] text-[var(--ink)]">
                Begin the Dialogue
              </h1>
              <p className="jelly-section-lead jelly-section-lead--relaxed mt-6 max-w-2xl">
                Share goals, timeline, and a rough budget — we reply with clear fit and next steps. No chase, no playbook
                theatre.
              </p>
              <div className="jelly-contact-principal mt-10">
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
              <p className="mt-9 max-w-xl text-sm leading-relaxed text-[var(--text-muted)]">
                Prefer email? Tap the address above or use the form below — we route everything to the same inbox.
              </p>
            </JellyReveal>
          </div>
        </JellyGlassSlab>

        <JellyReveal delay={0.06}>
          <JellyGlassSlab className="relative overflow-hidden">
            <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
            <div className="relative z-[1] pt-6 sm:pt-8">
              <ContactForm />
            </div>
          </JellyGlassSlab>
        </JellyReveal>

        <JellyReveal delay={0.1}>
          <JellyGlassSlab className="relative overflow-hidden">
            <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
            <JellySectionGeo variant="orbit" className="opacity-[0.07]" />
            <div id="audit" className="relative z-[1] scroll-mt-28 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
              <div className="min-w-0 max-w-xl">
                <h2 className="jelly-cta-band-title m-0">Quick clarity call</h2>
                <p className="jelly-cta-band-copy">
                  Book a short call and we&apos;ll give you{" "}
                  <strong className="font-semibold text-[var(--ink)]">three concrete improvements</strong> for your current
                  brand or site — no pitch deck, no obligation.
                </p>
              </div>
              <a
                href="mailto:hello@anotherly.studio?subject=Clarity%20call%20request"
                className="jelly-cta-pill jelly-cta-pill--emphasis shrink-0"
              >
                Email to book
              </a>
            </div>
          </JellyGlassSlab>
        </JellyReveal>
      </div>
    </div>
  );
}
