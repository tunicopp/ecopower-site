import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import circle from "../../../../public/assets/images/carreiras/circles.svg";
import greatPlace from "../../../../public/assets/images/carreiras/great-place-to-work.svg";
import AutoCarrousel from "@/components/global/AutoCarrousel";

const SectionOurTeam: React.FC = () => {
  return (
    <section className="relative pb-[184px] overflow-hidden">
      <GridContainer className="flex-col items-center relative z-10">
        <TitleComponent className="text-black leading-none text-center max-w-[650px]">
          Um time feito de pessoas que sonham alto
        </TitleComponent>
        <h3 className="text-black text-xl leading-none text-center mt-6">
          Do atendimento à instalação, contamos com profissionais extremamente
          capacitados.
        </h3>
      </GridContainer>

      <div className="relative flex w-full mt-[54px] z-10">
        <AutoCarrousel />
      </div>

      <GridContainer className="flex-center lg:mt-[120px] mt-12">
        <Image
          src={circle}
          alt="Círculo"
          width={1126}
          height={1126}
          className="absolute left-[50%] -translate-x-2/4 md:min-w-[1126px] min-w-[850px]"
        />
        <div className="flex md:flex-row flex-col items-center relative gap-8 lg:pl-[56px] md:pl-[40px]">
          <span className="lg:text-5xl text-4xl font-bold">#Somos</span>
          <Image
            src={greatPlace}
            width={140}
            height={238}
            alt="Certificado Great Place to Work"
          />
          <span className="lg:text-5xl text-4xl font-bold">EcoPower</span>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionOurTeam;
