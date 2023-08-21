import SectionEvents from "@/components/about-us/SectionEvents/SectionEvents";
import SectionHero from "@/components/about-us/SectionHero/SectionHero";
import SectionJourney from "@/components/about-us/SectionJourney/SectionJourney";
import SectionOurHistory from "@/components/about-us/SectionOurHistory/SectionOurHistory";
import SectionOurStructure from "@/components/about-us/SectionOurStructure/SectionOurStructure";
import SectionOurTeam from "@/components/about-us/SectionOurTeam/SectionOurTeam";
import SectionPartners from "@/components/about-us/SectionPartners/SectionPartners";
import SectionWeAre from "@/components/about-us/SectionWeAre/SectionWeAre";
import SectionOurValues from "@/components/careers/SectionOurValues/SectionOurValues";
import Header from "@/components/global/Header";

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
    </main>
  );
}
