import React from "react";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import MainBlogItem from "@/components/blog-section/MainBlogItem";
import SideBlogItem from "@/components/blog-section/SideBlogItem";


const BlogSection: React.FC = () => {
    return (
        <section className="min-h-screen w-full bg-beige-300 py-28">
            <GridContainer className="flex flex-col h-full">
                <header className="flex w-full justify-between items-center">
                    <div className="flex-col w-full">
                        <TitleComponent>Últimos posts do blog</TitleComponent>
                        <p className="pt-6">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <a href="https://www.ecopower.com.br/blog/" className="text-base font-semibold whitespace-nowrap">Ver
                        todos os posts
                    </a>
                </header>
                <div className="w-full h-full pt-20">
                    <div className="blog-items-grid w-full h-full">
                        <div className="blog-item-main" style={{gridArea: "main", background: "red"}}>
                            <MainBlogItem/>
                        </div>
                        <div className="blog-item-side-1" style={{gridArea: 1}}>
                            <SideBlogItem/>
                        </div>
                        <div className="blog-item-side-2" style={{gridArea: 2}}>
                            <SideBlogItem/>
                        </div>
                        <div className="blog-item-side-3" style={{gridArea: 3}}>
                            <SideBlogItem/>
                        </div>
                    </div>
                </div>
            </GridContainer>
        </section>
    );
};

export default BlogSection;
