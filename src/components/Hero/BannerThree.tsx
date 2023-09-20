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
import { useSwiperSlide } from "swiper/react";
import { useGlobalContext } from "@/app/context/store";

const BannerThree: React.FC = () => {
  const swiperSlide = useSwiperSlide();
  const { onChangeSlide } = useGlobalContext();

  useEffect(() => {
    if (swiperSlide.isActive) onChangeSlide(3);
  }, [swiperSlide.isActive]);

  return (
    <>
      <div className="absolute top-[150px] left-[80px]">
        <Image
          loading="lazy"
          src={cloudOne}
          alt="Sol"
          quality={100}
          className="h-[36px] w-[129px]"
        />
      </div>
      <div className="absolute -bottom-[50px] left-[10px]">
        <Image
          loading="lazy"
          src={houseOne}
          alt="Casa"
          quality={100}
          className="h-[363px] w-[310px]"
        />
      </div>
      <div className="absolute -bottom-[20px] -left-[110px]">
        <Image
          loading="lazy"
          src={houseTwo}
          alt="Casa"
          quality={100}
          className="h-[200px] w-[320px]"
        />
      </div>
      <div className="absolute -bottom-[20px] left-[350px]">
        <Image
          loading="lazy"
          src={tree}
          alt="Árvore"
          quality={100}
          className="w-[29px] h-[143px]"
        />
      </div>
      <div className="absolute right-[37%] -bottom-[90px]">
        <Image
          loading="lazy"
          src={houseThree}
          alt="Casa"
          quality={100}
          className="h-[240px] w-[320px]"
        />
      </div>
      <div className="flex items-end gap-6 absolute right-[400px] -bottom-[10px]">
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
      <div className="absolute bottom-0 -right-[162px]">
        <Image
          loading="lazy"
          src={houseTwo}
          alt="Casa"
          quality={100}
          className="h-[200px] w-[320px]"
        />
      </div>
      <div className="absolute right-[40px] bottom-0">
        <Image
          loading="lazy"
          src={motherAndDaughter}
          alt="Mãe e Filha"
          quality={100}
          className="h-[598px] w-[580px]"
        />
      </div>
    </>
  );
};

export default BannerThree;
