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
import circle from "../../../public/assets/images/hero/circle.png";
import panel from "../../../public/assets/images/hero/panel.png";
import doubleTree from "../../../public/assets/images/hero/double-tree.png";
import sun from "../../../public/assets/images/hero/sun.png";

// interface HeroSliderProps {
//   timeline: "to" | "from";
// }

const HeroSlider: React.FC = () => {
  return (
    <div className="lg:absolute hero-slider-wrapper mt-16 lg:mt-10 bottom-0 left-0 z-0">
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
        <SwiperSlide>
          <div className="absolute lg:-right-[69px] right-[219px] lg:-bottom-[138px] -bottom-[55px] lg:group-hover:right-[11px] lg:group-hover:rotate-[30deg] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={circle}
              alt="Circle"
              quality={100}
              className="lg:h-[612px] lg:w-[626px] min-w-[477px] min-h-[477px] w-[477px] h-[477px]"
            />
          </div>
          <div className="absolute hidden lg:block right-[256px] -bottom-[106px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={doubleTree}
              alt="Double Tree"
              quality={100}
              className="h-[205px] w-[82px]"
            />
          </div>
          <div className="absolute lg:-right-[317px] -right-[140px] bottom-[133px] lg:group-hover:-right-[180px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={panel}
              alt="Panel"
              quality={100}
              className="lg:h-[151px] lg:w-[507px] min-w-[395px] min-h-[118px] w-[395px] h-[118px]"
            />
          </div>
          <div className="absolute hidden lg:block right-[355px] top-[106px] group-hover:right-[25px] group-hover:scale-[1.23] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={sun}
              alt="Sol"
              quality={100}
              className="h-[168px] w-[168px]"
            />
          </div>
          <div className="absolute -right-[190px] lg:top-0 lg:bottom-auto bottom-0 lg:group-hover:right-[71px] group-hover:-right-[40px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={zezeDiCamargo}
              alt="Zezé di Camargo"
              quality={100}
              className="lg:h-[582px] lg:w-[597px] min-w-[502px] min-h-[489px] w-[502px] h-[489px]"
            />
          </div>
          <div className="absolute hidden lg:block left-[156px] top-[106px] group-hover:left-[30px] group-hover:scale-125 transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={cloudOne}
              alt="Nuvem"
              quality={100}
              className="h-[36px] w-[129px]"
            />
          </div>
          <div className="absolute hidden lg:block right-[563px] top-[81px] group-hover:top-[83px] group-hover:right-[526px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={cloudTwo}
              alt="Nuvem"
              quality={100}
              className="h-[27px] w-[97px]"
            />
          </div>
          <div className="absolute hidden lg:block -left-[32px] -bottom-[183px] group-hover:-bottom-[166px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseFour}
              alt="House"
              quality={100}
              className="h-[476px] w-[395px]"
            />
          </div>
          <div className="absolute hidden lg:block -left-[35px] bottom-[77px] group-hover:-left-[18px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={treeOne}
              alt="House"
              quality={100}
              className="h-[307px] w-[63px]"
            />
          </div>
          <div className="absolute hidden lg:block -left-[7px] -bottom-[121px] group-hover:-bottom-[93px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseThree}
              alt="House"
              quality={100}
              className="h-[271px] w-[319px]"
            />
          </div>
          <div className="absolute hidden lg:block left-[342px] -bottom-[37px] group-hover:-bottom-[3px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={treeTwo}
              alt="Tree"
              quality={100}
              className="h-[197px] w-[40px]"
            />
          </div>
          <div className="absolute hidden lg:block right-[450px] -bottom-[162px] group-hover:-bottom-[119px] transition-all duration-1000 ease-in-out">
            <Image
              loading="eager"
              src={houseOne}
              alt="Tree"
              quality={100}
              className="h-[363px] w-[339px]"
            />
          </div>
          <div className="absolute hidden lg:block left-[410px] -bottom-[109px] group-hover:-bottom-[90px] transition-all duration-1000 ease-in-out">
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
