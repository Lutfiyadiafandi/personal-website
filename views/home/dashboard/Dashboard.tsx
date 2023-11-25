"use client";
import Breakline from "@/common/components/elements/Breakline";
import { riseWitFade } from "@/common/utils/framer/Animations";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import moment from "moment";
import Socmed from "@/common/components/elements/Socmed";

const Dashboard = () => {
  const [mantra, setMantra] = useState<any>();
  let currentDate = moment().format("Do");
  const date = currentDate.replace(/(\d+)(th|st|nd|rd)/, "$1");

  const fetchData = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/mantra?id=${date}`
    );
    const data = await res.json();
    setMantra(data.data);
  };
  useEffect(() => {
    fetchData();
  }, [date]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="order-1 col-span-2 row-span-1 rounded-4xl lg:order-2 lg:col-span-2 lg:p-6"
    >
      <div className="flex h-full flex-col justify-end gap-[60px] pt-[100px]">
        <motion.div variants={riseWitFade}>
          <p className="mb-2 text-center text-type-s font-medium text-secondary">
            Today's Mantra
          </p>
          {mantra && (
            <p className="text-center text-type-xl font-semibold text-night md:text-heading-s dark:text-day">
              {`“${mantra?.mantra}”`}
            </p>
          )}
          <Breakline className="my-1 rounded-lg border-night dark:border-day" />
        </motion.div>
        <Socmed />
      </div>
    </motion.div>
  );
};

export default Dashboard;
