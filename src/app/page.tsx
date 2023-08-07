import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "../components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <SectionSlide />
      <SectionMap />
    </main>
  );
}
