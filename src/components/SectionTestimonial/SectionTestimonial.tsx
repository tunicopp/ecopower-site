"use client";
import React from "react";
import TitleComponent from "../global/TitleComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import TestimonialSlide from "./TestimonialSlide";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Reveal from "../global/Reveal";
import { testimonialData } from "@/utils/testimonialData";
import TestimonialSlideLocalVid from "@/components/SectionTestimonial/TestimonialSlideLocalVid";

const SectionTestimonial: React.FC = () => {
  return (
    <section className="relative py-[110px] flex flex-col items-center">
      <Reveal className="px-6">
        <TitleComponent className="leading-none text-center">
          O que dizem nossos clientes
        </TitleComponent>
      </Reveal>
      <Reveal className="px-6 mb-0 mb:mb-[112px] mt-6" delay={0.4}>
        <span className="font-medium text-grayscale-400">
          Confira os depoimentos de alguns deles
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
            prevEl: "#prev-testimonial",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.1,
            },
          }}
        >
          {testimonialData.map((t, i) => {
            if (i < 2) {
              return (
                <SwiperSlide key={i}>
                  <TestimonialSlideLocalVid {...t} />
                </SwiperSlide>
              );
            }

            return (
              <SwiperSlide key={i}>
                <TestimonialSlide {...t} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          id="prev-testimonial"
          className="style-navigation-products lg:!flex left-6 !bg-beige-200"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next-testimonial"
          className="style-navigation-products lg:!flex right-6 !bg-beige-200"
        >
          <MdChevronRight />
        </button>
      </div>
    </section>
  );
};

export default SectionTestimonial;
