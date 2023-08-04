import React from "react";
import GridContainer from "./GridContainer";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo-eco-power.svg";

const Header: React.FC = () => {
  return (
    <GridContainer extraClasses="h-[80px] py-4">
      <div className="relative">
        <Image
          src={logo}
          alt="Eco Power Logo"
          width={209}
          height={56}
          quality={100}
        />
      </div>
    </GridContainer>
  );
};

export default Header;
