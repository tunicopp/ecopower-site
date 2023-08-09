"use client";
import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LottieAnimation } from "react-lottie-tools";
import mainLottie from "../../../public/assets/lottie/main-lottie.json";
import "swiper/css/pagination";

interface HeroSliderProps {
  timeline: "to" | "from";
}

const HeroSlider: React.FC<HeroSliderProps> = ({ timeline }) => {
  return (
    <div className="absolute hero-slider-wrapper top-[40px] left-0 z-0">
      <Swiper
        slidesPerView={1}
        direction="horizontal"
        modules={[Navigation, Pagination]}
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
          <LottieAnimation
            animation={mainLottie}
            style={{ height: "582px", width: "100%" }}
            rendererSettings={{ preserveAspectRatio: "xMinYMax slice" }}
            currentTimeline={timeline}
            frames={[0, 76]}
          />
        </SwiperSlide>
        {/* <SwiperSlide>
          <LottieAnimation
            animation={mainLottie}
            style={{ height: "582px", width: "100%" }}
            rendererSettings={{ preserveAspectRatio: "xMinYMax slice" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LottieAnimation
            animation={mainLottie}
            style={{ height: "582px", width: "100%" }}
            rendererSettings={{ preserveAspectRatio: "xMinYMax slice" }}
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
