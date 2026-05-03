/** Rotating imagery for Services page — curated from project thumbnails. */

export type ServiceShowcaseSlide = {
  src: string;
  alt: string;
};

export const serviceShowcaseSlides: readonly ServiceShowcaseSlide[] = [
  { src: "/assets/projects/rooherb-brand/3.png", alt: "Brand identity and packaging direction" },
  { src: "/assets/projects/sector-span/5.png", alt: "Product marketing site layout" },
  { src: "/assets/projects/agent-forge-sales/2.png", alt: "Campaign and sales creative" },
  { src: "/assets/projects/optima-cv/2.png", alt: "SaaS interface and typography" },
  { src: "/assets/projects/luis-borges/4.png", alt: "Portfolio and editorial web design" },
  { src: "/assets/projects/rooherb/2.png", alt: "Retail brand web presence" },
] as const;
