import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import circle from "../../../../public/assets/images/careers/circles.svg";
import teamOne from "../../../../public/assets/images/careers/team-one.svg";
import teamTwo from "../../../../public/assets/images/careers/team-two.svg";
import teamThree from "../../../../public/assets/images/careers/team-three.svg";
import teamFour from "../../../../public/assets/images/careers/team-four.svg";
import teamFive from "../../../../public/assets/images/careers/team-five.svg";
import greatPlace from "../../../../public/assets/images/careers/great-place-to-work.svg";

const SectionOurTeam: React.FC = () => {
  return (
    <section className="relative pb-[184px] overflow-hidden">
      <GridContainer className="flex-col items-center relative">
        <TitleComponent className="text-black leading-none text-center max-w-[650px]">
          Um time feito de pessoas que sonham alto
        </TitleComponent>
        <h3 className="text-black text-xl leading-none text-center mt-6">
          Do atendimento à instalação, contamos com profissionais extremamente
          capacitados.
        </h3>
      </GridContainer>
      <div className="lg:absolute relative lg:left-[50%] mt-[54px] lg:-translate-x-2/4 lg:w-[1601px] w-full grid lg:grid-cols-5 md:grid-cols-2 z-10 lg:gap-5 gap-6 justify-items-center">
        <Image
          src={teamOne}
          alt="Nosso time"
          quality={100}
          className="team-grid-item"
        />
        <Image
          src={teamTwo}
          alt="Nosso time"
          quality={100}
          className="team-grid-item"
        />
        <Image
          src={teamThree}
          alt="Nosso time"
          quality={100}
          className="team-grid-item"
        />
        <Image
          src={teamFour}
          alt="Nosso time"
          quality={100}
          className="team-grid-item"
        />
        <Image
          src={teamFive}
          alt="Nosso time"
          quality={100}
          className="team-grid-item lg:col-auto md:col-span-2 col-auto"
        />
      </div>
      <GridContainer className="flex-center lg:mt-[514px] mt-12">
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
