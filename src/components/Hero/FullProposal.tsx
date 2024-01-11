"use client";
import Image from "next/image";
import React, { useState } from "react";
import Close from "../../../public/assets/icons/Close";
import Radio from "../form/Radio";
import Input from "../form/Input";
import img1 from "../../../public/assets/images/modal-full-proposal/step1.png";
import img2 from "../../../public/assets/images/modal-full-proposal/step2.png";
import img3 from "../../../public/assets/images/modal-full-proposal/step3.png";
import img4 from "../../../public/assets/images/modal-full-proposal/dowload-pdf.png";
import img5 from "../../../public/assets/images/modal-full-proposal/contact-img.png";
import { BiInfoCircle } from "react-icons/bi";
import CustomTooltip from "../global/CustomTooltip";

interface Props {
  onClose: () => void;
}

const FullProposal: React.FC<Props> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [showPdf, setShowPdf] = useState(false);
  const [data, setData] = useState({
    cep: "",
    residenceNumber: "",
    instalationType: "",
    cpf: "",
    inputPattern: "",
    higherExpense: "",
    lowerExpense: "",
  });

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

  // STEP 1
  function Step1() {
    return (
      <>
        <div className={`${"bg-white"} relative  rounded-t-3xl`}>
          <Image
            src={img1}
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
                value={data.cep}
                type="number"
                onChange={(e) =>
                  setData((old) => ({ ...old, cep: e.target.value }))
                }
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
                <CustomTooltip anchorSelect=".telhado1" label="change label" />
                <CustomTooltip anchorSelect=".solo" label="change label" />
                <CustomTooltip
                  anchorSelect=".carport"
                  label="  Carport é a estrutura de estacionamento com placas solares.
                  Muito comum em shoppings ou supermercados."
                />

                <div className="telhado1">
                  <Radio
                    id="Telhado"
                    name="Instalação"
                    value="telhado"
                    checked={data.instalationType === "telhado"}
                  >
                    Telhado
                  </Radio>
                </div>
                <div className="solo">
                  <Radio
                    id="Solo"
                    name="Instalação"
                    value="solo"
                    checked={data.instalationType === "solo"}
                  >
                    Solo
                  </Radio>
                </div>
                <div className="carport">
                  <Radio
                    id="Carport"
                    name="Instalação"
                    value="carport"
                    checked={data.instalationType === "carport"}
                  >
                    Carport
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

  // STEP 2
  function Step2() {
    return (
      <>
        <div className={`${"bg-white"} relative  rounded-t-3xl`}>
          <Image
            src={img2}
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
                value={data.cpf}
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
                className="flex gap-3 justify-between items-center flex-wrap"
                onChange={(e) =>
                  handleOnChangeInputPatern(
                    e as React.ChangeEvent<HTMLInputElement>
                  )
                }
              >
                <CustomTooltip
                  anchorSelect=".monofasico"
                  label="change label"
                />
                <CustomTooltip anchorSelect=".bifasico" label="change label" />
                <CustomTooltip anchorSelect=".trifasico" label="change label" />

                <div className="monofasico">
                  <Radio
                    id="Monofasico"
                    name="inputPattern"
                    value="Monofásio"
                    checked={data.inputPattern === "Monofásio"}
                  >
                    Monofásio
                  </Radio>
                </div>
                <div className="bifasico">
                  <Radio
                    id="Bifasico"
                    name="inputPattern"
                    value="Bifásico"
                    checked={data.inputPattern === "Bifásico"}
                  >
                    Bifásico
                  </Radio>
                </div>
                <div className="trifasico">
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
            </div>
            <div className="flex flex-col gap-1">
              <CustomTooltip anchorSelect=".info" label="change label" />

              <p className="font-medium text-sm text-font-black pl-6 flex items-center gap-1">
                kW/h Médio Gasto
                <span className="info">
                  <BiInfoCircle />
                </span>
              </p>
              <div className="flex items-center gap-1 ">
                <Input
                  placeholder="kW/h Maior Gasto"
                  value={data.higherExpense}
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      higherExpense: e.target.value,
                    }))
                  }
                />
                <Input
                  placeholder="kW/h Menor Gasto"
                  value={data.lowerExpense}
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      lowerExpense: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              className="h-12 w-full text-white px-5 py-[6px] bg-primary-green rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={
                data.cpf === "" ||
                data.inputPattern === "" ||
                data.higherExpense === "" ||
                data.lowerExpense === ""
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

  //STEP 3
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
                  value={data.cep}
                  type="number"
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
                  value={data.cpf}
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

            <div className="flex flex-col gap-1">
              <CustomTooltip anchorSelect=".info" label="change label" />

              <p className="font-medium text-sm text-font-black pl-6 flex items-center gap-1">
                kW/h Médio Gasto
                <span className="info">
                  <BiInfoCircle />
                </span>
              </p>
              <div className="flex items-center w-full justify-between gap-4 ">
                <Input
                  disabled
                  placeholder="kW/h Maior Gasto"
                  value={data.higherExpense}
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      higherExpense: e.target.value,
                    }))
                  }
                />
                <Input
                  disabled
                  placeholder="kW/h Menor Gasto"
                  value={data.lowerExpense}
                  onChange={(e) =>
                    setData((old) => ({
                      ...old,
                      lowerExpense: e.target.value,
                    }))
                  }
                />
              </div>
            </div>

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

  // STEP 4
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
