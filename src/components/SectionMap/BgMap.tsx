"use client";
import Image from "next/image";
import React from "react";
import map from "../../../public/assets/images/unit-map.png";
import { motion } from "framer-motion";

interface BgMapProps {
  children: React.ReactNode;
}

const BgMap: React.FC = ({}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full hidden lg:flex w-full items-center justify-center overflow-hidden select-none"
      initial={{ scale: 0.9 }}
      whileInView={{ scale: 2.3 }}
      transition={{ duration: 7 }}
      viewport={{ once: true }}
    >
      <Image
        src={map}
        alt="card map"
        quality={100}
        className="absolute w-[50%] mx-auto object-cover"
      />
    </motion.div>
  );
};

export default BgMap;
