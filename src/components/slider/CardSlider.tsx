import Image from "next/image";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  image: string | StaticImport;
}

const CardSlider: React.FC<Props> = ({ image }) => {
  return (
    <Image
      src={image}
      alt="card image"
      quality={100}
      priority
      className="rounded-2xl w-full 2xl:h-auto h-[290px] scale-up-slider object-cover"
    />
  );
};

export default CardSlider;
