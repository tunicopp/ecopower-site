import GridContainer from "@/components/global/GridContainer";
import OutlineButton from "@/components/global/OutlineButton";
import React from "react";

const ProductsGrid: React.FC = () => {
  return (
    <GridContainer className="flex-col items-center py-20">
      <div className="flex items-center">
        <OutlineButton aria-selected>Todos</OutlineButton>
        <OutlineButton className="mx-[22px]">
          Energia Solar OnGrid
        </OutlineButton>
        <OutlineButton className="mr-[22px]">
          Energia Solar OffGrid
        </OutlineButton>
        <OutlineButton>Modelo Híbrido</OutlineButton>
      </div>
    </GridContainer>
  );
};

export default ProductsGrid;
