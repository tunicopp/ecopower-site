"use client";
import GridContainer from "@/components/global/GridContainer";
import Image from "next/image";
import React, { useState } from "react";
import hero from "../../../../public/assets/images/about-us/hero/about-us-hero.png";
import TitleComponent from "@/components/global/TitleComponent";
import WatchVideoButton from "./WatchVideoButton";
import Modal from "@/components/global/Modal";

const SectionHero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-[635px]">
      <Image
        src={hero}
        alt="Hero Banner"
        priority
        quality={100}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <GridContainer className="relative flex-col h-full items-center justify-center pt-[188px]">
        <span className="text-white text-base font-semibold px-3 bg-primary-green rounded-full">
          Somos EcoPower
        </span>
        <TitleComponent className="text-center text-white mt-6 mb-[118px] max-w-[900px]">
          Há 10 anos gerando economia e avanço sustentável em todo o Brasil
        </TitleComponent>
        <WatchVideoButton onClick={() => setModalOpen(true)} />
      </GridContainer>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <iframe
          className="w-full h-full rounded-3xl"
          src="https://www.youtube.com/embed/3ZfzU6o7mP0?si=0PC1KzIVwdLQIL6i"
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </Modal>
    </section>
  );
};

export default SectionHero;
