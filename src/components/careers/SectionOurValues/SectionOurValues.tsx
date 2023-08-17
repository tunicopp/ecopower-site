import GridContainer from "@/components/global/GridContainer";
import Reveal from "@/components/global/Reveal";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import badge from "../../../../public/assets/images/careers/badge.svg";
import engine from "../../../../public/assets/images/careers/engine.svg";
import lamp from "../../../../public/assets/images/careers/lamp.svg";
import flex from "../../../../public/assets/images/careers/flex.svg";
import shakingHands from "../../../../public/assets/images/careers/shaking-hands.svg";
import ourValuesOne from "../../../../public/assets/images/careers/our-values-one.png";
import ourValuesTwo from "../../../../public/assets/images/careers/our-values-two.png";
import ourValuesThree from "../../../../public/assets/images/careers/our-values-three.png";

const SectionOurValues: React.FC = () => {
  return (
    <section className="pb-[100px]">
      <GridContainer className="flex-col items-center">
        <Reveal>
          <TitleComponent>Nossos valores</TitleComponent>
        </Reveal>
        <Reveal className="mt-6" delay={0.4}>
          <h3>Com pioneirismo e dedicação, nos tornamos a maior!</h3>
        </Reveal>
      </GridContainer>
      <GridContainer className="grid grid-cols-4 items-stretch gap-6 mt-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 rounded-2xl min-h-[302px] bg-beige-300">
            <div className="w-[66px] h-[66px] flex-center rounded-full bg-white">
              <Image src={badge} alt="Ícone de Transparência" />
            </div>
            <div>
              <h2 className="text-black text-base leading-none font-bold">
                Transparência
              </h2>
              <p className="text-grey-100 mt-2">
                Valorizamos a transparência em cada serviço prestado e no
                relacionamento com cada cliente.
              </p>
            </div>
          </div>
          <Image
            src={ourValuesOne}
            alt="Trabalhador instalando painel solar"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-6">
          <Image
            src={ourValuesTwo}
            alt="Trabalhador instalando painel solar"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="flex flex-col justify-between p-6 rounded-2xl min-h-[302px] bg-beige-300">
            <div className="w-[66px] h-[66px] flex-center rounded-full bg-white">
              <Image src={engine} alt="Ícone de Competência Técnica" />
            </div>
            <div>
              <h2 className="text-black text-base leading-none font-bold">
                Competência Técnica
              </h2>
              <p className="text-grey-100 mt-2">
                Contamos com um time completo, capacitado e preparado para toda
                obra.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 rounded-2xl min-h-[302px] bg-beige-300">
            <div className="w-[66px] h-[66px] flex-center rounded-full bg-white">
              <Image src={lamp} alt="Ícone de Objetividade" />
            </div>
            <div>
              <h2 className="text-black text-base leading-none font-bold">
                Objetividade
              </h2>
              <p className="text-grey-100 mt-2">
                Somos pontuais e objetivos no desenvolvimento de cada projeto,
                sempre focados na resolução da necessidade do cliente.
              </p>
            </div>
          </div>
          <Image
            src={ourValuesThree}
            alt="Técnico e empresario conversando"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col justify-between p-6 rounded-2xl min-h-[302px] bg-beige-300">
            <div className="w-[66px] h-[66px] flex-center rounded-full bg-white">
              <Image src={flex} alt="Ícone de Flexibilidade" />
            </div>
            <div>
              <h2 className="text-black text-base leading-none font-bold">
                Flexibilidade
              </h2>
              <p className="text-grey-100 mt-2">
                Nos dedicamos no desenvolvimento de nossos projetos, trazendo
                soluções personalizadas a cada necessidade apresentada.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-6 rounded-2xl min-h-[302px] bg-beige-300">
            <div className="w-[66px] h-[66px] flex-center rounded-full bg-white">
              <Image src={shakingHands} alt="Ícone de Apoio Irrestrito" />
            </div>
            <div>
              <h2 className="text-black text-base leading-none font-bold">
                Apoio Irrestrito
              </h2>
              <p className="text-grey-100 mt-2">
                Estamos em todo o país, com unidades e pontos de apoio para
                enfrentar todos os desafios.
              </p>
            </div>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionOurValues;
