"use client";
import React from "react";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CampaingSlide from "./CampaingSlide";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Reveal from "../global/Reveal";
import { campaingData } from "@/utils/campaingData";

const SectionCampaings: React.FC = () => {
  return (
    <section className="relative py-[110px] flex flex-col md:items-center">
      <Reveal className="px-6">
        <TitleComponent>Campanhas Ativas</TitleComponent>
      </Reveal>
      <Reveal className="md:mb-[112px] px-6 text-center" delay={0.4}>
        <span className="font-medium text-grayscale-400">
          A luz que não apenas ilumina, mas também protege o nosso planeta
        </span>
      </Reveal>
      <div className="flex w-full md:hidden my-6 px-6 items-center justify-between">
        <button
          id="prev-campaing"
          className="style-navigation-campaing !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-campaing"
          className="style-navigation-campaing !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        className="w-full !px-6 md:!px-[110px]"
        direction="horizontal"
        draggable
        modules={[Navigation]}
        navigation={{ nextEl: "#next-campaing", prevEl: "#prev-campaing" }}
        breakpoints={{
          768: {
            slidesPerView: 3.2,
          },
        }}
      >
        {campaingData.map((c, i) => (
          <SwiperSlide key={i}>
            <CampaingSlide {...c} />
          </SwiperSlide>
        ))}
        <button
          id="prev-campaing"
          className="style-navigation-hero !hidden md:!flex left-6 !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-campaing"
          className="style-navigation-hero !hidden md:!flex right-6 !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </Swiper>
    </section>
  );
};

export default SectionCampaings;
