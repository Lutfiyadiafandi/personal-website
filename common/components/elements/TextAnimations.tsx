import {
  staggerChildren,
  wordAnimation,
} from "@/common/utils/framer/Animations";
import { motion } from "framer-motion";
import React from "react";

const TextAnimations = ({ title }: { title: string }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default TextAnimations;
