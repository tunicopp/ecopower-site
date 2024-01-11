import Image from "next/image";
import Link from "next/link";
import React from "react";
import points from "../../../../public/assets/images/produtos/produtos-id/points.svg";
import banner1 from "../../../../public/assets/images/produtos/produtos-id/banner1.png";
import tag from "../../../../public/assets/images/produtos/produtos-id/tag-product.png";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row w-full lg:h-[641px] h-auto mt-0 relative">
      <Image
        src={tag}
        alt="points"
        className="absolute inset-x-0 mx-auto lg:bottom-[13px] top-16 md:top-[30%] lg:top-auto md:w-[262px] w-[190px] z-20"
      />
      <Image src={points} alt="points" className="absolute left-0 top-0 " />
      <div className="flex flex-col justify-center items-center lg:w-1/2 w-full lg:pl-[120px] pl-5 lg:pr-[80px] pr-5 ">
        <h2 className="text-grayscale-900 text-center lg:text-left lg:text-[72px] text-[40px] leading-[110%] font-semibold max-w-[467px] mt-5 lg:mt-0">
          Conheça o Kit Meu Solar
        </h2>
        <p className="text-lg max-w-[467px] mt-6 lg:max-h-[150px] max-h-[200px]  overflow-auto text-center lg:text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link
          href={`#`}
          className="mt-[32px] self-center lg:self-baseline flex items-center justify-center simulate-button w-fit lg:ml-6 ml-0"
        >
          Compre agora
        </Link>
      </div>
      <div className="flex lg:w-1/2 w-full relative ">
        <Image
          src={banner1}
          alt="Hero Banner"
          priority
          quality={100}
          loading="eager"
          className=" w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
