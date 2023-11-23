import Projects from "@/views/projetcs/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects | Lutfiyadi Afandi`,
  description: `Personal Website, portfolio, blog`,
};

const ProjectPage = () => {
  return (
    <>
      <Projects />
    </>
  );
};
export default ProjectPage;
