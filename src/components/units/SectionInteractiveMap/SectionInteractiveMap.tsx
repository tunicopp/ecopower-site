import GridContainer from "@/components/global/GridContainer";
import React from "react";
import map from "../../../../public/assets/images/units/interactive-map.svg";
import Image from "next/image";
import PinButton from "./PinButton";

const SectionInteractiveMap: React.FC = () => {
  return (
    <section className="py-[110px]">
      <GridContainer>
        <div className="w-full relative">
          <Image src={map} alt="Mapa Interativo" className="w-full" />
          <PinButton className="bottom-[9%] right-[45%]" />
          <PinButton className="bottom-[15%] right-[34.5%]" />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
