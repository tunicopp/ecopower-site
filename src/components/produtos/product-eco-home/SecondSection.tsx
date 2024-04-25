import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import product1 from "../../../../public/assets/images/ecopower-home/como-funciona.png";
import home1 from "../../../../public/assets/images/ecopower-home/desc1.png";
import home2 from "../../../../public/assets/images/ecopower-home/desc2.png";
import circles from "../../../../public/assets/images/produtos/produtos-id/circles.svg";

const SecondSection: React.FC = () => {
  return (
    <section className="flex w-full relative  ">
      <GridContainer className="flex-col items-center">
        <div className="flex flex-col lg:flex-row-reverse w-full items-center pt-[40px] lg:pt-[80px] justify-between ">
          <div className="flex  w-full max-w-[600px] relative ">
            <Image
              src={product1}
              alt="product2"
              priority
              quality={100}
              loading="eager"
              className="w-full rounded-2xl object-cover z-20"
            />
          </div>
          <div className="flex flex-col justify-center w-full max-w-[496px]">
            <h2 className="text-grayscale-900 lg:text-[48px] text-[40px] leading-[120%] font-bold text-center lg:text-left  mt-4 lg:mt-0">
              Como Funciona?
            </h2>
            <p className="text-lg mt-4  text-center lg:text-left overflow-auto">
              Adicionando um produto EcoPower Home ao seu projeto de energia
              solar, você tem o benefício de deixar sua casa mais automatizada,
              autônoma e inteligente, além claro, de economizar nos principais
              gastos mensais da família.
            </p>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
              className="mt-[32px] flex items-center justify-center simulate-button w-fit self-center lg:self-start"
            >
              Compre agora
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full items-center justify-between pb-[100px] ">
          <div className="relative flex  w-full max-w-[600px] ">
            <Image
              src={circles}
              alt="circles"
              priority
              quality={100}
              loading="eager"
              className="absolute max-w-[550px] w-full -top-[100px] left-0 -z-10"
            />
            <div className="flex w-full pt-12  pr-4 ">
              <div className="relative w-full max-w-[499px]">
                <Image
                  src={home1}
                  alt="img1"
                  priority
                  quality={100}
                  loading="eager"
                  className="max-w-[499px] w-full rounded-2xl"
                />
                <Image
                  src={home2}
                  alt="img2"
                  priority
                  quality={100}
                  loading="eager"
                  className=" lg:w-[402px] md:w-[260px] w-[200px] rounded-2xl absolute md:-right-24 right-0  lg:-bottom-[160px] -bottom-4 shadow-xl "
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center max-w-[496px] w-full  lg:h-[714px] h-auto ">
            <h2 className="text-grayscale-900 lg:text-[48px] text-[40px] leading-[120%] font-bold max-w-[540px] text-center lg:text-left  mt-10 lg:mt-0">
              Descrição Detalhada
            </h2>
            <p className="text-lg max-w-[540px] mt-6  text-center lg:text-left overflow-auto ">
              A EcoPower Home é a linha de produtos elétricos da EcoPower, eles
              podem ser acoplados como adicionais ao seu projeto e entram dentro
              do financiamento também. Ar condicionado, eletrodomésticos,
              produtos de automação, tomadas inteligentes e muito mais!
            </p>
            <Link
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
              className="mt-[32px] flex items-center justify-center simulate-button w-fit self-center lg:self-start"
            >
              Compre agora
            </Link>
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default SecondSection;
