import Clock from "@/common/components/elements/Clock";

const Dashboard = () => {
  return (
    <div className="order-1 col-span-2 row-span-1 rounded-4xl p-6 lg:order-2 lg:col-span-2">
      <div className="flex h-full flex-col justify-between gap-5 pt-[50px]">
        <div className="flex flex-col lg:gap-3">
          <Clock />
        </div>
        <p className="text-center text-type-xl font-semibold text-night md:text-heading-s dark:text-day">
          “Where your focus goes, your energy flows.”
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
