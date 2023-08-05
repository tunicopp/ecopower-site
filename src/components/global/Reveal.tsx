"use client";

import React, {
  Children,
  useEffect,
  useRef,
  HTMLProps,
  ReactNode,
} from "react";
import { useInView, motion, useAnimation } from "framer-motion";
import { inView } from "framer-motion/dom";
import { twMerge } from "tailwind-merge";

interface RevealProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0.25,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      {...rest}
      className={twMerge("relative w-fit overflow-hidden", className)}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
