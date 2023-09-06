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
import LinkArrow from "../global/LinkArrow";
import { MdChevronRight } from "react-icons/md";

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
      <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:pl-0 relative w-full h-full lg:h-[690px] lg:bg-grayscale-600 group overflow-hidden">
        <motion.div
          ref={ref}
          style={{ y }}
          className="absolute -top-[15%] w-[100%] h-[800px] hidden lg:block"
        >
          <Image
            src={thumb1}
            alt="thumbnail"
            quality={100}
            className="w-full h-full object-fill"
          />
        </motion.div>
        <div className="flex relative flex-col lg:ml-[64px] lg:w-[615px] p-6 pb-[150px] lg:p-[45px] bg-primary-green z-10 rounded-3xl ">
          <h2 className="text-white text-[44px] font-semibold leading-[52px]">
            Renovável, limpa e infinita. Entenda como a energia solar funciona.
          </h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur. Feugiat mi habitasse
            pellentesque eget ipsum.
          </p>

          <button
            className="text-white font-semibold mt-10 flex items-center gap-2 group/arrow cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <p className="text-white">Assistir Vídeo</p>
            <div className="slide-arrow text-xl">
              <MdChevronRight />
            </div>
          </button>

          <div className="absolute bottom-0 -right-3">
            <SolarPateLarge />
          </div>
          <div className="absolute bottom-0 right-[23%] group-hover:-translate-x-8 transition-all duration-500 ease-in-out">
            <SolarPateSmall />
          </div>
        </div>

        <div className="relative mt-6 w-full lg:hidden">
          <Image
            src={thumb1}
            alt="thumbnail"
            quality={100}
            className="w-full object-cover lg:object-fill rounded-3xl h-[320px] lg:h-[200px]"
          />
          <button
            onClick={() => setModalOpen(true)}
            className="flex absolute left-0 top-0 inset-0 items-center justify-center group-hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
          >
            <PlayCircle />
          </button>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="z-10 m-auto hidden lg:flex group-hover:scale-125 transition-all duration-500 ease-in-out cursor-pointer"
        >
          <PlayCircle />
        </button>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <iframe
          className="w-full h-full rounded-3xl"
          src="https://www.youtube.com/embed/zVNdHxXgU7I"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
};

export default SectionVideo;
