import React from "react";
import ArrowIcons from "../arrowicons/ArrowIcons";
import Breakline from "../breakline/Breakline";

type BoxProps = {
  children: React.ReactNode;
  title: string;
};
const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="w-1/2 h-[150px] flex flex-col justify-between border-2 border-black rounded-[25px] p-5 group hover:bg-black duration-500 ease-in-out transition-all">
      <div className="group-hover:text-white">{children}</div>
      <div className="flex flex-col">
        <span className="flex justify-between">
          <h1 className="text-medium2 text-black font-bold group-hover:text-white">
            {title}
          </h1>
          <ArrowIcons color="black" colorhover="white" />
        </span>
        <Breakline className="border-black mt-1 group-hover:border-white" />
      </div>
    </div>
  );
};

export default Box;
