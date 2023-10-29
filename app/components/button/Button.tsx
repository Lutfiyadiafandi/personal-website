import React from "react";

type ButtonProps = {
  text: string;
};
const Button = ({ text }: ButtonProps) => {
  return (
    <button className="w-[180px] py-2 text-black text-small font-medium border-2 border-black rounded-full hover:bg-black hover:text-green-30 hover:text-white transition-all ease-in-out duration-500">
      {text}
    </button>
  );
};

export default Button;
