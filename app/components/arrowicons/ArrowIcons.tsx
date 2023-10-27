import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ArrowIcons = () => {
  return (
    <div className="transform transition-transform duration-500 ease-in-out group-hover:rotate-90">
      <FiArrowUpRight className="text-2xl text-white group-hover:text-black" />
    </div>
  );
};

export default ArrowIcons;
