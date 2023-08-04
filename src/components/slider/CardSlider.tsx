import Image from "next/image";
import React from "react";
import cardImage from "./../../../public/assets/images/img-card.png";

const CardSlider: React.FC = () => {
  return (
    <div className="relative flex w-[400px] h-[300px] rounded-2xl">
      <Image
        src={cardImage}
        layout="fill"
        alt="card image"
        quality={100}
        className="rounded-2xl absolute top-0 left-0"
      />
      <div className="flex absolute top-[18%] left-10 w-[120px]">
        <p className=" text-[30px] font-bold">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default CardSlider;
