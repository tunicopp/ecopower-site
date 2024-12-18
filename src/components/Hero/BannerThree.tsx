"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import cloudOne from "../../../public/assets/images/hero/cloud-1.png";
import houseOne from "../../../public/assets/images/hero/house-1.png";
import houseTwo from "../../../public/assets/images/hero/house-2.png";
import houseThree from "../../../public/assets/images/hero/house-3.png";
import tree from "../../../public/assets/images/hero/banner-two-tree.svg";
import treeOne from "../../../public/assets/images/hero/tree-1.png";
import treeTwo from "../../../public/assets/images/hero/tree-2.png";
import motherAndDaughter from "../../../public/assets/images/hero/mae-e-filha.png";
import heroMobile from "../../../public/assets/images/hero/banner-three-mobile.png";
import { useSwiperSlide } from "swiper/react";
import { useGlobalContext } from "@/app/context/store";

const BannerThree: React.FC = () => {
  const swiperSlide = useSwiperSlide();
  const { onChangeSlide } = useGlobalContext();

  useEffect(() => {
    if (swiperSlide.isActive) onChangeSlide(3);

    return () => {
      onChangeSlide(1);
    };
  }, [swiperSlide.isActive]);

  return (
    <>
      <div className="absolute lg:block hidden top-[150px] left-[80px] group-hover:left-[190px] group-hover:scale-125 transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute lg:block hidden -bottom-[90px] left-[10px]  group-hover:-bottom-[50px]  transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseOne}
          alt="Casa"
          quality={100}
          className="h-[363px] w-[310px]"
        />
      </div>
      <div className="absolute lg:block hidden -bottom-[30px] -left-[110px] group-hover:-bottom-[0px] group-hover:-left-[90px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseTwo}
          alt="Casa"
          quality={100}
          className="h-[200px] w-[320px]"
        />
      </div>
      <div className="absolute lg:block hidden -bottom-[20px] left-[350px] group-hover:-bottom-[10px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={tree}
          alt="Árvore"
          quality={100}
          className="w-[29px] h-[143px]"
        />
      </div>
      <div className="absolute lg:block hidden right-[35%] -bottom-[120px] group-hover:-bottom-[90px] group-hover:right-[37%]   transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseThree}
          alt="Casa"
          quality={100}
          className="h-[240px] w-[320px]"
        />
      </div>
      <div className="lg:flex items-end gap-6 absolute  hidden right-[400px] -bottom-[10px] group-hover:-bottom-[0px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={treeOne}
          alt="Árvore"
          quality={100}
          className="h-[90px] w-[20px]"
        />
        <Image
          loading="lazy"
          src={treeTwo}
          alt="Árvore"
          quality={100}
          className="h-[140px] w-[29px]"
        />
      </div>
      <div className="absolute lg:block hidden bottom-0 -right-[150px] group-hover:-right-[162px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseTwo}
          alt="Casa"
          quality={100}
          className="h-[200px] w-[320px]"
        />
      </div>
      <div className="absolute lg:block hidden right-[40px] -bottom-[20px] group-hover:-bottom-0 transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={motherAndDaughter}
          alt="Mãe e Filha"
          quality={100}
          className="h-[598px] w-[580px]"
        />
      </div>

      <div className="lg:hidden block relative overflow-hidden   transition-all duration-1000 ease-in-out">
        <div className="absolute -left-[20px] top-[194px] ">
          <Image
            loading="eager"
            src={cloudOne}
            alt="Nuvem"
            quality={100}
            className="h-[27px] w-[98px]"
          />
        </div>
        <div className="absolute -right-[50px] top-[198px] transition-all duration-1000 ease-in-out">
          <Image
            loading="eager"
            src={cloudOne}
            alt="Nuvem"
            quality={100}
            className="h-[27px] w-[98px]"
          />
        </div>
        <div className="relative flex flex-col items-center gap-2 w-[307px] top-[40px] left-0 right-0 mx-auto">
          <span className="text-banner-two text-lg">
            Somos Eco, Somos Power
          </span>
          <h2 className="text-banner-two font-semibold text-[30px] text-center">
            Somos a energia
            <span className="block text-banner-two">que move o futuro</span>
          </h2>
        </div>
        <Image
          src={heroMobile}
          alt="Banner Mobile"
          className="w-full mt-[160px]"
        />
      </div>
    </>
  );
};

export default BannerThree;
