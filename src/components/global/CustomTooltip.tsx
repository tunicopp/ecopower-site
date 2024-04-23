import React from "react";
import { Tooltip } from "react-tooltip";

interface props {
  anchorSelect: string;
  label: string;
}

const CustomTooltip: React.FC<props> = ({ anchorSelect, label }) => {
  return (
    <Tooltip
      anchorSelect={anchorSelect}
      place="top"
      className="!text-grayscale-800 !bg-white !opacity-100 !p-6 !text-sm drop-shadow-tooltip !rounded-2xl max-w-[264px]"
      offset={30}
    >
      {label}
    </Tooltip>
  );
};

export default CustomTooltip;
