import Image from "next/image";
import React from "react";
import hero from "../../../../public/assets/images/sustentabilidade/sustainability-hero.png";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";

const SectionHero: React.FC = () => {
  return (
    <section className="relative min-h-[484px] pt-[210px]">
      <Image
        src={hero}
        alt="Hero Banner"
        priority
        quality={100}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <GridContainer className="relative flex-col items-center justify-center">
        <TitleComponent className="text-white">ESG e Sustentabilidade</TitleComponent>
      </GridContainer>
    </section>
  );
};

export default SectionHero;
