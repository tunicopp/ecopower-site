import React from "react";
import { BiX } from "react-icons/bi";

interface Props {
  date: string;
  kw: string;
  handleClick: () => void;
}

const TagCalculator: React.FC<Props> = ({ date, kw, handleClick }) => {
  return (
    <div className="flex items-center bg-[#D2FAE0] h-9 px-4 rounded-full text-hover-map gap-2 text-3xl">
      <p className="text-base text-hover-map">{date}</p>{" "}
      <p className="text-base text-hover-map">-</p>
      <p className="text-base text-hover-map">{kw}/h</p>{" "}
      <button className=" text-hover-map" onClick={handleClick}>
        <BiX />
      </button>
    </div>
  );
};

export default TagCalculator;
