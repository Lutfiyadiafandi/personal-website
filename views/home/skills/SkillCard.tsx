import React from "react";

type SkillCardProps = {
  name: string;
  icon: any;
};
const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="px-2">
      <div className="flex gap-2 items-center px-4 py-2 rounded-xl shadow-sm bg-white">
        <div className="w-6 h-6">{icon}</div>
        <h1 className="text-medium2  font-medium text-black">{name}</h1>
      </div>
    </div>
  );
};

export default SkillCard;
