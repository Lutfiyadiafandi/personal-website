"use client";
import { useState } from "react";
import Link from "next/link";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
import { usePathname } from "next/navigation";
import { stagger } from "framer-motion";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import Nav from "@/common/data/Nav.json";

export default function Dropdown() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  const router = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation({
    isOpen,
    staggerMenuItems,
  });

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      ref={scope}
      className="relative w-full h-full px-[25px] py-[6px] rounded-full cursor-pointer border border-night group hover:bg-night duration-500 ease-in-out dark:border-day dark:hover:bg-day"
    >
      <div className="flex justify-between items-center">
        <span className="text-night text-type-m font-semibold group-hover:text-day  duration-500 ease-in-out hidden md:block dark:text-day dark:group-hover:text-night">
          Navigation menu
        </span>
        <span className="text-night text-type-m font-semibold group-hover:text-day  duration-500 ease-in-out block md:hidden dark:text-day dark:group-hover:text-night">
          Menu
        </span>
        <ArrowIcons
          color="night arrow"
          colorhover="day"
          darkmode="dark:text-day dark:group-hover:text-night"
          rotate={false}
        />
      </div>

      <ul
        className="mt-[12px] w-full flex flex-col bg-night rounded-xl dark:bg-day"
        style={{
          clipPath: "inset(10% 50% 90% 50% round 10px)",
        }}
      >
        {links.map((item) => (
          <Link href={item.path} key={item.name} passHref>
            <li
              className={`px-4 py-3 text-type-m cursor-pointer rounded-xl hover:bg-amber-200 hover:text-amber-900 ${
                router === item.path
                  ? "text-amber-200 dark:text-amber-600 font-bold"
                  : "text-day dark:text-night font-medium"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
