import React from "react";
import Bullets from "@/app/components/bullets/Bullets";
import Button from "@/app/components/button/Button";
import Box from "@/app/components/box/Box";
import Socmed from "@/app/components/socmed/Socmed";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 rounded-4xl bg-white order-3">
      <div className="relative h-full p-6">
        <Bullets />
        <div className="w-full h-full mx-auto bg-emerald-30 flex flex-col justify-evenly">
          <div className="flex gap-10">
            <div className="w-1/3 h-[300px] bg-indigo-400 rounded-tl-[5rem] rounded-tr-[5rem]"></div>
            <div className="w-2/3 flex flex-col gap-5 justify-center">
              <h1 className="text-heading text-black font-semibold">
                Hey There!
                <br />
                <span className="text-large">
                  I’m Lutfiyadi{" "}
                  <span className="text-indigo-400 underline">Afandi</span>
                </span>
              </h1>
              <p className="text-gray-600 text-desc font-medium">
                a wizard of code, a maestro of the digital canvas. Welcome to my
                web sanctuary, where lines of code dance to create seamless
                online experiences.
              </p>
              <Button text="Download CV" />
            </div>
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
