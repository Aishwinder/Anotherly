import { JellyGlassSlab } from "@/components/jelly/JellyGlassSlab";
import { HomePageSections } from "@/components/jelly/HomePageSections";
import { JellyHeroHome } from "@/components/jelly/JellyHeroHome";

export default function HomePage() {
  return (
    <div className="jelly-page-pad jelly-page-pad--home-hero-ref flex flex-col gap-4 pb-6 sm:gap-6 sm:pb-8">
      <JellyGlassSlab tone="hero" padded className="jelly-glass-slab--home-hero-ref jelly-glass-slab--hero-overflow relative overflow-visible">
        <JellyHeroHome />
      </JellyGlassSlab>
      <HomePageSections />
    </div>
  );
}
