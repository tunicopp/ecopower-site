"use client";

import React, { useEffect, useRef } from "react";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar, Mousewheel, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { useGlobalContext } from "@/app/context/store";
import CardScroll, { CardScrollContent } from "./CardScroll";
import { FactoryImage, FarmImage, HouseImage, StoreImage } from "./ImageCard";
import { useInView } from "framer-motion";

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

const SectionSolutions: React.FC = () => {
  const { cardId } = useGlobalContext();
  const centerRef = useRef(null);
  const isInView = useInView(centerRef, {
    margin: "-20% 0px -80% 0px",
  });

  // useEffect(() => {
  //   console.log(isInView);
  // }, [isInView]);

  return (
    <section className="flex pt-[110px] md:pt-0 w-full  md:min-h-[1000px] relative flex-col md:items-center md:p-[108px] bg-solutions">
      <Reveal className="max-w-[690px] md:text-center px-6">
        <TitleComponent>
          Soluções feitas sob medida para o seu segmento
        </TitleComponent>
      </Reveal>
      <Reveal delay={0.4} className="px-6">
        <p className="font-medium mt-4 text-lg">
          Lorem ipsum dolor sit amet consectetur.
        </p>
      </Reveal>

      <div
        className=" flex max-w-full flex-col md:flex-row items-center justify-center mt-[100px] bg-white md:bg-transparent"
        ref={centerRef}
        id="scrollDiv"
      >
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          spaceBetween={10}
          mousewheel={{
            eventsTarget: "#scrollDiv",
            releaseOnEdges: true,
            sensitivity: 2,
          }}
          modules={[Mousewheel, Navigation]}
          className="mySwiper w-full md:max-w-[515px]"
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
        <div className=" relative w-full mb-[110px] md:mb-0 h-[208px] md:w-[880px] md:h-[524px] md:bg-transparent flex items-center md:-ml-[8%] px-6 md:px-0 rounded-3xl ">
          {cards.map((card) => (
            <card.cardImg key={card.id} id={card.id}></card.cardImg>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSolutions;
