"use client";
import ComponentWithChildren from "@/@types/ComponentWithChildren";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

interface AccordionSimpleProps extends ComponentWithChildren {
  title: string;
}

const AccordionSimple: React.FC<AccordionSimpleProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-grayscale-300">
      <button
        onClick={() => setIsOpen((old) => !old)}
        className="w-full py-4 flex items-center justify-between text-start"
      >
        <h2 className="text-2xl text-black font-semibold leading-[1.45em]">
          {title}
        </h2>
        <div className="text-full-black text-2xl">
          {isOpen ? <BiMinus /> : <BsPlus />}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ${
          isOpen ? "h-auto pb-4" : "h-0 pb-0 overflow-hidden"
        }`}
      >
        <div
          className={`text-black flex flex-col items-start transition-opacity duration-300 text-base leading-[1.6em] ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionSimple;
