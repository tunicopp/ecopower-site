"use client";
import React, { useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { LottieAnimation } from "react-lottie-tools";
import mainLottie from "../../../public/assets/lottie/main-lottie.json";
import mainLottieMobile from "../../../public/assets/lottie/main-lottie-mobile.json";
import "swiper/css/pagination";

interface HeroSliderProps {
  timeline: "to" | "from";
}

const HeroSlider: React.FC<HeroSliderProps> = ({ timeline }) => {
  return (
    <div className="lg:absolute hero-slider-wrapper mt-16 lg:mt-10 top-[40px] left-0 z-0">
      <Swiper
        slidesPerView={1}
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
        <SwiperSlide>
          <div className="hidden lg:block">
            <LottieAnimation
              animation={mainLottie}
              style={{ height: "584px", width: "100%" }}
              rendererSettings={{ preserveAspectRatio: "xMinYMax slice" }}
              currentTimeline={timeline}
              frames={[0, 61]}
            />
          </div>
          <div className="lg:hidden">
            <LottieAnimation
              animation={mainLottieMobile}
              style={{ height: "584px", width: "100%" }}
              rendererSettings={{ preserveAspectRatio: "xMidYMax slice" }}
              justPlayInView
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hidden lg:block">
            <LottieAnimation
              animation={mainLottie}
              style={{ height: "584px", width: "100%" }}
              rendererSettings={{ preserveAspectRatio: "xMinYMax slice" }}
              currentTimeline={timeline}
              frames={[0, 61]}
            />
          </div>
          <div className="lg:hidden">
            <LottieAnimation
              animation={mainLottieMobile}
              style={{ height: "584px", width: "100%" }}
              rendererSettings={{ preserveAspectRatio: "xMinYMax slice" }}
              justPlayInView
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
