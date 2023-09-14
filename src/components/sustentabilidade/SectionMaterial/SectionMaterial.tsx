import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import ourMaterial from "../../../../public/assets/images/sustentabilidade/our-materials.png";
import { MdPlayCircle } from "react-icons/md";
import cleanEnergy from "../../../../public/assets/images/sustentabilidade/clean-energy.svg";
import climateChange from "../../../../public/assets/images/sustentabilidade/climate-change.svg";
import healthWellBeing from "../../../../public/assets/images/sustentabilidade/health-well-being.svg";
import qualityEducation from "../../../../public/assets/images/sustentabilidade/quality-education.svg";

const SectionMaterial: React.FC = () => {
  return (
    <section className="bg-beige-300 py-[80px]">
      <GridContainer className="flex-col gap-2 items-center">
        <TitleComponent>Nossos temas materiais</TitleComponent>
        <p className="text-lg max-w-[810px] text-center">
          Os Objetivos de Desenvolvimento Sustentável (ODS) também integram as
          estratégias ESG da EcoPower. Eles definem as prioridades e aspirações
          de desenvolvimento sustentável global para 2030 e buscam mobilizar os
          esforços mundiais ao redor de uma série comum de objetivos e metas.
        </p>
      </GridContainer>
      <GridContainer className="lg:flex-row flex-col items-center gap-6 mt-[70px]">
        <div className="flex flex-1 flex-col gap-4">
          <p className="text-lg">
            As ações do Programa Socioambiental da EcoPower são executadas com o
            compromisso de contribuir para o desenvolvimento sustentável e
            atingimento das metas globais de sustentabilidade.
          </p>
          <p className="text-lg">
            Sua principal frente de atuação consiste na doação de sistema
            fotovoltaico em benefício à organizações sociais e famílias
            carentes. Os materiais que compõem o sistema doado são
            reaproveitados e não mais destinados ao descarte. Além da redução do
            impacto ambiental, a ação também possibilita a redução do consumo de
            energia dos beneficiados, gerando economia financeira.
          </p>
        </div>
        <div className="flex flex-1 h-[338px] relative">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/cDXtcENSjDU?si=RES5tcjUdHTEf2nD"
            title="YouTube video player"
            allowFullScreen
            ></iframe>
        </div>
      </GridContainer>
      <GridContainer className="pt-[80px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 w-full auto-rows-fr gap-6">
          <div className="bg-white p-6 pb-[56px] flex flex-col gap-6 justify-between rounded-2xl">
            <Image src={cleanEnergy} alt="Energia Limpa e Acessível" />
            <b className="text-2xl">Energia Renovável ODS 09</b>
          </div>
          <div className="bg-white p-6 pb-[56px] flex flex-col gap-6 justify-between rounded-2xl">
            <Image
              src={climateChange}
              alt="Ação contra a mudança global do clima"
            />
            <b className="text-2xl">
              Redução das Emissões de Gases de Efeito Estufa ODS 13
            </b>
          </div>
          <div className="bg-white p-6 pb-[56px] flex flex-col gap-6 justify-between rounded-2xl">
            <Image src={healthWellBeing} alt="Saúde e Bem-Estar" />
            <b className="text-2xl">Desenvolvimento ODS 04</b>
          </div>
          <div className="bg-white p-6 pb-[56px] flex flex-col gap-6 justify-between rounded-2xl">
            <Image src={qualityEducation} alt="Educação de Qualidade" />
            <b className="text-2xl">Energia Renovável ODS 09</b>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionMaterial;
