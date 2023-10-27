import React from "react";

type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps) => {
  return (
    <button className="w-[200px] py-2 text-black text-base font-medium border-2 border-black rounded-full hover:bg-black hover:text-green-300 transition-all ease-in-out duration-300">
      {text}
    </button>
  );
};

export default Button;
