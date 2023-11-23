import SocmedIcon from "./SocmedIcon";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

type SocmedProps = {
  className?: string;
};
const Socmed = ({ className }: SocmedProps) => {
  return (
    <div className={`flex justify-center gap-5 pb-1 ${className}`}>
      <SocmedIcon
        icon={<FaLinkedin size={"100%"} />}
        link="https://www.linkedin.com/in/lutfiyadiafandi/"
      />
      <SocmedIcon
        icon={<FaInstagram size={"100%"} />}
        link="https://www.instagram.com/lutfiyadiafandy/"
      />
      <SocmedIcon
        icon={<FaWhatsapp size={"100%"} />}
        link="https://api.whatsapp.com/send?phone=6287848722224"
      />
      <SocmedIcon
        icon={<FaFacebook size={"100%"} />}
        link="https://www.facebook.com/lutfi.afandy.71/"
      />
      <SocmedIcon
        icon={<FaGithub size={"100%"} />}
        link="https://github.com/lutfiyadiafandi"
      />
    </div>
  );
};

export default Socmed;
