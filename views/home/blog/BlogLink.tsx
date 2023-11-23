import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Tag from "@/common/components/elements/Tag";
import Link from "next/link";

const BlogLink = () => {
  return (
    <Link
      href={"/blogs"}
      className="relative group order-5 col-span-2 row-span-1 flex flex-col justify-between rounded-4xl bg-yellow-400 p-6 md:col-span-1 min-h-[250px]"
    >
      <div className="flex items-center justify-between">
        <Tag text="BLOGS" color="text-day" bgColor="bg-night" />
        <ArrowIcons color="night" />
      </div>
      {/* <div className="z-10">
        <h2 className="text-type-l font-semibold text-night xl:text-type-xl">
          Blog Journeys: Unveiling Stories in the Digital World
        </h2>
        <Breakline className="rounded-4xl border-t-[10px] border-night mt-[10px]" />
        <Breakline className="mt-[3px] rounded-lg border-night" />
      </div> */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-center text-display2 font-bold text-night opacity-40 flex items-center">
          COMING
          <br />
          SOON!
        </h1>
      </div>
    </Link>
  );
};

export default BlogLink;
