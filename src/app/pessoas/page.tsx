import SectionCareers from "@/components/carreiras/SectionCareers/SectionCareers";
import SectionCareersTwo from "@/components/carreiras/SectionCareersTwo/SectionCareersTwo";
import SectionHero from "@/components/carreiras/SectionHero/SectionHero";
import SectionOurTeam from "@/components/carreiras/SectionOurTeam/SectionOurTeam";
import SectionOurValues from "@/components/carreiras/SectionOurValues/SectionOurValues";
import Header from "@/components/global/Header";
import SmoothScroll from "@/components/global/SmoothScroll";

export default async function Careers() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionOurTeam />
      <SectionOurValues />
      <SectionCareers />
      {/* <SectionCareersTwo /> */}
      <SmoothScroll />
    </main>
  );
}
