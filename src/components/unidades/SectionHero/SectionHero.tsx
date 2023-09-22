import Image from "next/image";
import React from "react";
import hero from "../../../../public/assets/images/unidades/units-hero.png";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import SearchInput from "../SearchInput/SearchInput";

const SectionHero: React.FC = () => {
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
          Unidades
        </TitleComponent>
        <h3 className="text-white text-xl">
          Confira aqui onde encontrar a franquia da EcoPower mais próxima de você.
        </h3>
      </GridContainer>
      <SearchInput />
    </section>
  );
};

export default SectionHero;
