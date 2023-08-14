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
    <section className="relative py-[110px] flex flex-col lg:items-center">
      <Reveal className="px-6">
        <TitleComponent>Campanhas Ativas</TitleComponent>
      </Reveal>
      <Reveal className="px-6 text-start" delay={0.4}>
        <span className="font-medium text-grayscale-400">
          A luz que não apenas ilumina, mas também protege o nosso planeta
        </span>
      </Reveal>
      <div className="relative flex w-full mt-[88px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          className="w-full !px-6 lg:!px-[110px]"
          direction="horizontal"
          draggable
          modules={[Navigation]}
          navigation={{ nextEl: "#next-campaing", prevEl: "#prev-campaing" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {campaingData.map((c, i) => (
            <SwiperSlide key={i}>
              <CampaingSlide {...c} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id="prev-campaing"
          className="style-navigation-campaing flex right-[88px] lg:left-6 !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-campaing"
          className="style-navigation-campaing flex right-6 !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SectionCampaings;
