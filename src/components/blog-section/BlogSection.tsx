import React from "react";
import GridContainer from "@/components/global/GridContainer";
import TitleComponent from "@/components/global/TitleComponent";
import MainBlogItem from "@/components/blog-section/MainBlogItem";
import SideBlogItem from "@/components/blog-section/SideBlogItem";
import ApiBlogPost from "@/@types/api/blog-post.api.interface";
import BlogPost from "@/@types/app/blog-post.app.interface";
import { MdChevronRight } from "react-icons/md";
import LinkArrow from "../global/LinkArrow";

async function getData(): Promise<BlogPost[]> {
  const response = await fetch(
    "https://ecopower.com.br/blog/wp-json/wp/v2/posts?per_page=4&_embed",
    {
      next: { revalidate: 14400 }, // 4h
      method: "GET",
    }
  );
  const data = await response.json();

  const posts: BlogPost[] = [];
  for (const d of data as ApiBlogPost[]) {
    const post: BlogPost = {
      title: d.title.rendered,
      date: d.date,
      link: d.link,
      photo:
        d._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url,
      category: d._embedded["wp:term"][0][0].name,
      author: {
        name: d._embedded.author[0].name,
        photo: d._embedded.author[0].avatar_urls["48"],
      },
    };

    posts.push(post);
  }

  return posts;
}

const BlogSection: React.FC = async () => {
  const data = await getData();

  return (
    <section className="w-full bg-beige-300 pt-28 pb-16">
      <GridContainer className="flex flex-col h-full">
        <header className="flex flex-col lg:flex-row w-full justify-between lg:items-center">
          <div className="flex-col w-full">
            <TitleComponent className="leading-none">
              Últimos posts do blog
            </TitleComponent>
            <p className="pt-6">
              Tudo para se manter informado você encontra aqui.
            </p>
          </div>

          <LinkArrow
            to="/blog/"
            className="whitespace-nowrap"
            text="Ver todos os posts"
          />
        </header>
        <div className="w-full h-full pt-20">
          <div className="blog-items-grid w-full h-full">
            {data.map((d, i) => {
              if (i === 0) {
                return (
                  <div
                    key={i}
                    className="blog-item-main"
                    style={{ gridArea: "main" }}
                  >
                    <MainBlogItem blog={d} />
                  </div>
                );
              } else {
                return (
                  <div
                    key={i}
                    className={`blog-item-side-${i}`}
                    style={{ gridArea: i }}
                  >
                    <SideBlogItem blog={d} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </GridContainer>
    </section>
  );
};

export default BlogSection;
