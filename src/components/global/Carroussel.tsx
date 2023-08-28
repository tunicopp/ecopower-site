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
      className={twMerge(
        "flex relative w-full scrollDiv group h-auto",
        className
      )}
      {...rest}
    >
      <Swiper
        onInit={(swiper) => {
          swiper.animating = false;
        }}
        direction={"horizontal"}
        slidesPerView={1}
        spaceBetween={20}
        grabCursor={true}
        className="mySwiper w-full h-auto lg:w-auto px-6 lg:!px-[110px]"
        modules={[Navigation]}
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: {
            slidesPerView: 3.2,
          },
        }}
        autoHeight
      >
        {children}
      </Swiper>
      <button
        id="prev"
        className="style-navigation-products flex right-16 lg:left-6 !bg-beige-200 lg:opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <MdChevronLeft />
      </button>
      <button
        id="next"
        className="style-navigation-products flex right-0 lg:right-6 !bg-beige-200 lg:opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <MdChevronRight />
      </button>
    </div>
  );
};

export default Carroussel;
