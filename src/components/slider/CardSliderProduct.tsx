import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

interface Props {
  image: string | StaticImport;
  index: number;
  title: string;
}

const CardSliderProduct: React.FC<Props> = ({ image, index, title }) => {
  return (
    <div className="flex flex-col bg-beige-300 rounded-2xl p-5 gap-6">
      <Image
        src={image}
        alt="card image"
        quality={100}
        priority={false}
        loading="lazy"
        className="rounded-2xl w-full 2xl:h-auto h-[225px] scale-up-slider object-contain"
      />
      <p className="text-2xl font-bold">{title}</p>
      <p className=" font-bold">Faça uma simulação</p>
      <Link
        href={`${title}`}
        className="flex items-center justify-center simulate-button w-fit"
      >
        Saiba mais
      </Link>
    </div>
  );
};

export default CardSliderProduct;
