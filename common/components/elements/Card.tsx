"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IProjects } from "@/common/interface/IProjects";

const Card = ({ title, image, link, tech }: IProjects) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
    >
      <div className="colspan-1 bg-sec-day rounded-3xl p-4 dark:bg-sec-night">
        <div className="w-full h-[280px] rounded-lg cursor-pointer group overflow-hidden">
          <Link
            href={link}
            passHref={true}
            rel="noopener noreferrer"
            target="_blank"
            className="w-full h-full"
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt={title}
              width={0}
              height={0}
              priority
              sizes={"100vw"}
              className="object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </Link>
        </div>
        <div className="px-[10px] mt-3">
          <h2 className="text-type-l font-semibold text-night mb-3 dark:text-day">
            {title}
          </h2>
          <div className="flex justify-end gap-3">{tech}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
