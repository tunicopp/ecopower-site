import Header from "@/components/global/Header";
import SectionHero from "@/components/projects/SectionHero/SectionHero";
import SectionProjects from "@/components/projects/SectionProjects/SectionProjects";

export default async function Products() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionProjects />
    </main>
  );
}
