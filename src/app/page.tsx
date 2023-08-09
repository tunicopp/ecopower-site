import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "../components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";
import BlogSection from "@/components/blog-section/BlogSection";
import SectionCampaings from "@/components/SectionCampaings/SectionCampaings";
import SectionVideo from "@/components/SectionVideo/SectionVideo";
import SectionActiveCampaigns from "@/components/SectionActiveCampaigns/SectionActiveCampaigns";
import SectionSolutions from "@/components/SectionSolutions/SectionSolutions";
import SectionProject from "@/components/SectionProjects/SectionProject";

export default async function Home() {
  return (
    <main>
      <Hero />
      <SectionSlide />
      <SectionMap />
      <BlogSection />
      <SectionVideo />
      <SectionCampaings />
      <SectionActiveCampaigns />
      <SectionSolutions />
      <SectionProject />
    </main>
  );
}
