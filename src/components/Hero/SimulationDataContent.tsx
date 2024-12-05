import SimulationData from "@/@types/api/simulation-data.api.interface";
import Image from "next/image";
import React, { useState } from "react";
import Close from "../../../public/assets/icons/Close";
import Dollar from "../../../public/assets/icons/Dollar";
import DollarCircle from "../../../public/assets/icons/DollarCircle";
import Inverse from "../../../public/assets/icons/Inverse";
import Lightining from "../../../public/assets/icons/Lightining";
import Plug from "../../../public/assets/icons/Plug";
import SolarPanel from "../../../public/assets/icons/SolarPanel";
import FullProposal from "./FullProposal";

interface Props {
  data: SimulationData;
  onClose: () => void;
}

const SimulationDataContent: React.FC<Props> = ({ data, onClose }) => {
  const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  const [simulation, setSimulation] = useState(false);

  return (
    <>
      {simulation ? (
        <FullProposal onClose={onClose} />
      ) : (
        <>
          <div
            className={`${
              data ? "bg-white" : "bg-beige-300"
            } relative py-6 rounded-t-3xl`}
          >
            <Image
              src="/assets/images/footer/calculator-modal-image.svg"
              alt="Imagem Calculadora"
              width={408}
              height={190}
              className="mx-auto"
            />
            <button className="absolute top-6 right-6" onClick={onClose}>
              <Close />
            </button>
          </div>
          <div className="flex flex-col items-center px-10 pt-5 pb-10 gap-8 text-center bg-beige-300">
            <h2 className="font-bold text-[32px] text-grayscale-900">
              Seu Projeto Solar
            </h2>
            <p>
              Preencha os campos abaixo e veja agora mesmo o quanto você poderá
              economizar investindo na energia solar.
            </p>
            <div className="flex flex-col md:flex-row items-stretch w-full">
              <div className="flex flex-col flex-1 items-center md:rounded-r-none md:!rounded-bl-2xl rounded-b-none rounded-2xl px-6 py-10 bg-danger text-center">
                <p className="text-grayscale-900">Valor da Conta Atual</p>
                <b className="text-[32px] text-grayscale-900 mt-2">
                  {formatCurrency.format(data.valorConta)}
                </b>
              </div>
              <div className="flex flex-col flex-1 items-center md:rounded-l-none md:!rounded-tr-2xl rounded-t-none rounded-2xl px-6 py-10 bg-primary-green text-center">
                <p className="text-white">Valor da Sua Parcela</p>
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
            <div className="grid w-full grid-cols-2 gap-6 items-start">
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
                  {data.inversores[0].inversorQtd +
                    " " +
                    data.inversores[0].inversorModelo}
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
                {data.condicoesEspeciais.map((d, i) => (
                  <b key={i} className="text-center">
                    {d.condicaoEspecial}
                  </b>
                ))}
              </div>
            </div>
            <span className="text-center my-6 text-sm text-black font-medium">
              {data.promocao}
            </span>
            {/* <p className="text-sm">*Carência de 30 dias e em 30x sem juros</p> */}
            {/* <button
              onClick={() => setSimulation(true)}
              className="h-12 w-full text-white px-5 py-[6px] mt-6 bg-primary-green rounded-full flex items-center justify-center"
            >
              Simular proposta completa
            </button> */}
            <a
              target="_blank"
              // href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
              href="https://api.whatsapp.com/send?phone=5517997917530&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
              className="mt-6 underline"
            >
              Fale com um consultor
            </a>
          </div>

          {/* <div className="p-6 bg-beige-300 rounded-2xl flex flex-col items-center">
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
              {data.inversores[0].inversorQtd +
                " " +
                data.inversores[0].inversorModelo}
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
            {data.condicoesEspeciais.map((d, i) => (
              <b key={i} className="text-center">
                {d.condicaoEspecial}
              </b>
            ))}
          </div>
          <span className="text-center my-6 text-sm text-black font-medium">
            {data.promocao}
          </span>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=17997394186&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
            className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full flex items-center justify-center"
          >
            Falar com o consultor agora
          </a> */}
        </>
      )}
    </>
  );
};

export default SimulationDataContent;
