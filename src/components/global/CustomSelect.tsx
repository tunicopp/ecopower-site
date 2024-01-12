import React, { ReactNode, SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

const CustomSelect: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <div className="flex items-center h-12 text-font-black  placeholder:text-grayscale-300 px-6 w-full rounded-full bg-white border border-radio-border disabled:opacity-60">
      <select
        id="custom-select"
        className="w-full h-full outline-none cursor-pointer"
        {...rest}
      >
        {children}
      </select>
      <p className="text-xs opacity-70">▼</p>
    </div>
  );
};

export default CustomSelect;
