import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import React from "react";

const SectionOurProducts: React.FC = () => {
  return (
    <section className="min-h-[370px] flex flex-col items-center justify-center bg-hero-green">
      <GridContainer className="flex-col justify-center items-center">
        <TitleComponent className="text-white">Nossos produtos</TitleComponent>
        <h3 className="text-white mt-6">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </GridContainer>
    </section>
  );
};

export default SectionOurProducts;
