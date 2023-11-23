import { SkillStacks } from "@/common/data/SkillStack";
import MarqueeElement from "@/common/components/elements/MarqueeElement";
import SkillCard from "./SkillCard";
import Tag from "@/common/components/elements/Tag";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
import Breakline from "@/common/components/elements/Breakline";

const Skills = () => {
  return (
    <div className="group order-6 col-span-2 row-span-1 flex flex-col justify-between gap-5 rounded-4xl border-2 border-night p-6 lg:col-span-2 dark:border-day">
      <div className="flex items-center justify-between">
        <Tag
          text="SKILLS"
          color="text-day dark:text-night"
          bgColor="bg-night dark:bg-day"
        />
        <ArrowIcons color="night" darkmode="dark:text-day" />
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
          <h2 className="text-type-l font-semibold text-night xl:text-type-xl dark:text-day">
            Tech Proficiency: A Glimpse into My Skills.
          </h2>
        </div>
        <Breakline className="mt-[5px] rounded-4xl border-t-[10px] border-night lg:mt-[10px] dark:border-day" />
        <Breakline className="mt-[3px] rounded-lg border-night dark:border-day" />
      </div>
    </div>
  );
};

export default Skills;
