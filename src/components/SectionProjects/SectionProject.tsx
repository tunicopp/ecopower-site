import React from "react";
import Cloud1 from "../../../public/assets/icons/Cloud1";
import Cloud2 from "../../../public/assets/icons/Cloud2";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import house from "../../../public/assets/images/sectionProjects/img-card-house.png";
import factory from "../../../public/assets/images/sectionProjects/img-card-factory.png";
import store from "../../../public/assets/images/sectionProjects/img-card-store.png";
import farm from "../../../public/assets/images/sectionProjects/img-card-farm.png";
import RigthArrowWhite from "../../../public/assets/icons/RigthArrowWhite";
import CardProject, { CardProjectProps } from "./CardProject";

const cards = [
  {
    id: 1,
    image: factory,
    textTag: "Industrial",
    title: "Fabrica de Rações",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
  {
    id: 2,
    image: house,
    textTag: "Residencial",
    title: "Casa Geraldo",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
  {
    id: 3,
    image: store,
    textTag: "Empresarial",
    title: "Sperta Honda",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
  {
    id: 4,
    image: farm,
    textTag: "rural",
    title: "Dois Lagos",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
];

const SectionProject: React.FC = () => {
  return (
    <section className="relative w-full pb-14 pt-[66px] flex flex-col items-center overflow-x-hidden mt-[64px]">
      <div className="absolute top-[30px] left-[0%] animate-fly">
        <Cloud1 />
      </div>
      <div className="absolute top-[35px] right-[0%] animate-fly2">
        <Cloud2 />
      </div>
      <Reveal className="max-w-[690px] text-center">
        <TitleComponent>Confira os projetos mais recentes</TitleComponent>
      </Reveal>
      <div className="flex flex-col w-full p-[108px]">
        <div className="grid grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <CardProject
              key={card.id}
              index={index}
              image={card.image}
              title={card.title}
              subTitle={card.subTitle}
              textTag={card.textTag}
            />
          ))}
        </div>
      </div>
      <button className="h-12 rounded-3xl border-2 px-5 hover:bg-grayscale-100 transition-all font-semibold">
        Ver todos os projetos
      </button>
    </section>
  );
};

export default SectionProject;
