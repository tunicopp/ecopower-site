"use client";

import Link from "next/link";
import React from "react";
import TitleComponent from "../global/TitleComponent";
import cardImage from "./../../../public/assets/images/img-card.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import CardSlider from "../slider/CardSlider";
import { SwiperSlide } from "swiper/react";
import { Swiper } from "swiper/react";

const SectionSlide: React.FC = () => {
  return (
    <section className="w-full h-screen pt-[66px] flex flex-col items-center">
      <TitleComponent>Conheça nossos produtos</TitleComponent>
      <Link href="/" className="hover:underline">
        <p className="font-medium mt-4">Ver todos os produtos</p>
      </Link>

      <div className="flex mt-12 w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          className="mySwiper"
          modules={[]}
        >
          <SwiperSlide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <CardSlider />
            <CardSlider />

            <CardSlider />

            <CardSlider />

            <CardSlider />

            <CardSlider />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionSlide;
