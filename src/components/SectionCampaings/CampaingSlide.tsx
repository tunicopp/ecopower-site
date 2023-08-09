import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CampaingSlideProps {
  src: string | StaticImport;
  title: string;
  description: string;
  price: string;
}

const CampaingSlide: React.FC<CampaingSlideProps> = ({
  src,
  description,
  price,
  title,
}) => {
  return (
    <div>
      <div className="relative">
        <Image
          src={src}
          alt={title}
          width={608}
          height={208}
          className="object-cover rounded-t-3xl"
        />
      </div>
      <div className="bg-campaing p-6 flex flex-col rounded-b-3xl flex-1">
        <b className="font-semibold text-grayscale-900 text-2xl whitespace-nowrap text-ellipsis overflow-hidden">
          {title}
        </b>
        <span className="text-slide-description my-6">{description}</span>
        <span className="font-semibold text-slide-description mt-auto">
          {price}
        </span>
      </div>
    </div>
  );
};

export default CampaingSlide;
