import React from "react";

type SkillCardProps = {
  name: string;
  icon: any;
};
const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="px-2">
      <div className="flex items-center gap-2 rounded-xl shadow-night px-4 py-2 shadow-sm dark:shadow-day">
        <div className="h-6 w-6">{icon}</div>
        <h1 className="text-type-m font-medium text-night dark:text-day">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default SkillCard;
