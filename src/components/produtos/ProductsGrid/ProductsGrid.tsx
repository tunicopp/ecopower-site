"use client";
import GridContainer from "@/components/global/GridContainer";
import OutlineButton from "@/components/global/OutlineButton";
import React from "react";
import { Tooltip } from "react-tooltip";
import { MdHelpOutline } from "react-icons/md";
import ProductGridItem from "./ProductGridItem";

const products = [
  {
    image: "/assets/images/produtos/kit-meu-solar.png",
    title: "Kit Meu Solar",
    text: "É a oportunidade de levar até as famílias, a viabilidade de praticamente eliminar um dos principais custos fixos de uma casa, a energia elétrica.",
  },
  {
    image: "/assets/images/produtos/cota-credito.png",
    title: "Cota de Crédito",
    text: "As cotas do título são reservadas de acordo com a necessidade de crédito mensal médio, o cliente faz a adesão e passa a receber os créditos mensalmente",
  },
  {
    image: "/assets/images/produtos/investidor.png",
    title: "Investidor",
    text: "Produza energia solar de forma sustentável, gere créditos de energia limpa e venda esses créditos conforme os meios previstos e regulamentados.",
  },
  {
    image: "/assets/images/produtos/off-grid.png",
    title: "Off Grid",
    text: "É um sistema isolado, que não está conectado à rede de distribuição elétrica. Geralmente utilizado em regiões onde não há eletricidade ou distribuição elétrica.",
  },
  {
    image: "/assets/images/produtos/locacao-de-area.png",
    title: "Locação de Área",
    text: "Arrende seu terreno de até 1000m² em até 25 anos para a montagem e produção de uma usina de energia solar. Ideal para a renda da agricultura familiar.",
  },
  {
    image: "/assets/images/produtos/vale-energia.png",
    title: "Vale Energia",
    text: "Contribua com seus colaboradores a não pagar pelo uso de energia elétrica em suas residências enquanto trabalham com você.",
  },
  {
    image: "/assets/images/produtos/bombeamento-solar.png",
    title: "Bombeamento Solar",
    text: "O cliente utiliza a mesma bomba d’agua que ele já utilizava e o acionamento do motor passa a ser realizado através da energia gerada pelos painéis solares.",
  },
  {
    image: "/assets/images/produtos/power-livre.png",
    title: "Power Livre",
    text: "Produza energia no modelo zero grid e atenda o auto consumo. Para o consumo em horários onde não possui geração de energia, continue no mercado livre.",
  },
  {
    image: "/assets/images/produtos/cliente-trifasico.png",
    title: "Cliente Trifásico",
    text: "Entendemos sua demanda, consumo e qualidade da energia na sua empresa ou fazenda. Nosso kit solar trifásico garante eficiência ao cliente.",
  },
];

const ProductsGrid: React.FC = () => {
  return (
    <GridContainer className="flex-col items-center py-20">
      <div className="md:flex grid grid-cols-1 w-full md:gap-6 gap-4 items-center justify-center">
        <OutlineButton aria-selected>Todos (40)</OutlineButton>
        <OutlineButton className="flex items-center gap-2">
          Conectado na Rede
          <div className="text-2xl online">
            <MdHelpOutline />
          </div>
        </OutlineButton>
        <OutlineButton className="flex items-center gap-2">
          Desconectado da Rede
          <div className="text-2xl offline">
            <MdHelpOutline />
          </div>
        </OutlineButton>
        <OutlineButton className="flex items-center gap-2">
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
        {products.map((p, i) => (
          <ProductGridItem
            key={i}
            image={p.image}
            text={p.text}
            title={p.title}
          />
        ))}
      </div>
    </GridContainer>
  );
};

export default ProductsGrid;
