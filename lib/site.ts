/** Selected work — assets live in `public/assets/projects/<slug>/` as `1.png`, `2.png`, … (sorted by number). */

export type ProjectKind = "branding" | "website";

export type ProjectShowcase = {
  slug: string;
  name: string;
  kind: ProjectKind;
  /** Short line for the meta column (discipline / context). */
  category: string;
  year: string;
  /** ISO date for ordering (oldest → newest in each stream). */
  createdAt: string;
  blurb: string;
  /** Two or three crisp outcomes — shown on the work page. */
  bullets?: string[];
  images: string[];
  gradient: string;
};

/** Build image paths — `1.png` … `N.png`, sorted numerically by filename. */
export function projectImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/assets/projects/${slug}/${i + 1}.png`).sort((a, b) => {
    const na = Number(a.match(/(\d+)\.png$/i)?.[1] ?? 0);
    const nb = Number(b.match(/(\d+)\.png$/i)?.[1] ?? 0);
    return na - nb;
  });
}

function sortByCreatedAt(a: ProjectShowcase, b: ProjectShowcase): number {
  const byDate = a.createdAt.localeCompare(b.createdAt);
  if (byDate !== 0) return byDate;
  return a.slug.localeCompare(b.slug);
}

/** `/projects` stream order — listed slugs first, then everyone else by `createdAt`. */
const BRANDING_STREAM_FIRST = ["sector-span", "rooherb-brand"] as const;
const WEBSITE_STREAM_FIRST = ["jp-parts", "rooherb"] as const;

function sortWithFeaturedFirst(priority: readonly string[]) {
  const rank = (slug: string) => {
    const i = priority.indexOf(slug);
    return i === -1 ? priority.length + 100 : i;
  };
  return (a: ProjectShowcase, b: ProjectShowcase) => {
    const ra = rank(a.slug);
    const rb = rank(b.slug);
    if (ra !== rb) return ra - rb;
    return sortByCreatedAt(a, b);
  };
}

const showcaseProjectsSource: ProjectShowcase[] = [
  {
    slug: "luis-borges",
    name: "Luis Borges",
    kind: "branding",
    category: "Restaurant · Portugal",
    year: "2025",
    createdAt: "2025-01-18",
    blurb: "Portuguese dining, distilled — warm typography, tile-inspired motifs, and a mark that feels like the room.",
    bullets: [
      "Wordmark and monogram tuned for menus, signage, and social",
      "Earth-and-terracotta palette drawn from Atlantic coast light",
      "Print-ready patterns for coasters, aprons, and takeaway",
    ],
    images: projectImages("luis-borges", 5),
    gradient: "from-[#fff9f4] via-[#fdf2e8] to-[#f0e6dc]",
  },
  {
    slug: "sector-span",
    name: "Sector Span",
    kind: "branding",
    category: "Mechanical engineering · consulting",
    year: "2025",
    createdAt: "2025-03-10",
    blurb: "Precision engineering meets approachable expertise — identity that reads credible on bids and LinkedIn.",
    bullets: [
      "Modular mark system for proposals, decks, and field gear",
      "Steel-and-ink palette that survives photocopy and PDF",
      "Icon set for services, certifications, and safety callouts",
    ],
    images: projectImages("sector-span", 11),
    gradient: "from-[#f4f7fb] via-[#e9eef5] to-[#dde5ef]",
  },
  {
    slug: "rooherb-brand",
    name: "RooHerb",
    kind: "branding",
    category: "Natural stevia · identity system",
    year: "2025",
    createdAt: "2025-05-22",
    blurb: "Full brand system — packaging, palette, and print-ready assets for a calm, premium natural line.",
    bullets: [
      "Packaging hierarchy for SKUs and regional variants",
      "Photography direction for farm-to-shelf storytelling",
      "Guidelines for partners, distributors, and retail",
    ],
    images: projectImages("rooherb-brand", 10),
    gradient: "from-[#f4fdf8] via-[#e8f8ef] to-[#dcefe4]",
  },
  {
    slug: "rooherb",
    name: "RooHerb",
    kind: "website",
    category: "Natural stevia · Punjab · site",
    year: "2025",
    createdAt: "2025-06-08",
    blurb: "Clean e-commerce storytelling — product purity, fast pages, and trust at first scroll.",
    bullets: [
      "Product-led homepage with ingredient transparency",
      "Mobile-first checkout tuned for regional payment habits",
      "Editorial blocks for recipes and farmer spotlights",
    ],
    images: projectImages("rooherb", 4),
    gradient: "from-[#f4fdf8] via-[#e8f8ef] to-[#dcefe4]",
  },
  {
    slug: "jp-parts",
    name: "JP Parts Intl",
    kind: "website",
    category: "International car parts · B2B",
    year: "2026",
    createdAt: "2026-02-04",
    blurb: "Global catalogue, shipping calculator, and B2B flow — from cluttered to export-ready.",
    bullets: [
      "Dense catalogue with faceted search and OEM cross-refs",
      "Quote and freight flows for importers and workshops",
      "Trust layer: certifications, warranties, and lead times up front",
    ],
    images: projectImages("jp-parts", 1),
    gradient: "from-[#f8f8f6] via-[#efeeea] to-[#e5e4df]",
  },
  {
    slug: "punjabi-tadka",
    name: "Punjabi Tadka",
    kind: "website",
    category: "Restaurant · authentic Indian",
    year: "2025",
    createdAt: "2025-07-20",
    blurb: "Warm identity, menu, booking, and delivery — like walking in before you arrive.",
    bullets: [
      "Menu UX with spice levels, dietary tags, and combos",
      "Reservations and third-party delivery surfaced clearly",
      "Photography-led hero that mirrors the dining room energy",
    ],
    images: projectImages("punjabi-tadka", 2),
    gradient: "from-[#fff8f2] via-[#fdf0e6] to-[#f5e8dc]",
  },
  {
    slug: "agent-forge-sales",
    name: "AgentForge Sales",
    kind: "website",
    category: "B2B SaaS · sales intelligence",
    year: "2025",
    createdAt: "2025-09-02",
    blurb: "Complex data made approachable — landing pages, product UI, and a sharp LinkedIn launch.",
    bullets: [
      "Narrative arc from problem → proof → pilot signup",
      "UI patterns for dense charts without cognitive overload",
      "Launch kit: social templates and one-pager PDFs",
    ],
    images: projectImages("agent-forge-sales", 2),
    gradient: "from-[#f4f6ff] via-[#e8ecfb] to-[#dde3f5]",
  },
  {
    slug: "optima-cv",
    name: "Optima CV",
    kind: "website",
    category: "SaaS · AI CV builder",
    year: "2025",
    createdAt: "2025-10-28",
    blurb: "Premium identity and conversion-led marketing for a tool that helps people put their best foot forward.",
    bullets: [
      "Pricing and tier comparison tuned for hesitant subscribers",
      "Before/after CV stories as scrollable proof",
      "Accessibility pass on forms, contrast, and keyboard paths",
    ],
    images: projectImages("optima-cv", 3),
    gradient: "from-[#f5f9ff] via-[#eaf0fb] to-[#dfe8f6]",
  },
];

/** All cases, oldest → newest by `createdAt`. */
export const showcaseProjects = [...showcaseProjectsSource].sort(sortByCreatedAt);

export const brandingProjects = showcaseProjectsSource
  .filter((p) => p.kind === "branding")
  .sort(sortWithFeaturedFirst(BRANDING_STREAM_FIRST));

export const websiteProjects = showcaseProjectsSource
  .filter((p) => p.kind === "website")
  .sort(sortWithFeaturedFirst(WEBSITE_STREAM_FIRST));

/** Legacy shape — kept for any old imports. Prefer `showcaseProjects`. */
export type ProjectCategory = "Branding" | "Website" | "Campaign";

export type Project = {
  name: string;
  category: ProjectCategory;
  year: string;
  gradient: string;
};

export const projects: Project[] = showcaseProjects.map((p) => ({
  name: p.name,
  category: p.kind === "branding" ? "Branding" : "Website",
  year: p.year,
  gradient: p.gradient,
}));

export type Service = {
  title: string;
  description: string;
  icon: "orbit" | "spark" | "layers" | "signal";
};

export const services: Service[] = [
  {
    title: "Branding",
    description: "Positioning, visual identity, and guidelines you can ship with confidence.",
    icon: "orbit",
  },
  {
    title: "Websites",
    description: "Fast, accessible builds — from landing pages to full marketing sites.",
    icon: "layers",
  },
  {
    title: "Marketing campaigns",
    description: "Launch creative, social, and storytelling that feels human, not loud.",
    icon: "signal",
  },
];

export const clientNames = [
  "Stellar",
  "Ion",
  "Vertex",
  "Pulse",
  "Arc",
  "Helio",
  "Nova",
  "Cipher",
  "Prism",
  "Quasar",
];
