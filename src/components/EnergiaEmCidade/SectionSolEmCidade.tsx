import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Image from "next/image";
import CityDataInterface from "@/@types/app/city-data.app.interface";
import adesivoEcoIcon from "../../../public/assets/images/energia-em-cidade/icone-adesivo-eco.svg";
import incidenciaSolarImg from "../../../public/assets/images/energia-em-cidade/incidencia-solar-cidade.png";
import lightGreenIcon from "../../../public/assets/images/energia-em-cidade/icon-light-green.png";
import lightYellowIcon from "../../../public/assets/images/energia-em-cidade/icon-light-yellow.png";
import lightRedIcon from "../../../public/assets/images/energia-em-cidade/icon-light-red.png";

const SectionSolEmCidade: React.FC<CityDataInterface> = ({ cityData }) => {

  function getColorIcon(classificacao:string|undefined) {
    if(!classificacao) return lightGreenIcon

    switch (classificacao) {
      case "muito intenso":
        return lightRedIcon
      case "forte":
        return lightYellowIcon;
    
      default:
        return lightGreenIcon
    }
  }

  return (
    <>
      <section className="min-h-[250px] flex flex-col items-center justify-center bg-primary-green relative overflow-hidden px-[20px] py-[40px] pt-[100px]">
        <div className="relative">
          <GridContainer
            className="absolute flex place-content-around top-[-45px] left-[3%] bg-white w-[94%] rounded-t-2xl pb-[40px] pt-[10px]"
        >
            <div className="flex text-grayscale-400 text-sm">
              <Image alt="Icon light green" className="h-auto" src={lightGreenIcon} />
              baixa
            </div>
            <div className="flex text-grayscale-400 text-sm">
              <Image alt="Icon light yellow" className="h-auto" src={lightYellowIcon} />
              média
            </div>
            <div className="flex text-grayscale-400 text-sm">
              <Image alt="Icon light red" className="h-auto" src={lightRedIcon} />
              alta
            </div>
          </GridContainer>
          <div className="relative flex item-center p-2 pr-4 bg-beige-300 rounded-2xl place-content-flex-start text-sm sm:text-lg sm:max-w-[500px]">
            <Image
                src={getColorIcon(cityData?.classificacao)}
                alt="Icon light red"
                className="h-auto absolute top-[10px] right-[10px]"
            />
            <Image
              src={incidenciaSolarImg}
              alt="Incidência solar"
              quality={100}
              priority={false}
              loading="lazy"
              className="rounded-2xl h-[168px] mr-[20px]"
            />
            <div className="max-w-[70%] flex items-center">
              <h3 className="font-medium text-grayscale-400">
                O Sol em {cityData?.cidade} é {cityData?.classificacao}, com uma incidência solar de
                <div className="text-[30px] font-bold text-black mt-2">{cityData?.media} W/m²</div>
              </h3>
            </div>
          </div>
        </div>
        <div className="flex item-center px-6 py-8 pb-0 bg-primary-green rounded-2xl place-content-center">
          <div className="pr-2">
            <p className="text-sm md:text-lg mt-2 mb-2 font-medium text-white text-center">
              Você poderia estar gerando <br />{" "}
              <b className="text-white">sua própria energia</b> agora!
            </p>
          </div>
          <Image
            src={adesivoEcoIcon}
            className="mr-4"
            alt="Adesivo Eco Ícone"
            width={50}
            height={50}
            quality={100}
          />
        </div>
      </section>
    </>
  );
};

export default SectionSolEmCidade;
