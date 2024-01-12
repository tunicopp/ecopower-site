"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Close from "../../../public/assets/icons/Close";
import { Tooltip } from "react-tooltip";
import { Range, getTrackBackground } from "react-range";
import Radio from "../form/Radio";
import Input from "../form/Input";
import Select from "react-select";
import SimulationData from "@/@types/api/simulation-data.api.interface";
import SimulationDataContent from "./SimulationDataContent";
import { useGlobalContext } from "@/app/context/store";
import { useMask } from "@react-input/mask";
import City from "@/@types/app/city.app.interface";
import ApiCity from "@/@types/api/city.api.interface";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialValue?: number;
}

const CalculatorModal: React.FC<Props> = ({
  isOpen,
  onClose,
  initialValue = 0,
}) => {
  const [citiesData, setCities] = useState<City[]>([]);
  const [value, setValue] = useState([initialValue]);
  const [data, setData] = useState({
    location: "",
    name: "",
    email: "",
    phone: "",
    city: { value: "", label: "" },
  });
  const [simulationData, setSimulationData] = useState<SimulationData | null>(
    null
  );
  // const { cities } = useGlobalContext();
  const phoneMaskRef = useMask({
    mask: "(__) _____-____",
    replacement: { _: /\d/ },
  });

  const bg = getTrackBackground({
    min: 0,
    max: 800,
    colors: ["#01B040", "#F8F6F1"],
    values: value,
  });

  const tooltipText =
    value[0] < 200
      ? "Arraste para selecionar um valor"
      : value[0] < 400
      ? "Até R$200"
      : value[0] < 600
      ? "De R$200 a R$600"
      : value[0] < 800
      ? "De R$600 a R$800"
      : "Mais de R$800";

  function handleOnChangeLocation(e: React.ChangeEvent<HTMLInputElement>) {
    setData((old) => ({
      ...old,
      location: e.target.value,
    }));
  }

  async function getCities(): Promise<City[]> {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CALCULATOR_BASE_URL}/ws_simulador/rest/simulador/cidades`,
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

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_CALCULATOR_BASE_URL}/ws_simulador/rest/simulador/simular`,
      {
        method: "POST",
        body: JSON.stringify({
          valorConta: value[0],
          ibge: data.city.value,
          localInstalacao: data.location,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await resp.json();

    if (resp.status === 200) {
      const respData: SimulationData = {
        ...json,
        valorConta: value[0],
      };

      setSimulationData(respData);

      const searchResp = await fetch("/api/hubspot", {
        method: "POST",
        body: JSON.stringify({
          calculator: {
            ...respData,
          },
          data: {
            ...data,
          },
          currentCost: value[0],
        }),
      });
    }
  }

  useEffect(() => {
    if (isOpen && citiesData.length === 0) {
      getCities().then((d) => setCities(d));
    }
  }, [isOpen, citiesData]);

  useEffect(() => {
    //remove scroll when open modal
    const body = document.body;

    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {createPortal(
        <div
          className={`fixed top-0 left-0 h-screen w-screen z-[1000] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="absolute w-full h-full bg-full-black/30 "
            style={{ backdropFilter: "blur(3px)" }}
          />
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[806px] w-full p-2 md:p-6">
            <div className="w-full rounded-3xl max-h-[90vh] overflow-auto">
              {simulationData ? (
                <SimulationDataContent
                  data={simulationData}
                  onClose={onClose}
                />
              ) : (
                <>
                  <div
                    className={`${
                      simulationData ? "bg-white" : "bg-beige-300"
                    } relative py-6 rounded-t-3xl`}
                  >
                    <Image
                      src="/assets/images/footer/calculator-modal-image.svg"
                      alt="Imagem Calculadora"
                      width={408}
                      height={190}
                      className="mx-auto"
                    />
                    <button
                      className="absolute top-6 right-6"
                      onClick={() => onClose()}
                    >
                      <Close />
                    </button>
                  </div>
                  <div className="flex flex-col p-6 md:p-10 bg-white">
                    <h1 className="text-[32px] leading-[1.25em] font-bold max-w-[385px] text-center self-center">
                      Simulador Economia de Energia EcoPower
                    </h1>
                    <p className="pt-4 pb-6 text-grayscale-400 max-w-[442px] leading-[1.25em] self-center text-center">
                      Preencha os campos abaixo e veja agora mesmo o quanto você
                      poderá economizar investindo na energia solar.
                    </p>

                    <form
                      className="flex flex-col gap-6 w-full"
                      onSubmit={(e) => submitForm(e)}
                    >
                      <div className="flex flex-1 flex-col w-full lg:w-auto lg:mr-8">
                        <p className="text-grayscale-800 font-medium leading-5 mb-[14px] lg:mb-[10px]">
                          Média mensal de gasto com energia:
                        </p>
                        <div className="ml-3">
                          <Range
                            onChange={(v) => setValue(v)}
                            renderThumb={({ props, index }) => (
                              <div
                                {...props}
                                key={index}
                                className="h-6 w-6 bg-grayscale-900 rounded-full border-2 border-white outline-none thumb"
                              />
                            )}
                            renderTrack={({ props, children }) => (
                              <div
                                {...props}
                                className="h-3 rounded-full w-full relative"
                                style={{ background: bg }}
                              >
                                {children}
                              </div>
                            )}
                            values={value[0] > 800 ? [800] : value}
                            min={0}
                            max={800}
                            step={200}
                          />
                        </div>
                        <Tooltip
                          anchorSelect=".thumb"
                          place="top"
                          className="!text-white !bg-grayscale-800 !opacity-100 !rounded !py-[6px] !px-2 !text-sm font-medium"
                        >
                          {tooltipText}
                        </Tooltip>
                      </div>
                      <div className="relative w-full flex-shrink-0">
                        <span className="absolute left-5 top-[15px] text-sm font-medium">
                          R$
                        </span>
                        <input
                          className="select"
                          placeholder="Arraste ou digite"
                          value={value[0] === 0 ? undefined : value[0]}
                          type="number"
                          min={0}
                          onChange={(v) => setValue([parseInt(v.target.value)])}
                        />
                        <ul className="dropdown">
                          <li onClick={() => setValue([200])}>Até R$200</li>
                          <li onClick={() => setValue([400])}>
                            De R$200 a R$400
                          </li>
                          <li onClick={() => setValue([600])}>
                            De R$400 a R$800
                          </li>
                          <li onClick={() => setValue([800])}>Mais de R$800</li>
                        </ul>
                      </div>
                      <p className="font-medium text-font-black">
                        Onde será instalado?
                      </p>
                      <div
                        className="flex flex-wrap w-full justify-start md:justify-between items-center gap-2"
                        onChange={(e) =>
                          handleOnChangeLocation(
                            e as React.ChangeEvent<HTMLInputElement>
                          )
                        }
                      >
                        <Radio
                          id="RESIDENCIAL"
                          name="location"
                          value="RESIDENCIAL"
                        >
                          Residência
                        </Radio>
                        <Radio
                          id="EMPRESARIAL"
                          name="location"
                          value="EMPRESARIAL"
                        >
                          Empresa
                        </Radio>
                        <Radio
                          id="INDUSTRIAL"
                          name="location"
                          value="INDUSTRIAL"
                        >
                          Indústria
                        </Radio>
                        <Radio id="RURAL" name="location" value="RURAL">
                          Área Rural
                        </Radio>
                      </div>
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,
                            height: 48,
                            borderRadius: 1000,
                            padding: "0px 14px",
                          }),
                        }}
                        options={citiesData.map((c) => ({
                          value: c.code,
                          label: c.name,
                        }))}
                        placeholder="Cidade"
                        onChange={(a) =>
                          setData((old) => ({
                            ...old,
                            city: a as any,
                          }))
                        }
                      />
                      <Input
                        placeholder="Nome e sobrenome"
                        value={data.name}
                        onChange={(e) =>
                          setData((old) => ({ ...old, name: e.target.value }))
                        }
                      />
                      <Input
                        placeholder="Email"
                        type="email"
                        value={data.email}
                        onChange={(e) =>
                          setData((old) => ({ ...old, email: e.target.value }))
                        }
                      />
                      <input
                        ref={phoneMaskRef}
                        className="h-12 text-font-black outline-none placeholder:text-grayscale-300 px-6 w-full rounded-full bg-white border border-radio-border"
                        value={data.phone}
                        onChange={(e) =>
                          setData((old) => ({ ...old, phone: e.target.value }))
                        }
                        placeholder="Telefone ou WhatsApp"
                      />
                      {/* <Input
                      placeholder="Telefone ou WhatsApp"
                      value={data.phone}
                      onChange={(e) =>
                        setData((old) => ({ ...old, phone: e.target.value }))
                      }
                      ref={phoneMaskRef}
                    /> */}
                      <button
                        type="submit"
                        className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                        disabled={
                          data.city.value === "" ||
                          data.location === "" ||
                          data.name === "" ||
                          data.email === "" ||
                          data.phone === "" ||
                          value[0] === 0
                        }
                      >
                        Ver Resultado da Simulação
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>,
        document.querySelector("#calc") as any
      )}
    </>
  );
};

export default CalculatorModal;
