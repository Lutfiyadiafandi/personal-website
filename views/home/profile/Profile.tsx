import React from "react";
import Bullets from "@/common/components/elements/Bullets";
import Button from "@/common/components/elements/Button";
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
    <div className="col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 rounded-4xl bg-white order-3">
      <div className="relative h-full p-6">
        <Bullets />
        <div className="w-full h-full mx-auto flex flex-col justify-evenly">
          <div className="w-full flex flex-col gap-5 justify-center">
            <p className="text-indigo-400 text-desc font-semibold">
              Hey There!
            </p>
            <h1 className="text-heading text-black font-semibold">
              I’m Lutfiyadi <span className="text-indigo-400">Afandi</span>
            </h1>
            <Breakline className="border-inherit border-t-4 rounded-lg" />
            <div className="flex justify-between items-center">
              <h2 className="text-medium text-black">
                I’m a{" "}
                <span className="inline-block">
                  <TextTransitions
                    texts={[
                      "Fronted Developer",
                      "Full Stack Developer",
                      "Web Developer",
                    ]}
                  />
                </span>
              </h2>

              <Link href={""} className="flex items-center gap-[5px] group">
                <span className="text-medium2 text-gray-500 group-hover:text-black">
                  Download CV
                </span>
                <FaDownload className="text-gray-500" />
              </Link>
            </div>

            <p className="text-gray-500 text-desc font-medium">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae, sapiente tempore cumque assumenda commodi quod atque
              ex dolores vel nemo officiis? Consequatur magnam quaerat illo.
            </p>
          </div>

          <div className="flex gap-1">
            <Box title="Let’s Connect ">
              <div className="w-full h-full flex gap-5 justify-center">
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
                <h1>
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
