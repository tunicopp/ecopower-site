import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import Image from "next/image";
import React from "react";
import zeze from "../../../../public/assets/images/about-us/partners/zeze-partner.png";
import jads from "../../../../public/assets/images/about-us/partners/jads-jadson-partner.png";
import joaoVinicius from "../../../../public/assets/images/about-us/partners/joao-vinicius-partner.png";
import fabricio from "../../../../public/assets/images/about-us/partners/fabricio-partner.png";
import cuiabano from "../../../../public/assets/images/about-us/partners/cuiabano-partner.png";

const SectionPartners: React.FC = () => {
  return (
    <section className="py-[80px]">
      <GridContainer className="flex-col items-center">
        <TitleComponent>Parceiros EcoPower</TitleComponent>
        <h3 className="text-xl mt-3 mb-12">
          Com pioneirismo e dedicação, nos tornamos a maior!
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 w-full">
          <div className="pl-8 pr-[30px] py-6 rounded-full bg-beige-300 flex items-center gap-6">
            <Image
              src={zeze}
              alt="Zezé di Camargo"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <b className="text-2xl">Zezé di Camargo</b>
              <span className="text-grey-100">Cantor</span>
            </div>
          </div>
          <div className="pl-8 pr-[30px] py-6 rounded-full bg-beige-300 flex items-center gap-6">
            <Image
              src={jads}
              alt="Jads e Jadson"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <b className="text-2xl">Jads e Jadson</b>
              <span className="text-grey-100">Cantores</span>
            </div>
          </div>
          <div className="pl-8 pr-[30px] py-6 rounded-full bg-beige-300 flex items-center gap-6">
            <Image
              src={joaoVinicius}
              alt="João Bosco e Vinícius"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <b className="text-2xl">João Bosco e Vinícius</b>
              <span className="text-grey-100">Cantores</span>
            </div>
          </div>
          <div className="pl-8 pr-[30px] py-6 rounded-full bg-beige-300 flex items-center gap-6">
            <Image
              src={fabricio}
              alt="Fabrício Taveira"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <b className="text-2xl">Fabrício Taveira</b>
              <span className="text-grey-100">Crossfit (Atleta)</span>
            </div>
          </div>
          <div className="pl-8 pr-[30px] py-6 rounded-full bg-beige-300 flex items-center gap-6">
            <Image
              src={cuiabano}
              alt="Cuiabano Lima"
              width={112}
              height={112}
              className="rounded-full"
            />
            <div className="flex flex-col gap-2">
              <b className="text-2xl">Cuiabano Lima</b>
              <span className="text-grey-100">Locutor</span>
            </div>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionPartners;