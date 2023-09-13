import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "../components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";
import BlogSection from "@/components/blog-section/BlogSection";
import SectionCampaings from "@/components/SectionCampaings/SectionCampaings";
import SectionVideo from "@/components/SectionVideo/SectionVideo";
import SectionSolutions from "@/components/SectionSolutions/SectionSolutions";
import SectionProject from "@/components/SectionProjects/SectionProject";
import SectionTestimonial from "@/components/SectionTestimonial/SectionTestimonial";
import SectionFAQ from "@/components/SectionFAQ/SectionFAQ";
import Header from "@/components/global/Header";

export default async function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <SectionSlide />
      <SectionMap />
      <SectionVideo />
      <SectionCampaings />
      <SectionSolutions />
      <SectionProject />
      <SectionTestimonial />
      <BlogSection />
      <SectionFAQ />
    </main>
  );
}
