import React, { HTMLProps, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { productsCardsGroup } from "@/utils/carrousselData";
import { twMerge } from "tailwind-merge";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

interface RevealProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Carroussel: React.FC<RevealProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={twMerge("flex  w-full scrollDiv group", className)}
      {...rest}
    >
      <Swiper
        onInit={(swiper) => {
          swiper.animating = false;
        }}
        direction={"horizontal"}
        slidesPerView={3.2}
        spaceBetween={20}
        grabCursor={true}
        className="mySwiper !px-[110px]"
        modules={[Navigation]}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
      >
        {children}

        <button
          id="prev"
          className="style-navigation-hero left-6 !bg-beige-200 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MdChevronLeft />
        </button>
        <button
          id="next"
          className="style-navigation-hero right-6 !bg-beige-200 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <MdChevronRight />
        </button>
      </Swiper>
    </div>
  );
};

export default Carroussel;
