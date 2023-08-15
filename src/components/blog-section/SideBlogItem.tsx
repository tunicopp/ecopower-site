import React from "react";
import BlogPost from "@/@types/app/blog-post.app.interface";
import moment from "moment";
import "moment/locale/pt-br";

const SideBlogItem: React.FC<{ blog: BlogPost }> = ({
  blog: { title, photo, category, date, link },
}) => {
  return (
    <a
      href={link}
      className="bg-white flex flex-col lg:flex-row w-full h-full rounded-2xl"
    >
      <div className="overflow-hidden min-w-[200px] lg:max-w-[200px] rounded-2xl">
        <img
          src={photo}
          className="h-full w-full object-cover rounded-2xl hover:scale-125 transition-transform duration-500"
          alt="blog main post photo"
        />
      </div>
      <div className="flex flex-col p-3 gap-4">
        <span className="text-primary-green text-sm">{category}</span>
        <h3 className="text-xl font-bold text-limit flex flex-1">{title}</h3>
        <div className="flex text-xs text-grayscale-400">
          <time>{moment(date).format("DD [de] MMMM [de] YYYY")}</time>
        </div>
      </div>
    </a>
  );
};

export default SideBlogItem;
