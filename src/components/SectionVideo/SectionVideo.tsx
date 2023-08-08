"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import thumb1 from "../../../public/assets/images/section-video/thumb1.png";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  useAnimation,
  MotionValue,
} from "framer-motion";
import RigthArrow from "../../../public/assets/icons/RigthArrow";
import RigthArrowWhite from "../../../public/assets/icons/RigthArrowWhite";
import TestIcon from "../../../public/assets/icons/SolarPateSmall";
import SolarPateSmall from "../../../public/assets/icons/SolarPateSmall";
import SolarPateLarge from "../../../public/assets/icons/SolarPateLarge";
import PlayCircle from "../../../public/assets/icons/PlayCircle";
import Modal from "../global/Modal";

const SectionVideo: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [0.5, "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalOpen]);
  return (
    <>
      <div className="flex items-center justify-between relative w-full h-[690px] bg-grayscale-600 group overflow-hidden">
        <motion.div
          ref={ref}
          style={{ y }}
          className="absolute -top-[15%] w-[130%] h-[800px] "
        >
          <Image
            src={thumb1}
            layout="fill"
            alt="thumbnail"
            quality={100}
            className="w-full "
            objectPosition="center"
          />
        </motion.div>
        <div className="flex relative flex-col ml-[64px] w-[615px] p-[45px] bg-primary-green z-10 rounded-3xl ">
          <h2 className="text-white text-[44px] font-semibold leading-[52px]">
            Renovável, limpa e infinita. Entenda como a energia solar funciona.
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur. Feugiat mi habitasse
            pellentesque eget ipsum.
          </p>
          <p
            onClick={() => setModalOpen(true)}
            className="text-white font-semibold mt-10 flex gap-2 group/arrow cursor-pointer"
          >
            Assistir Video
            <div className="slide-arrow">
              <RigthArrowWhite />
            </div>
          </p>
          <div className="absolute bottom-0 -right-3">
            <SolarPateLarge />
          </div>
          <div className="absolute bottom-0 right-[23%] group-hover:-translate-x-8 transition-all duration-500 ease-in-out">
            <SolarPateSmall />
          </div>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="flex z-10 m-auto group-hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
        >
          <PlayCircle />
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <iframe
          className="w-full h-full rounded-3xl"
          src="https://www.youtube.com/embed/TpQmlARdLa0"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};

export default SectionVideo;
