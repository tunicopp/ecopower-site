import Image from "next/image";
import React from "react";
import productImage from "../../../../public/assets/images/products/solar-panel.png";
import OutlineButton from "@/components/global/OutlineButton";

const ProductGridItem: React.FC = () => {
  return (
    <div className="rounded-2xl bg-beige-300 pt-4 pb-12">
      <Image
        src={productImage}
        alt="Foto nosso Produto"
        quality={100}
        width={225}
        height={225}
        className="w-auto h-auto mx-auto max-w-[225px]"
      />
      <div className="px-6 py-4">
        <h2 className="text-[22px] leading-7 font-bold">
          Energia Solar OnGrid
        </h2>
        <h3 className="text-lg my-6">
          Lorem ipsum dolor sit amet consectetur. Feugiat mi habitasse
          peilentesque eget ipsum.
        </h3>
        <span className="text-sm leading-7 font-bold">
          Chama a gente no WhatsApp
        </span>
      </div>
      <OutlineButton className="mx-6 mt-2">WhatsApp</OutlineButton>
    </div>
  );
};

export default ProductGridItem;
