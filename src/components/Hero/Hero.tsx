"use client";
import React, { useState } from "react";
import "swiper/css";
import GridContainer from "../global/GridContainer";
import Calculator from "./Calculator";
import HeroSlider from "./HeroSlider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Hero: React.FC = () => {
  const [timeline, setTimeline] = useState<"to" | "from">("to");

  return (
    <section
      className="min-h-[1101px] md:min-h-[624px] pt-32 bg-hero-green w-full relative"
      onMouseEnter={() => setTimeline("to")}
      onMouseLeave={() => setTimeline("from")}
    >
      <HeroSlider timeline={timeline} />
      <div className="z-10 relative">
        <GridContainer className="pt-[103px] flex-col">
          <h1 className="text-base text-white font-bold">EcoPower te faz</h1>
          <h2 className="text-4xl leading-none md:text-[3.5rem] md:leading-[4rem] text-white font-semibold my-2 md:my-0">
            Reduzir sua conta de luz
          </h2>
          <p className="text-white text-base md:mt-6">
            Use a nossa calculadora de economia e receba um orçamento da unidade
            mais próxima:
          </p>
          <Calculator />
        </GridContainer>
      </div>
      <button id="prev-hero" className="style-navigation-hero left-3">
        <MdChevronLeft />
      </button>
      <button id="next-hero" className="style-navigation-hero right-3">
        <MdChevronRight />
      </button>
    </section>
  );
};

export default Hero;
