import HeadingTitle from "@/common/components/elements/HeadingTitle";
import PageWrapper from "@/common/components/layouts/PageWrapper";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Lutfiyadi Afandi | Personal Website`,
  description: `Personal Website, portfolio, blog`,
};

export default function NotFoundpage() {
  return (
    <>
      <PageWrapper className="h-screen flex flex-col justify-center items-center gap-10">
        <HeadingTitle
          title="Page Not Found"
          subTitle="The page you are looking for does not exist"
        />
        <Image
          style={{ width: "250px", height: "auto" }}
          src={"/page_not_found.svg"}
          alt={"404 - Page Not Found"}
          width={0}
          height={0}
          priority
        />
      </PageWrapper>
    </>
  );
}
