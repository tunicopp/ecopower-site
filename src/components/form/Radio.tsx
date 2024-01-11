import React, { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

const Radio: React.FC<Props> = ({ children, id, ...rest }) => {
  return (
    <label
      htmlFor={id}
      className={twMerge(
        "flex items-center h-12 gap-1 bg-white px-[14px] rounded-full border border-radio-border cursor-pointer"
      )}
    >
      <input id={id} type="radio" className="border-2 bg-beige-300" {...rest} />
      <span>{children}</span>
    </label>
  );
};

export default Radio;
