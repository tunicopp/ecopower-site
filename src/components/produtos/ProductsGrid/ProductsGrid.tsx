"use client";
import GridContainer from "@/components/global/GridContainer";
import OutlineButton from "@/components/global/OutlineButton";
import React, { useState } from "react";
import { MdHelpOutline } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import ProductGridItem from "./ProductGridItem";

const products = [
  {
    image: "/assets/images/produtos/banners_site_v3-06.png",
    title: "EcoPower Mobi",
    text: "A Power Mobi é a linha de mobilidade elétrica da EcoPower, queremos garantir a mobilidade urbana com consciência ecológica e independência financeira.",
    type: ["all", "hybrid", "connected", "disconnected"],
    link: "https://ecopowerenergiasolar.com.br/power-mobi",
  },
  {
    image: "/assets/images/produtos/banner-home.png",
    title: "EcoHome",
    text: "Torne seu o lar um ambiente mais inteligente, aconchegante e com equipamentos para facilitar a sua vida.",
    type: ["all", "hybrid", "connected", "disconnected"],
    link: "https://ecopowerenergiasolar.com.br/ecohome",
  },
  {
    image: "/assets/images/produtos/kit-meu-solar.png",
    title: "Kit Meu Solar",
    text: "É a oportunidade de levar até as famílias, a viabilidade de praticamente eliminar um dos principais custos fixos de uma casa, a energia elétrica.",
    type: ["all", "connected", "hybrid"],
    link: "kit-meu-solar",
  },
  {
    image: "/assets/images/produtos/cota-credito.png",
    title: "Cota de Usina Solar",
    text: "Adquira o direito de uso de cotas de usinas solares e tenha acesso aos benefícios de quem gera sua própria energia, através da compensação de seu consumo com excedentes e créditos de energia, obtendo descontos em suas faturas junto a sua distribuidora.",
    type: ["all", "connected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/investidor.png",
    title: "Investidor",
    text: "Invista em usinas solares voltadas a consumidores que desejam gerar sua própria energia, ao compensarem seu consumo com os excedentes e créditos, na forma de desconto, em suas faturas junto à distribuidora local.",
    type: ["all", "connected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/off-grid.png",
    title: "Off Grid",
    text: "É um sistema isolado, que não está conectado à rede de distribuição elétrica. Geralmente utilizado em regiões onde não há eletricidade ou distribuição elétrica.",
    type: ["all", "disconnected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/locacao-de-area.png",
    title: "Locação de Área",
    text: "Arrende seu terreno de até 1000m² em até 25 anos para a montagem e produção de uma usina de energia solar. Ideal para a renda da agricultura familiar.",
    type: ["all", "connected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/vale-energia.png",
    title: "Vale Energia",
    text: "Contribua com seus colaboradores a não pagar pelo uso de energia elétrica em suas residências enquanto trabalham com você.",
    type: ["all", "connected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/bombeamento-solar.png",
    title: "Bombeamento Solar",
    text: "O cliente utiliza a mesma bomba d’agua que ele já utilizava e o acionamento do motor passa a ser realizado através da energia gerada pelos painéis solares.",
    type: ["all", "disconnected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/power-livre.png",
    title: "Power Livre",
    text: "Produza energia no modelo zero grid e atenda o auto consumo. Para o consumo em horários onde não possui geração de energia, continue no mercado livre.",
    type: ["all", "disconnected"],
    link: undefined,
  },
  {
    image: "/assets/images/produtos/cliente-trifasico.png",
    title: "Cliente Trifásico",
    text: "Entendemos sua demanda, consumo e qualidade da energia na sua empresa ou fazenda. Nosso kit solar trifásico garante eficiência ao cliente.",
    type: ["all", "hybrid", "connected", "disconnected"],
    link: undefined,
  },
];

const ProductsGrid: React.FC = () => {
  const [selected, setSelected] = useState<
    "all" | "connected" | "disconnected" | "hybrid"
  >("all");

  return (
    <GridContainer className="flex-col items-center py-20">
      <div className="md:flex grid grid-cols-1 w-full md:gap-6 gap-4 items-center justify-center">
        <OutlineButton
          aria-selected={selected === "all"}
          onClick={() => setSelected("all")}
        >
          Todos ({products.length})
        </OutlineButton>
        <OutlineButton
          className="flex items-center gap-2"
          aria-selected={selected === "connected"}
          onClick={() => setSelected("connected")}
        >
          Conectado na Rede
          <div className="text-2xl online">
            <MdHelpOutline />
          </div>
        </OutlineButton>
        <OutlineButton
          className="flex items-center gap-2"
          aria-selected={selected === "disconnected"}
          onClick={() => setSelected("disconnected")}
        >
          Desconectado da Rede
          <div className="text-2xl offline">
            <MdHelpOutline />
          </div>
        </OutlineButton>
        <OutlineButton
          className="flex items-center gap-2"
          aria-selected={selected === "hybrid"}
          onClick={() => setSelected("hybrid")}
        >
          Modelos Híbridos
          <div className="text-2xl hybrid">
            <MdHelpOutline />
          </div>
        </OutlineButton>
      </div>
      <Tooltip
        anchorSelect=".online"
        place="top"
        className="!text-grayscale-800 !bg-white !opacity-100 !p-6 !text-sm drop-shadow-tooltip !rounded-2xl max-w-[264px]"
        offset={30}
      >
        A energia que não é consumida é enviada para a rede externa, que fica
        como crédito. Nesse sistema não é utilizado baterias para armazenar o
        que é gerado.
      </Tooltip>
      <Tooltip
        anchorSelect=".offline"
        place="top"
        className="!text-grayscale-800 !bg-white !opacity-100 !p-6 !text-sm drop-shadow-tooltip !rounded-2xl max-w-[264px]"
        offset={30}
      >
        Seu projeto não é conectado na rede da companhia, podendo utilizar
        baterias para o armazenamento ou sem baterias para consumir a energia
        enquanto gera.
      </Tooltip>
      <Tooltip
        anchorSelect=".hybrid"
        place="top"
        className="!text-grayscale-800 !bg-white !opacity-100 !p-6 !text-sm drop-shadow-tooltip !rounded-2xl max-w-[264px]"
        offset={30}
      >
        Aproveite o melhor dos 2 mundos. Conectado e desconectado da companhia
        você pode armazenar e gerenciar a energia que injeta na rede.
      </Tooltip>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:mt-[88px] mt-10">
        {products
          .filter((p) => p.type?.includes(selected))
          .map((p, i) => (
            <ProductGridItem
              key={i}
              image={p.image}
              text={p.text}
              title={p.title}
              link={p.link}
            />
          ))}
      </div>
    </GridContainer>
  );
};

export default ProductsGrid;
