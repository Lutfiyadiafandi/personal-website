import React from "react";
import Breakline from "@/app/components/breakline/Breakline";
import DarkMode from "@/app/components/darkmode/DarkMode";

const Greeting = () => {
  return (
    <div className="col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 rounded-4xl order-1 lg:order-2">
      <div className="h-full flex flex-col justify-end p-6">
        <p className="text-white text-base">Welcome</p>
        <Breakline className="border-white border-dotted" />
        <div className="flex justify-between items-end">
          <h1 className="text-large text-white font-semibold mt-20">
            Dashboard
          </h1>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Greeting;
