import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import careersImage from "../../../../public/assets/images/careers/careers-two.svg";

const SectionCareersTwo: React.FC = () => {
  return (
    <section className="py-[80px]">
      <GridContainer className="lg:flex-row flex-col-reverse justify-center items-center gap-6">
        <Image src={careersImage} alt="EcoPower Carreiras" />
        <p className="text-black text-lg lg:max-w-[496px] lg:text-start text-justify">
          Ut risus tortor iaculis et odio sed sed. Egestas pellentesque id orci
          ut pellentesque purus amet. Bibendum consectetur sed sem nulla nec
          condimentum vulputate. At vestibulum vel ipsum purus. Urna volutpat
          magnis porttitor dui scelerisque sagittis adipiscing eleifend et.
          Elementum massa pellentesque non volutpat ultrices egestas justo a
          praesent. Lorem et in amet donec justo massa.
        </p>
      </GridContainer>
    </section>
  );
};

export default SectionCareersTwo;
