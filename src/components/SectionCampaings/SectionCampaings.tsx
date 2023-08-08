"use client";
import React from "react";
import GridContainer from "../global/GridContainer";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CampaingSlide from "./CampaingSlide";
import campaing1 from "../../../public/assets/images/section-campaing/campaing-1.png";
import campaing2 from "../../../public/assets/images/section-campaing/campaing-2.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SectionCampaings: React.FC = () => {
  return (
    <section className="py-[110px]">
      <GridContainer className="flex-col items-center relative">
        <TitleComponent>Campanhas Ativas</TitleComponent>
        <span className="font-medium text-grayscale-400 mb-[112px]">
          A luz que não apenas ilumina, mas também protege o nosso planeta
        </span>
        <div className="relative w-full">
          <button
            id="prev-campaing"
            className="style-navigation-hero -left-12 !bg-beige-200"
          >
            <MdChevronLeft />
          </button>
          <Swiper
            slidesPerView={3.5}
            spaceBetween={24}
            className="w-full"
            draggable
            modules={[Navigation]}
            navigation={{ nextEl: "#next-campaing", prevEl: "#prev-campaing" }}
          >
            <SwiperSlide>
              <CampaingSlide
                title="Promoção Meu Solar"
                description="Kit Meu Solar 2.2kWp + fogão por indução elétrica"
                price="Parcelas a partir de R$ 214,26*"
                src={campaing1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CampaingSlide
                title="Promoção Meu Lar com Ecopower"
                description="Kit Meu Solar 2.2kWp + fogão por indução elétrica"
                price="Parcelas a partir de R$ 214,26*"
                src={campaing2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CampaingSlide
                title="Promoção Meu Lar com Ecopower"
                description="Kit Meu Solar 2.2kWp + fogão por indução elétrica"
                price="Parcelas a partir de R$ 214,26*"
                src={campaing2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CampaingSlide
                title="Promoção Meu Lar com Ecopower"
                description="Kit Meu Solar 2.2kWp + fogão por indução elétrica"
                price="Parcelas a partir de R$ 214,26*"
                src={campaing2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <CampaingSlide
                title="Promoção Meu Lar com Ecopower"
                description="Kit Meu Solar 2.2kWp + fogão por indução elétrica"
                price="Parcelas a partir de R$ 214,26*"
                src={campaing2}
              />
            </SwiperSlide>
          </Swiper>
          <button
            id="next-campaing"
            className="style-navigation-hero -right-12 !bg-beige-200"
          >
            <MdChevronRight />
          </button>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionCampaings;
