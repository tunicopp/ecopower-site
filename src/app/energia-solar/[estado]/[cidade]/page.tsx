import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "@/components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";
import BlogSection from "@/components/blog-section/BlogSection";
import SectionCampaings from "@/components/SectionCampaings/SectionCampaings";
import SectionVideo from "@/components/SectionVideo/SectionVideo";
import SectionSolutions from "@/components/SectionSolutions/SectionSolutions";
import SectionProject from "@/components/SectionProjects/SectionProject";
import SectionTestimonial from "@/components/SectionTestimonial/SectionTestimonial";
import SectionFAQ from "@/components/SectionFAQ/SectionFAQ";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";

interface RouteParams {
  params: {
    cidade: string;
    estado: string;
  }
}

export default async function Home({ params } : RouteParams) {
  console.log(`params`, params)
  return (
    <>
      <main className="relative">
        {/* <Header /> */}
        Energia Solar em {params.cidade ? params.cidade.charAt(0).toUpperCase() + params.cidade.slice(1) : ''}
        {/* <Hero />
        <SectionSlide />
        <SectionMap />
        <SectionVideo />
        <SectionCampaings /> */}
        {/*<SectionSolutions />*/}
        <SectionProject />
        <SectionTestimonial />
        <BlogSection />
        <SectionFAQ />
      </main>
      <SmoothScroll />
    </>
  );
}
