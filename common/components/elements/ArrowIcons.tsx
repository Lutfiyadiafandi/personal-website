import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ArrowIconsProps = {
  color: string;
  colorhover: string;
};
const ArrowIcons = ({ color, colorhover }: ArrowIconsProps) => {
  return (
    <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
      <FiArrowUpRight
        className={`text-2xl text-${color} group-hover:text-${colorhover}`}
      />
    </div>
  );
};

export default ArrowIcons;
