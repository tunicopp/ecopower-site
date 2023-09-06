import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { MdChevronRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface LinkArrow {
  className?: string;
  text: string;
  to: string;
}

const LinkArrow: React.FC<LinkArrow> = ({ className, text, to, ...rest }) => {
  return (
    <Link
      href={to}
      className={twMerge(
        " font-semibold mt-10 flex items-center gap-2 group/arrow cursor-pointer ",
        className
      )}
    >
      <p className={className}>{text}</p>
      <div className={twMerge("slide-arrow text-xl")}>
        <MdChevronRight />
      </div>
    </Link>
  );
};

export default LinkArrow;
