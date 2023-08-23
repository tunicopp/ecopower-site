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
        Lorem ipsum dolor sit amet consectetur. Feugiat mi habitasse
        peilentesque eget ipsum.
      </Tooltip>
      <Tooltip
        anchorSelect=".offline"
        place="top"
        className="!text-grayscale-800 !bg-white !opacity-100 !p-6 !text-sm drop-shadow-tooltip !rounded-2xl max-w-[264px]"
        offset={30}
      >
        Lorem ipsum dolor sit amet consectetur. Feugiat mi habitasse
        peilentesque eget ipsum.
      </Tooltip>
      <Tooltip
        anchorSelect=".hybrid"
        place="top"
        className="!text-grayscale-800 !bg-white !opacity-100 !p-6 !text-sm drop-shadow-tooltip !rounded-2xl max-w-[264px]"
        offset={30}
      >
        Lorem ipsum dolor sit amet consectetur. Feugiat mi habitasse
        peilentesque eget ipsum.
      </Tooltip>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:mt-[88px] mt-10">
        <ProductGridItem />
        <ProductGridItem />
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
