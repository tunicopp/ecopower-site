"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useGlobalContext } from "@/app/context/store";
import Image from "next/image";
import arrowUpRight from "../../../public/assets/icons/arrow_outward.svg";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  bg: string;
} & Cards;

type Cards = {
  id: number;
};

const images = {
  "bg-house":
    "/assets/images/section-solutions/projeto-residencial-botucatu-min.webp",
  "bg-store":
    "/assets/images/section-solutions/projeto-empresarial-monte-alto-min.webp",
  "bg-factory":
    "/assets/images/section-solutions/projeto-industrial-andradas-min.webp",
  "bg-farm":
    "/assets/images/section-solutions/projeto-rural-campo-grande-min.webp",
};

const ImageCard: React.FC<Props> = ({ children, id, bg }) => {
  const { cardId } = useGlobalContext();

  return (
    <div
      className={twMerge(
        "absolute left-[24px] right-[24px] h-full lg:inset-0 rounded-3xl transition-opacity",
        cardId === id ? "opacity-100" : "opacity-0"
      )}
    >
      <Image
        src={images[bg as keyof typeof images]}
        alt=""
        fill
        objectFit="cover"
        objectPosition="center"
        className="rounded-3xl"
      />
      {children}
    </div>
  );
};

export const HouseImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-house">
      <Link
        href="/projetos"
        className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer"
      >
        Projeto Casa Geraldo
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </Link>
    </ImageCard>
  );
};
export const StoreImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-store">
      <Link
        href="/projetos"
        className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer"
      >
        Projeto Sperta Honda
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </Link>
    </ImageCard>
  );
};

export const FactoryImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-factory">
      <Link
        href="/projetos"
        className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer"
      >
        Projeto Metalúrgica Igarapava
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </Link>
    </ImageCard>
  );
};

export const FarmImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-farm">
      <Link
        href="/projetos"
        className="absolute flex items-center gap-1 text-white bottom-6 lg:left-[130px] left-6 underline cursor-pointer"
      >
        Projeto Dois Lagos
        <Image
          src={arrowUpRight}
          alt="Acessar"
          priority={false}
          loading="lazy"
        />
      </Link>
    </ImageCard>
  );
};
