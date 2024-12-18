import React from "react";
import Cloud1 from "../../../public/assets/icons/Cloud1";
import Cloud2 from "../../../public/assets/icons/Cloud2";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import house from "../../../public/assets/images/sectionProjects/img-card-house.png";
import factory from "../../../public/assets/images/sectionProjects/img-card-factory.png";
import store from "../../../public/assets/images/sectionProjects/img-card-store.png";
import farm from "../../../public/assets/images/sectionProjects/img-card-farm.png";
import CardProject from "./CardProject";
import Link from "next/link";

const cards = [
  {
    id: 1,
    image: factory,
    textTag: "Industrial",
    title: "Fábrica de Rações",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
  {
    id: 2,
    image: house,
    textTag: "Industrial",
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
    textTag: "Rural",
    title: "Dois Lagos",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
];

const SectionProject: React.FC = () => {
  return (
    <section className="relative w-full px-6 lg:px-0 pb-14 pt-[66px] flex flex-col items-center overflow-x-hidden lg:mt-[64px]">
      <div className="absolute top-[30px] left-[0%] animate-fly">
        <Cloud1 />
      </div>
      <div className="absolute top-[35px] right-[0%] animate-fly2">
        <Cloud2 />
      </div>
      <Reveal className="max-w-[550px] text-center">
        <TitleComponent className="leading-none">
          Confira os projetos mais recentes
        </TitleComponent>
      </Reveal>
      <div className="flex flex-col w-full mt-6 lg:mt-0 lg:p-[108px]">
        <div className="grid projects-grid lg:grid-cols-5 gap-6">
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
      <Link
        href="/projetos"
        className="h-12 flex items-center w-full mt-6 lg:mt-0 lg:w-auto rounded-3xl border-2 px-5 hover:bg-grayscale-100 transition-all font-semibold"
      >
        Ver mais projetos
      </Link>
    </section>
  );
};

export default SectionProject;
