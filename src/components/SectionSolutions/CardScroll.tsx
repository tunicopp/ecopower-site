import React, { useEffect, useRef } from "react";
import FarmIcon from "../../../public/assets/icons/FarmIcon";
import CheckIcon from "../../../public/assets/icons/CheckIcon";
import RigthArrow from "../../../public/assets/icons/RigthArrow";
import FactoryIcon from "../../../public/assets/icons/FactoryIcon";
import StoreIcon from "../../../public/assets/icons/StoreIcon";
import HouseIcon from "../../../public/assets/icons/HouseIcon";
import { useInView } from "framer-motion";
import { useGlobalContext } from "@/app/context/store";
import LinkArrow from "../global/LinkArrow";

type Props = {
  children: React.ReactNode;
  id: number;
};

const CardScroll: React.FC<Props> = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { setCardId } = useGlobalContext();

  useEffect(() => {
    if (isInView) {
      setCardId(id);
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="flex flex-col bg-white p-4 md:p-10 lg:max-w-[515px] h-fit rounded-3xl z-10"
    >
      {children}
    </div>
  );
};

export const CardScrollContent = {
  house: () => {
    return (
      <>
        <div className="flex flex-row md:flex-col items-center md:items-start">
          <HouseIcon />
          <h3 className="text-[20px] md:text-[32px] font-semibold">
            Residencial
          </h3>
        </div>
        <p className="text-md md:text-lg leading-6 mt-2">
          Energia solar já é realidade em muitos lares por ser limpa,
          sustentável e trazer economia.
        </p>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 items-center mt-4 md:mt-10">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Economia Garantida</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">
              Valorização do Imóvel
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6">Garantia Nacional</p>
          </div>
          <LinkArrow
            className="text-primary-green"
            text="Ver Projetos Residenciais"
            to="/projetos"
          />
        </div>
      </>
    );
  },
  store: () => {
    return (
      <>
        <div className="flex flex-row md:flex-col items-center md:items-start">
          <StoreIcon />
          <h3 className="text-[20px] md:text-[32px] font-semibold">
            Empresarial
          </h3>
        </div>
        <p className="text-md md:text-lg leading-6 mt-2">
          Opção inteligente para empresas, diminui gastos com contas de energia,
          trazendo investimentos.
        </p>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 items-center mt-4 md:mt-10">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Menos Custo Fixo</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Sustentabilidade</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Investimento</p>
          </div>
          <LinkArrow
            className="text-primary-green"
            text=" Ver Projetos Empresariais"
            to="/projetos"
          />
        </div>
      </>
    );
  },
  factory: () => {
    return (
      <>
        <div className="flex flex-row md:flex-col items-end md:items-start">
          <FactoryIcon />
          <h3 className="text-[20px] md:text-[32px] font-semibold">
            Industrial
          </h3>
        </div>
        <p className="text-md md:text-lg leading-6 mt-2">
          Empresas que implantam sistemas sustentáveis podem ganhar prêmios e
          conseguir certificados.
        </p>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 items-center mt-4 md:mt-10">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">ROI Imediato</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Custo Previsível</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Ecológico</p>
          </div>
          <LinkArrow
            className="text-primary-green"
            text="Ver Projetos Indutriais"
            to="/projetos"
          />
        </div>
      </>
    );
  },
  farm: () => {
    return (
      <>
        <div className="flex flex-row md:flex-col items-center md:items-start">
          <FarmIcon />
          <h3 className="text-[20px] md:text-[32px] font-semibold">Rural</h3>
        </div>
        <p className="text-md md:text-lg leading-6 mt-2">
          Além da economia, a implantação da energia solar é uma
          responsabilidade ambiental.
        </p>
        <div className="flex flex-col gap-2 md:gap-4">
          <div className="flex gap-2 items-center mt-4 md:mt-10">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Economia Garantida</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Sustentável</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-md md:text-lg leading-6 ">Autossuficiente</p>
          </div>
          <LinkArrow
            className="text-primary-green"
            text="Ver Projetos Rurais"
            to="/projetos"
          />
        </div>
      </>
    );
  },
};

export default CardScroll;
