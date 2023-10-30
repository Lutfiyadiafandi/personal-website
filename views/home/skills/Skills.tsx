import React from "react";
import { SkillStacks } from "@/common/data/SkillStack";
import MarqueeElement from "@/common/components/elements/MarqueeElement";
import SkillCard from "./SkillCard";
import Tag from "@/common/components/elements/Tag";
import ArrowIcons from "@/common/components/elements/ArrowIcons";

const Skills = () => {
  return (
    <div className="col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 rounded-4xl bg-emerald-300 order-6 p-6 group flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <Tag text="TECHSTACK" color="text-white" bgColor="bg-black" />
        <ArrowIcons color="black" colorhover="black" />
      </div>
      <div className="flex flex-col gap-4">
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
    </div>
  );
};

export default Skills;
