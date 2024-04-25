import Image from "next/image";
import Link from "next/link";
import React from "react";
import benefitsBgMobile from "../../../../public/assets/images/produtos/produtos-id/benefits-bg-mobile.png";
import benefitsBg from "../../../../public/assets/images/produtos/produtos-id/benefits-bg.png";
import BenefitsCard from "./BenefitsCard";

const BenefitsSection: React.FC = () => {
  const benefitsArray = [
    "Conforto no Lar",
    "Inovação",
    "Economia Integrada",
    "Segurança",
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
        className="absolute right-0 top-0 -z-10 hidden md:block"
      />
      <Image
        src={benefitsBgMobile}
        alt="benefitsBg"
        priority
        quality={100}
        loading="eager"
        fill
        className="absolute right-0 top-0 -z-10 block md:hidden"
      />
      <h3 className="lg:text-5xl text-[36px] font-semibold text-white max-w-[683px] text-center ">
        Benefícios do Ecopower Mobi
      </h3>
      {/* <p className="text-lg leading-[150%] text-white max-w-[653px] text-center mt-6 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
      </p> */}
      <div className="flex mt-20 flex-1 flex-wrap gap-6 max-w-[1440px] justify-center">
        {benefitsArray.map((d, i) => (
          <BenefitsCard key={i} text={d} />
        ))}
      </div>

      <Link
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
        className="mt-10 flex items-center justify-center px-5 py-[6px] h-12 bg-primary-green rounded-full text-white text-sm font-semibold transition-colors hover:bg-grayscale-900 flex-shrink-0;"
      >
        Compre agora
      </Link>
    </section>
  );
};

export default BenefitsSection;
