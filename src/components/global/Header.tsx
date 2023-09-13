"use client";
import React, { useEffect, useState } from "react";
import GridContainer from "./GridContainer";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo-eco-power.svg";
import { MdOutlineMenu, MdClose, MdChevronRight } from "react-icons/md";
import Link from "next/link";
import "react-modern-drawer/dist/index.css";
import ContactsBar from "../Hero/ContactsBar";
import MegaMenuItem from "./MegaMenuItem";
import { BiChevronDown } from "react-icons/bi";
import MegaMenuProductItem from "./MegaMenuProductItem";

const Header: React.FC = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
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
      className={`fixed top-0 left-0 z-[100] w-full transition-colors duration-300 ${
        isAtTop
          ? isOpen || isOpenProducts
            ? "bg-hero-green"
            : ""
          : "bg-hero-green"
      }`}
    >
      <ContactsBar />
      <GridContainer className="flex-col">
        <div className="flex items-center w-full min-h-[89px] max-h-[89px]">
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
            <button
              className={`text-sm leading-4 font-medium text-white flex rounded-lg items-center transition-colors py-[6px] -mr-3 px-3 duration-300 ${
                isOpenProducts && "bg-white/25"
              }`}
              onClick={() => {
                setIsOpenProducts((old) => !old);
                setIsOpen(false);
              }}
            >
              Produtos
              <div
                className={`text-base ml-1 transition-all duration-300 ${
                  isOpenProducts && "rotate-180"
                }`}
              >
                <BiChevronDown />
              </div>
            </button>
            <Link
              href="/sobre-nos"
              className="text-sm leading-4 font-medium text-white mx-6 flex items-center"
            >
              Sobre Nós
            </Link>
            <Link
              href="/unidades"
              className="text-sm leading-4 font-medium text-white flex items-center"
            >
              Unidades
            </Link>
          </div>
          <button
            className="text-white lg:ml-[70px] text-xl"
            onClick={() => {
              setIsOpen((old) => !old);
              setIsOpenProducts(false);
            }}
          >
            {isOpen ? <MdClose /> : <MdOutlineMenu />}
          </button>
        </div>
        <div
          className={`mega-menu transition-all duration-300 ${
            isOpen
              ? "lg:h-[510px] h-height-mobile overflow-auto"
              : "h-0 overflow-hidden"
          }`}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 flex-wrap mt-10 pb-6">
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/produtos"
              title="Produtos"
              image="/assets/images/megamenu/megamenu-1.png"
              className="md:!hidden"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/sobre-nos"
              title="Sobre Nós"
              image="/assets/images/megamenu/megamenu-1.png"
              className="md:!hidden"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/unidades"
              title="Unidades"
              image="/assets/images/megamenu/megamenu-1.png"
              className="md:!hidden"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/projetos"
              title="Projetos"
              image="/assets/images/megamenu/megamenu-1.png"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/blog"
              title="Blog"
              image="/assets/images/megamenu/megamenu-2.png"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/sustentabilidade"
              title="Sustentabilidade"
              image="/assets/images/megamenu/megamenu-3.png"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
            <MegaMenuItem
              onClick={() => setIsOpen(false)}
              href="/carreiras"
              title="Pessoas"
              image="/assets/images/megamenu/megamenu-4.png"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </MegaMenuItem>
          </div>
        </div>
        <div
          className={`mega-menu transition-all duration-300 ${
            isOpenProducts
              ? "mega-menu-products overflow-auto"
              : "h-0 overflow-hidden"
          }`}
        >
          <div className="flex justify-between items-center mt-4">
            <h2 className="text-white text-[32px] font-bold">
              Nossos Produtos
            </h2>
            <Link
              href="/produtos"
              className="text-white flex items-center gap-1 font-semibold"
              onClick={() => setIsOpenProducts(false)}
            >
              Ver todos os produtos
              <div className="text-white text-2xl">
                <MdChevronRight />
              </div>
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10 pb-6 overflow-hidden">
            <MegaMenuProductItem
              onClick={() => setIsOpenProducts(false)}
              title="On Grid"
              images={[
                "/assets/images/megamenu/product-placeholder.png",
                "/assets/images/megamenu/product-placeholder.png",
              ]}
            >
              Sistema fotovoltaico e placas solares instaladas conectadas à rede
              de distribuição de energia elétrica.
            </MegaMenuProductItem>
            <MegaMenuProductItem
              onClick={() => setIsOpenProducts(false)}
              title="Off Grid"
              images={[
                "/assets/images/megamenu/product-placeholder.png",
                "/assets/images/megamenu/product-placeholder.png",
              ]}
            >
              Toda a energia absorvida e produzida é armazenada nas baterias
              solares. E, assim, o imóvel é abastecido sempre que necessário
              (quando não há sol ou à noite, entre outras situações).
            </MegaMenuProductItem>
            <MegaMenuProductItem
              onClick={() => setIsOpenProducts(false)}
              title="Híbrido"
              images={[
                "/assets/images/megamenu/product-placeholder.png",
                "/assets/images/megamenu/product-placeholder.png",
              ]}
            >
              O modelo híbrido funciona de ambas as maneiras, mas de modo
              alternado: conta, portanto, com inversores grid-tied e também os
              inversores autônomos do sistema off-grid.
            </MegaMenuProductItem>
          </div>
        </div>
      </GridContainer>
    </header>
  );
};

export default Header;
