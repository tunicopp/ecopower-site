import Header from "@/components/global/Header";
import HeroSection from "@/components/produtos/productsId/HeroSection";
import SecondSection from "@/components/produtos/productsId/SecondSection";
import BenefitsSection from "@/components/produtos/productsId/BenefitsSection";
import React from "react";
import SmoothScroll from "@/components/global/SmoothScroll";
import Requirements from "@/components/produtos/productsId/Requirements";
import CaseSection from "@/components/produtos/productsId/CaseSection";
import SliderProducts from "@/components/produtos/productsId/SliderProducts";

const Product: React.FC = () => {
  return (
    <main className="relative">
      <Header isNotTransparent />
      <div className="mt-[129px] ">
        <HeroSection />
        <SecondSection />
        <BenefitsSection />
        <Requirements />
        <CaseSection />
        <SliderProducts />
      </div>
      <SmoothScroll />
    </main>
  );
};

export default Product;
