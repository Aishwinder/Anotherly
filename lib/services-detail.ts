/** Services & pricing — canonical copy for Services, Pricing, and home (USD). */

export type ServiceTier = {
  name: string;
  estimate: string;
  note: string;
  includes?: readonly string[];
};

export type ServiceBlock = {
  id: string;
  title: string;
  lead: string;
  quotes: readonly [string, string?];
  estimate?: string;
  tiers?: readonly ServiceTier[];
  /** Marketing: bullet offers when no fixed packages */
  flexibleOffers?: readonly string[];
  bundleNote?: string;
};

export type CarePlan = {
  name: string;
  estimate: string;
  lead: string;
  includes: readonly string[];
};

export const bundleDiscountCopy =
  "Bundle any 2 services → 15% off. All 3 services → 25% off + we waive the first month on your Care Lite plan when you launch with us.";

const unlimited = "Unlimited revisions until you sign off — we iterate until it feels right." as const;

export const mainServices: readonly ServiceBlock[] = [
  {
    id: "branding",
    title: "Branding",
    lead: "Generous deliverables at every tier — you leave with files you can actually ship, not a vague style guide PDF.",
    quotes: [
      "Design is the silent ambassador of your brand. — Paul Rand",
      "Restraint isn’t absence; it’s knowing what to leave in.",
    ],
    tiers: [
      {
        name: "Starter Brand",
        estimate: "$350",
        note: "Perfect when you need a credible face fast — still packed with what bigger studios gate behind upsells.",
        includes: [
          unlimited,
          "2 strategic logo directions refined to one final mark",
          "Colour system + typography pairing + export kit (SVG, PNG, social avatars)",
          "One-page brand cheatsheet (voice, do/don’t usage, colour + type rules)",
          "3 social or print-ready templates (stories, post, or flyer)",
          "Source files (Figma) + handoff call",
        ],
      },
      {
        name: "Pro Brand",
        estimate: "$800",
        note: "The sweet spot for most launches — full visual system without the enterprise price tag.",
        includes: [
          unlimited,
          "3 logo concepts through final lockup + submarks / patterns as needed",
          "8-page brand guidelines (digital PDF) — colour, type, imagery, layout grids",
          "Stationery suite: business card, letterhead, email signature assets",
          "8+ social / marketing templates (stories, posts, reels covers)",
          "Packaging or menu concepts when relevant to your category",
          "Organised Figma library + export pack for devs and printers",
        ],
      },
      {
        name: "Premium Brand",
        estimate: "$1,500+",
        note: "When narrative and stretch matter — workshops, messaging, and rollout support.",
        includes: [
          unlimited,
          "Half-day positioning & narrative workshop (remote)",
          "Messaging framework: elevator, pillars, taglines, tone snippets",
          "Everything in Pro, plus extended guidelines (16+ pages) and motion/static variants",
          "Packaging or signage concepts, pitch deck skin, or trade-show basics — scoped together",
          "60 days of light brand support (asset tweaks, template help)",
          "Optional photo / illustration art direction brief for your next shoot",
        ],
      },
    ],
  },
  {
    id: "websites",
    title: "Websites",
    lead: "Custom builds — fast, accessible, and honest about what’s in the box. Every tier includes training so you’re not locked in.",
    quotes: [
      "Simplicity is the ultimate sophistication. — attributed to Leonardo da Vinci",
      "Speed and clarity aren’t extras; they’re the product.",
    ],
    tiers: [
      {
        name: "Starter Website",
        estimate: "$350",
        note: "A sharp presence when you need to look legit yesterday.",
        includes: [
          unlimited,
          "Up to 5 tailored pages (home, about, services, contact, +1 utility)",
          "Mobile-first layout, contact form with spam protection, basic analytics hookup",
          "On-page SEO setup (titles, meta, OG image, sitemap submission)",
          "Performance pass — compressed media, lazy loading, Core Web Vitals minded",
          "30-minute handoff + Loom walkthrough of the CMS or static workflow",
        ],
      },
      {
        name: "Pro Website",
        estimate: "$800",
        note: "For teams who need motion, integrations, and room to grow.",
        includes: [
          unlimited,
          "Up to 10 pages or long-scroll sections with modular blocks",
          "Motion and micro-interaction layer (respecting reduced-motion)",
          "Booking, calendar, newsletter, or light CRM embeds as agreed",
          "Advanced SEO structure, schema where it helps, redirect plan if migrating",
          "Blog or resources pattern if you publish often",
          "1hr launch training + 14-day bugfix window",
        ],
      },
      {
        name: "Premium Website",
        estimate: "$1,500+",
        note: "E‑commerce, SaaS marketing sites, portals, or anything with serious logic.",
        includes: [
          unlimited,
          "Unlimited pages within agreed IA — no arbitrary page tax",
          "E‑commerce, member areas, calculators, or multi-language when scoped",
          "Custom components, design system in code, Storybook or pattern doc on request",
          "Analytics + conversion events, privacy-friendly defaults",
          "Staging workflow, deployment pipeline, and documentation for your stack",
          "3 months post-launch support + 2 training sessions",
        ],
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    lead: "We don’t sell mystery retainers — every month has a written scope so you know what shipped.",
    quotes: [
      "Creativity with strategy is how quiet brands get loud in the right rooms.",
      "Tell us your budget and goals — we’ll show you exactly what you get each month.",
    ],
    flexibleOffers: [
      "Launch sprints — paid social + landing refresh + email sequence in one push",
      "Monthly growth retainers from $450/mo — ads, SEO content, CRO tests, reporting",
      "Founder-led LinkedIn / thought-leadership kits for B2B teams",
      "Always includes: unlimited revision rounds on creative we produce for you in-scope",
    ],
    bundleNote:
      "Share a monthly number — we’ll propose two plans (lean vs full) with line-by-line deliverables so you can choose with confidence.",
  },
] as const;

/** Ongoing website care — shown on Services + linked from home. */
export const websiteCarePlans: readonly CarePlan[] = [
  {
    name: "Care Lite",
    estimate: "$40/mo",
    lead: "Essential upkeep — your site stays secure, monitored, and easy to tweak in small ways.",
    includes: [
      "Hosting + SSL monitoring on our recommended stack",
      "Monthly core / CMS / dependency security patches",
      "Weekly automated backups + restore sanity check quarterly",
      "One small tweak per month (copy, hero image swap, FAQ line — capped at ~30 min)",
      "Email support — reply within 3 business days",
    ],
  },
  {
    name: "Care Pro",
    estimate: "$100/mo",
    lead: "Room to iterate — proactive checks plus real design/dev time each month.",
    includes: [
      "Everything in Care Lite",
      "Up to 2 hrs/mo combined design + front-end dev (landing sections, new block, polish)",
      "Quarterly Lighthouse + SEO hygiene report with one prioritized fix shipped",
      "Staging previews before production deploys when changes touch layout or components",
      "Priority email support — reply within 1–2 business days",
    ],
  },
  {
    name: "Care Partner",
    estimate: "$150/mo",
    lead: "For teams publishing often — predictable hours and a tighter feedback loop.",
    includes: [
      "Everything in Care Pro",
      "Up to 4 hrs/mo strategy, UI, content structure, or implementation as agreed each month",
      "Shared task board access + monthly 25-min roadmap touchpoint",
      "Async chat channel for scoped questions during business hours (Slack preferred)",
      "One urgent hotfix escalation per quarter for critical breakage (within scope)",
    ],
  },
] as const;
