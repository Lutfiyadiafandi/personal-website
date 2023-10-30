import React from "react";
import Hero from "./hero/Hero";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./profile/Profile";
import Projects from "./project/Project";
import Skills from "./blogs/Blogs";
import Blogs from "./skills/Skills";

const Home = () => {
  return (
    <main className="max-w-screen-2xl mx-auto px-2 py-2 grid grid-cols-2 lg:grid-cols-4 auto-rows-cards gap-[10px]">
      <Hero />
      <Dashboard />
      <Profile />
      <Projects />
      <Skills />
      <Blogs />
    </main>
  );
};

export default Home;
