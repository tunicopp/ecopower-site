import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import logoArt from "../../../../public/assets/images/sustainability/eco-power-logo-art.svg";

const SectionReverseLogic: React.FC = () => {
  return (
    <section className="bg-beige-300 pt-[80px]">
      <GridContainer className="flex-center">
        <div className="max-w-[808px] flex flex-col gap-6">
          <TitleComponent className="text-center">
            Lógica reversa de placas solares
          </TitleComponent>
          <p className="text-lg text-center">
            As que são descartadas por dano ou queimadas, mandamos para a
            garantia ou conserto e após voltarem, não podem ser mais
            comercializadas, por isso nós a unimos e{" "}
            <b className="font-bold">
              fazemos doação da usina solar para alguma insituição com
              monitoramento em 1 ano para certificar que está tudo certo com a
              usina
            </b>
          </p>
        </div>
      </GridContainer>
      <GridContainer className="lg:flex-row flex-col mt-12 gap-6 justify-center items-center">
        <div className="flex flex-col gap-6 lg:max-w-[496px]">
          <h3 className="font-bold text-2xl lg:text-start text-center">
            Ação de combate a pobreza com doações de alimentos, ações
            beneficentes, saúde e bem-estar.
          </h3>
          <p className="text-lg lg:text-start text-center">
            Apoiamos instituições sociais da região por meio de ações de
            arrecadação de alimentos além da doaçao da usina solar.
          </p>
        </div>
        <Image src={logoArt} alt="EcoPower Logo" />
      </GridContainer>
    </section>
  );
};

export default SectionReverseLogic;
