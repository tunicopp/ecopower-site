"use client";
import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { Tooltip } from "react-tooltip";

const Calculator: React.FC = () => {
  const [value, setValue] = useState([0]);

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
      ? "De R$200 a R$400"
      : value[0] < 800
      ? "De R$400 a R$800"
      : "Mais de R$800";

  return (
    <div className="mt-14 px-3 py-8 sm:p-6 sm:pl-10 flex flex-col sm:flex-row items-center rounded-[20px] sm:rounded-full bg-white shadow-calculator max-w-[952px]">
      <div className="flex flex-1 flex-col mr-8">
        <span className="text-grayscale-800 font-medium leading-5 mb-[14px] sm:mb-[10px]">
          Média mensal de gasto com energia:
        </span>
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
          values={value}
          min={0}
          max={800}
          step={200}
        />
        <Tooltip
          anchorSelect=".thumb"
          place="top"
          className="!text-white !bg-grayscale-800 !opacity-100 !rounded !py-[6px] !px-2 !text-sm font-medium"
        >
          {tooltipText}
        </Tooltip>
      </div>
      <select
        className="select mt-6 mb-3 sm:my-0"
        placeholder="Arraste ou selecione"
        value={value[0]}
        onChange={(v) => setValue([parseInt(v.target.value)])}
      >
        <option value={0}>Arreste ou selecione</option>
        <option value={200}>Até R$200</option>
        <option value={400}>De R$200 a R$400</option>
        <option value={600}>De R$400 a R$800</option>
        <option value={800}>Mais de R$800</option>
      </select>
      <button className="simulate-button w-full sm:w-auto sm:ml-4">
        Simular Economia
      </button>
    </div>
  );
};

export default Calculator;
