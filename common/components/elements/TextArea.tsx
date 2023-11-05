import React from "react";

type TextAreaProps = {
  label: string;
};
const TextArea = ({ label }: TextAreaProps) => {
  return (
    <div className="relative h-11 w-[280px]">
      <textarea
        className="peer min-h-[156px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-type-m font-medium text-white outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-sky-500 focus:outline-0"
        placeholder=" "
        required
      ></textarea>
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-label-xl font-medium text-gray-400 transition-all after:absolute after:-bottom-[118px] after:block after:w-full after:scale-x-0 after:border-b-2 after:border-sky-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-type-s peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-400 peer-focus:text-label-xl peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:after:scale-x-100 peer-focus:after:border-sky-500">
        {label}
      </label>
    </div>
  );
};

export default TextArea;
