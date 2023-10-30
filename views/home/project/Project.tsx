import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";
import Tag from "@/common/components/elements/Tag";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <Link
      href={"/projects"}
      className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 rounded-4xl bg-blue-400 order-4 p-6 group flex flex-col justify-between"
    >
      <div className="flex justify-between items-center">
        <Tag text="PROJECTS" color="text-blue-400" bgColor="bg-white" />
        <ArrowIcons color="white" colorhover="white" />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-large2 font-bold text-white">
            All Works Done Available
          </h2>
          <h1 className="text-headingnum font-medium text-white">6+</h1>
        </div>
        <Breakline className="border-t-[10px] rounded-4xl mt-[15px] border-white" />
        <Breakline className="mt-[3px] border-white" />
      </div>
    </Link>
  );
};

export default Projects;
