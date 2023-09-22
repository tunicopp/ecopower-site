"use client";
import React from "react";
import { createPortal } from "react-dom";
import Enviromental from "../../../../public/assets/icons/Enviromental";
import Close2 from "../../../../public/assets/icons/Close2";
import AccordionSimple from "@/components/Accordion/AccordionSimple";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalEnvironmental: React.FC<Props> = ({ isOpen, onClose }) => {
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
                <Enviromental />
                <h2 className="text-[32px] text-dark font-bold">AMBIENTAL</h2>
                <button
                  className="flex-center ml-auto w-6 h-6"
                  onClick={onClose}
                >
                  <Close2 />
                </button>
              </div>
              <div>
                <AccordionSimple title="Declaração Energia Renovável">
                  Por meio de autodeclaração, a EcoPower passar a emitir uma
                  declaração aos clientes que solicitaram que estes estão
                  adquirindo energia renovável, que além de contribuir com o ODS
                  7 – Energia Limpa e Acessível, a utilização de energia
                  renovável auxilia na redução da emissão de gases de efeito
                  estufa, na preservação da biodiversidade, na redução de custos
                  de energia e na garantia da segurança energética do país.
                </AccordionSimple>
                <AccordionSimple title="Selo Verde “Aqui tem Energia Renovável”">
                  A EcoPower, em parceria com o instituto, colocou à disposição
                  de seus representantes e clientes, o Selo de prática
                  sustentável “Aqui tem Energia Renovável”. O selo é um programa
                  de certificação ambiental para empresas que possuem ou
                  implantam energia limpa. Como contrapartida, o selo oferece à
                  marca o posicionamento no mercado como Empresa Comprometida
                  com as Questões Ambientais. Uma vez certifica, a empresa
                  poderá ter sua logo publicada na página do Instituto. A
                  Ecopower apoia esta idéia e faz a consultoria junto ao cliente
                  na aquisição do certificado.
                </AccordionSimple>
                <AccordionSimple title="Projeto socioambiental">
                  O projeto consistirá na recuperação de materiais utilizados no
                  processo de montagem de placas solares, para serem
                  disponibilizados para organizações sociais e para famílias em
                  situação de vulnerabilidade. Toda solicitação é realizada pelo
                  franqueado Ecopower e avaliado pelo Comitê de Sustentabilidade
                  buscando aprovação do projeto sempre que tiver material
                  disponível
                </AccordionSimple>
                <AccordionSimple title="Programas de gestão de resíduo">
                  <b className="block">Eliminação copos descartáveis:</b>
                  Acreditamos que com pequenas ações sendo realizadas
                  continuamente podemos sempre melhorar o meio ambiente e
                  conscientizar as pessoas da importância da geração de menos
                  resíduos.
                </AccordionSimple>
                <AccordionSimple title="Redução emissão gases efeito estufa">
                  <b className="block">Gestão dos resíduos</b>
                  Todos resíduos gerados são contabilizados e monitorados pela
                  área de ESG, com destinação para empresas ambientalmente
                  corretas, com emissão do Certificado de Destinação Final de
                  Resíduos – CD sempre que aplicável (placas solares).
                  <span className="block mt-4">
                    <b className="block">Redução emissão gases efeito estufa</b>
                    Atuamos na implementação de processos e boas práticas
                    institucionais visando a redução de nossas emissões. Além da
                    gestão de resíduos, aplicamos a logística reversa para a
                    destinação ambientalmente correta aos módulos fotovoltaicos
                    enviados à descarte. Nossa matriz energia utiliza energia
                    limpa e, recentemente, todas as empilhadeiras da empresa
                    movidas a gás foram substituídas por elétricas.
                  </span>
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

export default ModalEnvironmental;
