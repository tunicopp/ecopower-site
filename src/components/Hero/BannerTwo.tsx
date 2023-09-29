"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import family from "../../../public/assets/images/hero/familia.png";
import sun from "../../../public/assets/images/hero/sun.png";
import houseRight from "../../../public/assets/images/hero/banner-two-house-right.svg";
import houseLeftOne from "../../../public/assets/images/hero/banner-two-house-left-one.svg";
import houseLeftTwo from "../../../public/assets/images/hero/banner-two-house-left-two.svg";
import tree from "../../../public/assets/images/hero/banner-two-tree.svg";
import cloudOne from "../../../public/assets/images/hero/cloud-1.png";
import heroMobile from "../../../public/assets/images/hero/banner-two-mobile.png";
import { useSwiperSlide } from "swiper/react";
import { useGlobalContext } from "@/app/context/store";

const BannerTwo: React.FC = () => {
  const swiperSlide = useSwiperSlide();
  const { onChangeSlide } = useGlobalContext();

  useEffect(() => {
    if (swiperSlide.isActive) onChangeSlide(2);

    return () => {
      onChangeSlide(1);
    };
  }, [swiperSlide.isActive]);

  return (
    <>
      <div className="absolute lg:block hidden top-[60px] -right-[40px] group-hover:-right-[10px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute lg:block hidden top-[160px] left-0 right-0 group-hover:right-[100px] group-hover:scale-125   w-[129px] mx-auto transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute lg:block hidden top-[40%] -left-[50px]  group-hover:-left-[10px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute lg:block hidden bottom-[320px] right-[210px] group-hover:scale-150 group-hover:rotate-90 transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={sun}
          alt="Sol"
          quality={100}
          className="h-[168px] w-[168px]"
        />
      </div>
      <div className="absolute lg:block hidden bottom-0 right-0 group-hover:-right-[30px] group-hover:scale-105 transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={family}
          alt="Família"
          quality={100}
          className="w-[1002px] h-[598px]"
        />
      </div>
      <div className="absolute lg:block hidden bottom-0 right-[80px] group-hover:right-[100px] group-hover:-bottom-[40px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseRight}
          alt="Casa"
          quality={100}
          className="w-[285px] h-[147px]"
        />
      </div>
      <div className="absolute lg:block hidden -bottom-[10px] -left-[30px]  group-hover:-left-[0px] group-hover:-bottom-[0px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseLeftOne}
          alt="Casa"
          quality={100}
          className="w-[320px] h-[272px]"
        />
      </div>
      <div className="absolute lg:block hidden -bottom-[40px] left-[300px] group-hover:left-[340px] group-hover:-bottom-[20px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={houseLeftTwo}
          alt="Casa"
          quality={100}
          className="w-[259px] h-[155px]"
        />
      </div>
      <div className="absolute lg:block hidden -bottom-[20px] left-[590px] group-hover:-bottom-[0px] transition-all duration-1000 ease-in-out">
        <Image
          loading="lazy"
          src={tree}
          alt="Árvore"
          quality={100}
          className="w-[29px] h-[143px]"
        />
      </div>
      <div className="lg:hidden block relative overflow-hidden ">
        <div className="absolute left-[20%] top-[194px] ">
          <Image
            loading="eager"
            src={cloudOne}
            alt="Nuvem"
            quality={100}
            className="h-[27px] w-[98px]"
          />
        </div>
        <div className="absolute -right-[40px] top-[240px] ">
          <Image
            loading="eager"
            src={cloudOne}
            alt="Nuvem"
            quality={100}
            className="h-[27px] w-[98px]"
          />
        </div>
        <div className="relative flex flex-col items-center gap-2 w-[307px] top-[40px] left-0 right-0 mx-auto">
          <span className="text-white text-lg">
            Mês do cliente, até 30x sem juros
          </span>
          <h2 className="text-white font-semibold text-[30px] text-center">
            Aproveite as
            <span className="block text-white">melhores condições</span>
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

export default BannerTwo;
