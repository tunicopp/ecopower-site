import SectionMap from "@/components/SectionMap/SectionMap";
import Hero from "../components/Hero/Hero";
import SectionSlide from "@/components/SectionSlide/SectionSlide";
import BlogSection from "@/components/blog-section/BlogSection";

export default async function Home() {
    return (
        <main className="">
            <Hero/>
            <SectionSlide/>
            <SectionMap/>
            <BlogSection/>
        </main>
    );
}
