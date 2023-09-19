import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  image: string | StaticImageData;
  title: string;
  text: string;
}

const ProductGridItem: React.FC<Props> = ({ image, text, title }) => {
  return (
    <div className="rounded-2xl bg-beige-300 p-6">
      <Image
        src={image}
        alt={title}
        quality={100}
        width={240}
        height={225}
        className="w-full max-h-[225px] object-cover"
      />
      <div className="mt-6">
        <h2 className="text-[22px] leading-7 font-bold">{title}</h2>
        <h3 className="text-lg my-6">{text}</h3>
        <span className="text-sm leading-7 font-bold">Faça uma simulação</span>
      </div>
      <button className="mt-5 simulate-button min-w-[165px]">Saiba mais</button>
    </div>
  );
};

export default ProductGridItem;
