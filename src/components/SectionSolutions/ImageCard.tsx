"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useGlobalContext } from "@/app/context/store";

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
        "absolute  h-full inset-0 rounded-3xl transition-opacity",
        bg,
        cardId === id ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export const HouseImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-house">
      <></>
    </ImageCard>
  );
};
export const StoreImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-store">
      <></>
    </ImageCard>
  );
};

export const FactoryImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-factory">
      <></>
    </ImageCard>
  );
};

export const FarmImage = ({ id }: Cards) => {
  return (
    <ImageCard id={id} bg="bg-farm">
      <></>
    </ImageCard>
  );
};
