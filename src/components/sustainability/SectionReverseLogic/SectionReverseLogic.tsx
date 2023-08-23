import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import logoArt from "../../../../public/assets/images/sustainability/eco-power-logo-art.svg";

const SectionReverseLogic: React.FC = () => {
  return (
    <section className="bg-beige-300 py-[80px]">
      <GridContainer className="lg:flex-row flex-col mt-12 gap-4 justify-between items-center">
        <div className="flex flex-col gap-6 lg:max-w-[496px]">
          <TitleComponent className="!text-[40px] lg:text-start text-center">
            Energia Solar como prática ESG
          </TitleComponent>
          <p className="text-lg lg:text-start text-center">
            Dentre as principais ações corporativas de mitigação de impacto
            ambiental é a substituição da matriz energética convencional por uma
            sustentável. Quando uma empresa investe em energia solar, ela
            diretamente está contribuindo com o desenvolvimento sustentável
            através da redução de suas emissões. Uma empresa ou organização que
            está buscando a implementação de agenda ESG poderá contar com a
            EcoPower, que, além de ser a maior empresa de energia solar do
            Brasil, gera economia e avanço sustentável à todos os seus clientes.
          </p>
        </div>
        <Image src={logoArt} alt="EcoPower Logo" />
      </GridContainer>
    </section>
  );
};

export default SectionReverseLogic;
