/** Services carousel — images in branding-folder order then website-folder order; each project's files 1.png…N.png */
import { brandingProjects, websiteProjects } from "@/lib/site";

export type ServiceShowcaseSlide = {
  src: string;
  alt: string;
};

export const serviceShowcaseSlides: readonly ServiceShowcaseSlide[] = [...brandingProjects, ...websiteProjects].flatMap(
  (p) =>
    p.images.map((src, idx) => ({
      src,
      alt: `${p.name} · ${idx + 1}`,
    })),
);
