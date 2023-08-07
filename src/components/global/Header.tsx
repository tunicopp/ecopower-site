import React from "react";
import GridContainer from "./GridContainer";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo-eco-power.svg";
import { MdChevronRight, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <GridContainer className="py-4 items-center">
      <div className="relative mr-auto">
        <Image
          src={logo}
          alt="Eco Power Logo"
          width={209}
          height={56}
          quality={100}
          priority
        />
      </div>
      <Link
        href="/"
        className="text-sm leading-4 font-medium text-white flex items-center"
      >
        Produtos
        <div className="fill-white text-base ml-1 rotate-90">
          <MdChevronRight />
        </div>
      </Link>
      <Link
        href="/"
        className="text-sm leading-4 font-medium text-white mx-6 flex items-center"
      >
        Sobre Nós
        <div className="fill-white text-base ml-1 rotate-90">
          <MdChevronRight />
        </div>
      </Link>
      <Link href="/" className="text-sm leading-4 font-medium text-white">
        Unidades
      </Link>
      <button className="fill-white ml-[70px] text-lg">
        <MdOutlineMenu />
      </button>
    </GridContainer>
  );
};

export default Header;
