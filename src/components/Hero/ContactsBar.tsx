import Link from "next/link";
import React from "react";
import { MdCardTravel, MdHelp, MdPhone } from "react-icons/md";
import { BsLinkedin, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import GridContainer from "../global/GridContainer";

const ContactsBar: React.FC = () => {
  return (
    <div className="bg-white h-[40px] py-2.5 relative hidden md:block">
      <GridContainer className="items-center justify-end">
        <Link href="/" className="flex items-center text-xl text-grayscale-800">
          <MdCardTravel />
          <span className="text-sm ml-2">Seja um Franqueado</span>
        </Link>
        <Link
          href="/"
          className="flex items-center text-xl mx-[41px] text-grayscale-800"
        >
          <MdHelp />
          <span className="text-sm ml-2">Dúvidas Frequentes</span>
        </Link>
        <Link href="/" className="flex items-center text-xl text-grayscale-800">
          <MdPhone />
          <span className="text-sm ml-2">4000-1722</span>
        </Link>
        <div className="flex items-center text-grayscale-900 ml-[41px] mr-[28px]">
          <a href="/" className="mr-6">
            <BsLinkedin />
          </a>
          <a href="/" className="mr-6">
            <BsInstagram />
          </a>
          <a href="/" className="mr-6">
            <BsYoutube />
          </a>
          <a href="/">
            <FaTiktok />
          </a>
        </div>
      </GridContainer>
    </div>
  );
};

export default ContactsBar;
