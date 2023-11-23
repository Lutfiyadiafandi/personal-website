import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type ArrowIconsProps = {
  color: string;
  colorhover?: string;
  darkmode?: string;
  rotate?: boolean;
};
const ArrowIcons = ({
  color,
  colorhover,
  darkmode,
  rotate = true,
}: ArrowIconsProps) => {
  return (
    <div
      className={`transform transition-transform duration-500 ease-in-out ${
        rotate ? "group-hover:rotate-90" : ""
      }`}
    >
      <FiArrowUpRight
        className={`text-2xl text-${color} group-hover:text-${colorhover} ${darkmode}`}
      />
    </div>
  );
};

export default ArrowIcons;
