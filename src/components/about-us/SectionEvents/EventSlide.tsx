import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface EventSlideProps {
  src: string | StaticImport;
  title: string;
  subTitle: string;
}
const EventSlide: React.FC<EventSlideProps> = (props) => {
  return (
    <div className="bg-white rounded-2xl">
      <Image
        src={props.src}
        alt="Foto do Evento"
        className="rounded-2xl object-cover"
      />
      <div className="flex flex-col p-6 pb-[35px] gap-1">
        <span className="text-sm text-primary-green font-medium">
          {props.subTitle}
        </span>
        <b className="text-lg text-grayscale-800">{props.title}</b>
      </div>
    </div>
  );
};

export default EventSlide;
