import React from "react";
import Bullets from "@/common/components/elements/Bullets";
import Box from "@/common/components/layouts/Box";
import Socmed from "@/common/components/elements/Socmed";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";
import Breakline from "@/common/components/elements/Breakline";
import TextTransitions from "@/common/components/elements/TextTransitions";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="order-3 col-span-2 row-span-2 rounded-4xl lg:col-span-2 lg:row-span-2 bg-primary-200">
      <div className="relative h-full p-6">
        <Bullets />
        <div className="bg-emerald-30 flex h-full w-full flex-col justify-evenly gap-5">
          <div className="bg-blue-30 flex w-full flex-col gap-5 pt-8 lg:pt-0">
            <p className="text-type-m font-semibold text-day dark:text-night">
              Hey There!
            </p>
            <h1 className="text-heading-m font-semibold text-transparent bg-gradient-to-b from-primary-100 to-primary-200 bg-clip-text md:text-heading-xl xl:text-display1">
              I’m Lutfiyadi <span className="text-primary-10">Afandi</span>
              <Breakline className="mt-1 rounded-lg border-t-4 border-inherit dark:border-night" />
            </h1>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 className="text-type-m font-medium text-day dark:text-night">
                I’m a{" "}
                <span className="inline-block">
                  <TextTransitions
                    texts={[
                      "Fronted Developer",
                      "Full Stack Developer",
                      "Web Developer",
                    ]}
                    className={"text-type-m font-bold text-primary-100"}
                  />
                </span>
              </h2>

              <Link href={""} className="flex items-center gap-[5px]">
                <span className="text-type-m font-medium text-day dark:text-night">
                  Download CV
                </span>
                <FaDownload className="text-day dark:text-night" />
              </Link>
            </div>

            <p className="text-type-m font-medium text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, sapiente tempore cumque assumenda commodi quod atque
              ex dolores vel nemo officiis? Consequatur magnam quaerat illo.
            </p>
          </div>

          <div className="flex flex-col gap-1 md:flex-row">
            <Box title="Let’s Connect">
              <div className="flex h-full w-full justify-evenly gap-1">
                <Socmed
                  image={<FaLinkedinIn size={"1.5em"} />}
                  link="https://www.instagram.com/lutfiyadiafandy/"
                />
                <Socmed
                  image={<FaInstagram size={"1.5em"} />}
                  link="https://www.instagram.com/lutfiyadiafandy/"
                />
                <Socmed
                  image={<FaGithub size={"1.5em"} />}
                  link="https://www.instagram.com/lutfiyadiafandy/"
                />
                <Socmed
                  image={<FaWhatsapp size={"1.5em"} />}
                  link="https://www.instagram.com/lutfiyadiafandy/"
                />
              </div>
            </Box>
            <Box title="Collaboration">
              <div>
                <h1 className="text-type-m font-medium text-day dark:text-night">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h1>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
