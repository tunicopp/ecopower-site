import React from "react";
import { MdPlayCircle } from "react-icons/md";

const WatchVideoButton: React.FC = () => {
  return (
    <button className="flex items-center px-3 py-2 rounded-full border border-white">
      <div className="text-primary-green text-2xl mr-[14px]">
        <MdPlayCircle />
      </div>
      <span className="text-base text-white">Assistir vídeo</span>
    </button>
  );
};

export default WatchVideoButton;
