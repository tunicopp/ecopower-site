import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import BenefitsSection from "@/components/produtos/product-eco-mobi/BenefitsSection";
import HeroSection from "@/components/produtos/product-eco-mobi/HeroSection";
import SecondSection from "@/components/produtos/product-eco-mobi/SecondSection";
import TabComponent from "@/components/produtos/product-eco-mobi/TabComponent";

export default async function Mobi() {
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
