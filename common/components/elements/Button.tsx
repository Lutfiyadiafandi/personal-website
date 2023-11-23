import React from "react";
import ArrowIcons from "./ArrowIcons";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};
const Button = ({ text, disabled }: ButtonProps) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-[150px] py-[7px] flex justify-center items-center gap-2 text-night text-type-s font-medium border border-night rounded-3xl hover:bg-night hover:opacity-95 hover:text-day transition-all ease-in-out duration-500 group dark:text-day dark:border-day dark:hover:bg-day dark:hover:text-night
      ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"} 
      `}
    >
      <span>{disabled ? "Submitting..." : `${text}`}</span>
      <ArrowIcons
        color="night"
        colorhover="day"
        darkmode="dark:text-day dark:group-hover:text-night"
      />
    </button>
  );
};

export default Button;
