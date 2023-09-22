"use client";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import EventSlide from "./EventSlide";
import "swiper/css";
import "swiper/css/pagination";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const events = [
  {
    src: "/assets/images/sobre-nos/events/barretos.png",
    subTitle: "O maior rodeio do mundo",
    title: "Festa do Peão de Barretos",
  },
  {
    src: "/assets/images/sobre-nos/events/abf-expo.png",
    subTitle: "Maior feira de franquias do Brasil",
    title: "ABF Expo",
  },
  {
    src: "/assets/images/sobre-nos/events/agrishow.png",
    subTitle: "A maior feira agro do Brasil",
    title: "Agrishow",
  },
  {
    src: "/assets/images/sobre-nos/events/expointer.png",
    subTitle: "Exposição Internacional de Animais",
    title: "Expointer",
  },
  {
    src: "/assets/images/sobre-nos/events/bahia-farm-show.png",
    subTitle: "Feira de Tecnologia Agrícola",
    title: "Bahia Farm Show",
  },
  {
    src: "/assets/images/sobre-nos/events/maior-rodeio.png",
    subTitle: "Um dos maiores rodeios do Brasil",
    title: "Festa do Peão de Americana",
  },
  {
    src: "/assets/images/sobre-nos/events/capital-rodeio.png",
    subTitle: "Capital do rodeio no Paraná",
    title: "Festa do Peão de Colorado",
  },
  {
    src: "/assets/images/sobre-nos/events/agrotins.png",
    subTitle: "Feira agropecuária de Tocantins",
    title: "Agrotins",
  },
  {
    src: "/assets/images/sobre-nos/events/rural-show.png",
    subTitle: "Feira internacional de Rondônia",
    title: "Rondônia Rural Show",
  },
  {
    src: "/assets/images/sobre-nos/events/divinaexpo.png",
    subTitle: "Um dos maiores rodeios do Brasil",
    title: "Divinaexpo",
  },
  {
    src: "/assets/images/sobre-nos/events/agrobalsas.png",
    subTitle: "Maior evento agro do Maranhão",
    title: "AgroBalsas",
  },
];

const SectionEvents: React.FC = () => {
  return (
    <section className="bg-beige-300 pb-[110px]">
      <GridContainer className="flex-col items-center">
        <div className="flex flex-col w-full items-center relative mb-12">
          <TitleComponent>A energia que move os grandes eventos</TitleComponent>
          <h3 className="mt-3 text-xl">
            A EcoPower está presente e patrocina mais de 100 eventos em todo o
            Brasil.
          </h3>
          <div className="flex w-full justify-between">
            <button
              id="prev-event"
              className="style-navigation-event left-[20px] lg:left-3"
            >
              <MdChevronLeft />
            </button>
            <button
              id="next-event"
              className="style-navigation-event right-[20px] lg:right-3"
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={24}
          className="w-full"
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            renderBullet(_, className) {
              return `<span class="!bg-black mx-6 !h-[6px] !w-[26px] !rounded-2xl !opacity-10 ${className}"></span>`;
            },
            bulletActiveClass: "active-bullet-event",
            el: "#bullets-event",
          }}
          navigation={{ nextEl: "#next-event", prevEl: "#prev-event" }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {events.map(({ src, subTitle, title }, i) => (
            <SwiperSlide key={i}>
              <EventSlide src={src} subTitle={subTitle} title={title} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div id="bullets-event" className="text-center mt-[50px]"></div>
      </GridContainer>
    </section>
  );
};

export default SectionEvents;
