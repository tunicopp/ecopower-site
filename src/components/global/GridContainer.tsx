import ComponentWithChildren from "@/@types/ComponentWithChildren";
import React from "react";

interface GridContainerProps extends ComponentWithChildren {
  extraClasses?: string;
}

const GridContainer: React.FC<GridContainerProps> = ({
  extraClasses,
  children,
}) => {
  return (
    <div
      className={`flex w-full mx-auto max-w-[1156px] px-[36px] ${extraClasses}`}
    >
      {children}
    </div>
  );
};

export default GridContainer;
