import React from "react";


const SideBlogItem: React.FC = () => {
    return (
        <div className="bg-white flex w-full h-full rounded-2xl">
            <img
                className="flex-1 h-full max-w-[200px] object-cover rounded-2xl"
                src="https://www.ecopower.com.br/wp-content/uploads/2023/05/transicao-de-carreira-para-franquia-1015x698.jpg"
                alt="blog main post photo"/>
            <div className="flex flex-col p-3 gap-4">
                <span className="text-primary-green text-sm">Energia Solar</span>
                <h3 className="text-xl font-bold text-limit">Energia Solar: a sua indústria
                    referência em economia e
                    sustentabilidade</h3>
                <div className="flex text-xs">
                    <time>09 de Janeiro de 2023 ·</time>
                    <time> 10min</time>
                </div>
            </div>
        </div>
    );
};

export default SideBlogItem;
