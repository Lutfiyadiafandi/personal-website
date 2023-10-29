"use client";
import { useState } from "react";
import Link from "next/link";
import ArrowIcons from "../arrowicons/ArrowIcons";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home page",
    path: "/",
  },
  {
    name: "Projects page",
    path: "/projects",
  },
  {
    name: "Contact page",
    path: "/contact",
  },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = usePathname();

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="relative w-full h-full px-[25px] py-[6px] bg-yellow-30 rounded-full cursor-pointer border border-white bg-[#ffffff26] group hover:bg-white duration-500 ease-in-out"
    >
      <div className="flex justify-between items-center">
        <span className="text-white text-medium font-semibold group-hover:text-black  duration-500 ease-in-out">
          Navigation menu
        </span>
        <ArrowIcons color="white" colorhover="black" />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-[12px] w-full bg-white rounded-xl">
          {links.map((item) => (
            <Link href={item.path} key={item.name} passHref>
              <div
                className={`relative bg-yellow-30 text-lg font-medium text-black cursor-pointer py-2 pl-[25px] rounded-xl hover:bg-amber-100 hover:text-amber-900 ${
                  router == item.path ? "font-semibold" : ""
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
