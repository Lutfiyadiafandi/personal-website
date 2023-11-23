import HeadingTitle from "@/common/components/elements/HeadingTitle";
import PageWrapper from "@/common/components/layouts/PageWrapper";
import Image from "next/image";

const Blogs = () => {
  return (
    <PageWrapper className="h-screen flex flex-col justify-center items-center gap-10">
      <HeadingTitle
        title={"Blogs"}
        subTitle={"This page is still under development!"}
      />
      <Image
        style={{ width: "250px", height: "auto" }}
        src={"/building.svg"}
        alt={"building"}
        width={0}
        height={0}
        priority
      />
    </PageWrapper>
  );
};

export default Blogs;
