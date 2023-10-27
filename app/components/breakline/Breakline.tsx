import React from "react";
type BreaklineProps = {
  className?: string;
  [propName: string]: string | undefined;
};
const Breakline = ({ className, ...others }: BreaklineProps) => {
  return (
    <div
      className={`border-t my-2 ${className}`}
      data-testid="breakline"
      {...others}
    ></div>
  );
};

export default Breakline;
