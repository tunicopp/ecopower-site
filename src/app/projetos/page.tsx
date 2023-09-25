import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";
import SectionHero from "@/components/projetos/SectionHero/SectionHero";
import SectionProjects from "@/components/projetos/SectionProjects/SectionProjects";

export default async function Products() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionProjects />
      <SmoothScroll />
    </main>
  );
}
