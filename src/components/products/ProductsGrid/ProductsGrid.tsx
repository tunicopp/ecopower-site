import GridContainer from "@/components/global/GridContainer";
import OutlineButton from "@/components/global/OutlineButton";
import React from "react";
import ProductGridItem from "./ProductGridItem";

const ProductsGrid: React.FC = () => {
  return (
    <GridContainer className="flex-col items-center py-20">
      <div className="md:flex grid grid-cols-1 w-full gap-4 items-center justify-center">
        <OutlineButton aria-selected>Todos</OutlineButton>
        <OutlineButton className="md:mx-[22px]">
          Conectado na Rede
        </OutlineButton>
        <OutlineButton className="md:mr-[22px]">
          Desconectado da Rede
        </OutlineButton>
        <OutlineButton>Modelos Híbridos</OutlineButton>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 md:mt-[88px] mt-10">
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
