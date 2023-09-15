import React, { InputHTMLAttributes } from "react";

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input
      className="h-12 text-font-black outline-none placeholder:text-grayscale-300 px-6 w-full rounded-full bg-white border border-radio-border"
      {...props}
    />
  );
};

export default Input;
