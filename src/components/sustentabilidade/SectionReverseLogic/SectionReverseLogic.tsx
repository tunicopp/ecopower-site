/* eslint-disable @next/next/no-sync-scripts */
"use client";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import logoArt from "../../../../public/assets/images/sustentabilidade/eco-power-logo-art.svg";
import badgeOne from "../../../../public/assets/images/sustentabilidade/badge-01.svg";
import badgeTwo from "../../../../public/assets/images/sustentabilidade/badge-02.svg";
import badgeThree from "../../../../public/assets/images/sustentabilidade/badge-03.svg";
import badgeFour from "../../../../public/assets/images/sustentabilidade/badge-04.svg";
import badgeFive from "../../../../public/assets/images/sustentabilidade/badge-05.svg";
import badgeSix from "../../../../public/assets/images/sustentabilidade/badge-06.svg";

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
      <GridContainer className="justify-center pt-[80px]">
        <div className="grid md:grid-cols-6 lg:gap-[120px] items-center justify-items-center md:gap-[60px] gap-6">
          <a
            href="https://franquias.portaldofranchising.com.br/franquia-ecopower-energia-solar/"
            target="_blank"
          >
            <Image src={badgeOne} alt="Excelência em Franchising" />
          </a>
          <a
            href="https://www.absolar.org.br/associados/ecopower/"
            target="_blank"
          >
            <Image src={badgeTwo} alt="Associado Absolar" />
          </a>
          <a href="https://www.instagram.com/p/Ch7talduPk8" target="_blank">
            <Image src={badgeThree} alt="SolarView" />
          </a>
          <a
            href="https://certificadas.gptw.com.br/18269815000136"
            target="_blank"
          >
            <Image src={badgeFour} alt="Certificado Great Place To Work" />
          </a>
          <a
            href="https://certificadas.gptw.com.br/18269815000136"
            target="_blank"
          >
            <Image src={badgeFive} alt="Weg Solar" />
          </a>
          <a
            href="https://www.reclameaqui.com.br/empresa/ecopower-sistemas-de-energia/?utm_source=referral&utm_medium=embbed&utm_campaign=reputacao&utm_term=vertical"
            target="_blank"
          >
            <Image src={badgeSix} alt="Reclame Aqui" />
          </a>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionReverseLogic;
