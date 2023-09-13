import React from "react";
import BgMap from "./BgMap";
import { companyIinfoGroup1, companyIinfoGroup2 } from "@/utils/companyInfo";
import CompanyInfo from "./CompanyInfo";
import RigthArrow from "../../../public/assets/icons/RigthArrow";
import Image from "next/image";
import car from "../../../public/assets/images/section-map/car.png";
import threeLg from "../../../public/assets/images/section-map/three-lg.png";
import threeMd from "../../../public/assets/images/section-map/three-md.png";
import sun from "../../../public/assets/images/section-map/sun.png";
import LinkArrow from "../global/LinkArrow";
import mobileThree from "../../../public/assets/images/section-map/mobile-three.png";
import BgMapMobile from "./BgMapMobile";

const SectionMap: React.FC = () => {
  return (
    <section className="relative flex w-full lg:h-screen lg:min-h-[1040px] bg-beige-300 overflow-hidden lg:items-end">
      <BgMap />
      <BgMapMobile />

      <div className="relative flex mt-[180px] lg:mt-0 flex-col max-w-full lg:flex-row lg:max-w-[912px] p-6 pt-14 lg:p-10 group bg-white z-10 rounded-3xl lg:ml-[110px] lg:mb-[110px]">
        <div className="flex lg:w-[60%] flex-col md:pb-0 pb-[100px]">
          <h2 className="text-4xl lg:text-[44px] font-semibold leading-none lg:leading-[52px]">
            Somos a energia que move o futuro.{" "}
            <span className="lg:inline block">Somos Eco.</span>{" "}
            <span className="lg:inline block">Somos Power.</span>
          </h2>
          <p className="text-[20px] mt-[24px]">
            Presente em todo o país, a EcoPower é a empresa de energia solar que
            mais cresce no Brasil.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2  w-[480px]">
            <div className="w-full">
              {companyIinfoGroup1.map((i) => (
                <CompanyInfo number={i.number} text={i.text} key={i.id} />
              ))}
            </div>
            <div className="w-full">
              {companyIinfoGroup2.map((i) => (
                <CompanyInfo number={i.number} text={i.text} key={i.id} />
              ))}
            </div>
          </div>

          <LinkArrow
            className="text-primary-green"
            text="Conheça nossa historia"
            to="/sobre-nos"
          />
        </div>

        <div className="w-[40%] hidden lg:flex">
          <div className="absolute bottom-0 right-[4%] flex w-[130px] h-[112px] items-end translate-three-md ">
            <Image
              src={threeMd}
              alt="threeMd"
              quality={100}
              className="absolute w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-[14%] flex w-[240px] h-[112px] items-end translate-three-lg">
            <Image
              src={threeLg}
              alt="threeLg"
              quality={100}
              className="absolute w-full object-cover"
            />
          </div>
          <div className="absolute top-[8%] right-[37%] flex w-[57px] h-[57px] items-end translate-three-sun">
            <Image
              src={sun}
              alt="sun"
              quality={100}
              className="absolute w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-[22%] flex w-[250px] h-[112px] items-end translate-three-car">
            <Image
              src={car}
              alt="car"
              quality={100}
              className="absolute w-full object-cover"
            />
          </div>
        </div>

        <div className="absolute bottom-0 right-6 lg:hidden">
          <Image
            src={mobileThree}
            alt="Mobile Ecopower"
            quality={100}
            width={141}
            height={251}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionMap;
