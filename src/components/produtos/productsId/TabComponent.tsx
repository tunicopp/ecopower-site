import GridContainer from "@/components/global/GridContainer";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/global/Tabs";
import Image from "next/image";
import React from "react";
import archiveIcon from "../../../../public/assets/images/produtos/produtos-id/archive.svg";
import img1 from "../../../../public/assets/images/produtos/produtos-id/graphics.png";
import img2 from "../../../../public/assets/images/section-solutions/projeto-industrial-andradas-min.webp";

const TabComponent: React.FC = () => {
  return (
    <section className="flex w-full relative  mt-[30px] mb-[120px]">
      <GridContainer className="flex-col items-center">
        <h3 className="text-[56px] font-bold text-[#4C4E59]">Modelos</h3>
        <div className="flex mt-[64px] items-center justify-center  w-full">
          <Tabs defaultValue="2" className="w-full ">
            <TabsList>
              <TabsTrigger value="2">2.2</TabsTrigger>
              <TabsTrigger value="3">3.3</TabsTrigger>
            </TabsList>
            <TabsContent value="2">
              <div className="flex flex-col w-full mt-20">
                <div className="flex  w-full flex-1 relative max-h-[480px]">
                  <Image
                    src={img1}
                    alt="product1"
                    priority
                    quality={100}
                    loading="eager"
                    className="h-full max-h-[480px] w-full rounded-3xl object-cover "
                  />
                  <div className="absolute rounded-3xl gradient-tab z-20 bottom-0" />
                </div>

                <div className="flex w-full flex-col p-6 bg-beige-300 mt-10 rounded-2xl">
                  <p className="font-bold">Itens inclusos</p>
                  <p className="text-grey-100 mt-4">
                    Painéis Solares TIER 1: A espinha dorsal do kit, esses
                    painéis são reconhecidos globalmente pela sua qualidade
                    superior e eficiência na conversão da luz solar em energia
                    elétrica. São projetados para maximizar a produção
                    energética, mesmo sob condições menos ideais de iluminação.
                    Inversores de Energia: Equipamentos cruciais que convertem a
                    energia DC (corrente contínua) gerada pelos painéis solares
                    em AC (corrente alternada), compatível com a rede elétrica
                    residencial e o fogão de indução incluído. Há duas variações
                    disponíveis: Convencional On-Grid (Meu Solar): Para
                    integração direta com a rede elétrica, permitindo que o
                    excesso de energia produzida seja injetado na rede, gerando
                    créditos energéticos. Híbrido On-Grid (Meu Solar Liberty):
                    Oferece a flexibilidade de operar tanto conectado à rede
                    quanto de forma independente, ideal para áreas com
                    interrupções frequentes no fornecimento de energia. Este
                    modelo é compatível com um banco de baterias (vendido
                    separadamente), permitindo armazenamento de energia para uso
                    noturno ou durante interrupções da rede. Fogão de Indução de
                    4 Bocas: Um diferencial importante dos kits, que promove uma
                    transição para o uso de energia renovável até na cozinha. A
                    indução é conhecida pela sua eficiência energética,
                    segurança e rapidez no aquecimento, funcionando
                    perfeitamente com a energia solar gerada.
                  </p>
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
                    <p className="text-grey-100 mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard
                    </p>
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
                      href="#"
                      target="_blank"
                      className="font-bold mt-4 border-b-[1px] w-fit"
                    >
                      Dowloads
                    </a>
                    <p className="text-grey-100 mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="3">
              <div className="flex flex-col w-full mt-20">
                <div className="flex  w-full flex-1 relative max-h-[480px]">
                  <Image
                    src={img2}
                    alt="product1"
                    priority
                    quality={100}
                    loading="eager"
                    className="h-full max-h-[480px] w-full rounded-3xl object-cover "
                  />
                  <div className="absolute rounded-3xl gradient-tab z-20 bottom-0" />
                </div>

                <div className="flex w-full flex-col p-6 bg-beige-300 mt-10 rounded-2xl">
                  <p className="font-bold">Itens inclusos</p>
                  <p className="text-grey-100 mt-4">
                    Painéis Solares TIER 1: A espinha dorsal do kit, esses
                    painéis são reconhecidos globalmente pela sua qualidade
                    superior e eficiência na conversão da luz solar em energia
                    elétrica. São projetados para maximizar a produção
                    energética, mesmo sob condições menos ideais de iluminação.
                    Inversores de Energia: Equipamentos cruciais que convertem a
                    energia DC (corrente contínua) gerada pelos painéis solares
                    em AC (corrente alternada), compatível com a rede elétrica
                    residencial e o fogão de indução incluído. Há duas variações
                    disponíveis: Convencional On-Grid (Meu Solar): Para
                    integração direta com a rede elétrica, permitindo que o
                    excesso de energia produzida seja injetado na rede, gerando
                    créditos energéticos. Híbrido On-Grid (Meu Solar Liberty):
                    Oferece a flexibilidade de operar tanto conectado à rede
                    quanto de forma independente, ideal para áreas com
                    interrupções frequentes no fornecimento de energia. Este
                    modelo é compatível com um banco de baterias (vendido
                    separadamente), permitindo armazenamento de energia para uso
                    noturno ou durante interrupções da rede. Fogão de Indução de
                    4 Bocas: Um diferencial importante dos kits, que promove uma
                    transição para o uso de energia renovável até na cozinha. A
                    indução é conhecida pela sua eficiência energética,
                    segurança e rapidez no aquecimento, funcionando
                    perfeitamente com a energia solar gerada.
                  </p>
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
                    <p className="text-grey-100 mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard
                    </p>
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
                      href="#"
                      target="_blank"
                      className="font-bold mt-4 border-b-[1px] w-fit"
                    >
                      Dowloads
                    </a>
                    <p className="text-grey-100 mt-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </GridContainer>
    </section>
  );
};

export default TabComponent;
