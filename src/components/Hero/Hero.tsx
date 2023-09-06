import React from "react";
import "swiper/css";
import GridContainer from "../global/GridContainer";
import Calculator from "./Calculator";
import HeroSlider from "./HeroSlider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <section className="min-h-[1000px] flex flex-col-reverse lg:block lg:min-h-[620px] pt-16 lg:pt-32 bg-hero-green w-full relative group">
      <HeroSlider />
      <div className="z-10 relative lg:pt-0 pt-[80px]">
        <GridContainer className="pt-8 lg:pt-[103px] flex-col">
          <h1 className="text-base text-white font-bold">EcoPower te faz</h1>
          <h2 className="text-4xl leading-none lg:text-[3.5rem] lg:leading-[4rem] text-white font-semibold my-2 lg:my-0">
            Reduzir sua conta de luz
          </h2>
          <p className="text-white lg:text-base text-lg lg:mt-6">
            Use a nossa calculadora de economia e receba um orçamento da unidade
            mais próxima:
          </p>
          <Calculator />
        </GridContainer>
      </div>
      <div id="bullets"></div>
      <button
        id="prev-hero"
        className="style-navigation-hero right-[88px] lg:left-3"
      >
        <MdChevronLeft />
      </button>
      <button
        id="next-hero"
        className="style-navigation-hero right-6 lg:right-3"
      >
        <MdChevronRight />
      </button>
    </section>
  );
};

export default Hero;
