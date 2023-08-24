"use client";
import React, { ButtonHTMLAttributes } from "react";
import { Tooltip } from "react-tooltip";

interface Props {
  anchor: string;
  state: string;
  units: number;
}

const PinButton: React.FC<Props> = ({ state, anchor, units }) => {
  return (
    <Tooltip
      className="!px-[18px] !py-3 !bg-primary-green !w-[230px] !rounded-2xl"
      offset={4}
      place="top"
      clickable
      openOnClick
      opacity={1}
      anchorSelect={anchor}
    >
      <div className="flex flex-col">
        <b className="text-white">{state}</b>
        <span className="text-sm text-white">{units} unidades</span>
        <a className="text-white font-bold underline mt-2" href={anchor}>
          Ver unidades
        </a>
      </div>
    </Tooltip>
  );
};

export default PinButton;
