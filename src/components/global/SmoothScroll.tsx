"use client";
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      wheelEventsTarget: document.querySelector("main") as any
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
