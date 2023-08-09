"use client";
import React from "react";
import GridContainer from "../global/GridContainer";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialSlide from "./TestimonialSlide";
import campaing1 from "../../../public/assets/images/section-campaing/campaing-1.png";
import campaing2 from "../../../public/assets/images/section-campaing/campaing-2.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Reveal from "../global/Reveal";
import { testimonialData } from "@/utils/testimonialData";

const SectionTestimonial: React.FC = () => {
  return (
    <section className="relative py-[110px] flex flex-col items-center">
      <Reveal>
        <TitleComponent>O que dizem nossos clientes</TitleComponent>
      </Reveal>
      <Reveal className="mb-[112px] mt-6" delay={0.4}>
        <span className="font-medium text-grayscale-400">
          Lorem ipsum dolor sit amet consectetur.
        </span>
      </Reveal>
      <Swiper
        slidesPerView={3.2}
        spaceBetween={24}
        className="w-full !px-[110px] !transform-none"
        draggable
        modules={[Navigation]}
        navigation={{ nextEl: "#next-campaing", prevEl: "#prev-campaing" }}
      >
        {testimonialData.map((t, i) => (
          <SwiperSlide key={i}>
            <TestimonialSlide {...t} />
          </SwiperSlide>
        ))}
        <button
          id="prev-campaing"
          className="style-navigation-hero left-6 !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-campaing"
          className="style-navigation-hero right-6 !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </Swiper>
    </section>
  );
};

export default SectionTestimonial;
