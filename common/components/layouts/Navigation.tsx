import Link from "next/link";
import React from "react";
import Logo from "@/common/assets/images/LogoLABlck.png";
import Image from "next/image";
import Dropdown from "./Dropdown";

const Navigation = () => {
  return (
    <header className="max-w-screen-2xl mx-auto relative z-50">
      <nav className="w-full lg:w-1/2 absolute top-2 right-0 px-2 flex justify-between gap-2">
        <div className="grow h-[45px] border border-white rounded-full p-[3px]">
          <Dropdown />
        </div>
        <Link
          href={"/"}
          className="w-[45px] h-[45px] border border-gray-400 bg-white rounded-full flex justify-center items-center"
        >
          <Image
            src={Logo}
            width={35}
            height={35}
            alt="Logo"
            className="aspect-square"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
