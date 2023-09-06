"use client";
import ComponentWithChildren from "@/@types/ComponentWithChildren";
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";

interface AccordionProps extends ComponentWithChildren {
  title: string;
  isH3: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, isH3, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[20px] bg-beige-300">
      <button
        onClick={() => setIsOpen((old) => !old)}
        className="px-8 w-full py-[18px] flex items-center justify-between text-start"
      >
        {isH3 ? (
          <h3 className="text-lg text-black leading-6">{title}</h3>
        ) : (
          <h2 className="text-lg text-black leading-6">{title}</h2>
        )}
        <div className="text-full-black text-2xl">
          <BsPlus />
        </div>
      </button>
      <div
        className={`transition-all px-8 duration-300 ${
          isOpen ? "h-auto pt-[6px] pb-[18px]" : "h-0 pt-0 pb-0 overflow-hidden"
        }`}
      >
        <p
          className={`text-black transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {children}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
