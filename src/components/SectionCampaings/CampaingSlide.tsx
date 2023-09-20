import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface CampaingSlideProps {
  src: string | StaticImport;
  title: string;
  description: string;
  price: string;
  link?: string;
}

const CampaingSlide: React.FC<CampaingSlideProps> = ({
  src,
  description,
  price,
  title,
  link,
}) => {
  return (
    <a href={link ? link : undefined} target="_blank">
      <div className="relative">
        <Image
          src={src}
          alt={title}
          height={138}
          className="object-cover w-full rounded-t-3xl h-[138px]"
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
    </a>
  );
};

export default CampaingSlide;
