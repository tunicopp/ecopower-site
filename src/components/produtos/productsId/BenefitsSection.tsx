import Image from "next/image";
import Link from "next/link";
import React from "react";
import benefitsBg from "../../../../public/assets/images/produtos/produtos-id/benefits-bg.png";
import BenefitsCard from "./BenefitsCard";

const BenefitsSection: React.FC = () => {
  const benefitsArray = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
  ];

  return (
    <div className="flex w-full items-center flex-col relative px-[108px] py-[100px]">
      <Image
        src={benefitsBg}
        alt="benefitsBg"
        priority
        quality={100}
        fill
        loading="eager"
        className="absolute right-0 top-0 -z-10"
      />
      <h3 className="text-5xl font-semibold text-white max-w-[653px]">
        Benefícios do Kit Meu Solar
      </h3>
      <p className="text-lg leading-[150%] text-white max-w-[653px] text-center mt-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
      <div className="flex mt-10 flex-1 flex-wrap gap-6 max-w-[1440px] justify-center">
        {benefitsArray.map((d, i) => (
          <BenefitsCard key={i} text={d} />
        ))}
      </div>

      <Link
        href={`#`}
        className="mt-10 flex items-center justify-center simulate-button w-fit"
      >
        Compre agora
      </Link>
    </div>
  );
};

export default BenefitsSection;
