import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Map from "./Map";
import map from "../../../../public/assets/images/units/interactive-map.svg";
import Image from "next/image";
import PinButton from "./PinButton";

const SectionInteractiveMap: React.FC = () => {
  return (
    <section className="py-[110px]">
      <GridContainer>
        <div className="w-full relative">
          <Map />
          {/* <Image src={map} alt="Mapa Interativo" className="w-full" /> */}
          <PinButton className="bottom-[9%] right-[45%]" />
          <PinButton className="bottom-[15%] right-[34.5%]" />
          <PinButton className="bottom-[23%] right-[40%]" />
          <PinButton className="bottom-[30%] right-[34.5%]" />
          <PinButton className="bottom-[35%] left-[46.7%]" />
          <PinButton className="bottom-[31%] right-[18%]" />
          <PinButton className="bottom-[36.5%] right-[14%]" />
          <PinButton className="bottom-[38.5%] right-[22%]" />
          <PinButton className="bottom-[45%] right-[37%]" />
          <PinButton className="bottom-[48.5%] right-[30.5%]" />
          <PinButton className="top-[42%] left-[44%]" />
          <PinButton className="top-[41%] right-[17%]" />
          <PinButton className="top-[36%] right-[32%]" />
          <PinButton className="top-[34%] right-[4%]" />
          <PinButton className="top-[28.5%] right-[8%]" />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
