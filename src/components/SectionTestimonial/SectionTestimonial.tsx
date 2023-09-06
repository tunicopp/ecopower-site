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
      <Reveal className="px-6">
        <TitleComponent className="leading-none">
          O que dizem nossos clientes
        </TitleComponent>
      </Reveal>
      <Reveal className="px-6 mb-0 mb:mb-[112px] mt-6" delay={0.4}>
        <span className="font-medium text-grayscale-400">
          Lorem ipsum dolor sit amet consectetur.
        </span>
      </Reveal>
      <div className="relative flex w-full mt-[88px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          className="w-full !px-6 lg:!px-[110px] !transform-none"
          draggable
          modules={[Navigation]}
          navigation={{
            nextEl: "#next-testimonial",
            prevEl: "#next-testimonial",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {testimonialData.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialSlide {...t} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          id="next-testimonial"
          className="style-navigation-products !hidden lg:!flex left-6 !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-testimonial"
          className="style-navigation-products !hidden lg:!flex right-6 !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SectionTestimonial;
