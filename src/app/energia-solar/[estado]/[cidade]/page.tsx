import { Metadata } from 'next';
import { redirect } from 'next/navigation'
import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import SectionValeAPena from "@/components/EnergiaEmCidade/SectionValeAPena";
import FranqueadoeEmCidade from "@/components/EnergiaEmCidade/FranqueadoeEmCidade";
import SectionSolEmCidade from "@/components/EnergiaEmCidade/SectionSolEmCidade";
import { formatCityName } from "@/utils/formatCityName";
import { slugify } from "@/utils/slugify";
import dataCidades from "../../../../../public/assets/json/dadosCidades.json";

interface RouteParams {
  params: {
    cidade: string;
    estado: string;
  }
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  return {
    title: `Energia Solar em ${getCurrentCityData(params)?.cidade} - ${params.estado.toUpperCase()}`,
  }
}

function getCurrentCityData(params:any) {
  return dataCidades.find(item => {
    return slugify(item.cidade) == params.cidade.toLowerCase()
  })
}

export default async function EnergiaEmCidade({ params } : RouteParams) {
  
  const currentCityData = getCurrentCityData(params)
  
  if(currentCityData?.uf.toLowerCase() != params.estado.toLowerCase()) {
    redirect('/')
  }

  return (
    <>
        <main className="relative">
        <Header />
        <Hero contentType='energia-em-cidade' city={currentCityData?.cidade || 'sua cidade'} />
        <SectionValeAPena cityData={currentCityData} />
        <SectionSolEmCidade cityData={currentCityData} />
        <FranqueadoeEmCidade city={formatCityName(params.cidade)} />
        <SectionMap />
      </main>
      <SmoothScroll />
    </>
  );
}
