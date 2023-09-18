import React from "react";

const Inverse: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <rect width="48" height="48" rx="24" fill="white" />
      <mask x="10" y="9" width="27" height="29">
        <rect x="10" y="9" width="27" height="29" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_3554_11976)">
        <mask x="12" y="12" width="24" height="24">
          <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_3554_11976)">
          <path
            d="M21 33.9502V31.4502C19.2333 30.8335 17.7917 29.7544 16.675 28.2127C15.5583 26.671 15 24.9169 15 22.9502C15 21.7002 15.2375 20.5294 15.7125 19.4377C16.1875 18.346 16.8292 17.396 17.6375 16.5877C18.4458 15.7794 19.3958 15.1377 20.4875 14.6627C21.5792 14.1877 22.7417 13.9502 23.975 13.9502C25.2083 13.9502 26.375 14.1877 27.475 14.6627C28.575 15.1377 29.5333 15.7794 30.35 16.5877C31.1667 17.396 31.8125 18.346 32.2875 19.4377C32.7625 20.5294 33 21.7002 33 22.9502C33 24.9169 32.4375 26.6627 31.3125 28.1877C30.1875 29.7127 28.75 30.7919 27 31.4252V33.9502H25V31.9002C24.8333 31.9335 24.6667 31.9502 24.5 31.9502H23.975C23.8083 31.9502 23.6458 31.946 23.4875 31.9377C23.3292 31.9294 23.1667 31.9169 23 31.9002V33.9502H21ZM24 30.0002C25.9333 30.0002 27.5833 29.3169 28.95 27.9502C30.3167 26.5835 31 24.9335 31 23.0002C31 21.0669 30.3167 19.4169 28.95 18.0502C27.5833 16.6835 25.9333 16.0002 24 16.0002C22.0667 16.0002 20.4167 16.6835 19.05 18.0502C17.6833 19.4169 17 21.0669 17 23.0002C17 24.9335 17.6833 26.5835 19.05 27.9502C20.4167 29.3169 22.0667 30.0002 24 30.0002ZM20 21.0002H28V19.0002H20V21.0002ZM23.25 29.0002L26.25 26.0002L25 24.7502L26.25 23.5002L24.75 22.0002L21.75 25.0002L23 26.2502L21.75 27.5002L23.25 29.0002Z"
            fill="#12131A"
          />
        </g>
      </g>
    </svg>
  );
};

export default Inverse;
