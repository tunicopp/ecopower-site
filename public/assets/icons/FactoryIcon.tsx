import React from "react";
import left from "../images/circle-left-solid.png";

const FactoryIcon: React.FC = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="28" width="32" height="32" rx="16" fill="#FCCF5C" />
      <mask
        id="mask0_1958_17010"
        maskUnits="userSpaceOnUse"
        x="8"
        y="16"
        width="44"
        height="44"
      >
        <rect x="8" y="16" width="44" height="44" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1958_17010)">
        <path
          d="M11.667 56.3332V34.2873L24.5003 28.8332V32.4998L33.667 28.8332V34.3332H48.3337V56.3332H11.667ZM28.167 48.9998H31.8337V41.6665H28.167V48.9998ZM20.8337 48.9998H24.5003V41.6665H20.8337V48.9998ZM35.5003 48.9998H39.167V41.6665H35.5003V48.9998ZM47.967 31.5832H39.4878L41.0462 19.6665H46.5003L47.967 31.5832Z"
          fill="#12131A"
        />
      </g>
    </svg>
  );
};

export default FactoryIcon;
