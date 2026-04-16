import { HomePageSections } from "@/components/jelly/HomePageSections";
import { JellyHeroHome } from "@/components/jelly/JellyHeroHome";

export default function HomePage() {
  return (
    <div className="jelly-page-pad">
      <JellyHeroHome />
      <HomePageSections />
    </div>
  );
}
