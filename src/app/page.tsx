import AppleCardsCarouselDemo from "@/components/AppleCardsCarouselDemo";
import { HeroSectionOne } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <main>
      <HeroSectionOne />
      <ServicesSection />
      {/* <WorkSection /> */}
      <AppleCardsCarouselDemo />
    </main>
  );
}
