import React from "react";
import left from "../images/circle-left-solid.png";

const FarmIcon: React.FC = () => {
  return (
    <svg
      width="62"
      height="60"
      viewBox="0 0 62 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#FCCF5C" />
      <mask
        id="mask0_1958_17278"
        maskUnits="userSpaceOnUse"
        x="10"
        y="8"
        width="44"
        height="44"
      >
        <rect x="10" y="8" width="44" height="44" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1958_17278)">
        <path
          d="M13.667 46.5V20.8333L32.0003 13.5L50.3337 20.8333V46.5H39.3337V31.8333H24.667V46.5H13.667ZM26.5003 46.5V42.8333H30.167V46.5H26.5003ZM30.167 41V37.3333H33.8337V41H30.167ZM33.8337 46.5V42.8333H37.5003V46.5H33.8337Z"
          fill="#12131A"
        />
      </g>
    </svg>
  );
};

export default FarmIcon;
