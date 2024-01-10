"use client";
import Carroussel from "@/components/global/Carroussel";
import CardSlider from "@/components/slider/CardSlider";
import CardSliderProduct from "@/components/slider/CardSliderProduct";
import { productsCardsGroup2 } from "@/utils/carrousselData";
import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const SliderProducts: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center relative  py-[100px] ">
      <h2 className="text-grayscale-900 text-[48px] leading-[110%] font-semibold max-w-[807px] text-center">
        Veja Outros Produtos
      </h2>
      <p className="text-lg leading-[150%] max-w-[807px] mt-6 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
      <Carroussel className="mt-[80px] lg:mt-16">
        {productsCardsGroup2.map((card, index) => (
          <SwiperSlide key={card.id}>
            <CardSliderProduct
              image={card.image}
              index={index}
              title={card.title}
            />
          </SwiperSlide>
        ))}
      </Carroussel>
    </div>
  );
};

export default SliderProducts;
