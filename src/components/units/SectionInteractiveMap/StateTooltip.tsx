"use client";
import React from "react";
import { Tooltip } from "react-tooltip";

interface Props {
  anchor: string;
  accordion_anchor: string;
  state: string;
  units: number;
}

const StateTooltip: React.FC<Props> = ({
  state,
  anchor,
  accordion_anchor,
  units,
}) => {
  const onClick = () => {
    const el = document.getElementById(accordion_anchor);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 102;
      window.scrollTo({ top: y });
    }
  };

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
        <a
          className="text-white font-bold underline mt-2 cursor-pointer"
          onClick={onClick}
        >
          Ver unidades
        </a>
      </div>
    </Tooltip>
  );
};

export default StateTooltip;
