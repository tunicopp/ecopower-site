import GridContainer from "@/components/global/GridContainer";
import React from "react";
import UNGC from "./UNGC";
import ArrowRightDown from "../../../../public/assets/icons/ArrowRightDown";

const SectionPact: React.FC = () => {
  return (
    <section className="bg-beige-300 py-[80px]">
      <GridContainer className="items-center gap-[106px]">
        <UNGC />
        <div className="flex flex-col items-start gap-4 max-w-[496px]">
          <h2 className="text-[40px] leading-[1.5em] font-bold">
            Adesão ao Pacto Global
          </h2>
          <p className="text-lg leading-[1.5em]">
            EcoPower Eficiência Energética passou a fazer parte da maior
            iniciativa de sustentabilidade empresarial do mundo, onde medidas
            são discutidas e trabalhadas para o desenvolvimento e a
            implementação de práticas socioambientais. Tendo como principal
            objetivo o alcance dos Dez Princípios universalmente aceitos na
            prática dos negócios, o acordo atua na mobilização da comunidade
            através dos assuntos e práticas que estejam ligados aos direitos
            humanos, trabalho, meio ambiente e combate à corrupção.
          </p>
          <a
            target="_blank"
            href="https://unglobalcompact.org/what-is-gc/participants/159804-EcoPower-Efici-ncia-Energ-tica-LTDA"
            className="see-global-impact"
          >
            Ver
            <ArrowRightDown />
          </a>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionPact;
