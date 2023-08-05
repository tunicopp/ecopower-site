import Image from "next/image";
import React from "react";
import cardImage from "./../../../public/assets/images/img-card.png";

const CardSlider: React.FC = () => {
  return (
    <div className="relative flex h-[280px] rounded-2xl scale-up-slider overflow-hidden">
      <Image
        src={cardImage}
        layout="cover"
        alt="card image"
        quality={100}
        className="rounded-2xl absolute top-0 left-0 w-full h-[300px]  "
      />
      <div className="flex absolute top-[18%] left-10 w-[120px] ">
        <p className=" text-[30px] font-bold">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default CardSlider;
