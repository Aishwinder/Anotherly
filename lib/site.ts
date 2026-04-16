/** Selected work — assets live in `public/assets/projects/<slug>/` (numbered 01.png, 02.png, …). */

export type ProjectKind = "branding" | "website";

export type ProjectShowcase = {
  slug: string;
  name: string;
  kind: ProjectKind;
  /** Short line for the meta column (discipline / context). */
  category: string;
  year: string;
  blurb: string;
  images: string[];
  gradient: string;
};

/** Build image paths — all files use `.png` after sync from `Assets/Project images`. */
export function projectImages(slug: string, count: number): string[] {
  return Array.from(
    { length: count },
    (_, i) => `/assets/projects/${slug}/${String(i + 1).padStart(2, "0")}.png`,
  );
}

export const showcaseProjects: ProjectShowcase[] = [
  {
    slug: "luis-borges",
    name: "Luis Borges",
    kind: "branding",
    category: "Restaurant · Portugal",
    year: "2025",
    blurb: "Portuguese dining, distilled — warm typography, tile-inspired motifs, and a mark that feels like the room.",
    images: projectImages("luis-borges", 5),
    gradient: "from-[#fff9f4] via-[#fdf2e8] to-[#f0e6dc]",
  },
  {
    slug: "sector-span",
    name: "Sector Span",
    kind: "branding",
    category: "Mechanical engineering · consulting",
    year: "2025",
    blurb: "Precision engineering meets approachable expertise — identity that reads credible on bids and LinkedIn.",
    images: projectImages("sector-span", 11),
    gradient: "from-[#f4f7fb] via-[#e9eef5] to-[#dde5ef]",
  },
  {
    slug: "rooherb-brand",
    name: "RooHerb",
    kind: "branding",
    category: "Natural stevia · identity system",
    year: "2025",
    blurb: "Full brand system — packaging, palette, and print-ready assets for a calm, premium natural line.",
    images: projectImages("rooherb-brand", 10),
    gradient: "from-[#f4fdf8] via-[#e8f8ef] to-[#dcefe4]",
  },
  {
    slug: "rooherb",
    name: "RooHerb",
    kind: "website",
    category: "Natural stevia · Punjab · site",
    year: "2025",
    blurb: "Clean e-commerce storytelling — product purity, fast pages, and trust at first scroll.",
    images: projectImages("rooherb", 1),
    gradient: "from-[#f4fdf8] via-[#e8f8ef] to-[#dcefe4]",
  },
  {
    slug: "jp-parts",
    name: "JP Parts Intl",
    kind: "website",
    category: "International car parts · B2B",
    year: "2026",
    blurb: "Global catalogue, shipping calculator, and B2B flow — from cluttered to export-ready.",
    images: projectImages("jp-parts", 1),
    gradient: "from-[#f8f8f6] via-[#efeeea] to-[#e5e4df]",
  },
  {
    slug: "punjabi-tadka",
    name: "Punjabi Tadka",
    kind: "website",
    category: "Restaurant · authentic Indian",
    year: "2025",
    blurb: "Warm identity, menu, booking, and delivery — like walking in before you arrive.",
    images: projectImages("punjabi-tadka", 2),
    gradient: "from-[#fff8f2] via-[#fdf0e6] to-[#f5e8dc]",
  },
  {
    slug: "agent-forge-sales",
    name: "AgentForge Sales",
    kind: "website",
    category: "B2B SaaS · sales intelligence",
    year: "2025",
    blurb: "Complex data made approachable — landing pages, product UI, and a sharp LinkedIn launch.",
    images: projectImages("agent-forge-sales", 2),
    gradient: "from-[#f4f6ff] via-[#e8ecfb] to-[#dde3f5]",
  },
  {
    slug: "optima-cv",
    name: "Optima CV",
    kind: "website",
    category: "SaaS · AI CV builder",
    year: "2025",
    blurb: "Premium identity and conversion-led marketing for a tool that helps people put their best foot forward.",
    images: projectImages("optima-cv", 3),
    gradient: "from-[#f5f9ff] via-[#eaf0fb] to-[#dfe8f6]",
  },
];

export const brandingProjects = showcaseProjects.filter((p) => p.kind === "branding");
export const websiteProjects = showcaseProjects.filter((p) => p.kind === "website");

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
