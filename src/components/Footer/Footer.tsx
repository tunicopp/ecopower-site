import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full">
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
