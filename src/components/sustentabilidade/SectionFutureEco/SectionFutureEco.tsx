"use client";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React, { useState } from "react";
import futureEco from "../../../../public/assets/images/sustentabilidade/future-eco.png";
import futureEcoTwo from "../../../../public/assets/images/sustentabilidade/future-eco-two.png";
import ambiental from "../../../../public/assets/images/sustentabilidade/ambiental.svg";
import social from "../../../../public/assets/images/sustentabilidade/social.svg";
import governance from "../../../../public/assets/images/sustentabilidade/governance.svg";
import arrow from "../../../../public/assets/icons/arrow-up-right.svg";
import ModalEnvironmental from "./ModalEnvironmental";
import ModalSocial from "./ModalSocial";
import ModalGovernance from "./ModalGovernance";

const SectionFutureEco: React.FC = () => {
  const [isEnviromentOpen, setIsEnviromentOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isGovernanceOpen, setIsGovernanceOpen] = useState(false);

  return (
    <>
      <section className="pt-[80px] pb-10">
        <GridContainer className="lg:flex-row flex-col justify-between lg:items-start items-center gap-6">
          <div className="flex flex-col gap-4 max-w-[451px]">
            <TitleComponent className="text-black !text-[32px] !leading-[38px]">
              Sustentabilidade EcoPower
            </TitleComponent>
            <h3 className="font-semibold text-lg">
              Cultura de eficiência e inovação, promovendo o desenvolvimento
              sustentável em todas as regiões do Brasil.
            </h3>
            <p className="text-black text-lg lg:text-start text-justify">
              Na EcoPower entendemos que todos nós, precisamos pensar e agir de
              forma sustentável. Por isso, reforçamos nosso propósito de
              fornecer energia de fontes renováveis aos clientes por meio de
              iniciativas e atitudes que buscam a responsabilidade
              socioambiental.
            </p>
          </div>
          <Image
            src={futureEco}
            alt="Futuro Ecoconsciente"
            className="lg:max-w-[572px] w-full"
          />
        </GridContainer>
      </section>
      <section className="bg-beige-300">
        <GridContainer className="flex-col items-center py-[80px] gap-10">
          <p className="text-lg max-w-[808px] text-center">
            <b>
              A EcoPower Energia Solar tem o compromisso e levar economia,
              sustentabilidade e novos horizontes em oportunidades de
              crescimento para todos os seus clientes.
            </b>{" "}
            Com base em sua responsabilidade socioambiental, todas as suas
            atividades são orientadas por aspectos ambientais, sociais e de
            governança.
          </p>
          <a
            href="/assets/pdf/POLITICA-DE-SUSTENTABILIDADE-ECOPOWER-2023.pdf"
            download="POLITICA-DE-SUSTENTABILIDADE-ECOPOWER"
            className="simulate-button flex items-center gap-2"
          >
            Veja nossa política de sustentabilidade
            <Image src={arrow} alt="Ir para página" />
          </a>
        </GridContainer>
        <GridContainer className="lg:gap-[78px] gap-6 lg:flex-row flex-col-reverse items-center pt-10">
          <Image
            src={futureEcoTwo}
            alt="Futuro Ecoconsciente"
            className="max-w-[550px] w-full"
          />
          <div className="max-w-[496px] text-black text-lg lg:text-start text-justify">
            <p className="block mb-4">
              <b>
                Campanhas de conscientização e bem-estar para colaboradores,
                mais de 400 empregos diretos,
              </b>{" "}
              ações que promovem mulheres ao mercado solar, treinamentos e
              programas para colaboradores e franqueados se capacitarem.
            </p>

            <p>
              Geramos + de 400 empregos diretos e + de 580 empregos indiretos.
              Nossa cultura corporativa promove o bem-estar e o desenvolvimento
              profissional de nossos colaboradores, instaladores e franqueados.
            </p>
          </div>
        </GridContainer>
        <GridContainer className="lg:py-[128px] py-10 justify-center">
          <p className="text-lg max-w-[842px] text-center">
            Construímos a nossa matriz de materialidade e a agenda de
            sustentabilidade, com definição das ações para atendermos os temas
            materiais mais relevantes apontados pelas partes interessadas, como
            também os Objetivos de Desenvolvimento Sustentável.
          </p>
        </GridContainer>
        <GridContainer className="py-[80px]">
          <div className="grid w-full md:grid-cols-3 gap-6 items-stretch min-h-[212px] auto-rows-fr">
            <div
              onClick={() => setIsEnviromentOpen(true)}
              className="p-6 bg-white rounded-2xl cursor-pointer flex flex-col justify-between gap-[10px]"
            >
              <Image src={ambiental} alt="Ícone Ambiental" />
              <span className="text-black text-[22px] font-bold">
                Ambiental
              </span>
            </div>
            <div
              onClick={() => setIsSocialOpen(true)}
              className="p-6 bg-white rounded-2xl cursor-pointer flex flex-col justify-between gap-[10px]"
            >
              <Image src={social} alt="Ícone Social" />
              <span className="text-black text-[22px] font-bold">Social</span>
            </div>
            <div
              onClick={() => setIsGovernanceOpen(true)}
              className="p-6 bg-white rounded-2xl cursor-pointer flex flex-col justify-between gap-[10px]"
            >
              <Image src={governance} alt="Ícone Governança" />
              <span className="text-black text-[22px] font-bold">
                Governança
              </span>
            </div>
          </div>
        </GridContainer>
      </section>
      {isEnviromentOpen && (
        <ModalEnvironmental
          isOpen={isEnviromentOpen}
          onClose={() => setIsEnviromentOpen(false)}
        />
      )}
      {isSocialOpen && (
        <ModalSocial
          isOpen={isSocialOpen}
          onClose={() => setIsSocialOpen(false)}
        />
      )}
      {isGovernanceOpen && (
        <ModalGovernance
          isOpen={isGovernanceOpen}
          onClose={() => setIsGovernanceOpen(false)}
        />
      )}
    </>
  );
};

export default SectionFutureEco;
