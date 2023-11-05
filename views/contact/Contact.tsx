import Button from "@/common/components/elements/Button";
import InputField from "@/common/components/elements/InputField";
import TextArea from "@/common/components/elements/TextArea";
import React from "react";

const Contact = () => {
  return (
    <main className="mx-auto flex max-w-screen-2xl gap-[10px] px-2 py-2 pt-[53px]">
      <section className="hero w-1/2 rounded-4xl"></section>
      <section className="w-1/2 p-5">
        <h1 className="text-heading-m text-center font-semibold text-white md:text-heading-xl xl:text-display1">
          Lets Talks
        </h1>
        <div className="flex flex-wrap gap-5 justify-evenly bg-yellow-20">
          <div className="flex flex-col gap-3">
            <InputField label={"Name"} type={"text"} />
            <InputField label={"Email"} type={"email"} />
            <InputField label={"No WhatsApp"} type={"tel"} />
          </div>
          <div>
            <TextArea label={"Message"} />
          </div>
          <Button text={"Send"} />
        </div>
      </section>
    </main>
  );
};

export default Contact;
