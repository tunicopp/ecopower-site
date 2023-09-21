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
import { useSwiperSlide } from "swiper/react";
import { useGlobalContext } from "@/app/context/store";

const BannerTwo: React.FC = () => {
  const swiperSlide = useSwiperSlide();
  const { onChangeSlide } = useGlobalContext();

  useEffect(() => {
    if (swiperSlide.isActive) onChangeSlide(2);
  }, [swiperSlide.isActive]);

  return (
    <>
      <div className="absolute top-[60px] -right-[40px]">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute top-[160px] left-0 right-0 w-[129px] mx-auto">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute top-[40%] -left-[50px]">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute bottom-[320px] right-[210px]">
        <Image
          loading="lazy"
          src={sun}
          alt="Sol"
          quality={100}
          className="h-[168px] w-[168px]"
        />
      </div>
      <div className="absolute bottom-0 right-0">
        <Image
          loading="lazy"
          src={family}
          alt="Família"
          quality={100}
          className="w-[1002px] h-[598px]"
        />
      </div>
      <div className="absolute bottom-0 right-[80px]">
        <Image
          loading="lazy"
          src={houseRight}
          alt="Casa"
          quality={100}
          className="w-[285px] h-[147px]"
        />
      </div>
      <div className="absolute -bottom-[10px] left-0">
        <Image
          loading="lazy"
          src={houseLeftOne}
          alt="Casa"
          quality={100}
          className="w-[320px] h-[272px]"
        />
      </div>
      <div className="absolute -bottom-[20px] left-[300px]">
        <Image
          loading="lazy"
          src={houseLeftTwo}
          alt="Casa"
          quality={100}
          className="w-[259px] h-[155px]"
        />
      </div>
      <div className="absolute -bottom-[20px] left-[590px]">
        <Image
          loading="lazy"
          src={tree}
          alt="Árvore"
          quality={100}
          className="w-[29px] h-[143px]"
        />
      </div>
    </>
  );
};

export default BannerTwo;
