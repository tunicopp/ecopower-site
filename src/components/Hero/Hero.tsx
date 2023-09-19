import React from "react";
import GridContainer from "../global/GridContainer";
import Calculator from "./Calculator";
import HeroSlider from "./HeroSlider";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col lg:block pb-10 lg:min-h-[620px] pt-16 lg:pt-32 bg-hero-green w-full relative group">
      <HeroSlider />
      <div className="z-10 relative lg:pt-0">
        <GridContainer className="pt-6 lg:pt-[103px] flex-col">
          <h1 className="text-base text-white font-bold lg:block hidden">
            EcoPower
          </h1>
          <h2 className="text-4xl leading-none lg:text-[3.5rem] lg:leading-[4rem] text-white font-semibold my-2 lg:my-0 lg:block hidden">
            Energia Solar ao seu alcance
          </h2>
          <p className="text-white lg:text-base text-lg lg:mt-6 lg:text-start text-center">
            Gere economia, use nossa calculadora e aproveite para reduzir ao
            máximo sua conta de energia
          </p>
          <Calculator />
        </GridContainer>
      </div>
    </section>
  );
};

export default Hero;
