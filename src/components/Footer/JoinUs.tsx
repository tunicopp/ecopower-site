import React from "react";
import GridContainer from "../global/GridContainer";
import TitleComponent from "../global/TitleComponent";
import OutlineButton from "../global/OutlineButton";
import joinUsOne from "../../../public/assets/images/join-us/join-us-1.svg";
import joinUsTwo from "../../../public/assets/images/join-us/join-us-2.svg";
import joinUsThree from "../../../public/assets/images/join-us/join-us-3.svg";
import joinUsFour from "../../../public/assets/images/join-us/join-us-4.svg";
import cloud from "../../../public/assets/images/join-us/join-us-cloud.svg";
import cloudBig from "../../../public/assets/images/join-us/join-us-cloud-big.svg";
import houseOne from "../../../public/assets/images/join-us/join-us-house.svg";
import houseTwo from "../../../public/assets/images/join-us/join-us-house-two.svg";
import trees from "../../../public/assets/images/join-us/join-us-trees.svg";
import panel from "../../../public/assets/images/join-us/join-us-panel.svg";
import Image from "next/image";
import Link from "next/link";

const JoinUs: React.FC = () => {
  return (
    <section className="pb-[80px] lg:px-0 px-6">
      <GridContainer>
        <div className="w-full flex flex-col items-center justify-center bg-primary-green rounded-[20px] py-[80px] gap-6 relative overflow-hidden">
          <Image
            src={joinUsOne}
            alt="Junte-se à nós"
            className="absolute -left-[31px] -top-[18px] lg:w-[180px] md:w-[140px] w-[110px]"
          />
          <Image
            src={joinUsTwo}
            alt="Junte-se à nós"
            className="absolute lg:left-[114px] md:left-[32px] -left-[20px] md:bottom-[31px] bottom-[80px] lg:w-auto md:w-[110px] w-[80px]"
          />
          <Image
            src={joinUsThree}
            alt="Junte-se à nós"
            className="absolute md:right-[204px] right-[100px] lg:top-[31px] md:top-[24px] top-[12px] lg:w-auto md:w-[50px] w-[60px]"
          />
          <Image
            src={joinUsFour}
            alt="Junte-se à nós"
            className="absolute md:-right-[62px] -right-[24px] md:-bottom-[31px] -bottom-[24px] lg:w-[266px] md:w-[200px] w-[100px]"
          />
          <Image
            src={cloud}
            alt="Nuvem"
            className="absolute md:right-[81px] right-[24px] top-[38px]"
          />
          <Image
            src={cloudBig}
            alt="Nuvem Grande"
            className="absolute md:left-[196px] left-[100px] lg:top-[58px] md:top-[32px] top-[38px] md:w-auto w-[52px]"
          />
          <Image
            src={houseOne}
            alt="Casa"
            className="absolute lg:left-[296px] md:left-[180px] left-[24px] lg:-bottom-[42px] md:-bottom-[32px] -bottom-[16px] lg:w-[112px] md:w-[72px] w-[48px]"
          />
          <Image
            src={houseTwo}
            alt="Casa"
            className="absolute lg:right-[245px] md:right-[40px] right-[90px] lg:-bottom-[42px] md:-bottom-[32px] -bottom-[16px] lg:w-[128px] md:w-[72px] w-[48px]"
          />
          <Image
            src={trees}
            alt="Árvores"
            className="absolute lg:right-[391px] md:right-[270px] right-[145px] lg:-bottom-[29px] md:-bottom-[12px] -bottom-1 lg:w-[52px] md:w-[20px] w-[10px]"
          />
          <Image
            src={panel}
            alt="Casa"
            className="absolute md:left-[50%] left-[25%] md:-translate-x-2/4 -bottom-1 md:w-[97px] w-[70px]"
          />
          <TitleComponent className="text-white text-center relative">
            Junte-se ao nosso time!
          </TitleComponent>
          <h3 className="text-xl text-white text-center relative">
            Agora que você já nos conhece, saiba mais sobre carreiras na
            EcoPower.
          </h3>

          <Link href="https://ecopower.vagas.solides.com.br/" target="_blank">
            <OutlineButton aria-selected className="relative">
              Carreira na EcoPower
            </OutlineButton>
          </Link>
        </div>
      </GridContainer>
    </section>
  );
};

export default JoinUs;
