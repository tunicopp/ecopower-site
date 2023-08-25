import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Map from "./Map";
import StateTooltip from "./StateTooltip";

const SectionInteractiveMap: React.FC = () => {
  return (
    <section className="pt-[110px] pb-[80px]">
      <GridContainer>
        <div className="w-full relative">
          <Map />
          <StateTooltip
            anchor="#sc"
            accordion_anchor="ac_sc"
            state="Santa Catarina"
            units={11}
          />
          <StateTooltip
            anchor="#rs"
            accordion_anchor="ac_rs"
            state="Rio Grande do Sul"
            units={11}
          />
          <StateTooltip
            anchor="#pr"
            accordion_anchor="ac_pr"
            state="Paraná"
            units={11}
          />
          <StateTooltip
            anchor="#sp"
            accordion_anchor="ac_sp"
            state="São Paulo"
            units={11}
          />
          <StateTooltip
            anchor="#rj"
            accordion_anchor="ac_rj"
            state="Rio de Janeiro"
            units={11}
          />
          <StateTooltip
            anchor="#es"
            accordion_anchor="ac_es"
            state="Espirito Santo"
            units={11}
          />
          <StateTooltip
            anchor="#mg"
            accordion_anchor="ac_mg"
            state="Minas Gerais"
            units={11}
          />
          <StateTooltip
            anchor="#ms"
            accordion_anchor="ac_ms"
            state="Mato Grosso do Sul"
            units={11}
          />
          <StateTooltip
            anchor="#mt"
            accordion_anchor="ac_mt"
            state="Mato Grosso"
            units={11}
          />
          <StateTooltip
            anchor="#go"
            accordion_anchor="ac_go"
            state="Goiás"
            units={11}
          />
          <StateTooltip
            anchor="#df"
            accordion_anchor="ac_df"
            state="Distrito Federal"
            units={11}
          />
          <StateTooltip
            anchor="#ba"
            accordion_anchor="ac_ba"
            state="Bahia"
            units={11}
          />
          <StateTooltip
            anchor="#to"
            accordion_anchor="ac_to"
            state="Tocatins"
            units={11}
          />
          <StateTooltip
            anchor="#se"
            accordion_anchor="ac_se"
            state="Sergipe"
            units={11}
          />
          <StateTooltip
            anchor="#pe"
            accordion_anchor="ac_pe"
            state="Pernambuco"
            units={11}
          />
          <StateTooltip
            anchor="#rn"
            accordion_anchor="ac_rn"
            state="Rio Grande do Norte"
            units={11}
          />
          <StateTooltip
            anchor="#ce"
            accordion_anchor="ac_ce"
            state="Ceará"
            units={11}
          />
          <StateTooltip
            anchor="#ma"
            accordion_anchor="ac_ma"
            state="Maranhão"
            units={11}
          />
          <StateTooltip
            anchor="#pa"
            accordion_anchor="ac_pa"
            state="Pará"
            units={11}
          />
          <StateTooltip
            anchor="#ap"
            accordion_anchor="ac_ap"
            state="Amapá"
            units={11}
          />
          <StateTooltip
            anchor="#am"
            accordion_anchor="ac_am"
            state="Amazonas"
            units={11}
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
