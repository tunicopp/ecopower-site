"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import icon from "../../../../public/assets/icons/search-icon.svg";
import useTypeDelay from "@/hooks/useTypeDelay.hook";
import { BsX } from "react-icons/bs";
import { Glossary } from "@/@types/app/glossary.app.interface";
import { glossaries } from "@/utils/glossaries";

const SearchInput: React.FC = () => {
  const [list, setList] = useState<Glossary[]>([]);

  const { data, setData } = useTypeDelay(
    (query) => {
      const newlist = glossaries.filter((dd) =>
        dd.word.toLowerCase().startsWith(query),
      );

      setList(newlist);
    },
    () => {
      setList([]);
    },
  );

  return (
    <div className="absolute right-0 left-0 -bottom-[28px] mx-auto flex items-center rounded-full gap-2 px-6 py-2 bg-beige-300 max-w-[528px] h-[56px]">
      <Image src={icon} alt="Ícone de Pesquisa" />
      <input
        type="text"
        onChange={(d) => setData(d.target.value.toLowerCase())}
        className="text-grayscale-800 placeholder:text-grayscale-800 w-full bg-transparent outline-none "
        placeholder="Pesquise no Glossário"
        value={data}
      />
      {list.length > 0 && (
        <div
          className="text-2xl text-grayscale-800 cursor-pointer hover:rotate-180 transition-all duration-300"
          onClick={() => setData("")}
        >
          <BsX />
        </div>
      )}
      {list.length > 0 && (
        <div className="absolute flex flex-col gap-4 left-0 top-0 w-full bg-beige-300 pt-20 pb-8 px-6 shadow-lg -z-10 rounded-3xl">
          <p className="text-grayscale-400 text-sm">
            {`${list.length} palavra(s) encontrada(s)`}
          </p>
          {list.map((d, i) => (
            <Link href={`/glossario/${d.id}`} key={i}>
              <div
                className="flex bg-white p-4 rounded-xl flex-col gap-2"
                key={i}
              >
                <b className="text-lg">{d.word}</b>
                <p className="text-xs">{d.definition}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
