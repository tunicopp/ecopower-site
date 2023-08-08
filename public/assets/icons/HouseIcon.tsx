import React from "react";
import left from "../images/circle-left-solid.png";

const HouseIcon: React.FC = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="#FCCF5C" />
      <mask
        id="mask0_1958_16474"
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="44"
        height="44"
      >
        <rect x="8" y="8" width="44" height="44" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1958_16474)">
        <path
          d="M11.667 42.8333V26.3333L19.0003 18.9999H20.8337V15.3333H24.5003V18.9999H41.0003L48.3337 26.3333V42.8333H11.667ZM37.3337 39.1666H44.667V27.8458L41.0003 24.1791L37.3337 27.8458V39.1666ZM15.3337 39.1666H33.667V29.9999H15.3337V39.1666Z"
          fill="#12131A"
        />
      </g>
    </svg>
  );
};

export default HouseIcon;
