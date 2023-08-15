import Image from "next/image";
import React from "react";
import LinkFooter from "./LinkFooter";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../../public/assets/icons/logo-eco-power.svg";
import logoFooter from "../../../public/assets/images/logo-footer.png";

const BottomFooter: React.FC = () => {
  return (
    <div className="flex flex-col bg-primary-green w-full lg:h-[504px] p-6 lg:px-[108px] lg:pt-[108px] lg:pb-[40px]">
      <div className="grid lg:grid-cols-4 gap-4 w-full flex-1">
        <div className="flex ">
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
        </div>
        <div className="flex flex-col">
          <p className="text-white font-semibold">Prdutos</p>
          <div className="flex flex-col mt-[24px] gap-3 ">
            <LinkFooter text="Todos os Produtos" href="" />
            <LinkFooter text="Residencial" href="" />
            <LinkFooter text="Empresarial" href="" />
            <LinkFooter text="Industrial" href="" />
            <LinkFooter text="Rural" href="" />
            <a
              href={"https://www.ecopowerstore.com.br/"}
              target="_blank"
              className="bg-grayscale-800 text-white py-2 px-5 rounded-full font-semibold w-fit mt-6 mb-6 lg:mb-6 hover:border-2 hover:border-white transition-all"
            >
              Acessar Ecopower store
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-white font-semibold">Sobre Nós</p>
          <div className="flex flex-col mt-[24px] gap-3 ">
            <LinkFooter text="Projetos" href="" />
            <LinkFooter text="Nossa História" href="" />
            <LinkFooter text="Unidades" href="" />
            <LinkFooter text="Sustentabilidade" href="" />
            <LinkFooter text="Carreiras" href="" />
            <LinkFooter text="Blog" href="" />
          </div>
        </div>
        <div className="flex flex-col">
          {" "}
          <p className="text-white font-semibold">Contato</p>
          <div className="flex flex-col mt-[24px] gap-3 ">
            <div className="flex items-center gap-2 text-white">
              <IoCallOutline />{" "}
              <LinkFooter text="4000-1722" href={`tel:40001722`} />
            </div>
            <div className="flex items-center gap-2 text-white">
              <BsWhatsapp />
              <LinkFooter text="11 99090-0999" href={`tel:11990900999`} />
            </div>
            <div className="flex items-center gap-2 text-white">
              <IoLocationOutline />
              <LinkFooter
                text="Rua Delmiro José de Andrade, 602 Distrito Industrial II - Barretos/SP"
                href="https://goo.gl/maps/EnoKjdS1jRJRtW2z5"
                className="leading-4"
              />
            </div>
            <LinkFooter text="Seja um Franqueado" href="" />
            <LinkFooter text="Dúvidas Frequentes" href="" />
            <div className="relative flex w-[120px]   ">
              <Image
                src={logoFooter}
                alt="logo footer"
                quality={100}
                className="lg:absolute mb-4 lg:mb-0 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between w-full ">
        <p className="text-white opacity-40 text-[14px]">
          © 2023 EcoPower Energia Solar - Todos os direitos reservados. CNPJ:
          18.269.815/0001-36.
        </p>
        <a className="text-white opacity-40 mt-4 lg:mt-0 text-[14px] hover:border-b cursor-pointer">
          Termos e Políticas de Privacidade
        </a>
      </div>
    </div>
  );
};

export default BottomFooter;
