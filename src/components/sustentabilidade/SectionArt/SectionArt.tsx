import Image from "next/image";
import React from "react";
import art from "../../../../public/assets/images/sustentabilidade/eco-power-art.png";

const SectionArt: React.FC = () => {
  return (
    <section>
      <Image src={art} alt="EcoPower" className="w-full object-cover" />
    </section>
  );
};

export default SectionArt;
