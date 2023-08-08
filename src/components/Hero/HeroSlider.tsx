"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import banner from "../../../public/assets/images/hero-slider.png";
import "swiper/css/pagination";

const HeroSlider: React.FC = () => {
  return (
    <div className="absolute hero-slider-wrapper top-[40px] left-0 z-0">
      <Swiper
        slidesPerView={1}
        direction="horizontal"
        modules={[Navigation, Pagination]}
        draggable
        pagination={{
          clickable: true,
          renderBullet(_, className) {
            return `<span class="!bg-white !opacity-100 ${className}"></span>`;
          },
          bulletActiveClass: "active-bullet",
          horizontalClass: "!bottom-[48px]",
        }}
        navigation={{ nextEl: "#next-hero", prevEl: "#prev-hero" }}
      >
        <SwiperSlide>
          <Image
            src={banner}
            alt="Hero Banner"
            className="w-full h-[582px] object-cover"
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner}
            alt="Hero Banner"
            className="w-full h-[582px] object-cover"
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner}
            alt="Hero Banner"
            className="h-full w-full object-cover"
            quality={100}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
