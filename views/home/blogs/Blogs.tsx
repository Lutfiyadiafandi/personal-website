import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";
import Tag from "@/common/components/elements/Tag";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <Link
      href={"/blogs"}
      className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-1 rounded-4xl bg-yellow-300 order-5 p-6 group flex flex-col justify-between"
    >
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
        <Breakline className="border-t-[10px] rounded-4xl mt-[15px] border-black" />
        <Breakline className="border-black mt-[3px]" />
      </div>
    </Link>
  );
};

export default Blogs;
