import React from "react";
import { SkillStacks } from "@/common/data/SkillStack";
import MarqueeElement from "@/common/components/elements/MarqueeElement";
import SkillCard from "./SkillCard";
import Tag from "@/common/components/elements/Tag";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";

const Skills = () => {
  return (
    <div className="group order-6 col-span-2 row-span-1 flex flex-col justify-between gap-5 rounded-4xl bg-emerald-400 p-6 lg:col-span-2">
      <div className="flex items-center justify-between">
        <Tag
          text="TECHSTACK"
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
        <MarqueeElement direction={"right"}>
          {SkillStacks.map((item) => (
            <SkillCard key={item.name} name={item.name} icon={item.icon} />
          ))}
        </MarqueeElement>
        <MarqueeElement direction={"left"}>
          {SkillStacks.map((item) => (
            <SkillCard key={item.name} name={item.name} icon={item.icon} />
          ))}
        </MarqueeElement>
      </div>
      <div>
        <div className="flex items-end">
          <h2 className="text-type-l font-semibold text-day xl:text-type-xl dark:text-night">
            This is My Technologies used
          </h2>
        </div>
        <Breakline className="mt-[5px] rounded-4xl border-t-[10px] border-day lg:mt-[10px] dark:border-night" />
        <Breakline className="mt-[3px] rounded-lg border-day dark:border-night" />
      </div>
    </div>
  );
};

export default Skills;
