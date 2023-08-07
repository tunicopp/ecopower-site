import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };
  const modalVariants2 = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-grayscale-900 bg-opacity-50"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
          onClick={onClose}
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants2}
            className="bg-white relative p-6 rounded-lg shadow-lg w-[900px] aspect-video"
          >
            {children}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-[40px]  rounded-md absolute -top-6 -right-4 z-50 opacity-90"
              onClick={onClose}
            >
              <AiFillCloseCircle />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
