import React from "react";
import ContactsBar from "./ContactsBar";
import Header from "../global/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-primary-green">
      <ContactsBar />
      <Header />
    </div>
  );
};

export default Hero;
