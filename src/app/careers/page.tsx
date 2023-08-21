import SectionCareers from "@/components/careers/SectionCareers/SectionCareers";
import SectionCareersTwo from "@/components/careers/SectionCareersTwo/SectionCareersTwo";
import SectionHero from "@/components/careers/SectionHero/SectionHero";
import SectionOurTeam from "@/components/careers/SectionOurTeam/SectionOurTeam";
import SectionOurValues from "@/components/careers/SectionOurValues/SectionOurValues";
import Header from "@/components/global/Header";

export default async function Careers() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <SectionOurTeam />
      <SectionOurValues />
      <SectionCareers />
      <SectionCareersTwo />
    </main>
  );
}
