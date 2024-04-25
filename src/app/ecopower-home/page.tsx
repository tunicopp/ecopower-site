import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import BenefitsSection from "@/components/produtos/product-eco-home/BenefitsSection";
import HeroSection from "@/components/produtos/product-eco-home/HeroSection";
import SecondSection from "@/components/produtos/product-eco-home/SecondSection";
import TabComponent from "@/components/produtos/product-eco-home/TabComponent";

export default async function ecopowerHome() {
  return (
    <main className="relative">
      <Header isNotTransparent />
      <div className="mt-[129px] ">
        <HeroSection />
        <SecondSection />
        {/* <Requirements /> */}
        <BenefitsSection />
        {/* <ImagesSection /> */}
        <TabComponent />
        {/* <SliderProducts /> */}
      </div>
      <SmoothScroll />
    </main>
  );
}
