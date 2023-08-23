import GridContainer from "@/components/global/GridContainer";
import OutlineButton from "@/components/global/OutlineButton";
import React from "react";
import house from "../../../../public/assets/images/sectionProjects/img-card-house.png";
import factory from "../../../../public/assets/images/sectionProjects/img-card-factory.png";
import store from "../../../../public/assets/images/sectionProjects/img-card-store.png";
import farm from "../../../../public/assets/images/sectionProjects/img-card-farm.png";
import CardProject from "@/components/SectionProjects/CardProject";

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
  {
    id: 5,
    image: farm,
    textTag: "rural",
    title: "Dois Lagos",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
  {
    id: 6,
    image: farm,
    textTag: "rural",
    title: "Dois Lagos",
    subTitle: "1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp",
  },
];

const SectionProjects: React.FC = () => {
  return (
    <GridContainer className="flex-col items-center py-20">
      <div className="md:flex grid grid-cols-1 w-full gap-6 items-center justify-center">
        <OutlineButton aria-selected>Todos (40)</OutlineButton>
        <OutlineButton>Residencial (10)</OutlineButton>
        <OutlineButton>Empresarial (10)</OutlineButton>
        <OutlineButton>Industrial (10)</OutlineButton>
        <OutlineButton>Rural (10)</OutlineButton>
      </div>
      <div className="grid projects-grid lg:grid-cols-5 gap-6 mt-[60px]">
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
      <OutlineButton className="mt-[70px]">Carregar Mais</OutlineButton>
    </GridContainer>
  );
};

export default SectionProjects;
