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
    <section className="relative flex w-full md:h-screen min-h-[1460px] md:min-h-[1040px] bg-beige-300 overflow-hidden items-end">
      <BgMap />
      <BgMapMobile />

      <div className="relative flex mt-[180px] md:mt-0 flex-col max-w-full md:flex-row md:max-w-[912px] p-6 pt-14 md:p-10 group bg-white z-10 rounded-3xl md:ml-[110px] md:mb-[110px]">
        <div className="flex md:w-[60%] flex-col">
          <h2 className="text-4xl md:text-[44px] font-semibold leading-none md:leading-[52px]">
            Somos a energia que move o futuro. Somos Eco. Somos Power.
          </h2>
          <p className="text-[20px] mt-[24px]">
            Presente em todo o país, a EcoPower é a empresa de energia solar que
            mais cresce no Brasil.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2  w-[480px]">
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
          />
        </div>

        <div className="w-[40%] hidden md:flex">
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

        <div className="flex justify-center md:hidden mt-12">
          <Image
            src={mobileThree}
            alt="Mobile Ecopower"
            quality={100}
            width={191}
            height={375}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionMap;
