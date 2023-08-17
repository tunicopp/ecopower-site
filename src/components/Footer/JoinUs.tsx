import React from "react";
import GridContainer from "../global/GridContainer";
import TitleComponent from "../global/TitleComponent";
import OutlineButton from "../global/OutlineButton";

const JoinUs: React.FC = () => {
  return (
    <section className="pb-[80px]">
      <GridContainer className="flex-col items-center justify-center bg-primary-green rounded-[20px] py-[80px] gap-6">
        <TitleComponent className="text-white">
          Junte-se ao nosso time!
        </TitleComponent>
        <h3 className="text-xl text-white">
          Agora que você já nos conhece, saiba mais sobre carreiras na EcoPower.
        </h3>
        <OutlineButton aria-selected>Carreira na EcoPower</OutlineButton>
      </GridContainer>
    </section>
  );
};

export default JoinUs;
