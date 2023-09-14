import React from "react";
import GridContainer from "../global/GridContainer";
import Image from "next/image";
import bg from "../../../public/assets/images/be-our-franchisee/be-our-franchisee.png";

const BeOurFranchisee: React.FC = () => {
  return (
    <section className="flex justify-center flex-col-reverse relative bg-beige-300 lg:pt-0 pt-[80px] min-h-[463px]">
      <Image
        src={bg}
        alt="Seja um Franqueado Ecopower"
        className="lg:absolute relative w-full max-w-[1133px] -bottom-4 right-0"
      />
      <GridContainer className="flex-col relative">
        <h2 className="md:text-5xl text-4xl font-semibold text-grayscale-800 max-w-[328px]">
          Seja um Franqueado Ecopower
        </h2>
        <p className="text-xl mt-4 mb-10">
          Lorem ipsum dolor sit amet consectetur elit.
        </p>
        <a
          className="simulate-button flex-center h-[44px] max-w-[207px]"
          href="https://conteudo.ecopower.com.br/franquias"
        >
          Clique aqui
        </a>
      </GridContainer>
    </section>
  );
};

export default BeOurFranchisee;
