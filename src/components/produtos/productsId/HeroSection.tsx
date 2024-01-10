import Image from "next/image";
import Link from "next/link";
import React from "react";
import points from "../../../../public/assets/images/produtos/produtos-id/points.svg";
import banner1 from "../../../../public/assets/images/produtos/produtos-id/banner1.png";
import tag from "../../../../public/assets/images/produtos/produtos-id/tag-product.png";

const HeroSection: React.FC = () => {
  return (
    <div className="flex w-full h-[641px] relative">
      <Image
        src={tag}
        alt="points"
        className="absolute inset-x-0 mx-auto bottom-[13px]  z-20"
      />
      <Image src={points} alt="points" className="absolute left-0 top-0" />
      <div className="flex flex-col justify-center w-1/2 pl-[120px] pr-[80px] ">
        <h2 className="text-grayscale-900 text-[72px] leading-[110%] font-semibold max-w-[467px]">
          Conheça o Kit Meu Solar
        </h2>
        <p className="text-lg max-w-[467px] mt-6 max-h-[150px] overflow-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link
          href={`#`}
          className="mt-[32px] flex items-center justify-center simulate-button w-fit"
        >
          Compre agora
        </Link>
      </div>
      <div className="flex w-1/2 relative ">
        <Image
          src={banner1}
          alt="Hero Banner"
          priority
          quality={100}
          loading="eager"
          fill
          className="absolute "
        />
      </div>
    </div>
  );
};

export default HeroSection;
