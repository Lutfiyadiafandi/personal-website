import React from "react";

type TagProps = {
  text: string;
  color: string;
  bgColor: string;
};
const Tag = ({ text, color, bgColor }: TagProps) => {
  return (
    <div className={`px-[30px] py-[3px] ${bgColor} rounded-[10px]`}>
      <h2 className={`text-subheading ${color} font-bold text-center`}>
        {text}
      </h2>
    </div>
  );
};

export default Tag;
