import GridContainer from "@/components/global/GridContainer";
import {
  stateAccordionRightData,
  stateAccordionLeftData,
  Data,
} from "@/utils/stateAccordionData";
import React from "react";
import StateAccordion from "./StateAccordion";

const allArrays = stateAccordionLeftData.concat(stateAccordionRightData);

allArrays.sort((a, b) => a.state.localeCompare(b.state));

let evenarray: Data[] = [];
let oddArray: Data[] = [];

for (let i = 0; i < allArrays.length; i++) {
  if (i % 2 == 0) {
    evenarray.push(allArrays[i]);
  } else {
    oddArray.push(allArrays[i]);
  }
}

const SectionStateAccordion: React.FC = () => {
  return (
    <section className="pb-[110px]">
      <GridContainer className="lg:flex-row flex-col gap-6">
        <div className="flex flex-col gap-6">
          {oddArray
            .filter((u) => u.units.length > 0)
            .map((u, i) => (
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
          {evenarray
            .filter((u) => u.units.length > 0)
            .map((u, i) => (
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
