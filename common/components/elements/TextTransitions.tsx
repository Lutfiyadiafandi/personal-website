"use client";
import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

type TextTransitionsProps = {
  texts: [...string[]];
  className: string;
};
const TextTransitions = ({ texts, className }: TextTransitionsProps) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <TextTransition springConfig={presets.wobbly}>
      <h1 className={`${className}`}>{texts[index % texts.length]}</h1>
    </TextTransition>
  );
};

export default TextTransitions;
