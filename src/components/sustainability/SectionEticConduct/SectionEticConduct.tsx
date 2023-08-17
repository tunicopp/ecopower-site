import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import bg from "../../../../public/assets/images/sustainability/etic-conduct.png";

const SectionEticConduct: React.FC = () => {
  return (
    <section className="relative bg-beige-300 pt-[115px] pb-[260px]">
      <Image
        src={bg}
        alt="Conduta Ética"
        className="absolute left-0 bottom-0 max-w-[1008px]"
      />
      <GridContainer className="relative justify-end">
        <div className="max-w-[496px]">
          <p className="text-lg">
            Implementação do código de conduta ética para colaboradores e
            parceiros, implementação de indicadores ESG para compilar resultados
            e impactos. Institucionalizado o canal de ouvidoria
          </p>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionEticConduct;
