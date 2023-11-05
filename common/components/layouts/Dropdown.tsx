"use client";
import { useState } from "react";
import Link from "next/link";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
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
    name: "Blogs page",
    path: "/blogs",
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
      className="relative w-full h-full px-[25px] py-[6px] bg-yellow-30 rounded-full cursor-pointer border border-night group hover:bg-night duration-500 ease-in-out dark:border-day dark:hover:bg-day"
    >
      <div className="flex justify-between items-center">
        <span className="text-night text-type-m font-semibold group-hover:text-day  duration-500 ease-in-out hidden md:block dark:text-day dark:group-hover:text-night">
          Navigation menu
        </span>
        <span className="text-night text-type-m font-semibold group-hover:text-day  duration-500 ease-in-out block md:hidden dark:text-day dark:group-hover:text-night">
          Menu
        </span>
        <ArrowIcons
          color="night"
          colorhover="day"
          darkmode="dark:text-day dark:group-hover:text-night"
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 mt-[12px] w-full bg-night rounded-xl dark:bg-day">
          {links.map((item) => (
            <Link href={item.path} key={item.name} passHref>
              <div
                className={`relative bg-yellow-30 text-type-m font-medium text-day cursor-pointer py-2 pl-[25px] rounded-xl hover:bg-amber-200 hover:text-amber-900 ${
                  router == item.path ? "font-semibold" : ""
                } dark:text-day dark:group-hover:text-night`}
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
