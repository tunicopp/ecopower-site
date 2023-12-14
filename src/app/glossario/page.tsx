"use client";
import React, { useState } from "react";
import Header from "@/components/global/Header";
import SectionHero from "@/components/glossario/SectionHero/SectionHero";
import GlossaryLetterItem from "@/components/glossario/GlossaryLetterItem";
import { getUniqueWords, glossaries } from "@/utils/glossaries";
import Link from "next/link";

export default function Glossary() {
  const [list, setList] = useState<string[]>(getUniqueWords());

  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <div className="w-full max-w-[1222px] flex mx-auto justify-center flex-wrap gap-6 pt-20">
        {getUniqueWords().map((letter, index) => (
          <span
            onClick={() => setList([letter])}
            className="uppercase text-hover-map text-2xl cursor-pointer"
            key={index}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="w-full flex-col max-w-[1222px] flex mx-auto pt-10 pb-5 md:pb-24">
        <hr className="text-grayscale-400 opacity-20" />
        <div className="flex mt-10 flex-wrap w-full justify-center gap-3">
          {glossaries.slice(0, 11).map((data, index) => (
            <Link
              href={`glossario/${data.id}`}
              className="text-grayscale-400 bg-beige-300 px-6 py-2 rounded-3xl"
              key={index}
            >
              {data.word}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full flex-col max-w-[1222px] flex mx-auto gap-8 py-10">
        {list.map((d, i) => (
          <GlossaryLetterItem letter={d} key={i} />
        ))}
      </div>
    </main>
  );
}
