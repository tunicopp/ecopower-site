import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Image from "next/image";
import ourHistoryImage from "../../../../public/assets/images/about-us/our-history/our-history.png";

const SectionOurHistory: React.FC = () => {
  return (
    <section className="relative lg:flex-row flex-col flex bg-beige-300 pt-10 pb-[28px] overflow-hidden">
      <GridContainer className="mt-[70px]">
        <div className="flex flex-col lg:max-w-[496px]">
          <h2 className="text-xl leading-[30px] text-black font-bold">
            A história da EcoPower teve início com uma estrutura familiar em
            Barretos (interior de SP) em 2013, acompanhando o desenvolvimento,
            evolução e velocidade das tecnologias de geração de energia solar no
            Brasil.
          </h2>
          <h3 className="text-xl leading-[30px] text-black my-[30px]">
            Após entender como funciona a energia solar, os fundadores{" "}
            <b className="font-bold">Anderson Oliveira e Náchila Oliveira</b>,
            que por curiosidade são casados desde a adolescência, passaram a
            acompanhar o novo ciclo criado no Brasil da produção de eletricidade
            por meio de painel solar fotovoltaico e ingressou no mercado
            apostando no segmento de energia solar.
          </h3>
          <h2 className="text-xl leading-[30px] text-black">
            Mesmo com um início limitado, mas com excelente espírito de
            empreendedores,{" "}
            <b className="font-bold">
              seguiram firme na proposta de difundir a técnica de instalação de
              painel solar que foi ganhando reconhecimento na região de Barretos
              e em Goiás.
            </b>{" "}
            Hoje já estamos presentes e atuando em{" "}
            <b className="font-bold">26 estados do Brasil + DF.</b>
          </h2>
        </div>
      </GridContainer>
      <Image
        src={ourHistoryImage}
        alt="Nossa História"
        quality={100}
        className="lg:absolute w-full lg:w-auto max-w-[801px] max-h-[657px] bottom-0 -right-16"
      />
    </section>
  );
};

export default SectionOurHistory;
