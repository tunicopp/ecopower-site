"use client";
import ComponentWithChildren from "@/@types/ComponentWithChildren";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

interface Props extends ComponentWithChildren {
  images: string[];
  title: string;
  onClick: () => void;
}

const MegaMenuProductItem: React.FC<Props> = ({
  children,
  images,
  title,
  onClick,
}) => {
  return (
    <div className="p-4 bg-white flex flex-col gap-4 rounded-3xl flex-1 h-[560px]">
      <div className="flex gap-4 justify-between relative">
        <button
          id={`prev-product-menu-${title.replace(" ", "")}`}
          className="text-[32px] text-grayscale-400 p-2 cursor-pointer"
        >
          <MdChevronLeft />
        </button>
        <Swiper
          slidesPerView={1}
          modules={[Navigation]}
          autoHeight
          direction="horizontal"
          navigation={{
            nextEl: `#next-product-menu-${title.replace(" ", "")}`,
            prevEl: `#prev-product-menu-${title.replace(" ", "")}`,
          }}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <Image
                src={image}
                alt={title}
                className="max-w-[245px] w-[245px] h-[245px] max-h-[245px] object-cover rounded-xl"
                width={245}
                height={245}
                quality={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          id={`next-product-menu-${title.replace(" ", "")}`}
          className="text-[32px] text-grayscale-400 p-2 cursor-pointer"
        >
          <MdChevronRight />
        </button>
      </div>

      <b className="text-xl text-grayscale-900 font-semibold">{title}</b>
      <p className="text-base text-grayscale-400">{children}</p>
      <Link
        href="/products"
        className="flex items-center gap-1 mt-auto text-2xl text-primary-green"
      >
        <span
          className="font-semibold text-base text-primary-green"
          onClick={onClick}
        >
          Ver Produtos
        </span>
        <MdChevronRight />
      </Link>
    </div>
  );
};

export default MegaMenuProductItem;
