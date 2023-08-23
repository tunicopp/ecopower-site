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

const SectionEvents: React.FC = () => {
  return (
    <section className="bg-beige-300 pb-[110px]">
      <GridContainer className="flex-col items-center">
        <div className="flex flex-col w-full items-center relative mb-12">
          <TitleComponent>Eventos que patrocinamos</TitleComponent>
          <h3 className="mt-3 text-xl">
            Lorem ipsum dolor sit amet consectetur elit
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
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
          <SwiperSlide>
            <EventSlide />
          </SwiperSlide>
        </Swiper>
        <div id="bullets-event" className="text-center mt-[50px]"></div>
      </GridContainer>
    </section>
  );
};

export default SectionEvents;
