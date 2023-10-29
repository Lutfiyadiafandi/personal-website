import ArrowIcons from "@/app/components/arrowicons/ArrowIcons";
import Breakline from "@/app/components/breakline/Breakline";
import Tag from "@/app/components/tag/Tag";
import React from "react";

const Projects = () => {
  return (
    <div className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 rounded-4xl bg-blue-400 order-4 p-6 group flex flex-col justify-between">
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
        <Breakline className="my-2 border-white" />
      </div>
    </div>
  );
};

export default Projects;
