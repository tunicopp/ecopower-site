"use client";
import React from "react";
import { createPortal } from "react-dom";
import Close2 from "../../../../public/assets/icons/Close2";
import AccordionSimple from "@/components/Accordion/AccordionSimple";
import Social from "../../../../public/assets/icons/Social";
import Governance from "../../../../public/assets/icons/Governance";
import ArrowRightDown from "../../../../public/assets/icons/ArrowRightDown";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalGovernance: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <>
      {createPortal(
        <div
          className={`fixed top-0 left-0 h-screen w-screen z-[1000] ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="absolute w-full h-full bg-full-black/30"
            onClick={() => onClose()}
          />
          <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 max-w-[1224px] w-full p-2 md:p-6">
            <div className="w-full flex flex-col gap-6 max-h-[80vh] p-6 bg-white rounded-2xl overflow-auto">
              <div className="flex gap-4 items-center w-full">
                <Governance />
                <h2 className="text-[32px] text-dark font-bold">Governança</h2>
                <button
                  className="flex-center ml-auto w-6 h-6"
                  onClick={onClose}
                >
                  <Close2 />
                </button>
              </div>
              <div>
                <AccordionSimple title="Ética, transparência e respeito a legislação">
                  Conduzimos nosso negócio com plena conformidade com a
                  legislação vigente, alinhando nossa atuação à práticas ética e
                  transparentes.
                </AccordionSimple>
                <AccordionSimple title="Desenvolvimento e divulgação do código de conduta">
                  Implementação do código de conduta ética para colaboradores e
                  parceiros, implementação de indicadores ESG para compilar
                  resultados e impactos. Institucionalizado o canal de ouvidoria
                  <a
                    href="/assets/pdf/Codigo_de_Conduta_EcoPower.pdf"
                    download="Codigo_de_Conduta_EcoPower"
                    className="see-global-impact mt-4"
                  >
                    Veja nosso Código de Conduta
                    <ArrowRightDown />
                  </a>
                </AccordionSimple>
                <AccordionSimple title="Canal de ouvidoria">
                  Um dos pilares importante é satisfação dos nossos
                  colaboradores e demais partes interessadas. Para isto foi
                  criado o canal de ouvidoria que atua como condutora de
                  opiniões, reclamações e denúncias, na mediação de conflitos
                  entre o cidadão e a instituição, fundamentando a sua atividade
                  nos princípios da ética, eficiência, sigilo, boa-fé, isenção,
                  contraditório e transparência nas relações.
                </AccordionSimple>
              </div>
            </div>
          </div>
        </div>,
        document.querySelector("#calc") as any
      )}
    </>
  );
};

export default ModalGovernance;
