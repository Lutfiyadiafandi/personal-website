import Nav from "@/common/data/Nav.json";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Menu = () => {
  const router = usePathname();
  return (
    <ul
      className="mt-[12px] w-full flex flex-col bg-night rounded-xl dark:bg-day"
      style={{
        clipPath: "inset(10% 50% 90% 50% round 10px)",
      }}
    >
      {Nav.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          passHref
          className={`px-4 py-3 text-type-m cursor-pointer rounded-xl hover:bg-amber-200 hover:text-amber-900 ${
            router === item.path
              ? "text-amber-200 dark:text-amber-600 font-bold"
              : "text-day dark:text-night font-medium"
          }`}
        >
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
