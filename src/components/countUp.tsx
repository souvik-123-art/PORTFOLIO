"use client";
import CountUp from "react-countup";

const CountUpComponent = () => {
  const stats = [
    { num: 1, text: "Years of experience" },
    { num: 150, text: "Code commits" },
    { num: 8, text: "Technologies mastered" },
  ];

  return (
    <>
      {stats.map((stat, id) => (
        <div
          key={id}
          className="flex items-center lg:items-start text-center lg:text-left gap-2"
        >
          <CountUp
            className="text-4xl xl:text-5xl font-extrabold text-[#9C27B0]"
            duration={5}
            delay={1}
            end={stat.num}
          />
          <p className="text-sm md:text-base text-gray-700 mt-1">{stat.text}</p>
        </div>
      ))}
    </>
  );
};

export default CountUpComponent;
