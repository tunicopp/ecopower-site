import SectionHero from "@/components/about-us/SectionHero/SectionHero";
import SectionOurHistory from "@/components/about-us/SectionOurHistory/SectionOurHistory";
import SectionWeAre from "@/components/about-us/SectionWeAre/SectionWeAre";
import Header from "@/components/global/Header";

export default async function AboutUs() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionOurHistory />
      <SectionWeAre />
    </main>
  );
}
