"use client";
import { useState } from "react";
import ArrowIcons from "@/common/components/elements/ArrowIcons";
import { stagger } from "framer-motion";
import useMenuAnimation from "@/hooks/useMenuAnimation";
import Menu from "../elements/Menu";

export default function Dropdown() {
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
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
      <Menu />
    </div>
  );
}
