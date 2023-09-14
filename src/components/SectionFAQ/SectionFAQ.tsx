import React from "react";
import GridContainer from "../global/GridContainer";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import Accordion from "../Accordion/Accordion";
import { faqData } from "@/utils/faqData";

const SectionFAQ: React.FC = () => {
  return (
    <section id="FAQ">
      <GridContainer className="flex-col py-[110px]">
        <Reveal>
          <TitleComponent className="leading-none">
            Dúvidas frequentes
          </TitleComponent>
        </Reveal>
        <Reveal className="mt-[10px] mb-[42px]" delay={0.4}>
          <span className="text-lg text-grayscale-800">
            A resposta que procura, para as suas perguntas de sempre
          </span>
        </Reveal>
        <div className="h-stack-18">
          {faqData.map((faq, i) => (
            <Accordion key={i} isH3={i % 2 === 0} title={faq.title}>
              {faq.description}
            </Accordion>
          ))}
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionFAQ;
