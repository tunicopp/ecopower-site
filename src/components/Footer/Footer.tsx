"use client";
import { usePathname } from "next/navigation";
import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import JoinUs from "./JoinUs";

const Footer: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <footer className="flex flex-col w-full">
      {pathname === "/about-us" || pathname === "/careers" ? (
        <JoinUs />
      ) : (
        <TopFooter />
      )}
      <BottomFooter />
    </footer>
  );
};

export default Footer;
