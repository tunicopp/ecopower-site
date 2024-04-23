import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import BenefitsSection from "@/components/produtos/productsId/BenefitsSection";
import HeroSection from "@/components/produtos/productsId/HeroSection";
import ImagesSection from "@/components/produtos/productsId/ImagesSection";
import Requirements from "@/components/produtos/productsId/Requirements";
import SecondSection from "@/components/produtos/productsId/SecondSection";
import TabComponent from "@/components/produtos/productsId/TabComponent";
import React from "react";

const Product: React.FC = () => {
  return (
    <main className="relative">
      <Header isNotTransparent />
      <div className="mt-[129px] ">
        <HeroSection />
        <SecondSection />
        <Requirements />
        <BenefitsSection />
        <ImagesSection />
        <TabComponent />
        {/* <SliderProducts /> */}
      </div>
      <SmoothScroll />
    </main>
  );
};

export default Product;
