import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import BenefitsSection from "@/components/produtos/productsId/BenefitsSection";
import HeroSection from "@/components/produtos/productsId/HeroSection";
import ImagesSection from "@/components/produtos/productsId/ImagesSection";
import Requirements from "@/components/produtos/productsId/Requirements";
import SecondSection from "@/components/produtos/productsId/SecondSection";
import TabComponent from "@/components/produtos/productsId/TabComponent";

export default async function MeuSolar() {
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
}
