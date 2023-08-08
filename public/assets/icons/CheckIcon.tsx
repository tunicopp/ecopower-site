import React from "react";
import left from "../images/circle-left-solid.png";

const CheckIcon: React.FC = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1958_16502"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1958_16502)">
        <path
          d="M7.16634 18.75L5.58301 16.0833L2.58301 15.4167L2.87467 12.3333L0.833008 10L2.87467 7.66667L2.58301 4.58333L5.58301 3.91667L7.16634 1.25L9.99967 2.45833L12.833 1.25L14.4163 3.91667L17.4163 4.58333L17.1247 7.66667L19.1663 10L17.1247 12.3333L17.4163 15.4167L14.4163 16.0833L12.833 18.75L9.99967 17.5417L7.16634 18.75ZM9.12467 12.9583L13.833 8.25L12.6663 7.04167L9.12467 10.5833L7.33301 8.83333L6.16634 10L9.12467 12.9583Z"
          fill="#6F717B"
        />
      </g>
    </svg>
  );
};

export default CheckIcon;
