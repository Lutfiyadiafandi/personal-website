import React from "react";
import Breakline from "@/common/components/elements/Breakline";
import DarkMode from "@/common/components/elements/darkmode/DarkMode";

const Dashboard = () => {
  return (
    <div className="col-span-2 row-span-1 lg:col-span-2 lg:row-span-1 rounded-4xl order-1 lg:order-2">
      <div className="h-full flex flex-col justify-end p-6">
        <p className="text-white text-small font-semibold">Welcome</p>
        <Breakline className="border-white border-dotted my-2" />
        <div className="flex justify-between items-end">
          <h1 className="text-heading text-white font-semibold mt-20">
            Dashboard
          </h1>
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
