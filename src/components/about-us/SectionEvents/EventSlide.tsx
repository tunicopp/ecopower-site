import React from "react";
import Image from "next/image";
import placeholder from "../../../../public/assets/images/about-us/events/event-placeholder.png";

const EventSlide: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl">
      <Image
        src={placeholder}
        alt="Foto do Evento"
        className="rounded-2xl object-cover"
      />
      <div className="flex flex-col p-6 pb-[35px] gap-1">
        <span className="text-sm text-primary-green font-medium">
          Evento 01
        </span>
        <b className="text-lg text-grayscale-800">Lorem ipsum</b>
      </div>
    </div>
  );
};

export default EventSlide;
