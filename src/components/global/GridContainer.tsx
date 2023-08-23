import ComponentWithChildren from "@/@types/ComponentWithChildren";
import { twMerge } from "tailwind-merge";
import React from "react";

interface GridContainerProps extends ComponentWithChildren {
  className?: string;
}

const GridContainer: React.FC<GridContainerProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={twMerge("flex w-full mx-auto max-w-[1272px] px-6", className)}
    >
      {children}
    </div>
  );
};

export default GridContainer;
