import Blogs from "./home/blogs/Blogs";
import Greeting from "./home/greeting/Greeting";
import Hero from "./home/hero/Hero";
import Profile from "./home/profile/Profile";
import Project from "./home/project/Project";
import Skills from "./home/skills/Skills";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto px-2 py-2 grid grid-cols-2 lg:grid-cols-4 auto-rows-cards gap-[10px]">
      <Hero />
      <Greeting />
      <Profile />
      <Project />
      <Skills />
      <Blogs />
    </main>
  );
}
