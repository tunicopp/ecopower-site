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
    <section className="relative py-[110px] flex flex-col items-center">
      <Reveal>
        <TitleComponent>Campanhas Ativas</TitleComponent>
      </Reveal>
      <Reveal className="mb-[112px]" delay={0.4}>
        <span className="font-medium text-grayscale-400">
          A luz que não apenas ilumina, mas também protege o nosso planeta
        </span>
      </Reveal>
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        className="w-full !px-[110px]"
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
          className="style-navigation-hero left-6 !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-campaing"
          className="style-navigation-hero right-6 !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </Swiper>
    </section>
  );
};

export default SectionCampaings;
