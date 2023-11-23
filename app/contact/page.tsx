import Contact from "@/views/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact | Lutfiyadi Afandi`,
  description: `Personal Website, portfolio, blog`,
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};
export default ContactPage;
