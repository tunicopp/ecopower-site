"use client";
import GridContainer from "@/components/global/GridContainer";
import OutlineButton from "@/components/global/OutlineButton";
import React from "react";
import { Tooltip } from "react-tooltip";
import ProductGridItem from "./ProductGridItem";
import { MdHelpOutline } from "react-icons/md";

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
        <ProductGridItem isOnGrid />
        <ProductGridItem isOnGrid />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
        <ProductGridItem />
      </div>
    </GridContainer>
  );
};

export default ProductsGrid;
