import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgRequirements from "../../../../public/assets/images/produtos/produtos-id/bg-requirements.png";
import iconCheck from "../../../../public/assets/images/produtos/produtos-id/green-check.svg";

const Requirements: React.FC = () => {
  const requirementsArray = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  ];
  return (
    <section className="flex w-full items-center justify-center relative lg:px-[108px] px-0 md:py-[100px] py-0 bg-beige-300 mt-10 lg:mt-0">
      <div className="flex flex-col items-center bg-[#fff] pb-10 rounded-2xl ">
        <div className="flex flex-col lg:flex-row  lg:p-10 p-5 gap-[50px]">
          <Image
            src={bgRequirements}
            alt="bgRequirements"
            priority
            quality={100}
            loading="eager"
            width={600}
          />
          <div className="flex items-center flex-col">
            <h2 className="text-grayscale-900 lg:text-[48px] text-[36px] leading-[110%] font-medium max-w-[540px] text-center lg:text-left">
              Pré Requisitos do Kit Meu Solar
            </h2>
            <p className="text-lg leading-[150%] max-w-[496px] mt-6 mb-[49px] text-center lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
            <div className="flex flex-col gap-4">
              {requirementsArray.map((data, i) => (
                <div
                  key={i}
                  className="flex p-6 gap-4 items-center bg-beige-300 rounded-lg "
                >
                  <Image
                    src={iconCheck}
                    alt="iconCheck"
                    priority
                    quality={100}
                    width={32}
                    height={32}
                  />
                  <p className="max-w-[400px] text-lg font-medium">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              ))}
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5517988418893&text=Ol%C3%A1,%20acabei%20de%20simular%20meu%20projeto%20no%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es"
                className=" flex items-center self-center simulate-button w-fit mt-4"
              >
                Compre agora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
