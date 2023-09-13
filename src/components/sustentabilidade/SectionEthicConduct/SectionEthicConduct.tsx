import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/images/sustentabilidade/etic-conduct.png";

const SectionEthicConduct: React.FC = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row lg:gap-0 gap-6 bg-beige-300 lg:pt-[115px] pt-[80px] lg:pb-[260px] 2xl:pt-0 2xl:pb-0">
      <GridContainer className="justify-end flex-col md:flex-row">
        <Image
          src={bg}
          alt="Conduta Ética"
          className="2xl:static lg:absolute left-0 bottom-0 2xl:w-auto lg:max-w-[1008px] w-full"
        />
        <div className="lg:max-w-[391px] 2xl:mt-[120px] 2xl:flex-shrink-0">
          <p className="text-lg lg:text-start text-justify mt-6 lg:mt-0">
            Implementação do código de conduta ética para colaboradores e
            parceiros, implementação de indicadores ESG para compilar resultados
            e impactos. Institucionalizado o canal de ouvidoria
          </p>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionEthicConduct;
