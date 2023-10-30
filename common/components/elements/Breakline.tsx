import React from "react";
type BreaklineProps = {
  className?: string;
};
const Breakline = ({ className }: BreaklineProps) => {
  return (
    <div className={`border-t-2 ${className}`} data-testid="breakline"></div>
  );
};

export default Breakline;
