import React, { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  text: string;
}

const LinkFooter: React.FC<LinkProps> = ({ className, text, ...rest }) => {
  return (
    <a
      {...rest}
      target="_blank"
      className={twMerge("text-white nav cursor-pointer w-fit", className)}
    >
      {text}
    </a>
  );
};

export default LinkFooter;
