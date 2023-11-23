import React from "react";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";

type BoxProps = {
  children: React.ReactNode;
  title: string;
};
const Box = ({ children, title }: BoxProps) => {
  return (
    <div className="group flex h-max w-full flex-col justify-between gap-5 lg:gap-8 rounded-[25px] border border-day p-5 transition-all duration-500 ease-in-out dark:border-night">
      <div className="">{children}</div>
      <div className="flex flex-col">
        <span className="flex justify-between">
          <h1 className="text-type-m font-bold text-day md:text-type-l dark:text-night">
            {title}
          </h1>
          <ArrowIcons color="day" darkmode="dark:text-night" />
        </span>
        <Breakline className="mt-1 border-day dark:border-night" />
      </div>
    </div>
  );
};

export default Box;
