import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import RigthArrowWhite from "../../../public/assets/icons/RigthArrowWhite";
import { title } from "process";

export interface CardProjectProps {
  index: number;
  image: StaticImageData;
  textTag: string;
  title: string;
  subTitle: string;
}

const CardProject: React.FC<CardProjectProps> = ({
  index,
  image,
  textTag,
  title,
  subTitle,
}) => {
  const calculateColSpan = (index: number) => {
    if (index === 0) {
      return "col-span-3";
    } else if (index === 1) {
      return "col-span-2";
    } else if (index === 2) {
      return "col-span-2";
    } else {
      return "col-span-3";
    }
  };
  return (
    <div
      className={twMerge(
        "relative flex flex-col  h-[480px] rounded-3xl p-[32px]",
        calculateColSpan(index)
      )}
    >
      <Image
        src={image}
        layout="fill"
        alt="card image"
        quality={100}
        className="rounded-3xl absolute inset-0 "
      />
      <div className="absolute inset-0 gradient-black rounded-3xl" />
      <div className="flex flex-1">
        <div className="items-center flex text-white z-10 px-4 py-2 bg-primary-green rounded-3xl h-[32px] w-fit ">
          {textTag}
        </div>
      </div>
      <h4 className="text-white text-[32px] font-bold z-10">{title}</h4>
      <p className="text-white  z-10">{subTitle}</p>
      <div className="flex items-center mt-4 gap-2 group/arrow cursor-pointer z-10">
        <p className="text-white font-semibold">Ver projeto</p>
        <div className="slide-arrow">
          <RigthArrowWhite />
        </div>
      </div>
    </div>
  );
};

export default CardProject;
