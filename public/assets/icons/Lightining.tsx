import React from "react";

const Lightining: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect width="48" height="48" rx="24" fill="white" />
      <mask x="10" y="10" width="28" height="28">
        <rect x="10" y="10" width="28" height="28" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3554_11881)">
        <path
          d="M22.3429 31.0856L28.2572 23.9999H23.6858L24.5143 17.5141L19.2286 25.1427H23.2L22.3429 31.0856ZM19.4286 35.4284L20.5715 27.4284H14.8572L25.1429 12.5713H27.4286L26.2858 21.7141H33.1429L21.7143 35.4284H19.4286Z"
          fill="#12131A"
        />
      </g>
    </svg>
  );
};

export default Lightining;
