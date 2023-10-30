import React from "react";
import TextTransitions from "@/common/components/elements/TextTransitions";

const Hero = () => {
  return (
    <div className="hero col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 rounded-4xl order-2 lg:order-2 flex justify-center items-end p-6">
      <div className="w-full h-[45px] p-[3px] rounded-full border border-white">
        <div className="h-full px-[25px] rounded-full border border-white bg-[#ffffff80] backdrop-blur-xl flex justify-center items-center">
          <TextTransitions
            texts={[
              "Fronted Developer",
              "Full Stack Developer",
              "Web Developer",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
