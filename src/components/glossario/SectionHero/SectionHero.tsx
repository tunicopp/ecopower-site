import Image from "next/image";
import React from "react";
import hero from "../../../../public/assets/images/unidades/units-hero.png";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import SearchInput from "../SearchInput/SearchInput";

interface ISectionHero {
  glossaryItem?: string;
}

const SectionHero: React.FC<ISectionHero> = ({ glossaryItem = false }) => {
  return (
    <section className="relative min-h-[520px] overflow-visible z-10">
      <Image
        src={hero}
        alt="Hero Banner"
        priority
        quality={100}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <GridContainer className="relative flex-col gap-3 h-full items-center justify-center pt-[210px]">
        <TitleComponent className="text-center text-white">
          {glossaryItem ? "Termo do Glossário" : "Glossário"}
        </TitleComponent>
        {glossaryItem ? (
          <div className="bg-white px-6 py-3 rounded-3xl mt-8 text-grayscale-400">
            {glossaryItem}
          </div>
        ) : (
          <h3 className="text-white text-center text-base max-w-[528px]">
            Com esse glossário de produto você poderá saber o significado dos
            termos mais falados, entender mais sobre várias métricas diferentes
            e, inclusive, conhecer mais sobre alguns termos técnicos.
          </h3>
        )}
      </GridContainer>
      {!glossaryItem && <SearchInput />}
    </section>
  );
};

export default SectionHero;
