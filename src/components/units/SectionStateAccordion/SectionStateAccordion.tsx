import GridContainer from "@/components/global/GridContainer";
import {
  stateAccordionRightData,
  stateAccordionLeftData,
} from "@/utils/stateAccordionData";
import React from "react";
import StateAccordion from "./StateAccordion";

const SectionStateAccordion: React.FC = () => {
  return (
    <section className="pb-[110px]">
      <GridContainer className="lg:flex-row flex-col gap-6">
        <div className="flex flex-col gap-6">
          {stateAccordionLeftData.map((u, i) => (
            <StateAccordion
              key={i}
              id={u.id}
              units={u.units}
              state={u.state}
              units_number={u.units.length}
              isH3={i % 2 === 0}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6">
          {stateAccordionRightData.map((u, i) => (
            <StateAccordion
              key={i}
              id={u.id}
              units={u.units}
              state={u.state}
              units_number={u.units.length}
              isH3={i % 2 === 0}
            />
          ))}
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionStateAccordion;
