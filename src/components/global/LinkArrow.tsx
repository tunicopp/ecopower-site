import React, { ButtonHTMLAttributes } from "react";
import { MdChevronRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface LinkArrow extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  to?: string;
}

const LinkArrow: React.FC<LinkArrow> = ({ className, text, to, ...rest }) => {
  return (
    <button
      {...rest}
      className={twMerge(
        " font-semibold mt-10 flex items-center gap-2 group/arrow cursor-pointer ",
        className
      )}
    >
      <a href={to} className={className}>
        {text}
      </a>
      <div className={twMerge("slide-arrow text-xl")}>
        <MdChevronRight />
      </div>
    </button>
  );
};

export default LinkArrow;
