"use client";
import Typewriter from "typewriter-effect";
const TypeWritter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer.",
          "Backend Developer.",
          "Mern Developer.",
          "NextJs Developer.",
          "Full Stack Developer.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed:50,
      }}
    />
  );
};

export default TypeWritter;
