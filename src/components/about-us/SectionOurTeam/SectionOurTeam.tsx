"use client";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import circle from "../../../../public/assets/images/careers/circles.svg";
import greatPlace from "../../../../public/assets/images/careers/great-place-to-work.svg";
import teamEight from "../../../../public/assets/images/careers/team-eight.png";
import teamEleven from "../../../../public/assets/images/careers/team-eleven.png";
import teamFifteen from "../../../../public/assets/images/careers/team-fifteen.png";
import teamFive from "../../../../public/assets/images/careers/team-five.png";
import teamFour from "../../../../public/assets/images/careers/team-four.png";
import teamFourteen from "../../../../public/assets/images/careers/team-fourteen.png";
import teamNine from "../../../../public/assets/images/careers/team-nine.png";
import teamOne from "../../../../public/assets/images/careers/team-one.png";
import teamSeven from "../../../../public/assets/images/careers/team-seven.png";
import teamSeventeen from "../../../../public/assets/images/careers/team-seventeen.png";
import teamSix from "../../../../public/assets/images/careers/team-six.png";
import teamSixteen from "../../../../public/assets/images/careers/team-sixteen.png";
import teamTen from "../../../../public/assets/images/careers/team-ten.png";
import teamThirteen from "../../../../public/assets/images/careers/team-thirteen.png";
import teamThree from "../../../../public/assets/images/careers/team-three.png";
import teamTwelve from "../../../../public/assets/images/careers/team-twelve.png";
import teamTwo from "../../../../public/assets/images/careers/team-two.png";

const SectionOurTeam: React.FC = () => {
  const team = [
    teamOne,
    teamTwo,
    teamThree,
    teamFour,
    teamFive,
    teamSix,
    teamSeven,
    teamEight,
    teamNine,
    teamTen,
    teamEleven,
    teamTwelve,
    teamThirteen,
    teamFourteen,
    teamFifteen,
    teamSixteen,
    teamSeventeen,
  ];

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

      <div className="relative flex w-full mt-[54px]">
        <Swiper
          slidesPerView={4.5}
          spaceBetween={24}
          className="w-full !px-6 lg:!px-[110px]"
          direction="horizontal"
          draggable
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {team.map((c, i) => (
            <SwiperSlide key={i} className="even:mt-[136px] odd:mb-[136px]">
              <Image src={c} alt="Nosso time" quality={100} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <GridContainer className="flex-center lg:mt-[16px] mt-12">
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
