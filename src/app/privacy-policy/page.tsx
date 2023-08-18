import Header from "@/components/global/Header";
import SectionHero from "@/components/privacy-policy/SectionHero/SectionHero";
import SectionOne from "@/components/privacy-policy/Sections/SectionOne";
import SectionThree from "@/components/privacy-policy/Sections/SectionThree";
import SectionTwo from "@/components/privacy-policy/Sections/SectionTwo";

export default async function PrivacyPolicy() {
  return (
    <main className="relative">
      <Header />
      <SectionHero />
      <div className="flex flex-col gap-[56px] w-full mx-auto max-w-[844px] px-6 lg:px-[36px] py-[80px]">
        <h2 className="text-[32px] lg:leading-[48px] font-bold leading-none">
          Políticas de Privacidade
        </h2>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </main>
  );
}
