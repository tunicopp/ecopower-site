import Header from "@/components/global/Header";
import SectionHero from "@/components/units/SectionHero/SectionHero";
import SectionInteractiveMap from "@/components/units/SectionInteractiveMap/SectionInteractiveMap";
import SectionStateAccordion from "@/components/units/SectionStateAccordion/SectionStateAccordion";

export default async function Units() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionInteractiveMap />
      <SectionStateAccordion />
    </main>
  );
}
