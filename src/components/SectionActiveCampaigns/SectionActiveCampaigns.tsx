import React from "react";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";

const SectionActiveCampaigns: React.FC = () => {
  return (
    <div className="flex min-h-[830px] w-full relative flex-col items-center mt-[110px]">
      <Reveal>
        <TitleComponent>Campanhas ativas</TitleComponent>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="font-medium mt-4">
          A luz que não apenas ilumina, mas também protege o nosso planeta
        </p>
      </Reveal>
    </div>
  );
};

export default SectionActiveCampaigns;
