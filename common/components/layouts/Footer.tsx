import Breakline from "../elements/Breakline";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto relative">
      <div className="absolute bottom-2 left-0 right-0 px-2">
        <Breakline className="my-2 rounded-lg border-night dark:border-day" />
        <div className="max-w-screen-md mx-auto grid grid-cols-2 grid-rows-2 items-center gap-y-[2px] lg:grid-cols-4 lg:grid-rows-1">
          <p className="text-label-l text-center font-semibold text-night col-span-1 order-2 lg:order-1 dark:text-day">
            100217
          </p>
          <p className="text-label-xl md:text-subheading text-center font-bold text-night col-span-2 order-1 lg:order-2 dark:text-day">
            ALL RIGHTS RESERVED ©2023 — LUTFIYADI AFANDI
          </p>
          <p className="text-label-l text-center font-semibold text-night col-span-1 order-3 dark:text-day select-none">
            네타
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
