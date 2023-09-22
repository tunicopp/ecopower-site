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
          <h2 className="text-black font-bold text-5xl mb-4">
            <span className="text-primary-green">#</span>SejaEcolover
          </h2>
          <p className="text-black text-lg lg:text-start text-justify">
            Junte-se a Ecopower e ilumine seu futuro! Se você busca por
            crescimento profissional, em um ambiente saudável e sustentável,
            múltiplo e desafiador, o seu lugar é aqui! Seja parte da nossa
            equipe e impulsione sua carreira com energia renovável. Somos Eco,
            Somos Power, Somos a Energia que Move o Futuro
          </p>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionCareers;
