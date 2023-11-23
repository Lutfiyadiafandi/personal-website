import Home from "@/views/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Lutfiyadi Afandi | Personal Website`,
  description: `Personal Website, portfolio, blog`,
};

export default function Homepage() {
  return (
    <>
      <Home />
    </>
  );
}
