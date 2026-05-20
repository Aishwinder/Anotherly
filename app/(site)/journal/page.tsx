import Image from "next/image";
import Link from "next/link";
import { JellyGlassSlab, JellySectionBackdrop } from "@/components/jelly/JellyGlassSlab";
import { JellyReveal } from "@/components/jelly/JellyReveal";
import { JellySectionGeo } from "@/components/jelly/JellySectionGeo";
import { PageCraftMotif } from "@/components/jelly/PageCraftMotif";
import { JellyThemeDeco } from "@/components/jelly/JellyThemeDeco";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — Anotherly Studio",
  description:
    "Notes from inside the studio — design philosophy, process essays, and the rough drafts behind our brand and web work.",
};

type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  imageAlt: string;
  tone: "peach" | "mint" | "lilac" | "sky" | "butter";
  featured?: boolean;
};

const entries: readonly JournalEntry[] = [
  {
    slug: "designing-with-restraint",
    title: "Designing with restraint, breathing with intent",
    excerpt:
      "Most brands shout. The good ones know exactly when to whisper. A short essay on subtraction as the most underrated design tool we own.",
    date: "May 04, 2026",
    readTime: "6 min read",
    category: "Craft notes",
    image: "/assets/projects/sector-span/1.png",
    imageAlt: "Editorial brand photograph from the Sector Span identity system.",
    tone: "peach",
    featured: true,
  },
  {
    slug: "the-anatomy-of-a-soft-launch",
    title: "The anatomy of a soft launch",
    excerpt:
      "How we shipped Rooherb's site without a single big-bang day — and why our quietest launches always end up the loudest in the inbox.",
    date: "Apr 22, 2026",
    readTime: "4 min read",
    category: "Process",
    image: "/assets/projects/rooherb/2.png",
    imageAlt: "Rooherb packaging composition on a warm pastel surface.",
    tone: "mint",
  },
  {
    slug: "color-outside-the-lines",
    title: "Color outside the lines (then frame it nicely)",
    excerpt:
      "Pastel gradients, glassmorphism, hand-lettered accents — a love letter to playful systems that still hold up in a boardroom deck.",
    date: "Apr 09, 2026",
    readTime: "5 min read",
    category: "Design diary",
    image: "/assets/projects/punjabi-tadka/1.png",
    imageAlt: "Vibrant Punjabi Tadka branding photographed flat-lay style.",
    tone: "lilac",
  },
  {
    slug: "what-if-watch-this",
    title: "From 'what if' to 'watch this'",
    excerpt:
      "Four small rituals we use to translate a vague founder hunch into a brief that actually has a spine. Yes, one of them involves sticky notes.",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    category: "Studio life",
    image: "/assets/projects/optima-cv/1.png",
    imageAlt: "Optima CV interface mocked up on a layered dashboard composition.",
    tone: "sky",
  },
  {
    slug: "small-team-big-thread",
    title: "Small team, one long thread",
    excerpt:
      "Why fewer handoffs make better work. A behind-the-scenes look at how a two-person studio keeps continuity from strategy to launch.",
    date: "Mar 14, 2026",
    readTime: "3 min read",
    category: "Studio life",
    image: "/assets/projects/luis-borges/2.png",
    imageAlt: "Editorial poster artwork from the Luis Borges identity exploration.",
    tone: "butter",
  },
];

const toneClass: Record<JournalEntry["tone"], string> = {
  peach: "jelly-journal-card--peach",
  mint: "jelly-journal-card--mint",
  lilac: "jelly-journal-card--lilac",
  sky: "jelly-journal-card--sky",
  butter: "jelly-journal-card--butter",
};

