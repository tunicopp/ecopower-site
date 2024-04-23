import Image from "next/image";
import React from "react";
import iconCheck from "../../../../public/assets/images/produtos/produtos-id/check.svg";

interface BenefitsCardProps {
  text: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ text }) => {
  return (
    <div className="flex flex-row  md:w-auto w-full md:flex-col md:gap-2 gap-4 p-6 bg-[#ffffff20] rounded-lg">
      <Image
        src={iconCheck}
        alt="iconCheck"
        priority
        quality={100}
        className="md:w-[48px] w-[32px] "
      />
      <p className="max-w-[240px] text-lg font-medium leading-[150%] text-white max-h-[108px] overflow-auto">
        {text}
      </p>
    </div>
  );
};

export default BenefitsCard;
