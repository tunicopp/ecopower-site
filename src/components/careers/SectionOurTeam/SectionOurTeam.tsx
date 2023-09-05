import GridContainer from "@/components/global/GridContainer";
import Reveal from "@/components/global/Reveal";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import "swiper/css";
import circle from "../../../../public/assets/images/careers/circles.svg";
import AutoCarrousel from "@/components/global/AutoCarrousel";

const SectionOurTeam: React.FC = () => {
  return (
    <section className="relative lg:pt-[450px] md:pt-[400px] pt-[200px] lg:pb-[109px] pb-[80px] overflow-hidden">
      <Image
        src={circle}
        alt="Círculo"
        quality={100}
        className="absolute right-0 left-0 mx-auto lg:-top-[43%] md:-top-[20%] -top-[10%]"
      />
      <GridContainer className="flex-col items-center relative">
        <Reveal>
          <TitleComponent className="text-black leading-none text-center max-w-[650px]">
            Um time feito de pessoas que sonham alto
          </TitleComponent>
        </Reveal>
        <Reveal className="mt-6" delay={0.4}>
          <h3 className="text-black text-xl leading-none text-center">
            Do atendimento à instalação, contamos com profissionais extremamente
            capacitados.
          </h3>
        </Reveal>
      </GridContainer>
      <div className="relative flex w-full mt-[54px]">
        <AutoCarrousel />
      </div>
    </section>
  );
};

export default SectionOurTeam;
