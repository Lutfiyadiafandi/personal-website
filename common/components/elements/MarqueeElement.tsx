import React from "react";
import Marquee from "react-fast-marquee";

interface MarqueeElementProps {
  direction?: "left" | "right" | "up";
  children: React.ReactNode;
  classname?: string;
}

export default function MarqueeElement({
  children,
  direction = "left",
  classname,
}: MarqueeElementProps) {
  return (
    <Marquee direction={direction} speed={35} className={`py-3 ${classname}`}>
      {children}
    </Marquee>
  );
}
