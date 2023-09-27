"use client";
import { Unit } from "@/@types/app/unit.app.interface";
import Image from "next/image";
import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsPlus, BsWhatsapp } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { LuMapPin } from "react-icons/lu";

interface StateAccordionProps {
  state: string;
  units_number: number;
  isH3: boolean;
  units: Unit[];
  id: string;
}

const StateAccordion: React.FC<StateAccordionProps> = ({
  state,
  isH3,
  units_number,
  units,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex flex-col rounded-[20px] bg-beige-300`}>
      <button
        id={id}
        onClick={() => setIsOpen((old) => !old)}
        className="px-8 w-full py-[19px] flex items-center justify-between"
      >
        <div className="flex flex-col gap-[10px]">
          {isH3 ? (
            <h3 className="text-2xl font-bold text-black leading-6 text-start">
              {state}
            </h3>
          ) : (
            <h2 className="text-2xl font-bold text-black leading-6 text-start">
              {state}
            </h2>
          )}
          <span className="text-grey-100 text-start">
            {units_number} unidades
          </span>
        </div>
        <div className="text-full-black text-2xl">
          {isOpen ? <BiMinus /> : <BsPlus />}
        </div>
      </button>
      <div
        className={`flex flex-col gap-4 w-full transition-all px-8 duration-300 overflow-auto ${
          isOpen ? "h-auto pt-[6px] pb-[18px]" : "h-0 pt-0 pb-0 overflow-hidden"
        }`}
      >
        {units.map((u, i) => (
          <div
            key={i}
            className={`flex gap-4 items-center transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={`/assets/images/unidades/images/${u.photo}`}
              alt={u.municipio}
              width={95}
              height={95}
              className="object-cover rounded-lg w-[95px] h-[95px]"
            />
            <div className="flex-1">
              <b className="text-lg">{u.municipio}</b>
              <div className="flex items-center gap-2">
                <LuMapPin />
                <span className="text-sm">{u.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <BsWhatsapp />
                <a className="text-sm underline" href={`tel:${u.phone}`}>
                  {u.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={u.facebook}
                target="_blank"
                className="flex-center bg-white w-10 h-10 rounded-full"
              >
                <BsFacebook />
              </a>
              <a
                href={u.instagram}
                target="_blank"
                className="flex-center bg-white w-10 h-10 rounded-full"
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StateAccordion;
