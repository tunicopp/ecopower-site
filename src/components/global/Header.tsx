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
    <header
      className={`fixed top-0 left-0 z-[800] w-full ${
        isAtTop ? "" : "bg-hero-green"
      }`}
    >
      {/* <ContactsBar /> */}
      <GridContainer className="py-4 items-center">
        <Link href="/" className="relative mr-auto">
          <Image
            src={logo}
            alt="Eco Power Logo"
            width={209}
            height={56}
            quality={100}
            priority
          />
        </Link>
        <div className="hidden lg:flex lg:items-center">
          <Link
            href="/products"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Produtos
            {/* <div className="text-base ml-1 rotate-90">
              <MdChevronRight />
            </div> */}
          </Link>
          <Link
            href="/about-us"
            className="text-sm leading-4 font-medium text-white mx-6 flex items-center"
          >
            Sobre Nós
            {/* <div className="text-base ml-1 rotate-90">
              <MdChevronRight />
            </div> */}
          </Link>
        </div>
        <button className="text-white lg:ml-[70px] text-xl block lg:hidden">
          <MdOutlineMenu />
        </button>
      </GridContainer>
    </header>
  );
};

export default Header;
