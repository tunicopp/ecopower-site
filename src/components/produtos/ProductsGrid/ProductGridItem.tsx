"use client";
import City from "@/@types/app/city.app.interface";
import CalculatorModal from "@/components/Hero/CalculatorModal";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  image: string | StaticImageData;
  title: string;
  text: string;
}

const ProductGridItem: React.FC<Props> = ({ image, text, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col rounded-2xl bg-beige-300 p-6">
      <Image
        src={image}
        alt={title}
        quality={100}
        width={240}
        height={225}
        className="w-full max-h-[225px] object-cover"
      />
      <div className="mt-6 mb-5">
        <h2 className="text-[22px] leading-7 font-bold">{title}</h2>
        <h3 className="text-lg my-6">{text}</h3>
        <span
          className="text-sm leading-7 font-bold cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Faça uma simulação
        </span>
      </div>
      <Link
        href={`produtos/${title}`}
        className="mt-auto flex items-center justify-center simulate-button min-w-[165px]"
      >
        Saiba mais
      </Link>
      {isOpen && (
        <CalculatorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default ProductGridItem;
