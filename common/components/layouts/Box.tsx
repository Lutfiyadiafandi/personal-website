import React from "react";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";

type BoxProps = {
  children: React.ReactNode;
  title: string;
};
const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="group flex h-[150px] w-full flex-col justify-between rounded-[25px] border-2 border-day p-5 transition-all duration-500 ease-in-out md:w-1/2 dark:border-night">
      <div className="">{children}</div>
      <div className="flex flex-col">
        <span className="flex justify-between">
          <h1 className="text-type-m font-bold text-day md:text-type-l dark:text-night">
            {title}
          </h1>
          <ArrowIcons
            color="day"
            colorhover="day"
            darkmode="dark:text-night dark:group-hover:text-night"
          />
        </span>
        <Breakline className="mt-1 border-day group-hover:border-night dark:border-night dark:group-hover:border-day" />
      </div>
    </div>
  );
};

export default Box;
