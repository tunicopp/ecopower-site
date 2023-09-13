import React from "react";
import Image from "next/image";
import GridContainer from "@/components/global/GridContainer";
import hero from "../../../../public/assets/images/carreiras/careers-hero.png";
import greatPlace from "../../../../public/assets/images/carreiras/great-place-to-work.svg";

const SectionHero: React.FC = () => {
  return (
    <section className="relative min-h-[580px] z-10">
      <Image
        src={hero}
        alt="Carreiras Eco Power"
        priority
        quality={100}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src={greatPlace}
        alt="Great Place To Work"
        quality={100}
        className="absolute right-0 left-0 -bottom-[140px] mx-auto"
      />
      <GridContainer className="relative flex-col items-center justify-center md:pt-[210px] pt-[110px]">
        <h2 className="max-w-[550px] text-center text-white text-[56px] leading-[64px] font-semibold">
          Somos Ecopower. Somos a maior!
        </h2>
        <h3 className="mt-3 text-xl leading-none text-white text-center">
          Do atendimento à instalação, contamos com profissionais extremamente
          capacitados.
        </h3>
      </GridContainer>
    </section>
  );
};

export default SectionHero;