import React from "react";

const CaseSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center relative lg:px-[108px] px-5 lg:py-[100px] py-5 ">
      <h2 className="text-grayscale-900 lg:text-[48px] text-[36px] leading-[110%] font-semibold max-w-[807px] text-center">
        Conheça os Cases de Sucesso
      </h2>
      <p className="text-lg leading-[150%] max-w-[807px] mt-6 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
      </p>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-[80px] gap-[40px] max-w-[1440px] w-full lg:mt-[80px] mt-0  ">
        <div className="flex flex-col lg:w-1/2 w-full">
          <p className="text-4xl font-semibold">Case de Sucesso #1</p>
          <p className="text-lg leading-[150%] mt-6 lg:max-h-[240px] h-auto overflow-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s.
          </p>
        </div>
        <div className="flex lg:w-1/2 w-full mt-5 lg:mt-0">
          <div className="lg:h-[387px] h-auto w-full lg:w-auto">
            <video
              src="#"
              className="h-full w-full rounded-3xl object-cover"
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSection;
