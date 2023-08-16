import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import industrialProject from "../../../../public/assets/images/about-us/industrial-project/industrial-project.png";

const SectionIndustrialProject: React.FC = () => {
  return (
    <section>
      <GridContainer className="items-center">
        <Image
          src={industrialProject}
          alt="Projeto Industrial"
          width={629}
          height={582}
          quality={100}
        />
      </GridContainer>
    </section>
  );
};

export default SectionIndustrialProject;
