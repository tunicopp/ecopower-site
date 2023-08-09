import React, { HTMLProps, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { productsCardsGroup } from "@/utils/carrousselData";
import { twMerge } from "tailwind-merge";

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

        <div id="next" className="style-navigation right-[5%] ">
          <FaChevronCircleRight />
        </div>
        <div id="prev" className="style-navigation left-[5%] ">
          <FaChevronCircleLeft />
        </div>
      </Swiper>
    </div>
  );
};

export default Carroussel;
