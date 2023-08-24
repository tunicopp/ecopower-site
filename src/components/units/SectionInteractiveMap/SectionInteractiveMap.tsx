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
          <PinButton anchor="#sc" state="Santa Catarina" units={11} />
          <PinButton anchor="#rs" state="Rio Grande do Sul" units={11} />
          <PinButton anchor="#pr" state="Paraná" units={11} />
          <PinButton anchor="#sp" state="São Paulo" units={11} />
          <PinButton anchor="#rj" state="Rio de Janeiro" units={11} />
          <PinButton anchor="#es" state="Espirito Santo" units={11} />
          <PinButton anchor="#mg" state="Minas Gerais" units={11} />
          <PinButton anchor="#ms" state="Mato Grosso do Sul" units={11} />
          <PinButton anchor="#mt" state="Mato Grosso" units={11} />
          <PinButton anchor="#go" state="Goiás" units={11} />
          <PinButton anchor="#df" state="Distrito Federal" units={11} />
          <PinButton anchor="#ba" state="Bahia" units={11} />
          <PinButton anchor="#to" state="Tocatins" units={11} />
          <PinButton anchor="#se" state="Sergipe" units={11} />
          <PinButton anchor="#pe" state="Pernambuco" units={11} />
          <PinButton anchor="#rn" state="Rio Grande do Norte" units={11} />
          <PinButton anchor="#ce" state="Ceará" units={11} />
          <PinButton anchor="#ma" state="Maranhão" units={11} />
          <PinButton anchor="#pa" state="Pará" units={11} />
          <PinButton anchor="#ap" state="Amapá" units={11} />
          <PinButton anchor="#am" state="Amazonas" units={11} />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
