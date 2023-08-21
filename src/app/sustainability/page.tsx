import Header from "@/components/global/Header";
import SectionArt from "@/components/sustainability/SectionArt/SectionArt";
import SectionEthicConduct from "@/components/sustainability/SectionEthicConduct/SectionEthicConduct";
import SectionFutureEco from "@/components/sustainability/SectionFutureEco/SectionFutureEco";
import SectionHero from "@/components/sustainability/SectionHero/SectionHero";
import SectionReverseLogic from "@/components/sustainability/SectionReverseLogic/SectionReverseLogic";

export default async function Sustainability() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionFutureEco />
      <SectionArt />
      <SectionReverseLogic />
      <SectionEthicConduct />
    </main>
  );
}
