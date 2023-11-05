import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ArrowIconsProps = {
  color: string;
  colorhover: string;
  darkmode?: string;
};
const ArrowIcons = ({ color, colorhover, darkmode }: ArrowIconsProps) => {
  return (
    <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
      <FiArrowUpRight
        className={`text-2xl text-${color} group-hover:text-${colorhover} ${darkmode}`}
      />
    </div>
  );
};

export default ArrowIcons;
