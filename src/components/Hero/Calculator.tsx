"use client";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Tooltip } from "react-tooltip";
import { twMerge } from "tailwind-merge";
import CalculatorModal from "./CalculatorModal";
import { useGlobalContext } from "@/app/context/store";

interface Props {
  className?: string;
}

const Calculator: React.FC<Props> = ({ className }) => {
  const { openModal, closeModal } = useGlobalContext();
  const [value, setValue] = useState([0]);
  const [isOpen, setIsOpen] = useState(false);

  const bg = getTrackBackground({
    min: 0,
    max: 800,
    colors: ["#01B040", "#F8F6F1"],
    values: value,
  });

  const tooltipText =
    value[0] < 200
      ? "Arraste para selecionar um valor"
      : value[0] < 400
      ? "Até R$200"
      : value[0] < 600
      ? "De R$200 a R$600"
      : value[0] < 800
      ? "De R$600 a R$800"
      : "Mais de R$800";

  return (
    <>
      <div
        className={twMerge(
          "mt-5 p-3 pt-8 lg:p-6 lg:pt-6 lg:pl-10 flex flex-col lg:flex-row items-center rounded-[20px] lg:rounded-full bg-white shadow-calculator max-w-[952px] relative",
          className
        )}
      >
        <div className="flex flex-1 flex-col w-full lg:w-auto lg:mr-8">
          <h3 className="text-grayscale-800 font-medium leading-5 mb-[14px] lg:mb-[10px]">
            Média mensal de gasto com energia:
          </h3>
          <div className="ml-3">
            <Range
              onChange={(v) => setValue(v)}
              renderThumb={({ props, index }) => (
                <div
                  {...props}
                  key={index}
                  className="h-6 w-6 bg-grayscale-900 rounded-full border-2 border-white outline-none thumb"
                />
              )}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-3 rounded-full w-full"
                  style={{ background: bg }}
                >
                  {children}
                </div>
              )}
              values={value[0] > 800 ? [800] : value}
              min={0}
              max={800}
              step={200}
            />
          </div>
          <Tooltip
            anchorSelect=".thumb"
            place="top"
            className="!text-white !bg-grayscale-800 !opacity-100 !rounded !py-[6px] !px-2 !text-sm font-medium"
          >
            {tooltipText}
          </Tooltip>
        </div>
        <div className="relative w-full lg:max-w-[200px] flex-shrink-0 mt-6 mb-3 lg:my-0">
          <span className="absolute left-5 top-[15px] text-sm font-medium">
            R$
          </span>
          <input
            className="select"
            placeholder="Arraste ou digite"
            value={value[0] === 0 ? undefined : value[0]}
            type="number"
            min={0}
            onChange={(v) => setValue([parseInt(v.target.value)])}
          />
          <ul className="dropdown">
            <li onClick={() => setValue([200])}>Até R$200</li>
            <li onClick={() => setValue([400])}>De R$200 a R$400</li>
            <li onClick={() => setValue([600])}>De R$400 a R$800</li>
            <li onClick={() => setValue([800])}>Mais de R$800</li>
          </ul>
        </div>
        <button
          className="simulate-button w-full lg:w-auto lg:ml-4"
          onClick={() => {
            setIsOpen(true);
            openModal();
          }}
        >
          Simular Economia
        </button>
      </div>
      {isOpen && (
        <CalculatorModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            closeModal();
          }}
          initialValue={value[0]}
        />
      )}
    </>
  );
};

export default Calculator;
