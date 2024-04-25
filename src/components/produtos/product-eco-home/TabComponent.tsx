import GridContainer from "@/components/global/GridContainer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/global/Tabs";
import Image from "next/image";
import React from "react";
import product1 from "../../../../public/assets/images/ecopower-home/product1.png";
import product2 from "../../../../public/assets/images/ecopower-home/product2.png";
import product3 from "../../../../public/assets/images/ecopower-home/product3.png";
import product4 from "../../../../public/assets/images/ecopower-home/product4.png";
import product5 from "../../../../public/assets/images/ecopower-home/product5.png";
import product6 from "../../../../public/assets/images/ecopower-home/product6.png";
import product7 from "../../../../public/assets/images/ecopower-home/product7.png";
import product8 from "../../../../public/assets/images/ecopower-home/product8.png";
import product9 from "../../../../public/assets/images/ecopower-home/product9.png";
import archiveIcon from "../../../../public/assets/images/produtos/produtos-id/archive.svg";

const TabComponent: React.FC = () => {
  const tabsTrigger = [
    { value: "1", label: "Cooktop BCT04P" },
    { value: "2", label: "Cooktop ECI04EP" },
    { value: "3", label: "Cooktop FG0422VC" },
    { value: "4", label: "Cooktop IE6LP" },
    { value: "5", label: "Adega ACB08" },
    { value: "6", label: "Cervejeira BCG96" },
    { value: "7", label: "Air Fryer EAF30" },
    { value: "8", label: "Robô Aspirador ERB10" },
    { value: "9", label: "Forno Elétrico OE8EF" },
  ];
  const tabsContent = [
    {
      value: "1",
      label: "Cooktop BCT04P",
      image: product1,
      itemsIncluded: ["Fogão de Indução Cooktop - Britânia | 04 Bocas"],
      Datasheet: ["Manual em anexo no download."],
      dowload:
        "https://drive.google.com/file/d/1Rp3sU9Fitu-qXyjFmeKkmB-2xGV48PW_/view?usp=sharing",
    },
    {
      value: "2",
      label: "Cooktop ECI04EP",
      image: product2,
      itemsIncluded: ["Fogão de Indução Cooktop - EOS | 04 Bocas"],
      Datasheet: ["Manual em anexo no download."],
      dowload:
        "https://drive.google.com/file/d/1Jwgnm3K1X6ipbWC8YuXSz735Mac-yHA5/view?usp=sharing",
    },
    {
      value: "3",
      label: "Cooktop FG0422VC",
      image: product3,
      itemsIncluded: ["Fogão de Indução Cooktop - Suggar | 04 Bocas"],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1fWrGo2Fpy01x4sLWTBjzgTAlTsuid959/view?usp=sharing",
    },
    {
      value: "4",
      label: "Cooktop IE6LP",
      image: product4,
      itemsIncluded: ["Fogão de Indução Cooktop - Electrolux | 04 Bocas"],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1lcHlSjUz33ctC1OFQTNoKglA-nARUy0U/view?usp=sharing",
    },
    {
      value: "5",
      label: "Adega ACB08",
      image: product5,
      itemsIncluded: ["Adega de Vinhos - Electrolux | 8 Garrafas"],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1p4L60H-VzREaHP0cKI2o_WAHtEN17ZJG/view?usp=sharing",
    },
    {
      value: "6",
      label: "Cervejeira BCG96",
      image: product6,
      itemsIncluded: ["Cervejeira - Electrolux | 96 litros"],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1k3pl58k6A5o_MBkDMlor10VcT3JvZKuJ/view?usp=sharing",
    },
    {
      value: "7",
      label: "Air Fryer EAF30",
      image: product7,
      itemsIncluded: ["Air Fryer - Electrolux | 4L"],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1cvEspXXJ5IneDORBx_exM36HztXYpW6l/view?usp=sharing",
    },
    {
      value: "8",
      label: "Robô Aspirador ERB10",
      image: product8,
      itemsIncluded: [
        "Robô Aspirador de Pó Electrolux 3 em 1 com Sensor Antiqueda",
      ],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1bnrafJZdIm1hKvQBUC1KNV5qkzNjafoK/view?usp=sharing",
    },
    {
      value: "9",
      label: "Forno Elétrico OE8EF",
      image: product9,
      itemsIncluded: ["Fornos Elétricos de Embutir Electrolux"],
      Datasheet: ["Manual em anexo no download."],

      dowload:
        "https://drive.google.com/file/d/1OqPFcT6JtxQsn_ENv1oT_16AvI7dq4Z0/view?usp=sharing",
    },
  ];

  return (
    <section className="flex w-full relative  mt-[30px] mb-[120px]">
      <GridContainer className="flex-col items-center">
        <h3 className="text-[56px] font-bold text-[#4C4E59]">Modelos</h3>
        <div className="flex mt-[64px] items-center justify-center  w-full">
          <Tabs defaultValue="1" className="w-full ">
            <TabsList className="h-fit ">
              {tabsTrigger.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="max-w-[160px]"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsContent.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="flex flex-col justify-center items-center w-full ">
                  <div className="flex  w-full flex-1 relative  rounded-3xl">
                    <Image
                      src={tab.image}
                      alt="product1"
                      priority
                      quality={100}
                      loading="eager"
                      className="lg:h-[500px] h-full lg:w-[500px] w-full  rounded-3xl object-cover  mx-auto"
                    />
                    {/* <div className="absolute rounded-3xl gradient-tab z-20 bottom-0" /> */}
                  </div>

                  <div className="flex w-full flex-col p-6 bg-beige-300 mt-10 rounded-2xl">
                    <p className="font-bold">Itens inclusos</p>

                    <ul className="text-grey-100 mt-4 list-disc">
                      {tab.itemsIncluded.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex w-full gap-6 flex-col lg:flex-row">
                    <div className="flex w-full flex-1 flex-col p-6 bg-beige-300 lg:mt-10 mt-4  rounded-2xl">
                      <Image
                        src={archiveIcon}
                        alt="archiveIcon"
                        priority
                        quality={100}
                        loading="eager"
                        className="w-[66px] h-[66px] object-cover"
                      />
                      <p className="font-bold mt-4">Ficha técnica</p>
                      <ul className="text-grey-100 mt-4 list-disc">
                        {tab.Datasheet.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex w-full flex-1 flex-col p-6 bg-beige-300 lg:mt-10 mt-4  rounded-2xl">
                      <Image
                        src={archiveIcon}
                        alt="archiveIcon"
                        priority
                        quality={100}
                        loading="eager"
                        className="w-[66px] h-[66px] object-cover"
                      />
                      <a
                        href={tab.dowload}
                        target="_blank"
                        className="font-bold mt-4 border-b-[1px] w-fit"
                      >
                        Downloads
                      </a>
                      <p className="text-grey-100 mt-4">
                        Click no link acima para baixar.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </GridContainer>
    </section>
  );
};

export default TabComponent;
