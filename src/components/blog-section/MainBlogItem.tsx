import React from "react";


const MainBlogItem: React.FC = () => {
    return (
        <div className="bg-white p-6 flex flex-col w-full h-full gap-4">
            <img
                className="max-h-[433px] max-w-[650px] object-cover rounded-2xl"
                src="https://www.ecopower.com.br/wp-content/uploads/2023/05/transicao-de-carreira-para-franquia-1015x698.jpg"
                alt="blog main post photo"/>
            <span className="text-primary-green text-sm">Energia Solar</span>
            <h3 className="text-2xl font-bold">Energia Solar: a sua indústria referência em economia e
                sustentabilidade</h3>
            <div className="flex text-sm">
                <div className="flex flex-1 items-center gap-2">
                    <img
                        className="w-8 h-8 object-cover rounded-full"
                        src="https://www.ecopower.com.br/wp-content/uploads/2023/05/transicao-de-carreira-para-franquia-1015x698.jpg"
                        alt="post author photo"/>
                    <span>Por Murilo Mazer</span>
                </div>

                <div className="flex">
                    <time>09 de Janeiro de 2023 ·</time>
                    <time> 10min</time>
                </div>
            </div>
        </div>
    );
};

export default MainBlogItem;
