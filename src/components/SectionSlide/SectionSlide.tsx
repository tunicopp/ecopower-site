"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import TitleComponent from "../global/TitleComponent";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import CardSlider from "../slider/CardSlider";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import Cloud2 from "../../../public/assets/icons/Cloud2";
import Cloud1 from "../../../public/assets/icons/Cloud1";

const cardsGroup = [
  { id: 1, card: CardSlider },
  { id: 2, card: CardSlider },
  { id: 3, card: CardSlider },
  { id: 4, card: CardSlider },
  { id: 5, card: CardSlider },
  { id: 6, card: CardSlider },
  { id: 7, card: CardSlider },
  { id: 8, card: CardSlider },
  { id: 9, card: CardSlider },
  { id: 10, card: CardSlider },
];

const SectionSlide: React.FC = () => {
  return (
    <section className="relative w-full pb-20 pt-[66px] flex flex-col items-center">
      <div className="absolute flex justify-center items-center top-0 -mt-[30px] w-[80px] h-[80px] rounded-full bg-white text-3xl ">
        <AiOutlineArrowDown style={{ marginBottom: "15px" }} />
      </div>
      <div className="absolute top-[18%] left-[0%] animate-fly">
        <Cloud1 />
      </div>
      <div className="absolute top-[5%] right-[0%] animate-fly2">
        <Cloud2 />
      </div>
      <TitleComponent>Conheça nossos produtos</TitleComponent>
      <Link href="/" className="hover:underline">
        <p className="font-medium mt-4">Ver todos os produtos</p>
      </Link>

      <div className="flex mt-16 w-full scrollDiv group">
        <Swiper
          direction={"horizontal"}
          slidesPerView={3.5}
          spaceBetween={20}
          grabCursor={true}
          className="mySwiper"
          style={{ paddingLeft: "110px" }}
          modules={[Navigation]}
          navigation={{
            nextEl: "#next",
            prevEl: "#prev",
          }}
        >
          {cardsGroup.map((card) => (
            <SwiperSlide key={card.id}>{card.card}</SwiperSlide>
          ))}
          <div id="next" className="style-navigation right-[5%] ">
            <FaChevronCircleRight />
          </div>
          <div id="prev" className="style-navigation left-[5%] ">
            <FaChevronCircleLeft />
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionSlide;
