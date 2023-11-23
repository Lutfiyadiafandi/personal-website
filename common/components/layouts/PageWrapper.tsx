"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageWrapperProps = {
  children: React.ReactNode;
  className?: string;
};
const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className={`max-w-screen-2xl mx-auto px-2 py-2 ${className}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageWrapper;
