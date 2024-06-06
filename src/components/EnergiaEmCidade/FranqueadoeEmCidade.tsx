"use client";
import GridContainer from "@/components/global/GridContainer";
import CalculatorModal from "@/components/Hero/CalculatorModal";
import TitleComponent from "@/components/global/TitleComponent";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bgSolarFranqueado from "../../../public/assets/images/energia-em-cidade/franqueado_solar_cidade.jpg";
import bgSolarFranqueadoDesk from "../../../public/assets/images/energia-em-cidade/franqueado_solar_cidade-desktop.jpg";
import simuleAquiFranquiaIcon from "../../../public/assets/images/energia-em-cidade/icone-simule-aqui-franqueado.svg";

interface CityInterface {
  city?: string;
}

const SectionValeAPena: React.FC<CityInterface> = ({ city }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <section className="min-h-[250px] flex flex-col items-center justify-center bg-hero-yellow relative overflow-hidden">
        <GridContainer className="flex-col justify-center items-center">
          <TitleComponent className="text-black">
            Vale a pena energia solar em {city}?
          </TitleComponent>
        </GridContainer>
      </section> */}
      <GridContainer className="relative flex-col items-end justify-center py-4">
        <div className="flex min-h-[170px]">
          <Image
            src={bgSolarFranqueado}
            alt={`Energia solar - franqueado em ${city}`}
            priority
            quality={100}
            loading="eager"
            className="absolute top-0 left-0 w-full h-full object-cover bg-left-top"
          />
          <div className="w-[220px] sm:w-[100%] sm:max-w-[400px] z-10 flex flex-col px-3 py-4 bg-white rounded-2xl place-content-around">
            <h3 className="text-sm sm:text-lg mt-2 mb-2 font-medium text-grayscale-400">
              <span className="font-bold text-grayscale-600">
                Nosso franqueado em <h1 className="inline">{city}</h1>
              </span>{" "}
              está pronto para oferecer benefícios exclusivos para você.
            </h3>
            <div
              className="flex w-full cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              <h2 className="text-xl sm:text-2xl text-primary-green font-semibold pr-1">
                Simule aqui
              </h2>
              <Image
                src={simuleAquiFranquiaIcon}
                alt={`Ícone simule aqui - franqueado em ${city}`}
                priority
                quality={100}
                loading="eager"
                className="sm:w-[25px]"
              />
            </div>
          </div>
        </div>
      </GridContainer>
      {isOpen && (
        <CalculatorModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
          initialValue={0}
        />
      )}
    </>
  );
};

export default SectionValeAPena;
