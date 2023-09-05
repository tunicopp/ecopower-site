"use client";
import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Image from "next/image";
import ecoJourney from "../../../../public/assets/images/about-us/journey/eco-journey.svg";
import TitleComponent from "@/components/global/TitleComponent";
import CountUp from "react-countup";

const SectionJourney: React.FC = () => {
  return (
    <section className="lg:pt-[80px]">
      <GridContainer className="lg:flex-row flex-col items-center justify-between gap-10">
        <Image src={ecoJourney} alt="Jornada EcoPower" />
        <div className="flex flex-col gap-4 lg:max-w-[496px]">
          <TitleComponent className="lg:max-w-[392px] md:max-w-[375px]">
            A Jornada da EcoPower Rumo ao Futuro Sustentável.
          </TitleComponent>
          <p className="text-lg lg:text-start text-justify">
            Nesses anos, a EcoPower enfrentou os desafios da consolidação de seu
            reconhecimento junto aos clientes e fornecedores, atuando com ética,
            transparência e oferecendo soluções na área de energia solar com
            tecnologia de ponta e projetos personalizados de acordo com a
            necessidade de cada cliente.{" "}
            <b className="font-bold">
              O sucesso da energia solar captada por cada painel solar
              fotovoltaico instalado nos diversos projetos é o reflexo do
              empenho da equipe de colaboradores interna e externa.
            </b>
          </p>
          <p className="text-lg lg:text-start text-justify">
            <b className="font-bold">
              A EcoPower chega em 2023 renovada e com muito vigor pra enfrentar
              os desafios dos próximos anos!
            </b>{" "}
            Você está na maior e iremos fazer o melhor por você. Nosso foco é
            sua experiência. Compromisso EcoPower.
          </p>
        </div>
      </GridContainer>
      <GridContainer className="md:flex-row flex-col items-stretch w-full mt-6">
        <div className="p-6 flex-center flex-col flex-1 gap-2">
          <h3 className="text-[40px] font-bold">
            +<CountUp duration={5} end={40000} enableScrollSpy />
          </h3>
          <span>Projetos Instalados</span>
        </div>
        <div className="p-6 flex-center flex-col flex-1 gap-2 md:border-x md:border-y-0 border-y border-x-0 border-[#000] border-opacity-[0.07]">
          <h3 className="text-[40px] font-bold">
            <CountUp duration={5} end={300} enableScrollSpy />
          </h3>
          <span>Franqueados pelo país</span>
        </div>
        <div className="p-6 flex-center flex-col flex-1 gap-2">
          <h3 className="text-[40px] font-bold">
            <CountUp duration={5} end={26} enableScrollSpy />
          </h3>
          <span>Estados de atuação e DF</span>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionJourney;
