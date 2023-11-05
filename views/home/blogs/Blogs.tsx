import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";
import Tag from "@/common/components/elements/Tag";
import Link from "next/link";
import React from "react";

const Blogs = () => {
  return (
    <Link
      href={"/blogs"}
      className="group order-5 col-span-2 row-span-1 flex flex-col justify-between rounded-4xl bg-yellow-400 p-6 md:col-span-1 min-h-[210px]"
    >
      <div className="flex items-center justify-between">
        <Tag
          text="BLOGS"
          color="text-night dark:text-day"
          bgColor="bg-day dark:bg-night"
        />
        <ArrowIcons
          color="day"
          colorhover="day"
          darkmode="dark:text-night dark:group-hover:text-night"
        />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-type-l font-semibold text-day xl:text-type-xl dark:text-night">
            All Blogs Done Writing
          </h2>
          <h1 className="text-heading-num font-bold text-day dark:text-night">
            12+
          </h1>
        </div>
        <Breakline className="rounded-4xl border-t-[10px] border-day mt-[10px] dark:border-night" />
        <Breakline className="mt-[3px] rounded-lg border-day dark:border-night" />
      </div>
    </Link>
  );
};

export default Blogs;
