import Header from "@/components/global/Header";
import SectionHero from "@/components/unidades/SectionHero/SectionHero";
import SectionInteractiveMap from "@/components/unidades/SectionInteractiveMap/SectionInteractiveMap";
import SectionStateAccordion from "@/components/unidades/SectionStateAccordion/SectionStateAccordion";

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
