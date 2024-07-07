import {
  SiMysql,
  SiNestjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IProjects } from "../interface/IProjects";
import { FaJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const size = 25;
export const ProjectsData: IProjects[] = [
  {
    title: "Lutfiyadi Afandi Personal Website",
    image: "/projects/lutfiyadiafandi.png",
    link: "https://lutfiyadiafandi.site",
    tech: (
      <>
        <TbBrandNextjs size={size} className="text-black dark:text-white" />
        <SiTypescript size={size} className="text-blue-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
  {
    title: "Lentera Visi Edutama",
    image: "/projects/LenteraVisiEdutama.png",
    link: "https://lenteravisiedutama.com",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <SiTypescript size={size} className="text-blue-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
        <SiStrapi size={size} className="text-blue-500" />
        <SiNestjs size={size} className="text-rose-500" />
        <SiMysql size={size} className="text-sky-600" />
      </>
    ),
  },
  {
    title: "Pod of Cast",
    image: "/projects/PodofCast.png",
    link: "https://la-podofcast.netlify.app",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <SiTypescript size={size} className="text-blue-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
  {
    title: "Al Nasr",
    image: "/projects/AlNasr.png",
    link: "https://la-alnasr.netlify.app",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <SiTypescript size={size} className="text-blue-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
  {
    title: "Skilline",
    image: "/projects/Skilline.png",
    link: "https://la-skilline.netlify.app",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <SiTypescript size={size} className="text-blue-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
  {
    title: "Staycation.",
    image: "/projects/Staycation.png",
    link: "https://la-staycation.netlify.app",
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
    image: "/projects/PortofolioV1.png",
    link: "https://lutfiyadiafandi.netlify.app",
    tech: (
      <>
        <SiReact size={size} className="text-sky-500" />
        <FaJs size={size} className="text-yellow-400" />
        <SiTailwindcss size={size} className="text-cyan-300" />
      </>
    ),
  },
];
