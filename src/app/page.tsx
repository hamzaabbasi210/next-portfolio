import AppleCardsCarouselDemo from "@/components/apple-cards-carousel-demo";
import { HeroSectionOne } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <main className="">
      <HeroSectionOne />
      <ServicesSection />
      {/* <WorkSection /> */}
      <AppleCardsCarouselDemo />
    </main>
  );
}
