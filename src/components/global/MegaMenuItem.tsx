import ComponentWithChildren from "@/@types/ComponentWithChildren";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdChevronRight } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentWithChildren {
  href: string;
  image: string | StaticImport;
  title: string;
  onClick: () => void;
  className?: string;
}

const MegaMenuItem: React.FC<Props> = ({
  children,
  href,
  image,
  title,
  onClick,
  className,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        "p-4 bg-white flex flex-col gap-4 rounded-3xl",
        className
      )}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-[165px] object-cover rounded-xl hidden lg:block"
        width={255}
        height={165}
        quality={100}
      />
      <b className="text-2xl text-grayscale-900 font-semibold">{title}</b>
      <p className="text-sm text-grayscale-400">{children}</p>
      <div className="self-end text-[32px] text-primary-green">
        <MdChevronRight />
      </div>
    </Link>
  );
};

export default MegaMenuItem;
