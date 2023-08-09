import Image from "next/image";
import React from "react";

import logo from "../../../public/assets/icons/logo-eco-power.svg";
import TitleComponent from "../global/TitleComponent";
import Reveal from "../global/Reveal";
import TopFooter from "./TopFooter";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <TopFooter />
      <div className="flex flex-col bg-primary-green w-full h-[504px] px-[108px] pt-[108px] pb-[40px]">
        <div className="grid grid-cols-4 gap-4 w-full flex-1">
          <div className="flex ">
            <div className="relative mr-auto">
              <Image
                src={logo}
                alt="Eco Power Logo"
                width={209}
                height={56}
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-semibold">Prdutos</p>
            <div className="flex flex-col mt-[24px] cursor-pointer w-fit nav">
              <a href="" target="_blank" className="text-white">
                Todos os produtos
              </a>
            </div>
          </div>
          <div className="flex bg-grayscale-300">f</div>
          <div className="flex bg-grayscale-300">f</div>
        </div>
        <div className="flex w-full bg-grayscale-200">sdsd</div>
      </div>
    </div>
  );
};

export default Footer;
