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
    <div className="flex w-full items-center justify-center relative px-[108px] py-[100px] bg-beige-300">
      <div className="flex flex-col items-center bg-[#fff] pb-10 rounded-2xl ">
        <div className="flex p-10 gap-[50px]">
          <Image
            src={bgRequirements}
            alt="bgRequirements"
            priority
            quality={100}
            loading="eager"
            width={600}
          />
          <div className="flex flex-col">
            <h2 className="text-grayscale-900 text-[48px] leading-[110%] font-medium max-w-[540px]">
              Pré Requisitos do Kit Meu Solar
            </h2>
            <p className="text-lg leading-[150%] max-w-[496px] mt-6 mb-[49px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the{" "}
            </p>
            <div className="flex flex-col gap-4">
              {requirementsArray.map((data, i) => (
                <div className="flex p-6 gap-4 items-center bg-beige-300 rounded-lg ">
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
            </div>
          </div>
        </div>
        <Link
          href={`#`}
          className=" flex items-center justify-center simulate-button w-fit"
        >
          Compre agora
        </Link>
      </div>
    </div>
  );
};

export default Requirements;
