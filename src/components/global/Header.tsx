"use client";
import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo-eco-power.svg";
import { MdOutlineMenu } from "react-icons/md";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import ContactsBar from "../Hero/ContactsBar";

const Header: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };
    handleScroll();
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
      <ContactsBar />
      <GridContainer className="py-4 items-center">
        <Link href="/" className="mr-auto">
          <Image
            src={logo}
            alt="Eco Power Logo"
            width={209}
            height={56}
            quality={100}
            className="w-auto h-auto"
          />
        </Link>
        <div className="hidden lg:flex lg:items-center">
          <Link
            href="/products"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Produtos
          </Link>
          <Link
            href="/about-us"
            className="text-sm leading-4 font-medium text-white mx-6 flex items-center"
          >
            Sobre Nós
          </Link>
          <Link
            href="/units"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Unidades
          </Link>
        </div>
        <button
          className="text-white lg:ml-[70px] text-xl"
          onClick={() => setIsOpen(true)}
        >
          <MdOutlineMenu />
        </button>
      </GridContainer>
      <Drawer
        direction="right"
        customIdSuffix="EZDrawer__checkboxnqvkk"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="!bg-hero-green flex justify-between p-6"
      >
        <div className="flex flex-col gap-6 pt-1">
          <Link
            href="/products"
            className="text-sm leading-4 font-medium text-white lg:hidden flex items-center"
          >
            Produtos
          </Link>
          <Link
            href="/about-us"
            className="text-sm leading-4 font-medium text-white lg:hidden flex items-center"
          >
            Sobre Nós
          </Link>
          <Link
            href="/units"
            className="text-sm leading-4 font-medium text-white lg:hidden flex items-center"
          >
            Unidades
          </Link>
          <Link
            href="/projects"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Projetos
          </Link>
          <Link
            href="/blog"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Blog
          </Link>
          <Link
            href="/sustainability"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Sustentabilidade
          </Link>
          <Link
            href="/careers"
            className="text-sm leading-4 font-medium text-white flex items-center"
          >
            Pessoas
          </Link>
        </div>
        <button
          className="flex h-6 w-6 text-white text-2xl leading-none justify-center items-center"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>
      </Drawer>
    </header>
  );
};

export default Header;
