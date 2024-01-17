"use client";
import Image from "next/image";
import React, { ReactNode, useEffect, useState } from "react";
import Close from "../../../public/assets/icons/Close";
import Radio from "../form/Radio";
import Input from "../form/Input";
import img1 from "../../../public/assets/images/modal-full-proposal/step1.png";
import img2 from "../../../public/assets/images/modal-full-proposal/step2.png";
import img3 from "../../../public/assets/images/modal-full-proposal/step3.png";
import img4 from "../../../public/assets/images/modal-full-proposal/dowload-pdf.png";
import img5 from "../../../public/assets/images/modal-full-proposal/contact-img.png";
import { BiInfoCircle, BiX } from "react-icons/bi";
import CustomTooltip from "../global/CustomTooltip";
import OutlineButton from "../global/OutlineButton";
import CustomSelect from "../global/CustomSelect";
import { BsPlus } from "react-icons/bs";
import TagCalculator from "../global/TagCalculator";
import { cnpjMask, cpfMask, cpfVerify, formatCEP } from "@/utils/cpf-cnpj-mask";
import Lottie from "lottie-react";
import animation1 from "../../lotties/animation1.json";
import animation2 from "../../lotties/animation2.json";

interface Props {
  onClose: () => void;
}

type DataTag = { date: string; kw: string };

