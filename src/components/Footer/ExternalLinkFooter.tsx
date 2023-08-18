import Link, { LinkProps as NextLinkProps } from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
}

const ExternalLinkFooter: React.FC<LinkProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      target="_blank"
      className={twMerge("text-white nav cursor-pointer w-fit", className)}
    >
      {children}
    </a>
  );
};

export default ExternalLinkFooter;
