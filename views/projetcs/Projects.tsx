import Card from "@/common/components/elements/Card";
import HeadingTitle from "@/common/components/elements/HeadingTitle";
import PageWrapper from "@/common/components/layouts/PageWrapper";
import { SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const Projects = () => {
  const size = 25;
  return (
    <PageWrapper className="py-[60px]">
      <HeadingTitle
        title="Projects"
        subTitle="Showcasing my development portfolio"
      />
      <section className="mt-8 w-full grid gap-5 auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Lentera Visi Edutama"
          image="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.1477661865.1699966693&semt=ais"
          tech={
            <>
              <SiReact size={size} className="text-sky-500" />
              <SiTypescript size={size} className="text-blue-400" />
              <SiTailwindcss size={size} className="text-cyan-300" />
            </>
          }
        />
        <Card
          title="Lentera Visi Edutama"
          image="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.1477661865.1699966693&semt=ais"
          tech={
            <>
              <SiReact size={size} className="text-sky-500" />
              <SiTypescript size={size} className="text-blue-400" />
              <SiTailwindcss size={size} className="text-cyan-300" />
            </>
          }
        />
        <Card
          title="Lentera Visi Edutama"
          image="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.1477661865.1699966693&semt=ais"
          tech={
            <>
              <SiReact size={size} className="text-sky-500" />
              <SiTypescript size={size} className="text-blue-400" />
              <SiTailwindcss size={size} className="text-cyan-300" />
            </>
          }
        />
        <Card
          title="Lentera Visi Edutama"
          image="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.1477661865.1699966693&semt=ais"
          tech={
            <>
              <SiReact size={size} className="text-sky-500" />
              <SiTypescript size={size} className="text-blue-400" />
              <SiTailwindcss size={size} className="text-cyan-300" />
            </>
          }
        />
        <Card
          title="Lentera Visi Edutama"
          image="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.1477661865.1699966693&semt=ais"
          tech={
            <>
              <SiReact size={size} className="text-sky-500" />
              <SiTypescript size={size} className="text-blue-400" />
              <SiTailwindcss size={size} className="text-cyan-300" />
            </>
          }
        />
        <Card
          title="Lentera Visi Edutama"
          image="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&ga=GA1.1.1477661865.1699966693&semt=ais"
          tech={
            <>
              <SiReact size={size} className="text-sky-500" />
              <SiTypescript size={size} className="text-blue-400" />
              <SiTailwindcss size={size} className="text-cyan-300" />
            </>
          }
        />
      </section>
    </PageWrapper>
  );
};

export default Projects;
