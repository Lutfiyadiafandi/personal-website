import Hero from "./hero/Hero";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./profile/Profile";
import ProjectLink from "./project/ProjectLink";
import BlogLink from "./blog/BlogLink";
import Skills from "./skills/Skills";
import PageWrapper from "@/common/components/layouts/PageWrapper";

const Home = () => {
  return (
    <PageWrapper className="pb-[60px] grid auto-rows-min grid-cols-2 gap-[10px] lg:auto-rows-cards lg:grid-cols-4">
      <Hero />
      <Dashboard />
      <Profile />
      <ProjectLink />
      <BlogLink />
      <Skills />
    </PageWrapper>
  );
};

export default Home;
