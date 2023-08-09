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

const SectionSlide: React.FC = () => {
  return (
    <section className="relative w-full pb-20 pt-[66px] flex flex-col items-center overflow-x-hidden ">
      <div className="absolute flex justify-center items-center top-0 -mt-[30px] w-[80px] h-[80px] rounded-full bg-white text-3xl z-50">
        <AiOutlineArrowDown style={{ marginBottom: "15px" }} />
      </div>
      <div className="absolute top-[18%] left-[0%] animate-fly">
        <Cloud1 />
      </div>
      <div className="absolute top-[5%] right-[0%] animate-fly2">
        <Cloud2 />
      </div>
      <Reveal>
        <TitleComponent>Conheça nossos produtos</TitleComponent>
      </Reveal>
      <Reveal delay={0.4}>
        <Link href="/" className="hover:underline">
          <p className="font-medium mt-4">Ver todos os produtos</p>
        </Link>
      </Reveal>
      <motion.div
        className="w-full"
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
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
      </motion.div>
    </section>
  );
};

export default SectionSlide;
