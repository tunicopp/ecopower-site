"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// import { LottieAnimation } from "react-lottie-tools";
// import mainLottie from "../../../public/assets/lottie/main-lottie.json";
// import mainLottieMobile from "../../../public/assets/lottie/main-lottie-mobile.json";
import "swiper/css/pagination";
import Image from "next/image";
import zezeDiCamargo from "../../../public/assets/images/hero/zeze-di-camargo.png";
import cloudOne from "../../../public/assets/images/hero/cloud-1.png";
import cloudTwo from "../../../public/assets/images/hero/cloud-2.png";
import houseFour from "../../../public/assets/images/hero/house-4.png";
import houseThree from "../../../public/assets/images/hero/house-3.png";
import houseTwo from "../../../public/assets/images/hero/house-2.png";
import houseOne from "../../../public/assets/images/hero/house-1.png";
import treeOne from "../../../public/assets/images/hero/tree-1.png";
import treeTwo from "../../../public/assets/images/hero/tree-2.png";

// interface HeroSliderProps {
//   timeline: "to" | "from";
// }

const HeroSlider: React.FC = () => {
  return (
    <div className="lg:absolute hero-slider-wrapper mt-16 lg:mt-10 -top-[40px] left-0 z-0">
      <Swiper
        slidesPerView={1}
        className="h-[582px]"
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
          <div className="absolute -right-[190px] top-0 group-hover:right-0 transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={zezeDiCamargo}
              alt="Zezé di Camargo"
              quality={100}
              className="h-[582px] w-[597px]"
            />
          </div>
          <div className="absolute left-[156px] top-[106px] group-hover:left-[30px] group-hover:scale-125 transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={cloudOne}
              alt="Nuvem"
              quality={100}
              className="h-[36px] w-[129px]"
            />
          </div>
          <div className="absolute right-[563px] top-[81px] group-hover:top-[83px] group-hover:right-[526px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={cloudTwo}
              alt="Nuvem"
              quality={100}
              className="h-[27px] w-[97px]"
            />
          </div>
          <div className="absolute -left-[32px] -bottom-[183px] group-hover:-bottom-[166px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseFour}
              alt="House"
              quality={100}
              className="h-[476px] w-[395px]"
            />
          </div>
          <div className="absolute -left-[35px] bottom-[77px] group-hover:-left-[18px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={treeOne}
              alt="House"
              quality={100}
              className="h-[307px] w-[63px]"
            />
          </div>
          <div className="absolute -left-[7px] -bottom-[121px] group-hover:-bottom-[93px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseThree}
              alt="House"
              quality={100}
              className="h-[271px] w-[319px]"
            />
          </div>
          <div className="absolute left-[342px] -bottom-[37px] group-hover:-bottom-[3px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={treeTwo}
              alt="Tree"
              quality={100}
              className="h-[197px] w-[40px]"
            />
          </div>
          <div className="absolute right-[450px] -bottom-[162px] group-hover:-bottom-[119px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseOne}
              alt="Tree"
              quality={100}
              className="h-[363px] w-[339px]"
            />
          </div>
          <div className="absolute left-[410px] -bottom-[109px] group-hover:-bottom-[90px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseTwo}
              alt="Tree"
              quality={100}
              className="h-[263px] w-[417px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
