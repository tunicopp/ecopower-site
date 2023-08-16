import React from "react";
import hero from "../../../../public/assets/images/careers/careers-hero.png";
import Image from "next/image";
import GridContainer from "@/components/global/GridContainer";

const SectionHero: React.FC = () => {
  return (
    <section className="relative min-h-[580px]">
      <Image
        src={hero}
        alt="Carreiras Eco Power"
        priority
        quality={100}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <GridContainer className="relative flex-col items-center justify-center pt-[210px]">
        <h2 className="max-w-[550px] text-center text-white text-[56px] leading-[64px] font-semibold">
          Somos Ecopower. Somos a maior!
        </h2>
        <h3 className="mt-3 text-xl leading-none text-white">
          Do atendimento à instalação, contamos com profissionais extremamente
          capacitados.
        </h3>
      </GridContainer>
    </section>
  );
};

export default SectionHero;
