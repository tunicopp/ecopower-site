import React, { useEffect } from "react";
import BlogPost from "@/@types/app/blog-post.app.interface";
import moment from "moment";
import "moment/locale/pt-br";

const MainBlogItem: React.FC<{ blog: BlogPost }> = ({
  blog: { title, photo, author, category, date, link },
}) => {
  return (
    <a
      href={link}
      className="bg-white rounded-2xl flex flex-col w-full h-full gap-4"
    >
      <div className="overflow-hidden  rounded-2xl">
        <img
          src={photo}
          className="max-h-[500px] object-cover rounded-2xl hover:scale-125 transition-transform duration-500"
          alt="blog main post photo"
          loading="lazy"
        />
      </div>
      <div className=" flex flex-col w-full p-6 gap-4">
        <span className="text-primary-green text-sm">{category}</span>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="flex text-sm">
          <div className="flex flex-1 items-center gap-2">
            <img
              className="w-8 h-8 object-cover rounded-full"
              src={author.photo}
              alt="post author photo"
              loading="lazy"
            />
            <span className="font-semibold">{author.name}</span>
          </div>

          <div className="flex text-grayscale-400">
            <time>{moment(date).format("DD [de] MMMM [de] YYYY")}</time>
          </div>
        </div>
      </div>
    </a>
  );
};

export default MainBlogItem;
