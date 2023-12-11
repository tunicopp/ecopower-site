"use client";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import SectionHero from "@/components/glossario/SectionHero/SectionHero";
import { glossaries } from "@/utils/glossaries";
import { useParams } from "next/navigation";

export default function Word() {
  const params = useParams();
  const { id } = params;

  const glossary = glossaries.find((d) => d.id === id);

  return (
    <main className="relative">
      <Header />
      <SectionHero glossaryItem={glossary?.word} />
      <section className="pt-20 max-w-[1222px] px-4 mx-auto flex flex-col gap-4 w-full">
        <h4 className="text-3xl font-bold">Definição</h4>
        <p className="text-base text-justify">{glossary?.definition}</p>
      </section>
      <section className="py-20 max-w-[1222px] px-4 mx-auto flex flex-col gap-4 w-full">
        <h4 className="text-3xl font-bold">Origem do termo</h4>
        <p className="text-base text-justify">{glossary?.term_origin}</p>
      </section>
      <section className="bg-beige-300 py-20">
        <div className="flex flex-col mx-auto px-4 max-w-[1222px] gap-20">
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-bold">{glossary?.how_to_use_1}</h4>
            <p className="text-base text-justify whitespace-pre-line">
              {glossary?.content_1}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-3xl font-bold">{glossary?.how_to_use_2}</h4>
            <p className="text-base text-justify whitespace-pre-line">
              {glossary?.content_2}
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 max-w-[1222px] px-4 mx-auto flex flex-col gap-4 w-full">
        <h4 className="text-3xl font-bold">Conteúdos sobre o tema</h4>
        <div className="flex flex-col gap-3 justify-start items-start">
          {glossary?.links.map((d, i) => (
            <a key={i} className="text-primary-green font-medium" href={d}>
              Link
            </a>
          ))}
        </div>
      </section>
      <SmoothScroll />
    </main>
  );
}
