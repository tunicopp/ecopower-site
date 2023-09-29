"use client";
import Image from "next/image";
import React, { useState } from "react";
import icon from "../../../../public/assets/icons/search-icon.svg";
import useTypeDelay from "@/hooks/useTypeDelay.hook";
import { units } from "@/utils/units";
import { Unit } from "@/@types/app/unit.app.interface";
import {
  BsFacebook,
  BsInstagram,
  BsPlus,
  BsWhatsapp,
  BsX,
} from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

const SearchInput: React.FC = () => {
  const [list, setList] = useState<Unit[]>([]);

  const { data, setData } = useTypeDelay(
    (query) => {
      const newlist = units.filter((dd) =>
        dd.municipio.toLowerCase().startsWith(query)
      );

      setList(newlist);
    },
    () => {
      setList([]);
    }
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
        className="text-grayscale-800 placeholder:text-grayscale-800 w-full bg-transparent outline-none "
        placeholder="Busque a franquia mais próxima"
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
          <div className="flex justify-between">
            <p className="text-grayscale-400 text-sm">
              {`${list.length} franquias encontradas`}
            </p>
            <p
              className="text-sm border-b-[1px] cursor-pointer"
              onClick={() => onClick(`ac_sc`)}
            >
              Ver todas unidades
            </p>
          </div>
          {list.map((d, i) => (
            <div className="flex bg-white p-4 rounded-xl" key={i}>
              <div className="flex-1">
                <b className="text-lg">{d.municipio}</b>
                <div className="flex items-center gap-2 mt-4">
                  <LuMapPin />
                  <span className="text-sm">{d.address}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <BsWhatsapp />
                  <a className="text-sm underline" href={`tel:${d.phone}`}>
                    {d.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={d.facebook}
                  target="_blank"
                  className="flex-center bg-beige-300 w-10 h-10 rounded-full"
                >
                  <BsFacebook />
                </a>
                <a
                  href={d.instagram}
                  target="_blank"
                  className="flex-center bg-beige-300 w-10 h-10 rounded-full"
                >
                  <BsInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
