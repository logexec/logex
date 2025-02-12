import React from "react";
import { motion } from "motion/react";
import MobileNavbar from "./MobileNavbar";

interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="pb-24 lg:pb-0"
    >
      {children}
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </motion.div>
  );
};
