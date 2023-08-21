import Link, { LinkProps as NextLinkProps } from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
}

const LinkFooter: React.FC<LinkProps> = ({ className, children, ...rest }) => {
  return (
    <Link
      {...rest}
      className={twMerge("text-white nav cursor-pointer w-fit", className)}
    >
      {children}
    </Link>
  );
};

export default LinkFooter;
