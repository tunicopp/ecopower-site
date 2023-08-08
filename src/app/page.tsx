import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "../components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";
import SectionVideo from "@/components/SectionVideo/SectionVideo";
import SectionActiveCampaigns from "@/components/SectionActiveCampaigns/SectionActiveCampaigns";
import SectionSolutions from "@/components/SectionSolutions/SectionSolutions";
import SectionProject from "@/components/SectionProjects/SectionProject";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionSlide />
      <SectionMap />
      <SectionVideo />
      <SectionActiveCampaigns />
      <SectionSolutions />
      <SectionProject />
    </main>
  );
}
