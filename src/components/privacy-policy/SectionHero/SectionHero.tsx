import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import panel from "../../../../public/assets/images/hero/panel.png";
import houseFour from "../../../../public/assets/images/hero/house-4.png";
import tree from "../../../../public/assets/images/hero/tree-2.png";
import cloudOne from "../../../../public/assets/images/hero/cloud-1.png";
import cloudTwo from "../../../../public/assets/images/hero/cloud-2.png";

const SectionHero: React.FC = () => {
  return (
    <section className="min-h-[370px] flex flex-col items-center justify-center bg-hero-green relative overflow-hidden">
      <GridContainer className="flex-col justify-center items-center">
        <TitleComponent className="text-white">Nossos Soluções</TitleComponent>
        <h3 className="text-white mt-6">
          Lorem ipsum dolor sit amet consectetur.
        </h3>
      </GridContainer>
      <div className="absolute lg:-right-[104px] -right-[270px] lg:-bottom-[24px] md:-bottom-[50px] -bottom-[30px]">
        <Image
          src={panel}
          alt="Painel Solar"
          className="md:w-[507px] md:h-[151px] w-[380px]"
        />
      </div>
      <div className="absolute lg:-left-[37px] md:-left-[160px] -left-[120px] lg:-bottom-[298px] md:-bottom-[340px] -bottom-[260px]">
        <Image
          src={houseFour}
          alt="Casa EcoPower"
          className="md:w-[395px] md:h-[477px] w-[295px]"
        />
      </div>
      <div className="absolute lg:left-[390px] md:left-[260px] left-[190px] lg:-bottom-[91px] md:-bottom-[120px] -bottom-[40px]">
        <Image
          src={tree}
          alt="Árvore"
          className="md:w-[45px] md:h-[219px] w-[25px]"
        />
      </div>
      <div className="absolute lg:left-[156px] left-[40px] md:top-[106px] top-[90px]">
        <Image
          src={cloudOne}
          alt="Núvem"
          className="md:w-[129px] md:h-[36px] w-[90px]"
        />
      </div>
      <div className="absolute lg:right-[563px] md:right-[300px] right-[100px] lg:top-[81px] top-[70px]">
        <Image
          src={cloudTwo}
          alt="Núvem"
          className="md:w-[97px] md:h-[27px] w-[60px]"
        />
      </div>
    </section>
  );
};

export default SectionHero;
