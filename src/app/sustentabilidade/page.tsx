import Header from "@/components/global/Header";
import SectionArt from "@/components/sustentabilidade/SectionArt/SectionArt";
import SectionEthicConduct from "@/components/sustentabilidade/SectionEthicConduct/SectionEthicConduct";
import SectionFutureEco from "@/components/sustentabilidade/SectionFutureEco/SectionFutureEco";
import SectionHero from "@/components/sustentabilidade/SectionHero/SectionHero";
import SectionMaterial from "@/components/sustentabilidade/SectionMaterial/SectionMaterial";
import SectionPact from "@/components/sustentabilidade/SectionPact/SectionPact";
import SectionReverseLogic from "@/components/sustentabilidade/SectionReverseLogic/SectionReverseLogic";

export default async function Sustainability() {
  return (
    <>
      <main className="relative">
        <Header />
        <SectionHero />
        <SectionFutureEco />
        <SectionArt />
        <SectionMaterial />
        <SectionPact />
        <SectionEthicConduct />
        <SectionReverseLogic />
      </main>
      <div id="calc"></div>
    </>
  );
}
