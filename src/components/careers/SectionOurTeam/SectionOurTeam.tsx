"use client";
import GridContainer from "@/components/global/GridContainer";
import Reveal from "@/components/global/Reveal";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import circle from "../../../../public/assets/images/careers/circles.svg";

import teamOne from "../../../../public/assets/images/careers/team-one.png";
import teamTwo from "../../../../public/assets/images/careers/team-two.png";
import teamThree from "../../../../public/assets/images/careers/team-three.png";
import teamFour from "../../../../public/assets/images/careers/team-four.png";
import teamFive from "../../../../public/assets/images/careers/team-five.png";
import teamSix from "../../../../public/assets/images/careers/team-six.png";
import teamSeven from "../../../../public/assets/images/careers/team-seven.png";
import teamEight from "../../../../public/assets/images/careers/team-eight.png";
import teamNine from "../../../../public/assets/images/careers/team-nine.png";
import teamTen from "../../../../public/assets/images/careers/team-ten.png";
import teamEleven from "../../../../public/assets/images/careers/team-eleven.png";
import teamTwelve from "../../../../public/assets/images/careers/team-twelve.png";
import teamThirteen from "../../../../public/assets/images/careers/team-thirteen.png";
import teamFourteen from "../../../../public/assets/images/careers/team-fourteen.png";
import teamFifteen from "../../../../public/assets/images/careers/team-fifteen.png";
import teamSixteen from "../../../../public/assets/images/careers/team-sixteen.png";
import teamSeventeen from "../../../../public/assets/images/careers/team-seventeen.png";

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
              <Image
                src={c}
                alt="Nosso time"
                quality={100}
                // className="team-grid-item"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SectionOurTeam;
