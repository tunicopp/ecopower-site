import React from "react";
import BlogPost from "@/@types/app/blog-post.app.interface";
import moment from "moment";

const MainBlogItem: React.FC<{ blog: BlogPost }> = ({blog: {title, photo, author, category, date, link}}) => {
    return (
        <div className="bg-white p-6 flex flex-col w-full h-full gap-4">
            <img
                src={photo}
                className="max-h-[500px] object-cover rounded-2xl"
                alt="blog main post photo"/>
            <span className="text-primary-green text-sm">{category}</span>
            <a href={link} className="text-2xl font-bold">{title}</a>
            <div className="flex text-sm">
                <div className="flex flex-1 items-center gap-2">
                    <img
                        className="w-8 h-8 object-cover rounded-full"
                        src={author.photo}
                        alt="post author photo"/>
                    <span>{author.name}</span>
                </div>

                <div className="flex">
                    <time>{moment(date).format('LL')}</time>
                </div>
            </div>
        </div>
    );
};

export default MainBlogItem;
