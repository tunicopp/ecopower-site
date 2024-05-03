import GridContainer from "@/components/global/GridContainer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/global/Tabs";
import Image from "next/image";
import React from "react";
// import CJY from "../../../../public/assets/images/ecopower-mobi/CJY.png";
import DMS from "../../../../public/assets/images/ecopower-mobi/DMS.png";
import FY from "../../../../public/assets/images/ecopower-mobi/FY.png";
import DropJetter from "../../../../public/assets/images/ecopower-mobi/drop-jetter.jpg";
import DropGoKids from "../../../../public/assets/images/ecopower-mobi/drop-go-kids.jpg";
// import M3 from "../../../../public/assets/images/ecopower-mobi/M3.png";
// import V3 from "../../../../public/assets/images/ecopower-mobi/V3.png";
// import XBT from "../../../../public/assets/images/ecopower-mobi/XBT.png";
// import XCY from "../../../../public/assets/images/ecopower-mobi/XCY.png";
// import XHZ from "../../../../public/assets/images/ecopower-mobi/XHZ.png";
import archiveIcon from "../../../../public/assets/images/produtos/produtos-id/archive.svg";

const TabComponent: React.FC = () => {
  const tabsTrigger = [
    // { value: "1", label: "M3" },
    // { value: "2", label: "V3" },
    { value: "3", label: "DMS" },
    // { value: "4", label: "XCY" },
    // { value: "5", label: "CJY" },
    { value: "6", label: "FY" },
    { value: "7", label: "Drop Jetter" },
    { value: "8", label: "Drop Go-Kids" },
    // { value: "7", label: "XHZ" },
    // { value: "8", label: "XBT" },
  ];
  const tabsContent = [
    // {
    //   value: "1",
    //   label: "M3",
    //   image: M3,
    //   itemsIncluded: ["Moto EcoPower M3", "Carregador", "Bateria"],
    //   Datasheet: [
    //     "Potência: 3.000 kW",
    //     "Velocidade Máxima: 80km/h",
    //     "Autonomia: 90 km",
    //     "Bateria 72V 20Ah - Lition",
    //     "Tempo de Carregamento: 4-6h",
    //     "Pneu: 120/70-12 e 130/70-12",
    //     "Freios: Disco/Disco",
    //     "Carga Máxima: 90kg",
    //   ],
    //   dowload: "https://we.tl/t-GdLDxAInFk",
    // },
    // {
    //   value: "2",
    //   label: "V3",
    //   image: V3,
    //   itemsIncluded: ["Moto EcoPower V3", "Carregador", "Bateria"],
    //   Datasheet: [
    //     "Potência: 5.000 kW",
    //     "Velocidade Máxima: 100km/h",
    //     "Autonomia: 150km",
    //     "Bateria 72V 30Ah - Lition",
    //     "Tempo de Carregamento: 4-6h",
    //     "Pneu: 110/70-17 e 140/70-16 ",
    //     "Freios: Disco/Disco",
    //     "Carga Máxima: 120kg",
    //   ],
    //   dowload: "https://we.tl/t-GdLDxAInFk",
    // },
    {
      value: "3",
      label: "DMS",
      image: DMS,
      itemsIncluded: ["Moto EcoPower DMS", "Carregador", "Bateria"],
      Datasheet: [
        "Potência: 5.000 kW",
        "Velocidade Máxima: 100km/h",
        "Autonomia: 140km",
        "Bateria 72V 80Ah - Lition",
        "Tempo de Carregamento: 8-10h",
        "Pneu: 110/70-17 e 140/70-17 ",
        "Freios: Disco/Disco",
        "Carga Máxima: 180kg",
      ],
      dowload: "https://we.tl/t-GdLDxAInFk",
    },
    // {
    //   value: "4",
    //   label: "XCY",
    //   image: XCY,
    //   itemsIncluded: ["Moto EcoPower XCY", "Carregador", "Bateria"],
    //   Datasheet: [
    //     "Potência: 3.000 kW",
    //     "Velocidade Máxima: 80km/h",
    //     "Autonomia: 80km",
    //     "Bateria 72V 30Ah - Lition",
    //     "Tempo de Carregamento: 4-6h",
    //     "Pneu: 2.75-17 e 3.0-14",
    //     "Freios: Disco/Disco",
    //     "Carga Máxima: 87kg",
    //   ],
    //   dowload: "https://we.tl/t-GdLDxAInFk",
    // },
    // {
    //   value: "5",
    //   label: "CJY",
    //   image: CJY,
    //   itemsIncluded: ["Moto EcoPower CJY", "Carregador", "Bateria"],
    //   Datasheet: [
    //     "Potência: 3.000 kW",
    //     "Velocidade Máxima: 80km/h",
    //     "Autonomia: 90 km",
    //     "Bateria 72V 30Ah - Lition",
    //     "Tempo de Carregamento: 4-6h",
    //     "Pneu: 120/70-12 e 130/70-12",
    //     "Freios: Disco/Disco",
    //     "Carga Máxima: 105kg",
    //   ],
    //   dowload: "https://we.tl/t-GdLDxAInFk",
    // },
    {
      value: "6",
      label: "FY",
      image: FY,
      itemsIncluded: ["Moto EcoPower FY", "Carregador", "Bateria"],
      Datasheet: [
        "Potência: 3.000 kW",
        "Velocidade Máxima: 80km/h",
        "Autonomia: 86 km",
        "Bateria 72V 30Ah - Lition",
        "Tempo de Carregamento: 8-10h",
        "Pneu: 2.75-18 e 110/90-16",
        "Freios: Disco/Disco",
        "Carga Máxima: 180kg",
      ],
      dowload: "https://we.tl/t-GdLDxAInFk",
    },
    {
      value: "7",
      label: "Drop Jetter",
      image: DropJetter,
      itemsIncluded: [
        "Patinete Elétrico DROP JETTER 800w Lítio 48v c/ Banco e Painel",
      ],
      Datasheet: [
        "Modelo: Jetter 48V",
        "Motor: Hub Brushless 800W",
        "Bateria: Lítio 48v 10ah removível",
        "Autonomia: até 40 km Velocidade Máx: 32 km/h (Limitado) / 45 km/h (Sem Limitação)",
        "Níveis de velocidade: 3 níveis Inclinação",
        "Max: 25º",
        "Tempo de Recarga: 04-05 horas - Bivolt",
        "Capacidade de Carga: até 120 kg",
        "Roda: 10” inflável",
        "Pressão Máx: 35 psi",
        "Proteção a Água e Poeira: IP54 - Chuva Leve",
        "Painel: Central de LED Iluminação: Dianteira e luz de freio em LED",
        "Chave: 2 chaves codificadas",
        "Acelerador: De punho progressivo",
        "Suspensão: Dupla dianteira e traseira",
        "Freios: A disco dianteiro e traseiro",
        "Dobrável: Sim, guidão e banco",
        "Peso: 28 kg",
        "Tamanho: 112 x 113 x 55 cm",
        "Tamanho Dobrado: 112 x 60 x 55 cm",
        "Garantia: 1 ano - Contra defeitos de fabricação incluindo a bateria",
      ],
      dowload:
        "https://drive.google.com/file/d/1L2OeOBPEsevW_NUtUdA0gq6nXbYjpFft/view?usp=sharing",
    },
    {
      value: "8",
      label: "Drop Go-Kids",
      image: DropGoKids,
      itemsIncluded: ["Patinete Elétrico DROP GO-KIDS 150W-24v"],
      Datasheet: [
        "Modelo: GO-KIDS",
        "Motor: Hub Brushless 150W",
        "Bateria: Lítio 24v, 2.25ah",
        "Velocidade Máx: 15 km/h",
        "Autonomia: até 08 km",
        "Inclinação Max: 8º",
        "Acelerador: De dedo progressivo",
        "Iluminação: Lateral LED RGB",
        "Dobrável: Sim",
        "Painel: Lateral de LED",
        "Proteção a Água e Poeira: IP54 - Chuva Leve",
        "Tempo de Recarga: 03 - 04 horas - Bivolt",
        "Capacidade de carga: 60 kg",
        "Freio: Traseiro pedal",
        "Roda: 6,0″ maciça",
        "Peso: 6,5 kg",
        "Tamanho: 112 x 113 x 55 cm",
        "Tamanho Dobrado: 112 x 60 x 55 cm",
        "Garantia: 3 Meses",
        "Regulamentação: Este produto é classificado como um veículo de recreação. Deve ser utilizado apenas em ruas e propriedades particulares.",
      ],
      dowload:
        "https://drop.com.br/wp-content/uploads/2021/manuais/Manual_MoTronik_GO_Kids_v04_visualizacao_reduz.pdf",
    },
    // {
    //   value: "7",
    //   label: "XHZ",
    //   image: XHZ,
    //   itemsIncluded: ["Moto EcoPower XHZ", "Carregador", "Bateria"],
    //   Datasheet: [
    //     "Potência: 3.000 kW",
    //     "Velocidade Máxima: 80km/h",
    //     "Autonomia: 70 km",
    //     "Bateria 72V 30Ah - Lition",
    //     "Tempo de Carregamento: 8-10h",
    //     "Pneu: 130/70-12 e 130/70-13",
    //     "Freios: Disco/Disco",
    //     "Carga Máxima: 200kg",
    //   ],
    //   dowload: "https://we.tl/t-GdLDxAInFk",
    // },
    // {
    //   value: "8",
    //   label: "XBT",
    //   image: XBT,
    //   itemsIncluded: ["Moto EcoPower XBT", "Carregador", "Bateria"],
    //   Datasheet: [
    //     "Potência: 3.000 kW",
    //     "Velocidade Máxima: 80km/h",
    //     "Autonomia: 70 km",
    //     "Bateria 72V 80Ah - Lition",
    //     "Tempo de Carregamento: 8-10h",
    //     "Pneu: 130/70-12 e 130/70-13",
    //     "Freios: Disco/Disco",
    //     "Carga Máxima: 200kg",
    //   ],
    //   dowload: "https://we.tl/t-GdLDxAInFk",
    // },
  ];

  return (
    <section className="flex w-full relative  mt-[30px] mb-[120px]">
      <GridContainer className="flex-col items-center">
        <h3 className="text-[56px] font-bold text-[#4C4E59]">Modelos</h3>
        <div className="flex mt-[64px] items-center justify-center  w-full">
          <Tabs defaultValue="3" className="w-full ">
            <TabsList>
              {tabsTrigger.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabsContent.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="flex flex-col justify-center items-center w-full mt-60 lg:mt-20">
                  <div className="flex  w-full flex-1 relative  rounded-3xl">
                    <Image
                      src={tab.image}
                      alt="product1"
                      priority
                      quality={100}
                      loading="eager"
                      objectFit="contain"
                      className="lg:h-[500px] h-full lg:w-[600px] w-full  rounded-3xl object-cover  mx-auto"
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
