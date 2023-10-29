import Blogs from "./(pages)/home/blogs/Blogs";
import Dashboard from "./(pages)/home/dashboard/Dashboard";
import Hero from "./(pages)/home/hero/Hero";
import Profile from "./(pages)/home/profile/Profile";
import Project from "./(pages)/home/project/Project";
import Skills from "./(pages)/home/skills/Skills";

export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto px-2 py-2 grid grid-cols-2 lg:grid-cols-4 auto-rows-cards gap-[10px]">
      <Hero />
      <Dashboard />
      <Profile />
      <Project />
      <Skills />
      <Blogs />
    </main>
  );
}
