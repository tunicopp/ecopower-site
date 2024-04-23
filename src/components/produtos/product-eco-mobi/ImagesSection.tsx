import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React from "react";
import img1 from "../../../../public/assets/images/produtos/produtos-id/p1.png";
import img2 from "../../../../public/assets/images/produtos/produtos-id/p2.png";
import img3 from "../../../../public/assets/images/produtos/produtos-id/p3.png";
import img4 from "../../../../public/assets/images/produtos/produtos-id/p4.png";
import img5 from "../../../../public/assets/images/produtos/produtos-id/p5.png";

const ImagesSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center relative  py-[120px]">
      <GridContainer className="flex-col gap-[24px]">
        <div className="flex w-full gap-[24px] flex-col md:flex-row">
          <div className="flex  w-full flex-1 relative ">
            <Image
              src={img1}
              alt="product1"
              priority
              quality={100}
              loading="eager"
              className="w-full rounded-2xl object-cover "
            />
          </div>
          <div className="flex  w-full flex-1 relative ">
            <Image
              src={img2}
              alt="product2"
              priority
              quality={100}
              loading="eager"
              className="w-full rounded-2xl object-cover "
            />
          </div>
        </div>

        <div className="flex w-full md:gap-[24px] gap-2">
          <div className="flex  w-full flex-1 relative ">
            <Image
              src={img3}
              alt="product3"
              priority
              quality={100}
              loading="eager"
              className="w-full rounded-2xl object-cover "
            />
          </div>
          <div className="flex  w-full flex-1 relative ">
            <Image
              src={img4}
              alt="product4"
              priority
              quality={100}
              loading="eager"
              className="w-full rounded-2xl object-cover "
            />
          </div>
          <div className="flex  w-full flex-1 relative ">
            <Image
              src={img5}
              alt="product5"
              priority
              quality={100}
              loading="eager"
              className="w-full rounded-2xl object-cover "
            />
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default ImagesSection;
