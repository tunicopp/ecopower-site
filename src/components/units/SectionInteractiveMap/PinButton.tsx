import Image from "next/image";
import React, { ButtonHTMLAttributes } from "react";
import pin from "../../../../public/assets/icons/pin-ecopower_Verde.svg";
import { twMerge } from "tailwind-merge";

const PinButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...rest
}) => {
  return (
    <button className={twMerge("absolute", className)} {...rest}>
      <Image src={pin} alt="Pin EcoPower" />
    </button>
  );
};

export default PinButton;
