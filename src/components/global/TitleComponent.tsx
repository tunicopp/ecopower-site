import React from "react";
import { twMerge } from "tailwind-merge";

export interface TitleComponent {
  children: React.ReactNode;
  className?: string;
}

const TitleComponent: React.FC<TitleComponent> = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        "align-middle text-[48px] font-semibold leading-[56px] z-10",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default TitleComponent;
