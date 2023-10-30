import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocmedProps = {
  image: any;
  link: string;
};
const Socmed = ({ image, link }: SocmedProps) => {
  return (
    <Link
      href={link}
      passHref={true}
      target="_blank"
      className="w-[45px] h-[45px] border border-gray-400 rounded-xl flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-in-out transition-all"
    >
      {image}
    </Link>
  );
};

export default Socmed;
