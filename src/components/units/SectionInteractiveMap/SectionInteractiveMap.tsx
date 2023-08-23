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
          <PinButton className="bottom-[9%] right-[45%]" id="pin-rs" />
          <PinButton className="bottom-[15%] right-[34.5%]" />
          <PinButton className="bottom-[23%] right-[40%] pin-pr" />
          <PinButton className="bottom-[30%] right-[34.5%] pin-sp" />
          <PinButton className="bottom-[35%] left-[46.7%] pin-ms" />
          <PinButton className="bottom-[31%] right-[18%] pin-rj" />
          <PinButton className="bottom-[36.5%] right-[14%] pin-es" />
          <PinButton className="bottom-[38.5%] right-[22%] pin-mg" />
          <PinButton className="bottom-[45%] right-[37%] pin-go" />
          <PinButton className="bottom-[48.5%] right-[30.5%] pin-df" />
          <PinButton className="top-[42%] left-[44%] pin-mt" />
          <PinButton className="top-[41%] right-[17%] pin-ba" />
          <PinButton className="top-[36%] right-[32%] pin-to" />
          <PinButton className="top-[34%] right-[4%] pin-se" />
          <PinButton className="top-[28.5%] right-[8%] pin-pe" />
          <PinButton className="top-[24%] right-[3%] pin-rn" />
          <PinButton className="top-[23%] right-[10%] pin-ce" />
          <PinButton className="top-[24%] right-[25%] pin-ma" />
          <PinButton className="top-[26%] right-[44%] pin-pa" />
          <PinButton className="top-[8%] right-[42%] pin-ap" />
          <PinButton className="top-[17%] left-[25%] pin-am" />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
