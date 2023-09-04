import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import React from "react";
import Image from "next/image";
import bg from "../../../../public/assets/images/about-us/our-structure/our-structure-bg.png";

const SectionOurStructure: React.FC = () => {
  return (
    <section className="relative lg:pt-[215px] md:pt-[127px] pt-6 pb-[110px] overflow-hidden bg-beige-300">
      <Image
        src={bg}
        alt="Nossa Estrutura"
        className="absolute top-0 left-0 lg:h-auto lg:w-auto w-full md:h-[303px] object-cover"
      />
      <GridContainer className="flex-col relative items-center">
        <TitleComponent className="text-white">Nossa estrutura</TitleComponent>
        <h3 className="mt-3 text-white">
          Uma trajetória de inovação em energia solar fotovoltaica.
        </h3>

        <div className="grid md:grid-cols-5 auto-rows-fr lg:h-[200px] md:h-[77px] bg-white rounded-2xl w-full lg:mt-[174px] mt-16">
          <div className="lg:p-6 p-4 rounded-l-2xl border-r border-[#000] border-opacity-[0.07] bg-white flex-center flex-col gap-2">
            <b className="lg:text-[40px]">+420</b>
            <span className="lg:text-base text-xs text-center">
              Colaboradores CLT
            </span>
          </div>
          <div className="lg:p-6 p-4 border-r border-[#000] border-opacity-[0.07] bg-white flex-center flex-col gap-2">
            <b className="lg:text-[40px]">+200</b>
            <span className="lg:text-base text-xs text-center">
              Veículos próprios
            </span>
          </div>
          <div className="lg:p-6 p-4 border-r border-[#000] border-opacity-[0.07] bg-white flex-center flex-col gap-2">
            <b className="lg:text-[40px]">30 mil</b>
            <span className="lg:text-base text-xs text-center">
              Projetos instalados
            </span>
          </div>
          <div className="lg:p-6 p-4 border-r border-[#000] border-opacity-[0.07] bg-white flex-center flex-col gap-2">
            <b className="lg:text-[40px]">+300</b>
            <span className="lg:text-base text-xs text-center">Franquias</span>
          </div>
          <div className="lg:p-6 p-4 rounded-r-2xl bg-white flex-center flex-col gap-2">
            <b className="lg:text-[40px]">26</b>
            <span className="lg:text-base text-xs text-center">
              Estados de Atuação + DF
            </span>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionOurStructure;
