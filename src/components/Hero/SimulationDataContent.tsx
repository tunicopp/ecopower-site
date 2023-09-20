import SimulationData from "@/@types/api/simulation-data.api.interface";
import React from "react";
import Lightining from "../../../public/assets/icons/Lightining";
import Plug from "../../../public/assets/icons/Plug";
import SolarPanel from "../../../public/assets/icons/SolarPanel";
import Inverse from "../../../public/assets/icons/Inverse";
import Dollar from "../../../public/assets/icons/Dollar";
import DollarCircle from "../../../public/assets/icons/DollarCircle";

interface Props {
  data: SimulationData;
}

const SimulationDataContent: React.FC<Props> = ({ data }) => {
  const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <>
      <div className="flex flex-col items-center px-10 pt-5 pb-10 gap-8 text-center bg-beige-300">
        <h2 className="font-bold text-[32px] text-grayscale-900">
          Seu Projeto Solar
        </h2>
        <p>
          Preencha os campos abaixo e veja agora mesmo o quanto você poderá
          economizar investindo na energia solar.
        </p>
        <div className="flex items-stretch w-full">
          <div className="flex flex-col flex-1 items-center rounded-l-2xl px-6 py-10 bg-danger text-center">
            <p className="text-grayscale-900">Valor da Conta Atual</p>
            <b className="text-[32px] text-grayscale-900 mt-2">
              {formatCurrency.format(data.valorConta)}
            </b>
          </div>
          <div className="flex flex-col flex-1 items-center rounded-r-2xl px-6 py-10 bg-primary-green text-center">
            <p className="text-white">Valor da Conta Atual</p>
            <b className="text-[32px] text-white mt-2">
              {formatCurrency.format(data.valorParcela)}
            </b>
          </div>
        </div>
        <span className="text-grayscale-900">
          Valor Total do Projeto: {formatCurrency.format(data.valorProjeto)}
        </span>
      </div>
      <div className="bg-white w-full p-10 rounded-b-3xl flex flex-col items-center">
        <div className="grid w-full grid-cols-2 gap-6">
          <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
            <Lightining />
            <span className="text-grayscale-900 mt-4 mb-[10px] font-medium">
              Geração Média:
            </span>
            <b className="text-center">
              {data.geracaoMedia} {data.geracaoMediaUnidade}
            </b>
          </div>
          <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
            <Plug />
            <span className="text-grayscale-900 mt-4 mb-[10px] font-medium">
              Potência Final:
            </span>
            <b className="text-center">
              {data.potencia} {data.potenciaUnidade}
            </b>
          </div>
          <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
            <SolarPanel />
            <span className="text-grayscale-900 mt-4 mb-[10px] font-medium">
              Módulo:
            </span>
            <b className="text-center">
              {data.moduloQtd} ({data.moduloModelo})
            </b>
          </div>
          <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
            <Inverse />
            <span className="text-grayscale-900 mt-4 mb-[10px] font-medium">
              Inversor:
            </span>
            <b className="text-center">
              {data.inversores[0].inversor} KW -{" "}
              {data.inversores[0].inversorModelo}
            </b>
          </div>
          <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
            <Dollar />
            <span className="text-grayscale-900 mt-4 mb-[10px] font-medium">
              Valor Desconto:
            </span>
            <b className="text-center">
              {formatCurrency.format(data.valorProjeto)}
            </b>
          </div>
          <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
            <DollarCircle />
            <span className="text-grayscale-900 mt-4 mb-[10px] font-medium">
              Condição Especial:
            </span>
            <b className="text-center">{data.condicaoEspecial}</b>
          </div>
        </div>
        <span className="text-center my-6 text-sm text-black font-medium">
          {data.promocao}
        </span>
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
          className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full flex items-center justify-center"
        >
          Falar com o consultor agora
        </a>
      </div>
    </>
  );
};

export default SimulationDataContent;
