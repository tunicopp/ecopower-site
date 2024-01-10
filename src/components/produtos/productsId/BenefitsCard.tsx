import Image from "next/image";
import React from "react";
import iconCheck from "../../../../public/assets/images/produtos/produtos-id/check.svg";

interface BenefitsCardProps {
  text: string;
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ text }) => {
  return (
    <div className="flex flex-col gap-2 p-6 bg-[#ffffff20] rounded-lg">
      <Image
        src={iconCheck}
        alt="iconCheck"
        priority
        quality={100}
        width={48}
        height={48}
      />
      <p className="max-w-[240px] text-lg font-medium leading-[150%] text-white max-h-[108px] overflow-auto">
        {text}
      </p>
    </div>
  );
};

export default BenefitsCard;
