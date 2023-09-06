import GridContainer from "@/components/global/GridContainer";
import React from "react";
import Image from "next/image";
import bg from "../../../../public/assets/images/carreiras/careers-bg.png";

const SectionCareers: React.FC = () => {
  return (
    <section className="flex flex-col-reverse gap-6 relative bg-beige-300 lg:pt-[155px] pt-[80px] lg:pb-[155px]">
      <Image
        src={bg}
        alt="Mulher EcoPower"
        className="lg:absolute right-0 bottom-0 max-w-[1008px] w-full"
      />
      <GridContainer className="relative">
        <div className="lg:max-w-[496px]">
          <p className="text-black text-lg lg:text-start text-justify">
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
