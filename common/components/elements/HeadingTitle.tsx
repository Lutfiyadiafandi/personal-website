import React from "react";

type HeadingTitleProps = {
  title: string;
  subTitle: string;
};
const HeadingTitle = ({ title, subTitle }: HeadingTitleProps) => {
  return (
    <div>
      <h1 className="mt-2 text-heading-xl md:text-display2 font-semibold text-center text-transparent text-shadow-sm bg-clip-text bg-gradient-to-br from-night via-night to-rgba(0,0,0,.43) dark:from-day dark:via-day to-rgba(255,255,255,.43)">
        {title}
      </h1>
      <p className="mt-2 text-type-m font-medium text-center text-secondary">
        {subTitle}
      </p>
    </div>
  );
};

export default HeadingTitle;
