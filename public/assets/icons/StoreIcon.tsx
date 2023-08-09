import React from "react";
import left from "../images/circle-left-solid.png";

const StoreIcon: React.FC = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="28" width="32" height="32" rx="16" fill="#FCCF5C" />
      <mask
        id="mask0_1958_16742"
        maskUnits="userSpaceOnUse"
        x="8"
        y="8"
        width="44"
        height="44"
      >
        <rect x="8" y="8" width="44" height="44" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1958_16742)">
        <path
          d="M15.3333 19.0002V15.3335H44.6667V19.0002H15.3333ZM15.3333 44.6668V33.6668H13.5V30.0002L15.3333 20.8335H44.6667L46.5 30.0002V33.6668H44.6667V44.6668H41V33.6668H33.6667V44.6668H15.3333ZM19 41.0002H30V33.6668H19V41.0002Z"
          fill="#12131A"
        />
      </g>
    </svg>
  );
};

export default StoreIcon;
