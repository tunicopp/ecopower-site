import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import React from "react";
import Image from "next/image";
import panel from "../../../public/assets/images/hero/panel.png";
import houseFour from "../../../public/assets/images/hero/house-4.png";
import tree from "../../../public/assets/images/hero/tree-2.png";
import cloudOne from "../../../public/assets/images/hero/cloud-1.png";
import cloudTwo from "../../../public/assets/images/hero/cloud-2.png";
import cloudThree from "../../../public/assets/images/hero/cloud-2.png";
import planetIcon from "../../../public/assets/images/energia-em-cidade/icone-planeta.svg";
import energyIcon from "../../../public/assets/images/energia-em-cidade/icone-energia.svg";
import moneyIcon from "../../../public/assets/images/energia-em-cidade/icone-dinheiro.svg";
import moneyWhiteIcon from "../../../public/assets/images/energia-em-cidade/icone-dinheiro-branco.svg";
import CityDataInterface from "@/@types/app/city-data.app.interface";
import capitalize from "@/utils/capitalize";

const SectionValeAPena: React.FC<CityDataInterface> = ({ cityData }) => {
  if(!cityData) {
    return null
  }
  const { cidade, uf, contagem, distribuidora } = cityData;

  return (
    <>
      <section className="min-h-[250px] flex flex-col items-center justify-center bg-hero-yellow relative overflow-hidden">
        <GridContainer className="flex-col justify-center items-center">
          <TitleComponent className="text-black">
            Vale a pena energia solar em <h1 className="inline">{cidade} - {uf}</h1>?
          </TitleComponent>
        </GridContainer>
        <div className="absolute -right-[-40px] lg:-bottom-[24px] md:-bottom-[50px] -bottom-[0px]">
          <Image
            src={panel}
            alt="Painel Solar"
            className="md:w-[407px] w-[180px]"
          />
        </div>
        <div className="absolute lg:left-[156px] left-[40px] bottom-[30px]">
          <Image
            src={cloudOne}
            alt="Núvem"
            className="md:w-[129px] md:h-[36px] w-[80px]"
          />
        </div>
        <div className="absolute lg:right-[563px] md:right-[300px] right-[50px] lg:top-[81px] top-[50px]">
          <Image
            src={cloudTwo}
            alt="Núvem"
            className="md:w-[97px] md:h-[27px] w-[60px]"
          />
        </div>
        <div className="absolute right-[10px] bottom-[2px]">
          <Image
            src={cloudThree}
            alt="Núvem"
            className="md:w-[129px] md:h-[36px] w-[80px]"
          />
        </div>
      </section>
      <div className="text-3xl leading-[30px] text-black mt-[40px] text-center">
        <span className="font-bold">- Sim!</span> Veja porque:
      </div>
      <GridContainer className="flex-col">
        <section className="bg-white">
          <div className="grid md:grid-cols-3 mt-[40px] gap-6">
            <div className="flex item-center px-6 py-8 bg-beige-300 rounded-2xl place-content-around">
              <Image
                src={planetIcon}
                className="mr-4"
                alt="Sistemas Fotovoltaicos Instalados Ícone"
                width={50}
                height={50}
                quality={100}
              />
              <div className="max-w-[70%]">
                <h3 className="text-lg mt-2 mb-2 font-medium text-grayscale-400">
                  Mais de {contagem} sistemas fotovoltaicos foram instalados
                  em <h1 className="inline">{cidade} - {uf}</h1>.
                </h3>
              </div>
            </div>
            {/* <div className="flex item-center px-6 py-8 bg-beige-300 rounded-2xl place-content-around">
              <Image
                src={energyIcon}
                className="mr-4"
                alt="Conta de Luz Média"
                width={50}
                height={50}
                quality={100}
              />
              <div className="max-w-[70%]">
                <h3 className="text-lg mt-2 mb-2 font-medium text-grayscale-400">
                  A conta de luz média em {cidade} - {uf} é de {"to do valor"}.
                </h3>
              </div>
            </div> */}
            <div className="flex item-center px-6 py-8 bg-beige-300 rounded-2xl place-content-around">
              <Image
                src={moneyIcon}
                className="mr-4"
                alt="Principal Distribuidora Ícone"
                width={50}
                height={50}
                quality={100}
              />
              <div className="max-w-[70%]">
                <h3 className="text-lg mt-2 mb-2 font-medium text-grayscale-400">
                  A principal distribuidora em <h1 className="inline">{cidade} - {uf}</h1> é a {capitalize(distribuidora || '')}.
                </h3>
              </div>
            </div>
            <div className="flex item-center px-6 py-8 bg-primary-green rounded-2xl place-content-around">
              <Image
                src={moneyWhiteIcon}
                className="mr-4"
                alt="Economia de energia solar Ícone"
                width={50}
                height={50}
                quality={100}
              />
              <div className="max-w-[70%]">
                <h3 className="text-lg mt-2 mb-2 font-medium text-white">
                  Você pode economizar até 90% na sua conta com energia solar.
                </h3>
              </div>
            </div>
          </div>
          <br />
          <br />
        </section>
      </GridContainer>
    </>
  );
};

export default SectionValeAPena;
