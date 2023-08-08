import React from "react";
import Cloud1 from "../../../public/assets/icons/Cloud1";
import Cloud2 from "../../../public/assets/icons/Cloud2";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import house from "../../../public/assets/images/sectionProjects/img-card-house.png";
import RigthArrowWhite from "../../../public/assets/icons/RigthArrowWhite";

const cards = [1, 2, 3, 4];

const SectionProject: React.FC = () => {
  const calculateColSpan = (index: number) => {
    if (index === 0) {
      return "col-span-3";
    } else if (index === 1) {
      return "col-span-2";
    } else if (index === 2) {
      return "col-span-2";
    } else {
      return "col-span-3";
    }
  };
  return (
    <section className="relative w-full pb-20 pt-[66px] flex flex-col items-center overflow-x-hidden mt-[64px]">
      <div className="absolute top-[30px] left-[0%] animate-fly">
        <Cloud1 />
      </div>
      <div className="absolute top-[35px] right-[0%] animate-fly2">
        <Cloud2 />
      </div>
      <Reveal className="max-w-[690px] text-center">
        <TitleComponent>Confira os projetos mais recentes</TitleComponent>
      </Reveal>
      <div className="flex flex-col w-full p-[108px]">
        <div className="grid grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              className={twMerge(
                "relative flex flex-col  h-[480px] rounded-3xl p-[32px]",
                calculateColSpan(index)
              )}
            >
              <Image
                src={house}
                layout="fill"
                alt="card image"
                quality={100}
                className="rounded-3xl absolute inset-0 "
              />
              <div className="absolute inset-0 gradient-black rounded-3xl" />
              <div className="flex flex-1">
                <div className="items-center flex text-white z-10 px-4 py-2 bg-primary-green rounded-3xl h-[32px] w-fit ">
                  Industrial
                </div>
              </div>
              <h4 className="text-white text-[32px] font-bold z-10">
                Fabrica de Rações
              </h4>
              <p className="text-white  z-10">
                1 Inversor WEG 60, 167 módulos 410 Wp, 68.33 kWp
              </p>
              <p className="text-white font-semibold mt-4 flex gap-2 group/arrow cursor-pointer z-10">
                Ver projeto
                <div className="slide-arrow">
                  <RigthArrowWhite />
                </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProject;
