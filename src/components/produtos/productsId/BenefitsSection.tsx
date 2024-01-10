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
    <section className="flex w-full items-center flex-col relative lg:px-[108px] px-5 lg:py-[100px] py-5 mt-5 lg:mt-0">
      <Image
        src={benefitsBg}
        alt="benefitsBg"
        priority
        quality={100}
        loading="eager"
        fill
        className="absolute right-0 top-0 -z-10"
      />
      <h3 className="lg:text-5xl text-[36px] font-semibold text-white max-w-[653px] text-center ">
        Benefícios do Kit Meu Solar
      </h3>
      <p className="text-lg leading-[150%] text-white max-w-[653px] text-center mt-6 ">
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
    </section>
  );
};

export default BenefitsSection;
