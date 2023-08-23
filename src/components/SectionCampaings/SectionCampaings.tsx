"use client";
import React from "react";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CampaingSlide from "./CampaingSlide";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Reveal from "../global/Reveal";
import { campaingData } from "@/utils/campaingData";
import GridContainer from "../global/GridContainer";

const SectionCampaings: React.FC = () => {
  return (
    <section className="relative py-[110px] flex flex-col lg:items-center">
      <GridContainer>
        <div className="flex flex-col w-full items-center relative">
          <Reveal>
            <TitleComponent>Campanhas ativas</TitleComponent>
          </Reveal>
          <Reveal delay={0.4}>
            <h3 className="text-xl text-center">
              A luz que não apenas ilumina, mas também protege o nosso planeta
            </h3>
          </Reveal>
          <div className="flex w-full justify-between">
            <button
              id="prev-campaing"
              className="style-navigation-campaing left-[20px] lg:left-3"
            >
              <MdChevronLeft />
            </button>
            <button
              id="next-campaing"
              className="style-navigation-campaing right-[20px] lg:right-3"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
      </GridContainer>
      <div className="relative flex w-full mt-[80px]">
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
      </div>
    </section>
  );
};

export default SectionCampaings;
