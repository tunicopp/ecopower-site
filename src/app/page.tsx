import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "../components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";
import BlogSection from "@/components/blog-section/BlogSection";
import SectionCampaings from "@/components/SectionCampaings/SectionCampaings";

export default async function Home() {
  return (
    <main>
      <Hero />
      <SectionSlide />
      <SectionMap />
      <SectionCampaings />
      <BlogSection />
    </main>
  );
}
