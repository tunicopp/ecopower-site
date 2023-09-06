import Image from "next/image";
import React from "react";
import icon from "../../../../public/assets/icons/search-icon.svg";

const SearchInput: React.FC = () => {
  return (
    <div className="absolute right-0 left-0 -bottom-[28px] mx-auto flex items-center rounded-full gap-2 px-6 py-2 bg-beige-300 max-w-[528px] h-[56px]">
      <Image src={icon} alt="Ícone de Pesquisa" />
      <input
        type="text"
        className="text-grayscale-800 placeholder:text-grayscale-800 w-full bg-transparent outline-none"
        placeholder="Busque a franquia mais próxima"
      />
    </div>
  );
};

export default SearchInput;
