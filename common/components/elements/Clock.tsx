"use client";
import React from "react";
import { useEffect, useState, useRef } from "react";
import moment from "moment";
import Breakline from "@/common/components/elements/Breakline";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getGreeting = () => {
    const currentHour = moment().hour();

    if (currentHour > 22 || currentHour < 5) {
      return "Good night";
    } else if (currentHour > 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour > 12 && currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, 1000);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  return (
    <>
      <p
        className="text-center text-heading-xl font-semibold text-night md:text-display2 dark:text-day"
        suppressHydrationWarning={true}
      >
        {currentTime}
      </p>
      <div>
        <p className="text-center text-type-xl font-semibold text-night md:text-heading-s dark:text-day">
          {getGreeting()}
        </p>
        <Breakline className="my-1 rounded-lg border-night dark:border-day" />
      </div>
    </>
  );
};

export default Clock;
