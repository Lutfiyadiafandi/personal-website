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
        icon={<FaGithub size={"100%"} />}
        link="https://github.com/lutfiyadiafandi"
      />
    </div>
  );
};

export default Socmed;
