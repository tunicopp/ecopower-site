"use client";
import React from "react";
import GridContainer from "../global/GridContainer";
import Calculator from "./Calculator";
import HeroSlider from "./HeroSlider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useGlobalContext } from "@/app/context/store";

const Hero: React.FC = () => {
  const { currentSlide } = useGlobalContext();

  return (
    <section
      className={`flex flex-col lg:block pb-[100px] lg:min-h-[620px] pt-16 transition-colors lg:pt-32 w-full relative group ${
        currentSlide === 1
          ? "bg-primary-green"
          : currentSlide === 2
          ? "bg-banner-two"
          : "bg-banner-three"
      }`}
    >
      <HeroSlider />
      <div className="z-10 relative lg:pt-0">
        <GridContainer className="pt-6 lg:pt-[103px] flex-col">
          <h1
            className={`text-base font-bold lg:block hidden ${
              currentSlide === 3 ? "text-banner-two" : "text-white"
            }`}
          >
            {currentSlide === 1
              ? "EcoPower"
              : currentSlide === 2
              ? "Mês do cliente, até 30x sem juros"
              : "Somos Eco, Somos Power"}
          </h1>
          <h2
            className={`text-4xl leading-none lg:text-[3.5rem] lg:leading-[4rem] font-semibold my-2 lg:my-0 lg:block hidden ${
              currentSlide === 3 ? "text-banner-two" : "text-white"
            }`}
          >
            {currentSlide === 1
              ? "Energia Solar ao seu alcance"
              : currentSlide === 2
              ? "Aproveite as melhores condições"
              : "Somos a energia que move o futuro"}
          </h2>
          <p
            className={`lg:text-base text-lg lg:mt-6 lg:text-start text-center ${
              currentSlide === 3 ? "text-grayscale-900" : "text-white"
            }`}
          >
            {currentSlide === 1
              ? "Gere economia, use nossa calculadora e aproveite para reduzir ao máximo sua conta de energia"
              : "Use a nossa calculadora de economia e receba um orçamento da unidade mais próxima"}
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
