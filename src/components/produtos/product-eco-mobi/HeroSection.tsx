import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "../../../../public/assets/images/produtos/produtos-id/hero-product-id.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex  justify-center lg:px-[108px] px-[20px]  w-full lg:h-[641px] h-auto -mt-2 pb-5 lg:pb-0 pt-10 lg:pt-0 relative bg-hover-map">
      <Image
        src={hero}
        alt="Hero Banner"
        priority
        quality={100}
        loading="eager"
        className=" absolute right-0 top-0 max-w-[812px]  h-full object-cover "
      />
      <div className="flex w-full flex-col items-center  lg:flex-row max-w-[1272px] justify-between ">
        <div className="flex flex-col justify-center w-full max-w-[467px] z-20">
          <h2 className="text-white text-center lg:text-left lg:text-[72px] text-[40px] leading-[110%] font-semibold  mt-5 lg:mt-0">
            Conheça o EcoPower Mobi
          </h2>
          <p className="text-lg text-white max-w-[467px] mt-6 lg:max-h-[150px] max-h-[200px]  overflow-auto text-center lg:text-left">
            A Power Mobi é a linha de mobilidade elétrica da EcoPower,
            queremos garantir a mobilidade urbana com consciência ecológica e
            independência financeira!
          </p>
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
            className="mt-[32px] self-center lg:self-baseline flex items-center justify-center simulate-button w-fit "
          >
            Compre agora
          </Link>
        </div>
        <div className="flex w-full relative items-center justify-center mt-10 lg:mt-0">
          {/* <Image
            src={tag}
            alt="tag-product"
            className=" md:w-[262px] w-[190px] md:h-[262px] h-[190px] ml-0 lg:ml-[300px] 2xl:ml-auto"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
