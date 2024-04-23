import Link from "next/link";
import React from "react";
import { MdCardTravel, MdHelp, MdPhone, MdWhatsapp } from "react-icons/md";

const ContactsBar: React.FC = () => {
  return (
    <div className="bg-white md:h-[40px] py-2.5 relative">
      <div className="flex w-full items-center px-6 md:gap-6 gap-1 md:justify-end justify-between">
        <a
          href="https://hubs.li/Q025rsCJ0"
          className="flex items-center md:text-xl text-grayscale-800"
        >
          <MdCardTravel />
          <span className="md:text-sm text-xs ml-2">Seja um Franqueado</span>
        </a>

        <Link
          href="/#FAQ"
          className="flex items-center md:text-xl text-grayscale-800"
        >
          <MdHelp />
          <span className="md:text-sm text-xs ml-2">Dúvidas Frequentes</span>
        </Link>

        <Link
          href="tel:+5517981281849"
          className="flex items-center md:text-xl text-grayscale-800"
        >
          <MdPhone />
          <span className="md:text-sm text-xs ml-2">(17) 98128-1849</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactsBar;
