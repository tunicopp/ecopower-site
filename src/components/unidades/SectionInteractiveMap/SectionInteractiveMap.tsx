import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Map from "./Map";
import StateTooltip from "./StateTooltip";
// import data from "../../../../public/assets/json/unidades.json";
import { units } from "../../../../src/utils/units";

let data = units;

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
            units={data.filter((d) => d.uf === "SC").length}
          />
          <StateTooltip
            anchor="#rs"
            accordion_anchor="ac_rs"
            state="Rio Grande do Sul"
            units={data.filter((d) => d.uf === "RS").length}
          />
          <StateTooltip
            anchor="#pr"
            accordion_anchor="ac_pr"
            state="Paraná"
            units={data.filter((d) => d.uf === "PR").length}
          />
          <StateTooltip
            anchor="#sp"
            accordion_anchor="ac_sp"
            state="São Paulo"
            units={data.filter((d) => d.uf === "SP").length}
          />
          <StateTooltip
            anchor="#rj"
            accordion_anchor="ac_rj"
            state="Rio de Janeiro"
            units={data.filter((d) => d.uf === "RJ").length}
          />
          <StateTooltip
            anchor="#es"
            accordion_anchor="ac_es"
            state="Espirito Santo"
            units={data.filter((d) => d.uf === "ES").length}
          />
          <StateTooltip
            anchor="#mg"
            accordion_anchor="ac_mg"
            state="Minas Gerais"
            units={data.filter((d) => d.uf === "MG").length}
          />
          <StateTooltip
            anchor="#ms"
            accordion_anchor="ac_ms"
            state="Mato Grosso do Sul"
            units={data.filter((d) => d.uf === "SC").length}
          />
          <StateTooltip
            anchor="#mt"
            accordion_anchor="ac_mt"
            state="Mato Grosso"
            units={data.filter((d) => d.uf === "MT").length}
          />
          <StateTooltip
            anchor="#go"
            accordion_anchor="ac_go"
            state="Goiás"
            units={data.filter((d) => d.uf === "GO").length}
          />
          <StateTooltip
            anchor="#df"
            accordion_anchor="ac_df"
            state="Distrito Federal"
            units={data.filter((d) => d.uf === "DF").length}
          />
          <StateTooltip
            anchor="#ba"
            accordion_anchor="ac_ba"
            state="Bahia"
            units={data.filter((d) => d.uf === "BA").length}
          />
          <StateTooltip
            anchor="#to"
            accordion_anchor="ac_to"
            state="Tocatins"
            units={data.filter((d) => d.uf === "TO").length}
          />
          <StateTooltip
            anchor="#se"
            accordion_anchor="ac_se"
            state="Sergipe"
            units={data.filter((d) => d.uf === "SE").length}
          />
          <StateTooltip
            anchor="#pe"
            accordion_anchor="ac_pe"
            state="Pernambuco"
            units={data.filter((d) => d.uf === "PE").length}
          />
          <StateTooltip
            anchor="#rn"
            accordion_anchor="ac_rn"
            state="Rio Grande do Norte"
            units={data.filter((d) => d.uf === "RN").length}
          />
          <StateTooltip
            anchor="#ce"
            accordion_anchor="ac_ce"
            state="Ceará"
            units={data.filter((d) => d.uf === "CE").length}
          />
          <StateTooltip
            anchor="#ma"
            accordion_anchor="ac_ma"
            state="Maranhão"
            units={data.filter((d) => d.uf === "MA").length}
          />
          <StateTooltip
            anchor="#pa"
            accordion_anchor="ac_pa"
            state="Pará"
            units={data.filter((d) => d.uf === "PA").length}
          />
          <StateTooltip
            anchor="#ap"
            accordion_anchor="ac_ap"
            state="Amapá"
            units={data.filter((d) => d.uf === "AP").length}
          />
          <StateTooltip
            anchor="#am"
            accordion_anchor="ac_am"
            state="Amazonas"
            units={data.filter((d) => d.uf === "AM").length}
          />
          <StateTooltip
            anchor="#al"
            accordion_anchor="ac_al"
            state="Alagoas"
            units={data.filter((d) => d.uf === "AL").length}
          />
          <StateTooltip
            anchor="#pb"
            accordion_anchor="ac_pb"
            state="Paraíba"
            units={data.filter((d) => d.uf === "PB").length}
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
