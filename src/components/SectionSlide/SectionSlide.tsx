"use client";
import Link from "next/link";
import React from "react";
import TitleComponent from "../global/TitleComponent";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { SwiperSlide } from "swiper/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Cloud2 from "../../../public/assets/icons/Cloud2";
import Cloud1 from "../../../public/assets/icons/Cloud1";
import Reveal from "../global/Reveal";
import Carroussel from "../global/Carroussel";
import { productsCardsGroup } from "@/utils/carrousselData";
import { motion } from "framer-motion";
import cloud from "../../../public/assets/icons/cloud.svg";
import Image from "next/image";

const SectionSlide: React.FC = () => {
  return (
    <section className="relative w-full pb-20 px-6 sm:px-0 pt-[66px] flex flex-col sm:items-center">
      <div className="absolute -top-[30px] z-50">
        <Image src={cloud} alt="Cloud Arrow" width={104} height={56} />
      </div>
      <div className="absolute top-[18%] left-[0%] animate-fly">
        <Cloud1 />
      </div>
      <div className="absolute top-[5%] right-[0%] animate-fly2">
        <Cloud2 />
      </div>
      <TitleComponent>Conheça nossos produtos</TitleComponent>
      <Link href="/" className="z-10 hover:underline">
        <p className="font-medium mt-4">Ver todos os produtos</p>
      </Link>
      {/* <motion.div
        className="w-full"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{
          duration: 1,
          x: {
            type: "spring",
            damping: 5,
          },
        }}
      >
        <Carroussel className="mt-16">
          {productsCardsGroup.map((card) => (
            <SwiperSlide key={card.id}>{card.card}</SwiperSlide>
          ))}
        </Carroussel>
      </motion.div> */}
      <Carroussel className="mt-16">
        {productsCardsGroup.map((card) => (
          <SwiperSlide key={card.id}>{card.card}</SwiperSlide>
        ))}
      </Carroussel>
    </section>
  );
};

export default SectionSlide;
