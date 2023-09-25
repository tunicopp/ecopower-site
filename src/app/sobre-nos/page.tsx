import SectionEvents from "@/components/sobre-nos/SectionEvents/SectionEvents";
import SectionHero from "@/components/sobre-nos/SectionHero/SectionHero";
import SectionJourney from "@/components/sobre-nos/SectionJourney/SectionJourney";
import SectionOurHistory from "@/components/sobre-nos/SectionOurHistory/SectionOurHistory";
import SectionOurStructure from "@/components/sobre-nos/SectionOurStructure/SectionOurStructure";
import SectionOurTeam from "@/components/sobre-nos/SectionOurTeam/SectionOurTeam";
import SectionPartners from "@/components/sobre-nos/SectionPartners/SectionPartners";
import SectionWeAre from "@/components/sobre-nos/SectionWeAre/SectionWeAre";
import SectionOurValues from "@/components/carreiras/SectionOurValues/SectionOurValues";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";

export default async function AboutUs() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionOurHistory />
      <SectionWeAre />
      <SectionJourney />
      <SectionPartners />
      <SectionOurStructure />
      <SectionEvents />
      <SectionOurValues className="py-[80px]" />
      <SectionOurTeam />
      <SmoothScroll />
    </main>
  );
}
