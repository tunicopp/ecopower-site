import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import SectionValeAPena from "@/components/EnergiaEmCidade/SectionValeAPena";
import FranqueadoeEmCidade from "@/components/EnergiaEmCidade/FranqueadoeEmCidade";
import SectionSolEmCidade from "@/components/EnergiaEmCidade/SectionSolEmCidade";
import { formatCityName } from "@/utils/formatCityName";

interface RouteParams {
  params: {
    cidade: string;
    estado: string;
  }
}

export default async function EnergiaEmCidade({ params } : RouteParams) {
  console.log(`params`, params)
  return (
    <>
      <main className="relative">
        <Header />
        <Hero contentType='energia-em-cidade' city={params.cidade} />
        <SectionValeAPena city={formatCityName(params.cidade)} />
        <SectionSolEmCidade city={formatCityName(params.cidade)} />
        <FranqueadoeEmCidade city={formatCityName(params.cidade)} />
        <SectionMap />
      </main>
      <SmoothScroll />
    </>
  );
}
