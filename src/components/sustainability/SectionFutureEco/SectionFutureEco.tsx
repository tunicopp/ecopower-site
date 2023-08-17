import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import futureEco from "../../../../public/assets/images/sustainability/future-eco.png";
import futureEcoTwo from "../../../../public/assets/images/sustainability/future-eco-two.png";
import ambiental from "../../../../public/assets/images/sustainability/ambiental.svg";
import social from "../../../../public/assets/images/sustainability/social.svg";
import governance from "../../../../public/assets/images/sustainability/governance.svg";
import women from "../../../../public/assets/images/sustainability/women.svg";

const SectionFutureEco: React.FC = () => {
  return (
    <section className="py-[80px] bg-beige-300">
      <GridContainer className="gap-6">
        <div className="flex flex-col gap-6">
          <TitleComponent className="text-black">
            Iluminando o Caminho para um Futuro Ecoconsciente.
          </TitleComponent>
          <p className="text-black text-lg">
            Lorem ipsum dolor sit amet consectetur. Viverra interdum non turpis
            aliquam ante facilisi nisl platea. Malesuada nunc pellentesque
            lobortis vulputate lacus mauris eros quam ultricies. Quis sagittis
            nisl placerat in proin in. Cursus massa morbi elementum quis morbi.
            Lacus amet mauris at vestibulum dignissim. Eget scelerisque tempor
            dui vitae ultrices quisque amet elementum. Vel iaculis ridiculus
            tristique.
          </p>
        </div>
        <Image
          src={futureEco}
          alt="Futuro Ecoconsciente"
          className="max-w-[572px]"
        />
      </GridContainer>
      <GridContainer className="gap-[78px] items-center mt-[80px]">
        <Image
          src={futureEcoTwo}
          alt="Futuro Ecoconsciente"
          className="max-w-[550px]"
        />
        <p className="max-w-[496px] text-black text-lg">
          <b className="font-bold">
            Campanhas de conscientização e bem-estar para colaboradores, mais de
            400 empregos diretos,
          </b>{" "}
          ações que promovem mulheres ao mercado solar, treinamentos e programas
          para colaboradores e franqueados se capacitarem.
        </p>
      </GridContainer>
      <GridContainer className="py-[80px]">
        <div className="grid grid-cols-4 gap-6 items-stretch min-h-[212px]">
          <div className="p-6 bg-white rounded-2xl flex flex-col justify-between gap-[10px]">
            <Image src={ambiental} alt="Ícone Ambiental" />
            <span className="text-black text-[22px] font-bold">Ambiental</span>
          </div>
          <div className="p-6 bg-white rounded-2xl flex flex-col justify-between gap-[10px]">
            <Image src={social} alt="Ícone Social" />
            <span className="text-black text-[22px] font-bold">Social</span>
          </div>
          <div className="p-6 bg-white rounded-2xl flex flex-col justify-between gap-[10px]">
            <Image src={governance} alt="Ícone Governança" />
            <span className="text-black text-[22px] font-bold">Governança</span>
          </div>
          <div className="p-6 bg-white rounded-2xl flex flex-col justify-between gap-[10px]">
            <Image src={women} alt="Ícone Mulheres em Cargos" />
            <span className="text-black text-[22px] font-bold">
              +30% cargos de liderança são mulheres
            </span>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionFutureEco;
