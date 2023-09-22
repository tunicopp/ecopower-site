import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Map from "./Map";
import StateTooltip from "./StateTooltip";
import data from "../../../../public/assets/json/unidades.json";

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
            units={data.filter((d) => d.Uf === "SC").length}
          />
          <StateTooltip
            anchor="#rs"
            accordion_anchor="ac_rs"
            state="Rio Grande do Sul"
            units={data.filter((d) => d.Uf === "RS").length}
          />
          <StateTooltip
            anchor="#pr"
            accordion_anchor="ac_pr"
            state="Paraná"
            units={data.filter((d) => d.Uf === "PR").length}
          />
          <StateTooltip
            anchor="#sp"
            accordion_anchor="ac_sp"
            state="São Paulo"
            units={data.filter((d) => d.Uf === "SP").length}
          />
          <StateTooltip
            anchor="#rj"
            accordion_anchor="ac_rj"
            state="Rio de Janeiro"
            units={data.filter((d) => d.Uf === "RJ").length}
          />
          <StateTooltip
            anchor="#es"
            accordion_anchor="ac_es"
            state="Espirito Santo"
            units={data.filter((d) => d.Uf === "ES").length}
          />
          <StateTooltip
            anchor="#mg"
            accordion_anchor="ac_mg"
            state="Minas Gerais"
            units={data.filter((d) => d.Uf === "MG").length}
          />
          <StateTooltip
            anchor="#ms"
            accordion_anchor="ac_ms"
            state="Mato Grosso do Sul"
            units={data.filter((d) => d.Uf === "SC").length}
          />
          <StateTooltip
            anchor="#mt"
            accordion_anchor="ac_mt"
            state="Mato Grosso"
            units={data.filter((d) => d.Uf === "MT").length}
          />
          <StateTooltip
            anchor="#go"
            accordion_anchor="ac_go"
            state="Goiás"
            units={data.filter((d) => d.Uf === "GO").length}
          />
          <StateTooltip
            anchor="#df"
            accordion_anchor="ac_df"
            state="Distrito Federal"
            units={data.filter((d) => d.Uf === "DF").length}
          />
          <StateTooltip
            anchor="#ba"
            accordion_anchor="ac_ba"
            state="Bahia"
            units={data.filter((d) => d.Uf === "BA").length}
          />
          <StateTooltip
            anchor="#to"
            accordion_anchor="ac_to"
            state="Tocatins"
            units={data.filter((d) => d.Uf === "TO").length}
          />
          <StateTooltip
            anchor="#se"
            accordion_anchor="ac_se"
            state="Sergipe"
            units={data.filter((d) => d.Uf === "SE").length}
          />
          <StateTooltip
            anchor="#pe"
            accordion_anchor="ac_pe"
            state="Pernambuco"
            units={data.filter((d) => d.Uf === "PE").length}
          />
          <StateTooltip
            anchor="#rn"
            accordion_anchor="ac_rn"
            state="Rio Grande do Norte"
            units={data.filter((d) => d.Uf === "RN").length}
          />
          <StateTooltip
            anchor="#ce"
            accordion_anchor="ac_ce"
            state="Ceará"
            units={data.filter((d) => d.Uf === "CE").length}
          />
          <StateTooltip
            anchor="#ma"
            accordion_anchor="ac_ma"
            state="Maranhão"
            units={data.filter((d) => d.Uf === "MA").length}
          />
          <StateTooltip
            anchor="#pa"
            accordion_anchor="ac_pa"
            state="Pará"
            units={data.filter((d) => d.Uf === "PA").length}
          />
          <StateTooltip
            anchor="#ap"
            accordion_anchor="ac_ap"
            state="Amapá"
            units={data.filter((d) => d.Uf === "AP").length}
          />
          <StateTooltip
            anchor="#am"
            accordion_anchor="ac_am"
            state="Amazonas"
            units={data.filter((d) => d.Uf === "AM").length}
          />
          <StateTooltip
            anchor="#al"
            accordion_anchor="ac_al"
            state="Alagoas"
            units={data.filter((d) => d.Uf === "AL").length}
          />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionInteractiveMap;
