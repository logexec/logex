import { motion } from "motion/react";
import React from "react";
import { colors } from "../../utils/colors";

interface CardProps {
  title: string;
  description: string;
  icon?: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 min-h-48 items-center select-none"
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
      <p style={{ color: colors.gray }}>{description}</p>
    </motion.div>
  );
};

export default Card;
