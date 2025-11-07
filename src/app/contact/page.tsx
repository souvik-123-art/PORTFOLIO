"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import ParticlesContainer from "@/components/particlesBg";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const formData = new FormData(form.current!);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        form.current?.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <ParticlesContainer />

      <div className="relative h-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-10 gap-12">
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl text-center lg:text-left z-30">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}{" "}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full lg:w-1/2 bg-red-50 rounded-2xl shadow-lg text-base sm:text-lg md:text-xl flex flex-col gap-6 sm:gap-8 justify-center p-6 sm:p-10 md:p-16 z-30"
        >
          <span className="font-medium">Dear Souvik Sarkar,</span>

          <textarea
            rows={5}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none p-2"
            name="user_message"
            placeholder="Write your message here..."
          />

          <span className="font-medium">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none p-2"
            placeholder="youremail@example.com"
          />

          <span className="font-medium">Regards</span>

          <button
            className="bg-purple-200 hover:bg-purple-300 transition-colors cursor-pointer rounded-xl font-semibold text-gray-700 p-3 sm:p-4"
            type="submit"
          >
            Send
          </button>

          {success && (
            <span className="text-green-600 font-semibold text-sm sm:text-base">
               Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm sm:text-base">
               Something went wrong! Please try again.
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
