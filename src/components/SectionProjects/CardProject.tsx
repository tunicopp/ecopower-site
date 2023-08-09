"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import LinkArrow from "../global/LinkArrow";
import { motion } from "framer-motion";

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

  const fadeAnimations = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        type: "spring",
      },
    }),
  };

  return (
    <motion.div
      variants={fadeAnimations}
      initial="initial"
      whileInView="animate"
      custom={index}
      viewport={{ once: true }}
      className={twMerge(
        "relative flex flex-col  h-[480px] rounded-3xl p-[32px]",
        calculateColSpan(index)
      )}
    >
      <Image
        src={image}
        alt="card image"
        quality={100}
        className="rounded-3xl absolute inset-0 object-fill"
      />
      <div className="absolute inset-0 gradient-black rounded-3xl" />
      <div className="flex flex-1">
        <div className="items-center flex text-white z-10 px-4 py-2 bg-primary-green rounded-3xl h-[32px] w-fit ">
          {textTag}
        </div>
      </div>
      <h4 className="text-white text-[32px] font-bold z-10">{title}</h4>
      <p className="text-white  z-10">{subTitle}</p>
      <LinkArrow className="text-white z-10" text="Ver Projeto" />
    </motion.div>
  );
};

export default CardProject;
