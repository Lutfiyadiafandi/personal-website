import Link from "next/link";

type SocmedProps = {
  icon: any;
  link: string;
};
const SocmedIcon = ({ icon, link }: SocmedProps) => {
  return (
    <Link
      href={link}
      passHref={true}
      rel="noopener noreferrer"
      target="_blank"
      className="w-[30px] h-[30px] text-secondary duration-500 ease-in-out transition-all hover:text-night dark:hover:text-day"
    >
      {icon}
    </Link>
  );
};

export default SocmedIcon;
