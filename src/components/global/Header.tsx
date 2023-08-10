"use client";
import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo-eco-power.svg";
import { MdChevronRight, MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import ContactsBar from "../Hero/ContactsBar";

const Header: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-[800] w-full ${
        isAtTop ? "" : "header-blur"
      }`}
    >
      <ContactsBar />
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
          <div className="text-base ml-1 rotate-90">
            <MdChevronRight />
          </div>
        </Link>
        <Link
          href="/"
          className="text-sm leading-4 font-medium text-white mx-6 flex items-center"
        >
          Sobre Nós
          <div className="text-base ml-1 rotate-90">
            <MdChevronRight />
          </div>
        </Link>
        <Link href="/" className="text-sm leading-4 font-medium text-white">
          Unidades
        </Link>
        <button className="text-white ml-[70px] text-xl">
          <MdOutlineMenu />
        </button>
      </GridContainer>
    </div>
  );
};

export default Header;
