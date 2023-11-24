import {
  SiNestjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IProjects } from "../interface/IProjects";
import { FaCss3Alt, FaJs } from "react-icons/fa";

const size = 25;
export const ProjectsData: IProjects[] = [
  {
    title: "Lentera Visi Edutama",
    image: "/projects/lenteravisiedutama.png",
    link: "https://lenteravisiedutama.com/",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <SiTypescript size={size} className="text-blue-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
        <SiStrapi size={size} className="text-blue-500" />
        <SiNestjs size={size} className="text-rose-500" />
      </>
    ),
  },
  {
    title: "Staycation.",
    image: "/projects/staycation.png",
    link: "https://la-staycation.netlify.app/",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <FaJs size={size} className="text-yellow-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
  {
    title: "Portofolio V1",
    image: "/projects/portofoliov1.png",
    link: "https://lutfiyadiafandi.netlify.app/",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <FaJs size={size} className="text-yellow-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
  {
    title: "Todo List App",
    image: "/projects/todolist.png",
    link: "https://apptodo-list.netlify.app/",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <FaJs size={size} className="text-yellow-400" />
        <FaCss3Alt size={size} className="text-blue-500" />
      </>
    ),
  },
];
