import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Image from "next/image";
import bg from "../../../../public/assets/images/careers/careers-bg.png";

const SectionCareers: React.FC = () => {
  return (
    <section className="relative bg-beige-300 py-[155px]">
      <Image
        src={bg}
        alt="Mulher EcoPower"
        className="absolute right-0 bottom-0 max-w-[1008px]"
      />
      <GridContainer className="relative">
        <div className="max-w-[496px]">
          <p className="text-black text-lg">
            Lorem ipsum dolor sit amet consectetur. Viverra interdum non turpis
            aliquam ante facilisi nisl platea. Malesuada nunc pellentesque
            lobortis vulputate lacus mauris eros quam ultricies. Quis sagittis
            nisl placerat in proin in. Cursus massa morbi elementum quis morbi.
            Lacus amet mauris at vestibulum dignissim. Eget scelerisque tempor
            dui vitae ultrices quisque amet elementum. Vel iaculis ridiculus
            tristique in enim sodales tortor adipiscing id. Nisi scelerisque
            vestibulum dictumst nisl massa ipsum.
          </p>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionCareers;
