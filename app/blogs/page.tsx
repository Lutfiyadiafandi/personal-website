import Blogs from "@/views/blogs/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blogs | Lutfiyadi Afandi`,
  description: `Personal Website, portfolio, blog`,
};

const BlogsPage = () => {
  return (
    <>
      <Blogs />
    </>
  );
};
export default BlogsPage;
