import Card from "@/common/components/elements/Card";
import HeadingTitle from "@/common/components/elements/HeadingTitle";
import PageWrapper from "@/common/components/layouts/PageWrapper";
import { ProjectsData } from "@/common/data/ProjectsData";

const Projects = () => {
  return (
    <PageWrapper className="py-[60px]">
      <HeadingTitle
        title="Projects"
        subTitle="Showcasing my development portfolio"
      />
      <section className="mt-8 w-full grid gap-5 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            image={project.image}
            link={project.link}
            tech={project.tech}
          />
        ))}
      </section>
    </PageWrapper>
  );
};

export default Projects;
