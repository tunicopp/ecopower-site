import React from "react";
import ContactsBar from "./ContactsBar";
import Header from "../global/Header";
import "swiper/css";
import GridContainer from "../global/GridContainer";
import Calculator from "./Calculator";
import HeroSlider from "./HeroSlider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Hero: React.FC = () => {
  return (
    <div className="min-h-[624px] w-full bg-primary-green relative">
      <HeroSlider />
      <div className="z-10 relative">
        <ContactsBar />
        <Header />
        <GridContainer className="mt-[103px] flex-col">
          <h1 className="text-base text-white font-bold">EcoPower te faz</h1>
          <h2 className="text-[3.5rem] leading-[4rem] text-white font-semibold">
            Reduzir sua conta de luz
          </h2>
          <p className="text-white text-base mt-6">
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
    </div>
  );
};

export default Hero;
