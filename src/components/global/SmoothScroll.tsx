"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    console.log("dickkkk");

    const lenis = new Lenis({
      duration: 1,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div></div>;
};

export default SmoothScroll;
