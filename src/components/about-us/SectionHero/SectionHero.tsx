import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import hero from "../../../../public/assets/images/about-us/hero/about-us-hero.png";
import TitleComponent from "@/components/global/TitleComponent";
import WatchVideoButton from "./WatchVideoButton";

const SectionHero: React.FC = () => {
  return (
    <section className="relative min-h-[635px]">
      <Image
        src={hero}
        alt="Hero Banner"
        priority
        quality={100}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <GridContainer className="relative flex-col h-full items-center justify-center pt-[188px]">
        <span className="text-white text-base font-semibold px-3 bg-primary-green rounded-full">
          Somos EcoPower
        </span>
        <TitleComponent className="text-center text-white mt-6 mb-[118px]">
          Há 10 anos gerando economia e avanço sustentável em todo o Brasil
        </TitleComponent>
        <WatchVideoButton />
      </GridContainer>
    </section>
  );
};

export default SectionHero;
