import React from "react";

type InputFieldProps = {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};
const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  className,
}: InputFieldProps) => {
  return (
    <div className={`relative h-11 w-full ${className}`}>
      <input
        className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 text-type-m font-medium text-night outline outline-0 transition-all placeholder-shown:border-gray-400 focus:border-sky-500 focus:outline-0 dark:text-day"
        placeholder=" "
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-label-xl font-medium text-gray-400 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-sky-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-type-s peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-400 peer-focus:text-label-xl peer-focus:leading-tight peer-focus:text-sky-500 peer-focus:after:scale-x-100 peer-focus:after:border-sky-500">
        {label}
      </label>
    </div>
  );
};

export default InputField;
