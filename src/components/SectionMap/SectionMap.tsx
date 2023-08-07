import React from "react";
import BgMap from "./BgMap";
import { companyIinfoGroup1, companyIinfoGroup2 } from "@/utils/companyInfo";
import CompanyInfo from "./CompanyInfo";
import RigthArrow from "../../../public/assets/icons/RigthArrow";
import { useInView, motion, useAnimation } from "framer-motion";
import Image from "next/image";
import car from "../../../public/assets/images/section-map/car.png";
import threeLg from "../../../public/assets/images/section-map/three-lg.png";
import threeMd from "../../../public/assets/images/section-map/three-md.png";
import sun from "../../../public/assets/images/section-map/sun.png";

const SectionMap: React.FC = () => {
  return (
    <div className="relative flex w-full h-screen min-h-[1040px] bg-beige-300 overflow-hidden items-end">
      <BgMap />
      <div className="relative flex w-[912px] p-10 group bg-white z-10 rounded-3xl mb-[110px] ml-[110px] ">
        <div className="flex w-[60%] flex-col">
          <h2 className="text-[44px] font-semibold leading-[52px]">
            Somos a energia que move o futuro. Somos Eco. Somos Power.
          </h2>
          <p className="text-[20px] mt-[24px]">
            Presente em todo o país, a EcoPower é a empresa de energia solar que
            mais cresce no Brasil.
          </p>
          <div className="grid grid-cols-2  w-[480px]">
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
          <p className="text-primary-green font-semibold mt-10 flex gap-2 group/arrow cursor-pointer">
            Conheça nossa história
            <div className="slide-arrow">
              <RigthArrow />
            </div>
          </p>
        </div>

        <div className="flex w-[40%] ">
          <div className="absolute bottom-0 right-[4%] flex w-[130px] h-[112px] items-end translate-three-md ">
            <Image
              src={threeMd}
              layout="cover"
              alt="threeMd"
              quality={100}
              className="absolute w-full "
              objectPosition="center"
            />
          </div>
          <div className="absolute bottom-0 right-[14%] flex w-[240px] h-[112px] items-end translate-three-lg">
            <Image
              src={threeLg}
              layout="cover"
              alt="threeLg"
              quality={100}
              className="absolute w-full "
              objectPosition="center"
            />
          </div>
          <div className="absolute top-[8%] right-[37%] flex w-[57px] h-[57px] items-end translate-three-sun">
            <Image
              src={sun}
              layout="cover"
              alt="sun"
              quality={100}
              className="absolute w-full "
              objectPosition="center"
            />
          </div>
          <div className="absolute bottom-0 right-[22%] flex w-[250px] h-[112px] items-end translate-three-car">
            <Image
              src={car}
              layout="cover"
              alt="car"
              quality={100}
              className="absolute w-full "
              objectPosition="center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionMap;
