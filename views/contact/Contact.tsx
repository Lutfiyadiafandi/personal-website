import HeadingTitle from "@/common/components/elements/HeadingTitle";
import Socmed from "@/common/components/elements/Socmed";
import PageWrapper from "@/common/components/layouts/PageWrapper";
import Form from "./form/Form";
import Image from "next/image";

const Contact = () => {
  return (
    <PageWrapper className="py-[60px] lg:pb-0 lg:h-screen">
      <HeadingTitle
        title="Contact"
        subTitle="Feel free to get in touch or just say hi"
      />
      <section className="mt-8 grid gap-[10px] auto-rows-min grid-cols-2 lg:auto-rows-cards">
        <div className="relative col-span-2 row-span-1 lg:col-span-1 rounded-4xl min-h-[210px]">
          <Image
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={"/hero.png"}
            alt="Hero Image"
            priority
            width={0}
            height={0}
            fill
            sizes="(100vw)"
            placeholder="blur"
            blurDataURL="/hero.png"
            className="rounded-4xl"
          />
        </div>
        <div className="p-5 col-span-2 row-span-1 lg:col-span-1">
          <Form />
          <Socmed className="pt-8" />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
