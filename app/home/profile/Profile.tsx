import React from "react";
import Breakline from "../../components/breakline/Breakline";

const Profile = () => {
  return (
    <div className="col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 rounded-4xl bg-white order-3">
      <div className="h-full flex flex-col p-6">
        <h1 className="text-large text-black font-semibold">Introduction</h1>
        {/* <p className=" text-base">Welcome</p> */}
        {/* <Breakline className="border-black" /> */}
      </div>
    </div>
  );
};

export default Profile;
