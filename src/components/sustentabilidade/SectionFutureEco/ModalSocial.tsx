"use client";
import React from "react";
import { createPortal } from "react-dom";
import Close2 from "../../../../public/assets/icons/Close2";
import AccordionSimple from "@/components/Accordion/AccordionSimple";
import Social from "../../../../public/assets/icons/Social";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalSocial: React.FC<Props> = ({ isOpen, onClose }) => {
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
                <Social />
                <h2 className="text-[32px] text-dark font-bold">SOCIAL</h2>
                <button
                  className="flex-center ml-auto w-6 h-6"
                  onClick={onClose}
                >
                  <Close2 />
                </button>
              </div>
              <div>
                <AccordionSimple title="Saúde e Bem-Estar para os nossos colaboradores">
                  Executamos diversas iniciativas e disponibilizamos inúmeros
                  benefícios voltados à saúde e bem-estar de nossos
                  colaboradores. Janeiro Branco, Setembro Amarelo, Outubro Rosa
                  e Novembro Azul são campanhas que integram o calendário de
                  ações oficiais da empresa.
                </AccordionSimple>
                <AccordionSimple title="Inclusão e diversidade">
                  Em nosso ecossistema estamos comprometidos em gerar
                  oportunidades e desenvolver todos os nossos colaboradores,
                  respeitando cada individualidade. Acreditamos no empoderamento
                  feminino e, por isso, estamos trabalhando constantemente para
                  ampliar o acesso de mulheres no mercado de energia solar. Em
                  2023, possuímos 48 cargos de liderança, os quais 33,3% são
                  mulheres, sendo quase a metade delas são mães (43,75%).
                </AccordionSimple>
                <AccordionSimple title="Programas de treinamento para nossos colaboradores e franqueados">
                  Nosso programa de desenvolvimento é aplicado em benefício aos
                  nossos colaboradores, instaladores e franqueados. Além disso,
                  disponibilizamos alguns subsídios para capacitações externas,
                  eventos estratégicos, fóruns e workshops voltados à atuação de
                  nosso ecossistema.
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

export default ModalSocial;
