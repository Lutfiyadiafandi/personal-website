"use client";
import Bullets from "@/common/components/elements/Bullets";
import Box from "@/common/components/layouts/Box";
import { FaDownload } from "react-icons/fa";
import Breakline from "@/common/components/elements/Breakline";
import TextTransitions from "@/common/components/elements/TextTransitions";
import Link from "next/link";
import TextAnimations from "@/common/components/elements/TextAnimations";
import { motion } from "framer-motion";

const Profile = () => {
  const style = "font-bold text-sec-day dark:text-sec-night";
  return (
    <div className="order-3 col-span-2 row-span-2 rounded-4xl lg:col-span-2 lg:row-span-2 bg-night dark:bg-day">
      <div className="relative h-full p-6">
        <Bullets />
        <div className="flex h-full w-full flex-col justify-center gap-5 lg:gap-10">
          <div>
            <p className="pt-5 mb-2 text-type-s font-semibold text-sec-day dark:text-sec-night">
              Hey There!
            </p>
            <h1 className="text-heading-m font-bold text-transparent bg-gradient-to-tr from-primary-100 via-primary-200 to-primary-300 bg-clip-text md:text-heading-xl xl:text-display1">
              I’m Lutfiyadi Afandi
            </h1>
            <Breakline className="mt-1 rounded-lg border-t-4 border-inherit dark:border-night" />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h2 className="text-type-m font-medium text-day dark:text-night">
              I’m a{" "}
              <span className="inline-block">
                <TextTransitions
                  texts={[
                    " Fronted Developer",
                    " Full Stack Developer",
                    " Web Developer",
                  ]}
                  className={"text-type-m font-bold text-primary-200"}
                />
              </span>
            </h2>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://drive.google.com/drive/folders/1hP1KfGpdfiuv-wtlNTJXg5rIWlzmIV_U"
              }
              className="flex items-center gap-[5px]"
            >
              <span className="text-type-m font-medium text-day dark:text-night">
                Resume
              </span>
              <FaDownload className="text-day dark:text-night" />
            </Link>
          </div>
          <p className="text-type-s md:text-type-m font-medium text-secondary">
            Passionate
            <span className={`underline ${style}`}> developer </span>
            with a knack for
            <span className={`${style}`}> problem-solving. </span>I thrive on
            <span className={`${style}`}> challenges </span>
            and love turning
            <span className={`${style}`}> ideas </span>
            into
            <span className={`${style}`}> digital experiences. </span>
            Let's create something extraordinary together!
          </p>
          <Box title="Let’s Collaborate!">
            <div>
              <p className="text-type-s md:text-type-m font-medium text-secondary">
                Open for exciting collaborations! Let's turning ideas into
                reality. Feel free to contact me at email{" "}
                <span className={`${style}`}>lutfiyadiafandi@gmail.com</span> or{" "}
                <span className={`underline ${style}`}>
                  <Link href={"/contact"}>Contact me</Link>
                </span>
                .
              </p>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Profile;
