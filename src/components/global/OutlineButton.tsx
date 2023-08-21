import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const OutlineButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        "px-5 py-[6px] rounded-full h-12 border-2 border-grayscale-800 text-grayscale-800 text-sm leading-4 font-semibold hover:bg-grayscale-800 hover:text-white aria-selected:bg-grayscale-800 aria-selected:text-white transition-all duration-300",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
