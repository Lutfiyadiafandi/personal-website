import React from "react";
import Hero from "./hero/Hero";
import Dashboard from "./dashboard/Dashboard";
import Profile from "./profile/Profile";
import Projects from "./project/Project";
import Blogs from "./blogs/Blogs";
import Skills from "./skills/Skills";

const Home = () => {
  return (
    <main className="mx-auto grid max-w-screen-2xl auto-rows-min grid-cols-2 gap-[10px] px-2 py-2 lg:auto-rows-cards lg:grid-cols-4">
      <Hero />
      <Dashboard />
      <Profile />
      <Projects />
      <Blogs />
      <Skills />
    </main>
  );
};

export default Home;
