"use client";
import React from "react";
import Tocantins from "./states/Tocantins";
import Sergipe from "./states/Sergipe";
import SaoPaulo from "./states/SaoPaulo";
import SantaCatarina from "./states/SantaCatarina";
import Roraima from "./states/Roraima";
import Rondonia from "./states/Rondonia";
import RioGrandeDoSul from "./states/RioGrandeDoSul";
import RioGrandeDoNorte from "./states/RioGrandeDoNorte";
import RioDeJaneiro from "./states/RioDeJaneiro";
import Piaui from "./states/Piaui";
import Pernambuco from "./states/Pernambuco";
import Parana from "./states/Parana";
import Paraiba from "./states/Paraiba";
import Para from "./states/Para";
import MinasGerais from "./states/MinasGerais";
import MatoGrossoDoSul from "./states/MatoGrossoDoSul";
import MatoGrosso from "./states/MatoGrosso";
import Maranhao from "./states/Maranhao";
import Ceara from "./states/Ceara";
import Goias from "./states/Goias";
import DistritoFederal from "./states/DistritoFederal";
import EspiritoSanto from "./states/EspiritoSanto";
import Bahia from "./states/Bahia";
import Amazonas from "./states/Amazonas";
import Acre from "./states/Acre";
import Alagoas from "./states/Alagoas";
import Amapa from "./states/Amapa";

const Map: React.FC = () => {
  return (
    <svg
      width="1192"
      height="1241"
      viewBox="0 0 1192 1241"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      <circle cx="595" cy="628" r="339.294" stroke="#4AF387" strokeWidth="33" />
      <circle cx="595" cy="628" r="502.5" stroke="#4AF387" strokeWidth="17" />
      <circle cx="595" cy="628" r="198.773" fill="#4AF387" />

      <Tocantins />
      <Sergipe />
      <SaoPaulo />
      <SantaCatarina />
      <Roraima />
      <Rondonia />
      <RioGrandeDoSul />
      <RioGrandeDoNorte />
      <RioDeJaneiro />
      <Piaui />
      <Pernambuco />
      <Parana />
      <Paraiba />
      <Para />
      <MinasGerais />
      <MatoGrossoDoSul />
      <MatoGrosso />
      <Maranhao />
      <Ceara />
      <Goias />
      <DistritoFederal />
      <EspiritoSanto />
      <Bahia />
      <Amazonas />
      <Acre />
      <Alagoas />
      <Amapa />
    </svg>
  );
};

export default Map;
