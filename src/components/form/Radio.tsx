import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Radio: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <label className="flex items-center h-12 gap-1 bg-white px-[14px] rounded-full border border-radio-border">
      <input type="radio" className="border-2 bg-beige-300" {...rest} />
      <span>{children}</span>
    </label>
  );
};

export default Radio;
