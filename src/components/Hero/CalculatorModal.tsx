"use client";
import Image from "next/image";
import ApiCity from "@/@types/api/city.api.interface";
import City from "@/@types/app/city.app.interface";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Close from "../../../public/assets/icons/Close";

const CalculatorModal: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);

  async function getCities(): Promise<City[]> {
    const response = await fetch(
      "https://ecopower-dev.fluig.cloudtotvs.com.br/ws_simulador/rest/simulador/cidades",
      {
        method: "GET",
        cache: "force-cache",
      }
    );
    const data = await response.json();

    const cities: City[] = [];
    for (const d of data as ApiCity[]) {
      const city: City = {
        code: d.codigoIBGE,
        name: d.cidade,
        state: d.estado,
      };

      cities.push(city);
    }

    return cities;
  }

  useEffect(() => {
    getCities().then((d) => setCities(d));
  }, []);

  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 h-screen w-screen z-[100]">
          <div className="absolute w-full h-full bg-full-black/20" />
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[668px] w-full p-6">
            <div className="w-full bg-white rounded-3xl">
              <div className="bg-beige-300 relative py-6 rounded-t-3xl">
                <Image
                  src="/assets/images/footer/calculator-modal-image.svg"
                  alt="Imagem Calculadora"
                  width={408}
                  height={190}
                  className="mx-auto"
                />
                <button className="absolute top-6 right-6">
                  <Close />
                </button>
              </div>
              <div className="flex flex-col p-10">
                <h1 className="text-[32px] leading-[1.25em] font-bold max-w-[385px] text-center self-center">
                  Simulador Economia de Energia EcoPower
                </h1>
                <p className="pt-4 pb-6 text-grayscale-400 max-w-[442px] leading-[1.25em] self-center text-center">
                  Preencha os campos abaixo e veja agora mesmo o quanto você
                  poderá economizar investindo na energia solar.
                </p>

                <form className="flex flex-col gap-6 w-full"></form>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default CalculatorModal;
