import Image from "next/image";
import Link from "next/link";
import React from "react";
import points from "../../../../public/assets/images/produtos/produtos-id/points.svg";
import circles from "../../../../public/assets/images/produtos/produtos-id/circles.svg";
import img1 from "../../../../public/assets/images/produtos/produtos-id/img1-section2.png";
import img2 from "../../../../public/assets/images/produtos/produtos-id/img2-section2.png";

const SecondSection: React.FC = () => {
  return (
    <div className="flex w-full relative gap-[80px]">
      <Image
        src={points}
        alt="points"
        className="absolute right-0 bottom-0 transform scale-x-[-1]"
      />
      <div className="flex w-[54%] relative ">
        <Image
          src={circles}
          alt="Hero Banner"
          priority
          quality={100}
          loading="eager"
          fill
          className="absolute -z-10"
        />
        <div className="flex w-full pt-12  pr-4 ">
          <div className="relative">
            <Image
              src={img1}
              alt="img1"
              priority
              quality={100}
              loading="eager"
              className="w-[581px] rounded-tr-2xl rounded-br-2xl"
            />
            <Image
              src={img2}
              alt="img2"
              priority
              quality={100}
              loading="eager"
              className="w-[402px] rounded-2xl absolute -right-24 bottom-[64px] shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-[46%] pl-[0px] pr-[80px] h-[714px]">
        <h2 className="text-grayscale-900 text-[48px] leading-[110%] font-medium max-w-[540px]">
          Lorem Ipsum is Simply Dummy
        </h2>
        <p className="text-lg max-w-[540px] mt-6 max-h-[150px] overflow-auto">
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
    </div>
  );
};

export default SecondSection;
