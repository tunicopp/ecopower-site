"use client";
import React from "react";
import "swiper/css/pagination";
import Image from "next/image";
import cloudTwo from "../../../public/assets/images/hero/cloud-2.png";
import heroMobile from "../../../public/assets/images/hero/banner-hero-mobile.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";

const HeroSlider: React.FC = () => {
  return (
    <>
      <div className="lg:absolute overflow-hidden lg:block hidden hero-slider-wrapper mt-16 lg:mt-10 bottom-0 left-0 z-0">
        <Swiper
          slidesPerView={1}
          className="lg:h-[582px] h-[512px]"
          direction="horizontal"
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            renderBullet(_, className) {
              return `<span class="!bg-white mx-[6px] !opacity-100 ${className}"></span>`;
            },
            bulletActiveClass: "active-bullet",
            horizontalClass: "bullets",
            el: "#bullets",
          }}
          navigation={{ nextEl: "#next-hero", prevEl: "#prev-hero" }}
        >
          <SwiperSlide className="overflow-hidden bg-primary-green">
            <BannerOne />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden bg-banner-two">
            <BannerTwo />
          </SwiperSlide>
          <SwiperSlide className="overflow-hidden bg-banner-three">
            <BannerThree />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:hidden block relative overflow-hidden">
        <div className="absolute -right-[43px] top-[94px]">
          <Image
            loading="eager"
            src={cloudTwo}
            alt="Nuvem"
            quality={100}
            className="h-[36px] w-[130px]"
          />
        </div>
        <div className="absolute flex flex-col items-center gap-2 w-[307px] top-[110px] left-0 right-0 mx-auto">
          <span className="text-white text-lg">EcoPower</span>
          <h1 className="text-white font-semibold text-[30px] text-center">
            Energia Solar ao seu alcance
          </h1>
        </div>
        <Image src={heroMobile} alt="Zezé di Camargo" className="w-full" />
      </div>
    </>
  );
};

export default HeroSlider;