const FullProposal: React.FC<Props> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [showPdf, setShowPdf] = useState(false);
  const [showMonthlyInput, setShowMonthlyInput] = useState(false);
  const [dataTag, setDataTag] = useState<DataTag[]>([]);
  const [options, setOptions] = useState<ReactNode[]>([]);
  const [data, setData] = useState({
    cep: "",
    residenceNumber: "",
    instalationType: "",
    cpf: "",
    inputPattern: "",
    averageExpense: "",
    monthYear: "",
    kwSpent: "",
  });

  useEffect(() => {
    const generateMonthOptions = () => {
      const currentDate = new Date();
      const monthOptions = [];

      for (let i = 0; i < 12; i++) {
        const newDate = new Date(currentDate);
        newDate.setMonth(currentDate.getMonth() - i);

        const month = newDate.toLocaleString("pt-BR", { month: "short" });
        const year = newDate.getFullYear();
        const formattedDate = `${month}/${year}`;

        monthOptions.push(
          <option key={formattedDate} value={formattedDate}>
            {formattedDate}
          </option>
        );
      }

      setOptions(monthOptions);
    };

    generateMonthOptions();
  }, []);

  function handleOnChangeInstalationType(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setData((old) => ({
      ...old,
      instalationType: e.target.value,
    }));
  }
  function handleOnChangeInputPatern(e: React.ChangeEvent<HTMLInputElement>) {
    setData((old) => ({
      ...old,
      inputPattern: e.target.value,
    }));
  }

  async function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(data);
  }

  const addTag = () => {
    const date = data.monthYear;
    const kw = data.kwSpent;
    setDataTag((old) => [...old, { date, kw }]);
    setData((old) => ({
      ...old,
      monthYear: "",
      kwSpent: "",
    }));
  };

  const deleteTag = (index: number) => {
    const newList = dataTag.filter((item, i) => (index !== i ? item : null));
    setDataTag(newList);
  };

  const changeStep = () => {
    switch (step) {
      case 1:
        return Step1();
      case 2:
        return Step2();
      case 3:
        return Step3();
      case 4:
        return Step4();
      default:
        return Step1();
    }
  };

  const nextStep = () => {
    if (step <= 4) {
      setStep(step + 1);
    }
  };

  const validateNextStep = () => {
    if (showMonthlyInput) {
      if (
        data.cpf === "" ||
        data.instalationType === "" ||
        dataTag.length === 0
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        data.cpf === "" ||
        data.instalationType === "" ||
        data.averageExpense === ""
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  // STEP 1 ----------------------------------------------------------------------------------
  function Step1() {
    return (
      <>
        <div className={`${"bg-white"} relative  rounded-t-3xl`}>
          <Lottie animationData={animation1} height={240} />
          <button
            className="absolute top-6 bg-beige-300 rounded-full right-6"
            onClick={() => onClose()}
          >
            <Close />
          </button>
        </div>

        <div className="flex flex-col p-6 md:p-10 bg-beige-300 ">
          <div className="flex justify-around gap-4 px-10 ">
            <div className="flex flex-1 rounded-lg h-3 bg-hover-map"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-[#E4E4E5]"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-[#E4E4E5]"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-[#E4E4E5]"></div>
          </div>
          <h1 className="text-[32px] leading-[1.25em] font-bold max-w-[300px] mt-10 text-center self-center">
            Informe os Dados de sua Casa
          </h1>
          <p className="pt-4 pb-6 text-grayscale-400 max-w-full leading-[1.25em] self-center text-center">
            Preencha os campos abaixo e veja agora mesmo o quanto você poderá
            economizar investindo na energia solar.
          </p>

          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={(e) => submitForm(e)}
          >
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm text-font-black pl-6">CEP</p>
              <Input
                placeholder="CEP"
                value={formatCEP(data.cep)}
                maxLength={9}
                onChange={(e) => {
                  let value = e.target.value;
                  setData((old) => ({ ...old, cep: value }));
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm text-font-black pl-6">
                Número da Residência
              </p>
              <Input
                placeholder="Número da Residência"
                value={data.residenceNumber}
                type="number"
                onChange={(e) =>
                  setData((old) => ({
                    ...old,
                    residenceNumber: e.target.value,
                  }))
                }
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm text-font-black pl-6">
                Tipo de Instalação
              </p>
              <div
                className="flex gap-3  justify-start  items-center "
                onChange={(e) =>
                  handleOnChangeInstalationType(
                    e as React.ChangeEvent<HTMLInputElement>
                  )
                }
              >
                <CustomTooltip
                  anchorSelect=".carport"
                  label="  Carport é a estrutura de estacionamento com placas solares.
                  Muito comum em shoppings ou supermercados."
                />

                <Radio
                  id="Telhado"
                  name="Instalação"
                  value="telhado"
                  checked={data.instalationType === "telhado"}
                >
                  Telhado
                </Radio>
                <Radio
                  id="Solo"
                  name="Instalação"
                  value="solo"
                  checked={data.instalationType === "solo"}
                >
                  Solo
                </Radio>
                <div className="carport">
                  <Radio
                    id="Carport"
                    name="Instalação"
                    value="carport"
                    checked={data.instalationType === "carport"}
                  >
                    <div className="flex items-center gap-2 carport">
                      Carport
                      <BiInfoCircle />
                    </div>
                  </Radio>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={
                data.cep === "" ||
                data.instalationType === "" ||
                data.residenceNumber === ""
              }
              onClick={nextStep}
            >
              Próximo
            </button>
          </form>
        </div>
      </>
    );
  }

  // STEP 2 ------------------------------------------------------------------------------------
  function Step2() {
    return (
      <>
        <div className={`${"bg-white"} relative  rounded-t-3xl`}>
          <Lottie animationData={animation2} height={240} />

          <button
            className="absolute top-6 bg-beige-300 rounded-full right-6"
            onClick={() => onClose()}
          >
            <Close />
          </button>
        </div>
        <div className="flex flex-col p-6 md:p-10 bg-beige-300 ">
          <div className="flex justify-around gap-4 px-10 ">
            <div className="flex flex-1 rounded-lg h-3 bg-green-200"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-hover-map"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-[#E4E4E5]"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-[#E4E4E5]"></div>
          </div>
          <h1 className="text-[32px] leading-[1.25em] font-bold max-w-[400px] mt-10 text-center self-center">
            Informe os Dados da sua Conta de Energia
          </h1>
          <p className="pt-4 pb-6 text-grayscale-400 max-w-full leading-[1.25em] self-center text-center">
            Preencha os campos abaixo e veja agora mesmo o quanto você poderá
            economizar investindo na energia solar.
          </p>

          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={(e) => submitForm(e)}
          >
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm text-font-black pl-6">
                CPF ou CNPJ
              </p>
              <Input
                placeholder="Seu CPF ou CNPJ"
                value={cpfVerify(data.cpf)}
                maxLength={18}
                onChange={(e) =>
                  setData((old) => ({ ...old, cpf: e.target.value }))
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-sm text-font-black pl-6">
                Tipo de Instalação
              </p>
              <div
                className="flex gap-3  items-center flex-wrap"
                onChange={(e) =>
                  handleOnChangeInputPatern(
                    e as React.ChangeEvent<HTMLInputElement>
                  )
                }
              >
                <Radio
                  id="Monofasico"
                  name="inputPattern"
                  value="Monofásio"
                  checked={data.inputPattern === "Monofásio"}
                >
                  Monofásio
                </Radio>
                <Radio
                  id="Bifasico"
                  name="inputPattern"
                  value="Bifásico"
                  checked={data.inputPattern === "Bifásico"}
                >
                  Bifásico
                </Radio>
                <Radio
                  id="Trifasico"
                  name="inputPattern"
                  value="Trifásico"
                  checked={data.inputPattern === "Trifásico"}
                >
                  Trifásico
                </Radio>
              </div>
            </div>
            {showMonthlyInput ? (
              <>
                <div className="flex gap-4 items-center lg:flex-row flex-col">
                  <div className="flex flex-col w-full gap-1">
                    <p className="font-medium text-sm text-font-black pl-6">
                      Mês/Ano
                    </p>
                    <CustomSelect
                      value={data.monthYear}
                      defaultValue=""
                      onChange={(e) => {
                        const value = e.target.value;
                        const itemExists = dataTag.some(
                          (item) => item.date === value
                        );

                        if (!itemExists) {
                          setData((old) => ({
                            ...old,
                            monthYear: value,
                          }));
                        } else {
                          window.alert(
                            "A data jà existe na lista, escolha uma data diferente ou exclua a atual."
                          );
                        }
                      }}
                    >
                      <option value="" disabled>
                        Mês/Ano
                      </option>
                      {options}
                    </CustomSelect>
                  </div>
                  <div className="flex flex-col w-full gap-1">
                    <p className="font-medium text-sm text-font-black pl-6">
                      kW/h Gasto
                    </p>
                    <Input
                      placeholder="kW/h Gasto"
                      value={data.kwSpent}
                      type="number"
                      onChange={(e) =>
                        setData((old) => ({
                          ...old,
                          kwSpent: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <OutlineButton
                    className="mt-6 border-primary-green hover:bg-white"
                    onClick={addTag}
                    disabled={
                      !data.kwSpent || !data.monthYear || dataTag.length >= 12
                    }
                  >
                    <div className="flex items-center text-[30px] text-primary-green">
                      <BsPlus />{" "}
                      <p className="text-[16px] text-primary-green">
                        Adicionar
                      </p>
                    </div>
                  </OutlineButton>
                </div>
                <div className="flex flex-wrap gap-2">
                  {dataTag.length > 0 &&
                    dataTag.map((item, i) => (
                      <TagCalculator
                        key={i}
                        date={item.date}
                        kw={item.kw}
                        handleClick={() => deleteTag(i)}
                      />
                    ))}
                </div>
                <button
                  className="underline self-start"
                  onClick={() => setShowMonthlyInput(false)}
                >
                  Informe o gasto médio
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-1">
                  <CustomTooltip
                    anchorSelect=".info"
                    label="Para calcular o kW/h médio gasto, some o total de kW/h consumidos e divida pelo período de tempo correspondente."
                  />

                  <p className="font-medium text-sm text-font-black pl-6 flex items-center gap-1">
                    kW/h Médio Gasto
                    <span className="info">
                      <BiInfoCircle />
                    </span>
                  </p>
                  <Input
                    placeholder="kW/h Médio Gasto"
                    value={data.averageExpense}
                    onChange={(e) =>
                      setData((old) => ({
                        ...old,
                        averageExpense: e.target.value,
                      }))
                    }
                  />
                </div>
                <button
                  className="underline self-start"
                  onClick={() => setShowMonthlyInput(true)}
                >
                  Informe por mês
                </button>
              </>
            )}

            <button
              type="submit"
              className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={validateNextStep()}
              onClick={nextStep}
            >
              Próximo
            </button>
          </form>
        </div>
      </>
    );
  }

  //STEP 3 ------------------------------------------------------------------------------------
  function Step3() {
    return (
      <>
        <div className={`${"bg-white"} relative  rounded-t-3xl`}>
          <Image
            src={img3}
            alt="Imagem Calculadora"
            height={240}
            className="mx-auto"
          />
          <button
            className="absolute top-6 bg-beige-300 rounded-full right-6"
            onClick={() => onClose()}
          >
            <Close />
          </button>
        </div>
        <div className="flex flex-col p-6 md:p-10 bg-beige-300 ">
          <div className="flex justify-around gap-4 px-10 ">
            <div className="flex flex-1 rounded-lg h-3 bg-green-200"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-green-200"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-hover-map"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-[#E4E4E5]"></div>
          </div>
          <h1 className="text-[32px] leading-[1.25em] font-bold max-w-[400px] mt-10 text-center self-center">
            Revise seus Dados
          </h1>
          <p className="pt-4 pb-6 text-grayscale-400 max-w-full leading-[1.25em] self-center text-center">
            Revise os campos abaixo e veja agora mesmo o quanto você poderá
            economizar investindo na energia solar.
          </p>

          <form
            className="flex flex-col gap-6 w-full"
            onSubmit={(e) => submitForm(e)}
          >
            <div className="flex items-center w-full justify-between gap-4 ">
              <div className="flex flex-col w-full gap-1">
                <p className="font-medium text-sm text-font-black pl-6">CEP</p>
                <Input
                  disabled
                  placeholder="CEP"
                  value={formatCEP(data.cep)}
                  onChange={(e) =>
                    setData((old) => ({ ...old, cep: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <p className="font-medium text-sm text-font-black pl-6">
                  Número da Residência
                </p>
                <Input
                  disabled
                  placeholder="Número da Residência"
                  value={data.residenceNumber}
                  type="number"
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      residenceNumber: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="flex items-center w-full justify-between gap-4  ">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-sm text-font-black pl-6">
                  CPF ou CNPJ
                </p>
                <Input
                  disabled
                  placeholder="Seu CPF ou CNPJ"
                  value={cnpjMask(data.cpf)}
                  onChange={(e) =>
                    setData((old) => ({ ...old, cpf: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-sm text-font-black pl-6">
                  Tipo de instalação
                </p>
                <Input
                  disabled
                  placeholder="Tipo de instalação"
                  value={data.instalationType}
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      instalationType: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-medium text-sm text-font-black pl-6">
                  Padrão de Entrada
                </p>
                <Input
                  disabled
                  placeholder="Padrão de Entrada"
                  value={data.inputPattern}
                  onChange={(e) =>
                    setData((old) => ({ ...old, inputPattern: e.target.value }))
                  }
                />
              </div>
            </div>
            {showMonthlyInput ? (
              <>
                <p className="font-medium text-sm text-font-black pl-6">
                  kW/h Gasto
                </p>
                <div className="flex flex-wrap gap-2">
                  {dataTag.length > 0 &&
                    dataTag.map((item, i) => (
                      <TagCalculator
                        key={i}
                        date={item.date}
                        kw={item.kw}
                        handleClick={() => deleteTag(i)}
                      />
                    ))}
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-1">
                <CustomTooltip
                  anchorSelect=".info"
                  label="Para calcular o kW/h médio gasto, some o total de kW/h consumidos e divida pelo período de tempo correspondente."
                />

                <p className="font-medium text-sm text-font-black pl-6 flex items-center gap-1">
                  kW/h Médio Gasto
                  <span className="info">
                    <BiInfoCircle />
                  </span>
                </p>
                <Input
                  disabled
                  placeholder="kW/h Maior Gasto"
                  value={data.averageExpense}
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      higherExpense: e.target.value,
                    }))
                  }
                />
              </div>
            )}

            <button
              type="submit"
              className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={nextStep}
            >
              Confirmar Dados
            </button>
            <button
              className="underline w-fit self-center"
              onClick={() => setStep(1)}
            >
              Editar meus dados
            </button>
          </form>
        </div>
      </>
    );
  }

  // STEP 4 ------------------------------------------------------------------------------------
  function Step4() {
    return (
      <>
        <button
          className="absolute top-10 bg-beige-300 rounded-full right-10"
          onClick={() => onClose()}
        >
          <Close />
        </button>
        <div className="flex flex-col p-6 md:p-10 bg-beige-300 ">
          <div className="flex justify-around gap-4 px-10 ">
            <div className="flex flex-1 rounded-lg h-3 bg-green-200"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-green-200"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-green-200"></div>
            <div className="flex flex-1 rounded-lg h-3 bg-hover-map"></div>
          </div>
          <h1 className="text-[32px] leading-[1.25em] font-bold max-w-[400px] mt-10 text-center self-center">
            {showPdf ? "Baixe sua Proposta!" : "Entre em contato conosco!"}
          </h1>
          <Image
            src={showPdf ? img4 : img5}
            alt="Imagem Calculadora"
            height={227}
            className="mx-auto mt-12 "
          />
          <p className="max-w-[317px] text-grayscale-400 text-center self-center mt-6">
            {showPdf
              ? "Tudo pronto! Você já pode baixar a sua proposta completa."
              : "Para realizar o cálculo do seu projeto, vamos precisar de um Engenheiro. Por favor, entre em contato conosco."}
          </p>
          {showPdf ? (
            <button
              type="submit"
              className="mt-12 h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              onClick={() => window.alert("implemntar pdf")}
            >
              Download PDF
            </button>
          ) : (
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
              className="h-12 w-full text-white px-5 py-[6px] mt-6 bg-primary-green rounded-full flex items-center justify-center"
            >
              Fale Conosco
            </a>
          )}
        </div>
      </>
    );
  }

  return <>{changeStep()}</>;
};

export default FullProposal;
