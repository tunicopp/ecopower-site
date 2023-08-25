"use client";
import { usePathname } from "next/navigation";
import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import JoinUs from "./JoinUs";
import BeOurFranchisee from "./BeOurFranchisee";

const Footer: React.FC = () => {
  const pathname = usePathname();

  return (
    <footer className="flex flex-col w-full">
      {pathname === "/units" ? (
        <BeOurFranchisee />
      ) : pathname === "/about-us" || pathname === "/careers" ? (
        <JoinUs />
      ) : (
        <TopFooter />
      )}
      <BottomFooter />
    </footer>
  );
};

export default Footer;
