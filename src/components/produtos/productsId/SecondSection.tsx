import Image from "next/image";
import Link from "next/link";
import React from "react";
import points from "../../../../public/assets/images/produtos/produtos-id/points.svg";
import circles from "../../../../public/assets/images/produtos/produtos-id/circles.svg";
import img1 from "../../../../public/assets/images/produtos/produtos-id/img1-section2.png";
import img2 from "../../../../public/assets/images/produtos/produtos-id/img2-section2.png";

const SecondSection: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full relative lg:gap-[80px] gap-10 lg:mt-0 mt-5">
      <Image
        src={points}
        alt="points"
        className="absolute right-0 bottom-0 transform scale-x-[-1] hidden lg:flex"
      />
      <div className="flex lg:w-[54%] w-full relative ">
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
              className="lg:w-[402px] md:w-[360px] w-[200px] rounded-2xl absolute md:-right-24 right-0  md:bottom-[64px] -bottom-10 shadow-xl "
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:w-[46%] w-full lg:pl-[0px] pl-5 lg:pr-[80px] pr-5 lg:h-[714px] h-auto">
        <h2 className="text-grayscale-900 lg:text-[48px] text-[40px] leading-[110%] font-semibold max-w-[540px] text-center lg:text-left">
          Lorem Ipsum is Simply Dummy
        </h2>
        <p className="text-lg max-w-[540px] mt-6 lg:max-h-[150px] max-h-[200px] text-center lg:text-left overflow-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link
          href={`#`}
          className="mt-[32px] flex items-center justify-center simulate-button w-fit self-center lg:self-start"
        >
          Compre agora
        </Link>
      </div>
    </section>
  );
};

export default SecondSection;
