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

interface CityInterface {
    city?: string;
}

const SectionValeAPena: React.FC<CityInterface> = ({ city }) => {
  return (
    <>
        <section className="min-h-[250px] flex flex-col items-center justify-center bg-hero-yellow relative overflow-hidden">
        <GridContainer className="flex-col justify-center items-center">
            <TitleComponent className="text-black">Vale a pena energia solar em {city}?</TitleComponent>
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
        <section>
        </section>
    </>
  );
};

export default SectionValeAPena;
