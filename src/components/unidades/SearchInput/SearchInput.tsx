"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon from "../../../../public/assets/icons/search-icon.svg";
import useTypeDelay from "@/hooks/useTypeDelay.hook";
import { units } from "@/utils/units";
import { Unit } from "@/@types/app/unit.app.interface";

const SearchInput: React.FC = () => {
  const [list, setList] = useState<Unit[]>([]);

  const { data, setData } = useTypeDelay(
    (query) => {
      const newlist = units.filter((dd) =>
        dd.municipio.toLowerCase().startsWith(query),
      );

      setList(newlist);
    },
    () => {
      setList([]);
    },
  );

  const onClick = (uf: string) => {
    setData("");
    const el = document.getElementById(uf.toLowerCase());
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 102;
      window.scrollTo({ top: y });
    }
  };

  return (
    <div className="absolute right-0 left-0 -bottom-[28px] mx-auto flex items-center rounded-full gap-2 px-6 py-2 bg-beige-300 max-w-[528px] h-[56px]">
      <Image src={icon} alt="Ícone de Pesquisa" />
      <input
        type="text"
        onChange={(d) => setData(d.target.value.toLowerCase())}
        className="text-grayscale-800 placeholder:text-grayscale-800 w-full bg-transparent outline-none"
        placeholder="Busque a franquia mais próxima"
        value={data}
      />
      {list.length > 0 && (
        <div className="absolute left-0 top-[56px] w-full bg-white py-3 shadow-lg">
          {list.map((d) => (
            <div
              className="flex items-center py-3 w-full hover:bg-grayscale-100 cursor-pointer px-3"
              key={d.municipio}
              onClick={() => onClick(`ac_${d.uf}`)}
            >
              {d.municipio} - {d.address} - {d.uf}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
