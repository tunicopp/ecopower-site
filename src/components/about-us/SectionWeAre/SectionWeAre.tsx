import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import weAreEco from "../../../../public/assets/images/about-us/we-are/we-are-eco.svg";
import weArePower from "../../../../public/assets/images/about-us/we-are/we-are-power.svg";
import experience from "../../../../public/assets/images/about-us/we-are/experience-icon.svg";
import excelency from "../../../../public/assets/images/about-us/we-are/excelency-icon.svg";
import badge from "../../../../public/assets/images/about-us/we-are/badge-icon.svg";
import weAreEcoImage from "../../../../public/assets/images/about-us/we-are/we-are-eco.png";
import weArePowerImage from "../../../../public/assets/images/about-us/we-are/we-are-power.png";
import ecoPowerIcon from "../../../../public/assets/images/about-us/we-are/eco-power-icon.svg";

const SectionWeAre: React.FC = () => {
  return (
    <section className="py-[120px]">
      <GridContainer className="flex-col">
        <div className="relative">
          <div className="absolute left-[50%] top-[50%] -translate-x-2/4 -translate-y-2/4 drop-shadow-eco-power-icon">
            <Image src={ecoPowerIcon} alt="Ícone EcoPower" />
          </div>
          <div className="grid md:grid-cols-2 w-full gap-6 auto-rows-fr">
            <div className="p-6 lg:py-[66px] bg-beige-300 flex flex-col items-center justify-center rounded-2xl">
              <div className="flex-center w-[90px] h-[90px] bg-primary-green rounded-full">
                <Image
                  src={weAreEco}
                  alt="We are Eco"
                  width={48}
                  height={48}
                  quality={100}
                />
              </div>
              <h2 className="text-[44px] leading-[52px] text-grayscale-900 font-semibold my-3">
                Somos Eco
              </h2>
              <p className="text-xl text-grayscale-900 text-center">
                Presente em todo o país, a EcoPower é a empresa de energia solar
                que mais cresce no Brasil.
              </p>
            </div>
            <Image
              src={weAreEcoImage}
              alt="Somos Eco"
              quality={100}
              className="rounded-2xl object-cover h-full"
            />
            <Image
              src={weArePowerImage}
              alt="Somos Power"
              quality={100}
              className="rounded-2xl object-cover h-full"
            />
            <div className="p-6 lg:py-[66px] bg-primary-green flex flex-col items-center justify-center rounded-2xl">
              <div className="flex-center w-[90px] h-[90px] bg-beige-300 rounded-full">
                <Image
                  src={weArePower}
                  alt="We are Eco"
                  width={54}
                  height={54}
                  quality={100}
                />
              </div>
              <h2 className="text-[44px] leading-[52px] text-green-200 font-semibold my-3">
                Somos Power
              </h2>
              <p className="text-xl text-white text-center">
                Presente em todo o país, a EcoPower é a empresa de energia solar
                que mais cresce no Brasil.
              </p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 mt-[110px] gap-6">
          <div className="px-6 py-8 bg-beige-300 rounded-2xl">
            <Image
              src={experience}
              alt="Ganhando Experiência Ícone"
              width={37}
              height={37}
              quality={100}
            />
            <h2 className="text-2xl leading-none text-black mt-8 mb-2 font-bold">
              Ganhando Experiência
            </h2>
            <h3 className="text-grey-100 leading-none">
              Atuando há mais de 8 anos
            </h3>
          </div>
          <div className="px-6 py-8 bg-beige-300 rounded-2xl">
            <Image
              src={excelency}
              alt="Buscando a Excelência Ícone"
              width={37}
              height={37}
              quality={100}
            />
            <h2 className="text-2xl leading-none text-black mt-8 mb-2 font-bold">
              Buscando a Excelência
            </h2>
            <h3 className="text-grey-100 leading-none">
              Através de cada projeto instalado
            </h3>
          </div>
          <div className="px-6 py-8 bg-beige-300 rounded-2xl">
            <Image
              src={badge}
              alt="Gerando Satisfação Ícone"
              width={37}
              height={37}
              quality={100}
            />
            <h2 className="text-2xl leading-none text-black mt-8 mb-2 font-bold">
              Gerando Satisfação
            </h2>
            <h3 className="text-grey-100 leading-none">
              À todos os nossos clientes
            </h3>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionWeAre;
