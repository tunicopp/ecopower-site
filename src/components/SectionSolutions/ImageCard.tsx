"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import arrowUpRight from "../../../public/assets/icons/arrow_outward.svg";

type Props = {
  children: React.ReactNode;
  bg: string;
} & Cards;

type Cards = {
  id: number;
};
const ImageCard: React.FC<Props> = ({ children, id, bg }) => {
  const { cardId } = useGlobalContext();
  return (
    <div
      className={twMerge(
        "absolute left-[24px] right-[24px] h-full lg:inset-0 rounded-3xl transition-opacity",
        bg,
        cardId === id ? "opacity-100" : "opacity-0",
      )}
    >
      {children}
    </div>
  );
};

export const HouseImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-house">
      <a className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer">
        Projeto Casa Geraldo
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </a>
    </ImageCard>
  );
};
export const StoreImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-store">
      <a className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer">
        Projeto Sperta Honda
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </a>
    </ImageCard>
  );
};

export const FactoryImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-factory">
      <a className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer">
        Projeto Metalúrgica Igarapava
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </a>
    </ImageCard>
  );
};

export const FarmImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-farm">
      <a className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer">
        Projeto Dois Lagos
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </a>
    </ImageCard>
  );
};
