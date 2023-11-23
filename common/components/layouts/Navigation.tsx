import Link from "next/link";
import Image from "next/image";
import Dropdown from "./Dropdown";
import DarkMode from "../elements/darkmode/DarkMode";

const Navigation = () => {
  return (
    <header className="max-w-screen-2xl mx-auto relative z-50">
      <nav className="w-full lg:w-1/2 absolute top-2 right-0 px-2 flex justify-between items-center gap-2">
        <div className="grow h-[45px] border border-night rounded-full p-[3px] dark:border-day">
          <Dropdown />
        </div>
        <div className="w-[80px] h-[40px] border border-night rounded-full flex justify-center items-center dark:border-day">
          <DarkMode />
        </div>
        <Link
          href={"/"}
          className="w-[45px] h-[45px] border border-night bg-white rounded-full flex justify-center items-center"
        >
          <Image
            src={"/logo.png"}
            width={35}
            height={35}
            alt="Logo"
            priority
            className="aspect-square"
          />
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
