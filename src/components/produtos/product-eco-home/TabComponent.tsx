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
import product10 from "../../../../public/assets/images/ecopower-home/product10.jpeg";
import product11 from "../../../../public/assets/images/ecopower-home/product11.jpeg";
import product13 from "../../../../public/assets/images/ecopower-home/product13.jpeg";
import product14 from "../../../../public/assets/images/ecopower-home/product14.jpg";
import product15 from "../../../../public/assets/images/ecopower-home/product15.jpg";
import product16 from "../../../../public/assets/images/ecopower-home/product16.jpg";
import product17 from "../../../../public/assets/images/ecopower-home/product17.jpg";
import product18 from "../../../../public/assets/images/ecopower-home/product18.jpg";
import product19 from "../../../../public/assets/images/ecopower-home/product19.jpg";
import product20 from "../../../../public/assets/images/ecopower-home/product20.jpeg";
import product21 from "../../../../public/assets/images/ecopower-home/product21.jpeg";
import product22 from "../../../../public/assets/images/ecopower-home/product22.jpg";
import product23 from "../../../../public/assets/images/ecopower-home/product23.jpg";
import product24 from "../../../../public/assets/images/ecopower-home/product24.jpg";
import product25 from "../../../../public/assets/images/ecopower-home/product25.webp";
import product26 from "../../../../public/assets/images/ecopower-home/product26.webp";
import product27 from "../../../../public/assets/images/ecopower-home/product27.webp";
import product28 from "../../../../public/assets/images/ecopower-home/product28.webp";
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
    { value: "10", label: "Forno Elétrico OE8EL" },
    { value: "11", label: "Ar Condicionado 9.000 BTU" },
    { value: "12", label: "Ar Condicionado 12.000 BTU" },
    { value: "13", label: "Ar Condicionado 60.000 BTU" },
    { value: "14", label: "Microondas MB37R" },
    { value: "15", label: "Microondas MI41S" },
    { value: "16", label: "Maquina de Lavar LAC12" },
    { value: "17", label: "Lava e Seca LSW11" },
    { value: "18", label: "Geladeira DFN41" },
    { value: "19", label: "Geladeira IB55S" },
    { value: "20", label: "Coifa CE6TF" },
    { value: "21", label: "Lava Louça LL14X" },
    { value: "22", label: "NoBreak WEG Residencial" },
    { value: "23", label: "NoBreak WEG Thor World" },
    { value: "24", label: "NoBreak WEG Enterprise" },
    { value: "25", label: "WEG Home 1" },
    { value: "26", label: "WEG Home 2" },
    { value: "27", label: "WEG Home 3" },
    { value: "28", label: "WEG Home 4" },
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
    {
      value: "10",
      label: "Forno Elétrico OE8EL",
      image: product10,
      itemsIncluded: [
        "Forno de Embutir Elétrico Electrolux 80L Efficient com PerfectCook",
      ],
      Datasheet: ["Manual em anexo no download."],
      dowload:
        "https://api.electrolux-medialibrary.com/asset/6f74e69f-47cf-47c5-bd51-1fceea9e9d98/E4RM3Q/7ec61099-ab11-4d65-bd87-e96cdcfeb3f4/ORIGINAL/7ec61099-ab11-4d65-bd87-e96cdcfeb3f4.pdf",
    },
    {
      value: "11",
      label: "Ar Condicionado 9.000 BTU",
      image: product11,
      itemsIncluded: ["09.000 BTU Split Inverter Electrolux"],
      Datasheet: ["Manual em anexo no download."],
      dowload:
        "https://drive.google.com/file/d/1pTBKRnimdybkIT7jKoyJdeg26a74KD-R/view?usp=sharing",
    },
    {
      value: "12",
      label: "Ar Condicionado 12.000 BTU",
      image: product11,
      itemsIncluded: ["12.000 BTU Split Inverter Electrolux JI12F/JE12F 220V"],
      Datasheet: ["Manual em anexo no download."],
      dowload:
        "https://drive.google.com/file/d/1pTBKRnimdybkIT7jKoyJdeg26a74KD-R/view?usp=sharing",
    },
    {
      value: "13",
      label: "Ar Condicionado 60.000 BTU",
      image: product13,
      itemsIncluded: ["60.000 BTU Split Inverter Carrier J38CCVD60515MC"],
      Datasheet: ["Em breve"],
      dowload: "",
    },
    {
      value: "14",
      label: "Microondas MB37R",
      image: product14,
      itemsIncluded: [
        "Micro-ondas Electrolux 27L Branco com 55 receitas pré-programadas e Função Tira Odor",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://www.electrolux-ui.com/DocumentDownLoad.aspx?DocURL=2018%5CA11%5C114501umPT.pdf",
    },
    {
      value: "15",
      label: "Microondas MI41S",
      image: product15,
      itemsIncluded: [
        "Micro-ondas Electrolux 31L cor Inox Espelhado com Painel Integrado e Função Tira Odor",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://www.electrolux-ui.com/DocumentDownLoad.aspx?DocURL=2017%5CA11%5C692402umPT.pdf",
    },
    {
      value: "16",
      label: "Maquina de Lavar LAC12",
      image: product16,
      itemsIncluded: [
        "Máquina de Lavar Electrolux 12kg Branca Turbo Economia Silenciosa com Cesto Inox",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://www.electrolux-ui.com/DocumentDownLoad.aspx?DocURL=2018%5CA05%5C771501umPT.pdf",
    },
    {
      value: "17",
      label: "Lava e Seca LSW11",
      image: product17,
      itemsIncluded: ["Lava & Seca 11Kg Ultimate Care Front Load Electrolux"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://www.electrolux-ui.com/DocumentDownLoad.aspx?DocURL=2020%5CA17%5C450905umPT.pdf",
    },
    {
      value: "18",
      label: "Geladeira DFN41",
      image: product18,
      itemsIncluded: [
        "Geladeira Electrolux Frost Free 371L Função Drink Express Duplex Branca",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://www.electrolux-ui.com/DocumentDownLoad.aspx?DocURL=2021%5CA21%5C623302umPT.pdf",
    },
    {
      value: "19",
      label: "Geladeira IB55S",
      image: product19,
      itemsIncluded: [
        "Geladeira Electrolux Frost Free Inverter 488L Fresh&Flex Inverse Cor Inox",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://api.electrolux-medialibrary.com/asset/7b85df72-11d4-44fa-8a09-4eb33714cfaf/E4RM3Q/835fa4d1-3e58-4ff7-8a78-320e1b57ef33/ORIGINAL/835fa4d1-3e58-4ff7-8a78-320e1b57ef33.pdf",
    },
    {
      value: "20",
      label: "Coifa CE6TF",
      image: product20,
      itemsIncluded: [
        "Coifa de Parede Electrolux 60cm Inox Experience com Inteligência Artificial e Alto Poder Sucção",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://api.electrolux-medialibrary.com/asset/2b95470d-fd5e-4d6b-bd4c-d2acf2d409bf/E4RM3Q/4386d766-2db0-44b5-96da-d614b9fc0d75/ORIGINAL/4386d766-2db0-44b5-96da-d614b9fc0d75.pdf",
    },
    {
      value: "21",
      label: "Lava Louça LL14X",
      image: product21,
      itemsIncluded: [
        "Lava-Louças Electrolux 14 Serviços Inox com Função Higienizar Compras",
      ],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://www.electrolux-ui.com/DocumentDownLoad.aspx?DocURL=2021%5CA21%5C322101umPT.pdf",
    },
    {
      value: "22",
      label: "NoBreak WEG Residencial",
      image: product22,
      itemsIncluded: ["NoBreak WEG 600VA/300W"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/h8f/h0e/WEG-nobreak-home-guide-installation-10006069909-pt-en-es.pdf",
    },
    {
      value: "23",
      label: "NoBreak WEG Thor World",
      image: product23,
      itemsIncluded: ["NoBreak WEG Thor World THW00301M55005200"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/h94/h4c/WEG-nobreak-thor-world-manual-do-usuario-10008458280-pt.pdf",
    },
    {
      value: "24",
      label: "NoBreak WEG Enterprise",
      image: product24,
      itemsIncluded: ["NoBreak WEG Enterprise 10 KVA ETP010022000000"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/hc6/hbc/WEG-nobreak-enterprise-50102821-pt.pdf",
    },
    {
      value: "25",
      label: "WEG Home 1",
      image: product25,
      itemsIncluded: ["Plugue 10A Bivolt  Smart Wi-Fi WHome"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/h3c/hbe/weg-whome-datasheet-plugue-10a-wi-fi-pt.pdf",
    },
    {
      value: "26",
      label: "WEG Home 2",
      image: product26,
      itemsIncluded: ["Camera de Segurança Interna WCam Wi-Fi 2MP"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/h6e/hfb/WEG-whome-manual-camera-wi-fi-FHD-PTZ-INTO-10.pdf",
    },
    {
      value: "27",
      label: "WEG Home 3",
      image: product27,
      itemsIncluded: ["Camera de Segurança Externa Bullet Wi-Fi 2MP"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/h53/h19/WEG-whome-manual-camera-wi-fi-FHB-BE-EXT-10.pdf",
    },
    {
      value: "28",
      label: "WEG Home 4",
      image: product28,
      itemsIncluded: ["Tomada Dupla com USB Smart Wi-Fi WHome Refinatto"],
      Datasheet: ["Manual em anexo"],
      dowload:
        "https://static.weg.net/medias/downloadcenter/hbe/h20/WEG-refinatto-50076726-pt.pdf",
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
