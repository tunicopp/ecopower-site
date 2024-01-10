import Image from "next/image";
import Link from "next/link";
import React from "react";
import bgCaseSection from "../../../../public/assets/images/produtos/produtos-id/bg-requirements.png";

const CaseSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center relative px-[108px] py-[100px] ">
      <h2 className="text-grayscale-900 text-[48px] leading-[110%] font-semibold max-w-[807px] text-center">
        Conheça os Cases de Sucesso
      </h2>
      <p className="text-lg leading-[150%] max-w-[807px] mt-6 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
      </p>
      <div className="flex items-center gap-[80px] max-w-[1440px] w-full mt-[80px]  ">
        <div className="flex flex-col w-1/2">
          <p className="text-4xl font-semibold">Case de Sucesso #1</p>
          <p className="text-lg leading-[150%] mt-6 max-h-[240px] overflow-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </div>
        <div className="flex w-1/2">
          <div className="h-[387px]">
            <video
              src="#"
              className="h-full rounded-3xl object-cover"
              controls
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseSection;