export default function JournalPage() {
  const [featured, ...rest] = entries;

  return (
    <div className="jelly-page-pad relative">
      <div className="flex flex-col gap-5 sm:gap-6 md:gap-8">
        <JellyGlassSlab className="relative overflow-hidden">
          <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
          <JellySectionGeo variant="orbit" className="opacity-[0.08]" />
          <JellyThemeDeco preset="journalPage" placement="top-right" />
          <JellyThemeDeco preset="testimonials" placement="bottom-left" className="hidden sm:block" />
          <JellyReveal variant="lift">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
              <div className="min-w-0 max-w-3xl">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--text-muted)]">Journal</p>
                <h1 className="font-display mt-3 text-[clamp(2.25rem,4.4vw,3rem)] font-extrabold tracking-[-0.035em] text-[var(--ink)]">
                  Notes from the studio
                </h1>
                <p className="jelly-section-lead jelly-section-lead--relaxed mt-7 max-w-2xl">
                  Half essay, half open notebook. Process write-ups, color experiments, rough thoughts on what makes a
                  brand feel <em className="not-italic font-semibold text-[var(--ink)]">like itself</em>. Nothing
                  ghost-written, nothing recycled.
                </p>
                <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--glass-border)_85%,transparent)] bg-[color-mix(in_srgb,var(--bg-glass)_72%,transparent)] px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent-teal)]" aria-hidden />
                  {entries.length} essays · updated monthly
                </p>
              </div>
              <PageCraftMotif className="mx-auto h-auto w-full max-w-[12rem] text-[var(--accent-indigo)] opacity-[0.35] sm:mx-0 sm:w-32 lg:w-40" aria-hidden />
            </div>
          </JellyReveal>
        </JellyGlassSlab>

        {featured ? (
          <JellyReveal variant="lift" delay={0.06}>
            <JellyGlassSlab className="relative overflow-hidden">
              <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
              <Link
                href={`/journal/${featured.slug}`}
                className={`jelly-journal-featured ${toneClass[featured.tone]} group block no-underline`}
              >
                <div className="jelly-journal-featured__media">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    priority
                  />
                  <span className="jelly-journal-featured__shade" aria-hidden />
                  <span className="jelly-journal-featured__pill">{featured.category}</span>
                </div>
                <div className="jelly-journal-featured__body">
                  <p className="jelly-journal-meta">
                    <span>{featured.date}</span>
                    <span aria-hidden>·</span>
                    <span>{featured.readTime}</span>
                  </p>
                  <h2 className="jelly-journal-featured__title font-display">{featured.title}</h2>
                  <p className="jelly-journal-featured__excerpt">{featured.excerpt}</p>
                  <span className="jelly-journal-read">
                    Read the essay
                    <span aria-hidden className="jelly-journal-read__arrow">→</span>
                  </span>
                </div>
              </Link>
            </JellyGlassSlab>
          </JellyReveal>
        ) : null}

        <section aria-labelledby="journal-recent-heading">
          <JellyGlassSlab className="relative overflow-hidden">
            <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
            <JellyReveal variant="lift">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="jelly-section-eyebrow">Recent</p>
                  <h2 id="journal-recent-heading" className="jelly-section-title m-0 mt-2">
                    More from the desk
                  </h2>
                </div>
                <p className="text-[0.8rem] font-medium text-[var(--text-muted)]">
                  Subscribe? Just email{" "}
                  <a className="jelly-inline-svc-link" href="mailto:hello@anotherly.studio">
                    hello@anotherly.studio
                  </a>
                  .
                </p>
              </div>

              <ul className="jelly-journal-grid mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-2 lg:gap-8">
                {rest.map((entry, i) => (
                  <JellyReveal key={entry.slug} delay={i * 0.05}>
                    <li>
                      <Link
                        href={`/journal/${entry.slug}`}
                        className={`jelly-journal-card ${toneClass[entry.tone]} group block no-underline`}
                      >
                        <div className="jelly-journal-card__media">
                          <Image
                            src={entry.image}
                            alt={entry.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                          />
                          <span className="jelly-journal-card__shade" aria-hidden />
                          <span className="jelly-journal-card__pill">{entry.category}</span>
                        </div>
                        <div className="jelly-journal-card__body">
                          <p className="jelly-journal-meta">
                            <span>{entry.date}</span>
                            <span aria-hidden>·</span>
                            <span>{entry.readTime}</span>
                          </p>
                          <h3 className="jelly-journal-card__title font-display">{entry.title}</h3>
                          <p className="jelly-journal-card__excerpt">{entry.excerpt}</p>
                          <span className="jelly-journal-read">
                            Read more
                            <span aria-hidden className="jelly-journal-read__arrow">→</span>
                          </span>
                        </div>
                      </Link>
                    </li>
                  </JellyReveal>
                ))}
              </ul>
            </JellyReveal>
          </JellyGlassSlab>
        </section>

        <JellyReveal variant="lift">
          <JellyGlassSlab className="relative overflow-hidden">
            <JellySectionBackdrop variant="aurora" className="jelly-section-backdrop--unified" />
            <JellySectionGeo variant="arc" className="jelly-section-geo--lines opacity-[0.08]" />
            <div className="relative z-[1] flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-11">
              <div className="min-w-0 max-w-xl">
                <h2 className="jelly-cta-band-title m-0">Have a thought to swap?</h2>
                <p className="jelly-cta-band-copy mt-4">
                  We answer every email — even the rambling ones. Send us a note or pitch a topic you&apos;d love to read
                  about next.
                </p>
              </div>
              <Link href="/contact" className="jelly-cta-pill jelly-cta-pill--emphasis shrink-0">
                Say hello
              </Link>
            </div>
          </JellyGlassSlab>
        </JellyReveal>
      </div>
    </div>
  );
}
