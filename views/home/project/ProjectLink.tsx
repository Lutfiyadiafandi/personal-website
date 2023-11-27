import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";
import Tag from "@/common/components/elements/Tag";
import Link from "next/link";

const ProjectLink = () => {
  return (
    <Link
      href={"/projects"}
      className="relative group order-4 col-span-2 row-span-1 flex flex-col justify-between rounded-4xl bg-blue-400 p-6 md:col-span-1 min-h-[250px]"
    >
      <div className="flex items-center justify-between">
        <Tag text="PROJECTS" color="text-night" bgColor="bg-day" />
        <ArrowIcons color="day" />
      </div>
      <div className="z-10">
        <h2 className="text-type-l font-semibold text-day xl:text-type-xl">
          Digital Showcase: My Web Projects Unveiled
        </h2>
        <Breakline className="rounded-4xl border-t-[10px] border-day mt-[10px]" />
        <Breakline className="mt-[3px] rounded-lg border-day" />
      </div>
      <div className="absolute inset-0 -top-10 flex items-center justify-center">
        <div className="text-heading-num font-bold text-day opacity-40 flex items-center">
          5<span className="text-[70px]">+</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectLink;
