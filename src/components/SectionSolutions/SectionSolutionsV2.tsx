"use client";
import React, { useRef } from "react";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import CardScroll, { CardScrollContent } from "./CardScroll";
import { FactoryImage, FarmImage, HouseImage, StoreImage } from "./ImageCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const cards = [
  {
    id: 1,
    cardImg: HouseImage,
    card: CardScrollContent.house,
  },
  {
    id: 2,
    cardImg: StoreImage,
    card: CardScrollContent.store,
  },
  {
    id: 3,
    cardImg: FactoryImage,
    card: CardScrollContent.factory,
  },
  {
    id: 4,
    cardImg: FarmImage,
    card: CardScrollContent.farm,
  },
];

const SectionSolutionsV2: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const centerRef = useRef(null);

  ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
    //autoRefreshEvents: ''
  });

  return (
    <section className="flex relative pt-[110px] w-full min-h-[2500px] lg:min-h-[2300px] flex-col lg:items-center z-[801] bg-white">
      <div className="flex flex-col w-full lg:items-center sticky inset-0 bg-solutions lg:p-[108px]">
        <Reveal className="max-w-[690px] lg:text-center px-6 overflow-visible">
          <TitleComponent className="lg:leading-[56px]">
            Soluções feitas sob medida para o seu segmento
          </TitleComponent>
        </Reveal>
        <Reveal delay={0.4} className="px-6">
          <p className="font-medium mt-4 text-lg">
            Cada projeto pensado de maneira única para nossos clientes.
          </p>
        </Reveal>

        <div
          className=" flex max-w-full flex-col lg:flex-row items-center justify-center mt-2 md:mt-[100px] bg-white lg:bg-transparent"
          ref={centerRef}
        >
          <Swiper
            direction={"horizontal"}
            slidesPerView={1}
            spaceBetween={10}
            modules={[Mousewheel, Navigation]}
            className="mySwiper w-full lg:max-w-[515px]"
          >
            {cards.map((i) => (
              <SwiperSlide
                key={i.id}
                style={{
                  display: "flex",
                }}
              >
                <CardScroll id={i.id}>{<i.card />}</CardScroll>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="relative w-full mb-[110px] lg:mb-0 h-[208px] lg:w-[880px] lg:h-[524px] lg:bg-transparent flex items-center lg:-ml-[8%] px-6 lg:px-0 rounded-3xl ">
            {cards.map((card) => (
              <card.cardImg key={card.id} id={card.id}></card.cardImg>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSolutionsV2;
