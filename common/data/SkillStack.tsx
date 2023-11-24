import {
  SiExpress,
  SiNestjs,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

type SkillStacksProps = {
  name: string;
  icon: JSX.Element;
};

const iconSize = "100%";

export const SkillStacks: SkillStacksProps[] = [
  {
    name: "HTML",
    icon: <FaHtml5 size={iconSize} className="text-orange-500" />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt size={iconSize} className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs size={iconSize} className="text-yellow-400" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={iconSize} className="text-blue-400" />,
  },
  {
    name: "React JS",
    icon: <SiReact size={iconSize} className="text-sky-500" />,
  },
  {
    name: "Next JS",
    icon: <TbBrandNextjs size={iconSize} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap size={iconSize} className="text-purple-500" />,
  },
  {
    name: "Strapi",
    icon: <SiStrapi size={iconSize} className="text-blue-500" />,
  },
  {
    name: "Express JS",
    icon: <SiExpress size={iconSize} />,
  },
  {
    name: "Nest JS",
    icon: <SiNestjs size={iconSize} className="text-rose-500" />,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs size={iconSize} className="text-green-600" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub size={iconSize} />,
  },
];
{
  //   HTML: <SiHtml5 size={iconSize} className="text-orange-500" />,
  //   CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  //   JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  //   "Next.js": <SiNextdotjs size={iconSize} />,
  //   Bootstrap: (
  //     <BsFillBootstrapFill size={iconSize} className="text-purple-500" />
  //   ),
  //   "Node JS": <SiNodedotjs size={iconSize} className="text-green-600" />,
  //   Github: <FaGithub size={iconSize} />,
}
