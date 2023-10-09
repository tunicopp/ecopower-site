"use client";
import React, { useEffect, useState } from "react";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import BannerOne from "./BannerOne";
import BannerTwo from "./BannerTwo";
import BannerThree from "./BannerThree";
import { isMobileDevice } from "@/utils/device";

interface HeroSliderInterface {
  isMobile: boolean;
}

const HeroSlider: React.FC<HeroSliderInterface> = ({ isMobile }) => {
  return (
    <>
      <div className="lg:absolute overflow-hidden hero-slider-wrapper mt-16 lg:mt-10 bottom-0 left-0 z-0">
        <Swiper
          loop
          autoplay
          slidesPerView={1}
          className="lg:h-[582px] h-[605px]"
          direction="horizontal"
          modules={[Navigation, Pagination, Autoplay]}
          draggable={!isMobile}
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
          <SwiperSlide className="overflow-hidden">
            <BannerOne />
          </SwiperSlide>
          {!isMobile && (
            <>
              <SwiperSlide className="overflow-hidden">
                <BannerTwo />
              </SwiperSlide>
              <SwiperSlide className="overflow-hidden">
                <BannerThree />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
