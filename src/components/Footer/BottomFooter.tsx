import Image from "next/image";
import React from "react";
import LinkFooter from "./LinkFooter";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../../public/assets/icons/logo-eco-power.svg";
import badgeOne from "../../../public/assets/images/footer/footer-badge-01.svg";
import badgeTwo from "../../../public/assets/images/footer/footer-badge-02.svg";
import badgeThree from "../../../public/assets/images/footer/footer-badge-03.svg";
import badgeFour from "../../../public/assets/images/footer/footer-badge-04.svg";
import badgeFive from "../../../public/assets/images/footer/footer-badge-05.svg";
import badgeSix from "../../../public/assets/images/footer/footer-badge-06.svg";
import ExternalLinkFooter from "./ExternalLinkFooter";
import Link from "next/link";
import atom from "../../../public/assets/images/atom-logo.svg";

const BottomFooter: React.FC = () => {
  return (
    <div className="relative flex flex-col bg-primary-green w-full lg:h-[504px] p-6 lg:px-[108px] lg:pt-[108px] lg:pb-[40px]">
      <div className="grid lg:grid-cols-3 gap-4 w-full flex-1">
        <div className="flex justify-center md:jutify-start">
          <div className="relative">
            <Image
              src={logo}
              alt="Eco Power Logo"
              width={209}
              height={56}
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="flex flex-1 mt-6 md:mt-0">
          <div className="flex-1 flex-col">
            <p className="text-white font-semibold">Produtos</p>
            <div className="flex flex-col mt-[24px] gap-3">
              <LinkFooter href="/produtos">Todos os Produtos</LinkFooter>
              <LinkFooter href="/residencial">Residencial</LinkFooter>
              <LinkFooter href="/empresarial">Empresarial</LinkFooter>
              <LinkFooter href="/industrial">Industrial</LinkFooter>
              <LinkFooter href="/rural">Rural</LinkFooter>
            </div>
            <a
              href={"https://www.ecopowerstore.com.br/"}
              target="_blank"
              className="hidden md:block bg-font-black text-white py-2 px-5 rounded-full font-semibold w-fit mt-6 lg:mb-6 hover:bg-white hover:text-grayscale-800 transition-all duration-300"
            >
              EcoPower Store
            </a>
          </div>
          <div className="flex-1 flex-col">
            <p className="text-white font-semibold">Sobre Nós</p>
            <div className="flex flex-col mt-[24px] gap-3 ">
              <LinkFooter href="/projetos">Projetos</LinkFooter>
              <LinkFooter href="/sobre-nos">Nossa História</LinkFooter>
              <LinkFooter href="/unidades">Unidades</LinkFooter>
              <LinkFooter href="/sustentabilidade">Sustentabilidade</LinkFooter>
              <LinkFooter href="/pessoas">Pessoas</LinkFooter>
              <LinkFooter href="/glossario">Glossário</LinkFooter>
              <LinkFooter href="/blog">Blog</LinkFooter>
            </div>
          </div>
        </div>
        <a
          href={"https://www.ecopowerstore.com.br/"}
          target="_blank"
          className="md:hidden text-center bg-grayscale-800 text-white py-2 px-5 rounded-full font-semibold w-full my-6 lg:mb-6 hover:border-2 hover:border-white transition-all"
        >
          Acessar EcoPower Store
        </a>
        <div className="flex flex-col">
          <p className="text-white font-semibold">Contato</p>
          <div className="flex flex-col mt-[24px] gap-3">
            <div className="flex items-center gap-2 text-white">
              <IoCallOutline />
              <LinkFooter href={`tel:+5517981281849`}>
                (17) 98128-1849
              </LinkFooter>
            </div>
            {/* <div className="flex items-center gap-2 text-white">
              <BsWhatsapp />
              <ExternalLinkFooter href={`tel:11990900999`}>
                11 99090-0999
              </ExternalLinkFooter>
            </div> */}
            <div className="flex items-center gap-2 text-white">
              <IoLocationOutline />
              <ExternalLinkFooter
                href="https://goo.gl/maps/EnoKjdS1jRJRtW2z5"
                className="leading-4"
              >
                Chegar na matriz
              </ExternalLinkFooter>
            </div>
            <LinkFooter href="https://hubs.li/Q025rsCJ0">
              Seja um Franqueado
            </LinkFooter>
            <LinkFooter href="/#FAQ">Dúvidas Frequentes</LinkFooter>
            <div className="relative flex w-full justify-between gap-4 items-center flex-wrap my-3">
              <a
                className="block"
                target="_blank"
                href="https://franquias.portaldofranchising.com.br/franquia-ecopower-energia-solar/"
              >
                <Image src={badgeOne} alt="Experiência em Franchising" />
              </a>
              <a
                className="block"
                target="_blank"
                href="https://www.absolar.org.br/associados/ecopower/"
              >
                <Image src={badgeTwo} alt="Associado Absolar" />
              </a>
              <a
                className="block"
                target="_blank"
                href="https://www.instagram.com/p/Ch7talduPk8"
              >
                <Image src={badgeThree} alt="SolarView" />
              </a>
              <a
                className="block"
                target="_blank"
                href="https://certificadas.gptw.com.br/18269815000136"
              >
                <Image src={badgeFour} alt="Great Place To Work" />
              </a>
              <a
                className="block"
                target="_blank"
                href="https://www.instagram.com/p/CjbI6yapdMy/?igshid=MzRlODBiNWFlZA=="
              >
                <Image src={badgeFive} alt="Weg" />
              </a>
              <a
                className="block"
                target="_blank"
                href="https://www.reclameaqui.com.br/empresa/ecopower-sistemas-de-energia/?utm_source=referral&utm_medium=embbed&utm_campaign=reputacao&utm_term=vertical"
              >
                <Image src={badgeSix} alt="RA100" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <Link
          href="/politica-de-privacidade"
          className="text-white opacity-40 mt-4 lg:mt-0 text-[14px] hover:border-b cursor-pointer"
        >
          Termos e Políticas de Privacidade
        </Link>
        <p className="text-white opacity-40 text-[14px]">
          © 2023 EcoPower Energia Solar - Todos os direitos reservados. CNPJ:
          18.269.815/0001-36.
        </p>
        <a
          href="https://atom6studio.com/"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="text-white text-sm opacity-40 font-mont font-medium font-montserrat tracking-[1.68px]">
            CREATED BY
          </span>
          <Image src={atom} alt="Atom6 Studio" />
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
