import React from "react";
import BlogPost from "@/@types/app/blog-post.app.interface";
import moment from "moment";

const SideBlogItem: React.FC<{ blog: BlogPost }> = ({blog: {title, photo, category, date, link}}) => {
    return (
        <div className="bg-white flex w-full h-full rounded-2xl">
            <img
                src={photo}
                className="flex-1 h-full max-w-[200px] object-cover rounded-2xl"
                alt="blog main post photo"/>
            <div className="flex flex-col p-3 gap-4">
                <span className="text-primary-green text-sm">{category}</span>
                <a href={link} className="text-xl font-bold text-limit">{title}</a>
                <div className="flex text-xs">
                    <time>{moment(date).format('LL')}</time>
                </div>
            </div>
        </div>
    );
};

export default SideBlogItem;
