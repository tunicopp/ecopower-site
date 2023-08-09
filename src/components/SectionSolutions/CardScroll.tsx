import React, { useEffect, useRef } from "react";
import FarmIcon from "../../../public/assets/icons/FarmIcon";
import CheckIcon from "../../../public/assets/icons/CheckIcon";
import RigthArrow from "../../../public/assets/icons/RigthArrow";
import FactoryIcon from "../../../public/assets/icons/FactoryIcon";
import StoreIcon from "../../../public/assets/icons/StoreIcon";
import HouseIcon from "../../../public/assets/icons/HouseIcon";
import { useInView } from "framer-motion";
import { useGlobalContext } from "@/app/context/store";

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
      className="flex flex-col bg-white p-10 max-w-[515px] h-fit rounded-3xl z-10"
    >
      {children}
    </div>
  );
};

export const CardScrollContent = {
  house: () => {
    return (
      <>
        <HouseIcon />
        <h3 className="text-[32px] font-semibold">Residencial</h3>
        <p className="text-lg leading-6 mt-2">
          Energia solar já é realidade em muitos lares por ser limpa,
          sustentável, e trazer economia.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center mt-10">
            <CheckIcon />
            <p className="text-lg leading-6 ">Economia Garantida</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Valorização do Imóvel</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Garantia Nacional</p>
          </div>
          <div className="mt-10 flex items-center gap-2 group/arrow cursor-pointer">
            <p onClick={() => {}} className="text-primary-green font-semibold">
              Ver Projetos Residenciais
            </p>
            <div className="slide-arrow">
              <RigthArrow />
            </div>
          </div>
        </div>
      </>
    );
  },
  store: () => {
    return (
      <>
        <StoreIcon />
        <h3 className="text-[32px] font-semibold">Empresarial</h3>
        <p className="text-lg leading-6 mt-2">
          Opção inteligente para empresas, diminui gastos com contas de energia,
          trazendo investimentos.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center mt-10">
            <CheckIcon />
            <p className="text-lg leading-6 ">Menos Custo Fixo</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Sustentabilidade</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Investimento</p>
          </div>
          <div className="mt-10 flex items-center gap-2 group/arrow cursor-pointer">
            <p onClick={() => {}} className="text-primary-green font-semibold">
              Ver Projetos Residenciais
            </p>
            <div className="slide-arrow">
              <RigthArrow />
            </div>
          </div>
        </div>
      </>
    );
  },
  factory: () => {
    return (
      <>
        <FactoryIcon />
        <h3 className="text-[32px] font-semibold">Industrial</h3>
        <p className="text-lg leading-6 mt-2">
          Empresas que implantam sistemas sustentáveis podem ganhar prêmios e
          conseguir certificados.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center mt-10">
            <CheckIcon />
            <p className="text-lg leading-6 ">ROI Imediato</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Custo Previsível</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Ecológico</p>
          </div>
          <div className="mt-10 flex items-center gap-2 group/arrow cursor-pointer">
            <p onClick={() => {}} className="text-primary-green font-semibold">
              Ver Projetos Residenciais
            </p>
            <div className="slide-arrow">
              <RigthArrow />
            </div>
          </div>
        </div>
      </>
    );
  },
  farm: () => {
    return (
      <>
        <FarmIcon />
        <h3 className="text-[32px] font-semibold">Rural</h3>
        <p className="text-lg leading-6 mt-2">
          Além da economia, a implantação da energia solar é uma
          responsabilidade ambiental.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center mt-10">
            <CheckIcon />
            <p className="text-lg leading-6 ">Economia Garantida</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Sustentável</p>
          </div>
          <div className="flex gap-2 items-center ">
            <CheckIcon />
            <p className="text-lg leading-6 ">Autossuficiente</p>
          </div>
          <div className="mt-10 flex items-center gap-2 group/arrow cursor-pointer">
            <p onClick={() => {}} className="text-primary-green font-semibold">
              Ver Projetos Residenciais
            </p>
            <div className="slide-arrow">
              <RigthArrow />
            </div>
          </div>
        </div>
      </>
    );
  },
};

export default CardScroll;
