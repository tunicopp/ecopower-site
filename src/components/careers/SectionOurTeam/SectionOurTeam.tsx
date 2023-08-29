import GridContainer from "@/components/global/GridContainer";
import Reveal from "@/components/global/Reveal";
import TitleComponent from "@/components/global/TitleComponent";
import React from "react";
import Image from "next/image";
import circle from "../../../../public/assets/images/careers/circles.svg";
import teamOne from "../../../../public/assets/images/careers/team-one.svg";
import teamTwo from "../../../../public/assets/images/careers/team-two.svg";
import teamThree from "../../../../public/assets/images/careers/team-three.svg";
import teamFour from "../../../../public/assets/images/careers/team-four.svg";
import teamFive from "../../../../public/assets/images/careers/team-five.svg";

const SectionOurTeam: React.FC = () => {
  return (
    <section className="relative lg:pt-[450px] md:pt-[400px] pt-[200px] lg:pb-[560px] pb-[80px] overflow-hidden">
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
      <div className="lg:absolute left-[50%] mt-[54px] lg:-translate-x-2/4 lg:w-[1601px] w-full grid lg:grid-cols-5 md:grid-cols-2 lg:gap-5 gap-6 justify-items-center">
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
    </section>
  );
};

export default SectionOurTeam;
