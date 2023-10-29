import ArrowIcons from "@/app/components/arrowicons/ArrowIcons";
import Breakline from "@/app/components/breakline/Breakline";
import Tag from "@/app/components/tag/Tag";
import React from "react";

const Skills = () => {
  return (
    <div className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 rounded-4xl bg-yellow-300 order-5 p-6 group flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <Tag text="BLOGS" color="text-white" bgColor="bg-black" />
        <ArrowIcons color="black" colorhover="black" />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-large2 font-bold text-black">
            All Blogs Done Writing
          </h2>
          <h1 className="text-headingnum font-medium text-black">12%</h1>
        </div>
        <Breakline className="my-2 border-black" />
      </div>
    </div>
  );
};

export default Skills;
