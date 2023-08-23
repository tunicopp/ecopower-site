import Image from "next/image";
import React from "react";
import cardImage from "./../../../public/assets/images/img-card.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface Props {
  image: string | StaticImport;
}

const CardSlider: React.FC<Props> = ({ image }) => {
  return (
    <div className="relative flex h-[280px] rounded-2xl scale-up-slider overflow-hidden">
      <Image
        src={image}
        alt="card image"
        quality={100}
        priority
        className="rounded-2xl absolute top-0 left-0 w-full h-[290px]  object-cover"
      />
    </div>
  );
};

export default CardSlider;
