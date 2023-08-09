import React from "react";
import Reveal from "../global/Reveal";
import TitleComponent from "../global/TitleComponent";
import Image from "next/image";
import three from "../../../public/assets/images/section-map/three-lg.png";
import house from "../../../public/assets/images/section-map/house.png";
import cloud from "../../../public/assets/images/section-map/cloud.png";
import sun from "../../../public/assets/images/section-map/sun2.png";

const TopFooter: React.FC = () => {
  return (
    <div className="relative flex justify-center  w-full bg-beige-300 h-[544px] overflow-hidden group">
      <div className="absolute -bottom-[55%] -right-[9%] flex w-[200px]  items-end  group-hover:-translate-x-10  transition-all duration-1000 ease-in-out; ">
        <Image
          src={three}
          layout="cover"
          alt="threeMd"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>

      <div className="absolute -bottom-[30%] -left-[11%] flex w-[220px]  items-end  group-hover:translate-x-10  transition-all duration-1000 ease-in-out; ">
        <Image
          src={three}
          layout="cover"
          alt="threeMd"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>
      <div className="absolute -bottom-[80%] left-[8%] flex w-[170px]  items-end  group-hover:-translate-y-20 transition-all duration-1000 ease-in-out; ">
        <Image
          src={three}
          layout="cover"
          alt="threeMd"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>
      <div className="absolute -bottom-[74%] left-[30%] flex w-[170px]  items-end  group-hover:-translate-y-20 transition-all duration-1000 ease-in-out; ">
        <Image
          src={three}
          layout="cover"
          alt="threeMd"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>
      <div className="absolute -bottom-[65%] left-[50%] flex w-[480px]  items-end  group-hover:-translate-y-20 transition-all duration-1000 ease-in-out; ">
        <Image
          src={house}
          layout="cover"
          alt="house"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>
      <div className="absolute top-[20%] left-[5%] flex w-[127px]  items-end  group-hover:translate-x-20 transition-all duration-1000 ease-in-out; ">
        <Image
          src={cloud}
          layout="cover"
          alt="cloud"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>
      <div className="absolute top-[30%] right-[5%] flex w-[98px]  items-end  group-hover:scale-150 transition-all duration-1000 ease-in-out; ">
        <Image
          src={sun}
          layout="cover"
          alt="sun"
          quality={100}
          className="absolute w-full "
          objectPosition="center"
        />
      </div>
      <div className="flex flex-col  items-center w-fit mt-[80px]">
        <Reveal className="max-w-[758px]">
          <TitleComponent className=" text-center">
            Reduza sua conta de luz com energia solar
          </TitleComponent>
        </Reveal>
        <Reveal className="max-w-[758px] mt-8 ">
          <p className="text-center">
            Preencha o formulário abaixo e receba um orçamento da unidade mais
            próxima:
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export default TopFooter;
