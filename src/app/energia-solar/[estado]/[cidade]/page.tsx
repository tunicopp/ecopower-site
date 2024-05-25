import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import SectionValeAPena from "@/components/EnergiaEmCidade/SectionValeAPena";
import FranqueadoeEmCidade from "@/components/EnergiaEmCidade/FranqueadoeEmCidade";
import SectionSolEmCidade from "@/components/EnergiaEmCidade/SectionSolEmCidade";
import { formatCityName } from "@/utils/formatCityName";
import { unslugify } from "@/utils/unslugify";
import { slugify } from "@/utils/slugify";
import dataCidades from "../../../../../public/assets/json/dadosCidades.json";
import CityDataInterface from "@/@types/app/city-data.app.interface";

interface RouteParams {
  params: {
    cidade: string;
    estado: string;
  }
}

export default async function EnergiaEmCidade({ params } : RouteParams) {
  
  const currentCityData = dataCidades.find(item => {
    return slugify(item.cidade) == params.cidade.toLowerCase()
  })
  
  // console.log(`currentCityData`, currentCityData)

  return (
    <>
      <main className="relative">
        <Header />
        <Hero contentType='energia-em-cidade' city={currentCityData?.cidade || 'sua cidade'} />
        <SectionValeAPena cityData={currentCityData} />
        <SectionSolEmCidade city={formatCityName(params.cidade)} />
        <FranqueadoeEmCidade city={formatCityName(params.cidade)} />
        <SectionMap />
      </main>
      <SmoothScroll />
    </>
  );
}
