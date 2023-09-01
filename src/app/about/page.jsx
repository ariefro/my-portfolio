"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AboutPage() {
  const [isVisible, setIsVisble] = useState("content-one");

  useEffect(() => {
    const contents = document.querySelectorAll(".about-content");

    const isFullyVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
      );
    };

    const handleScroll = () => {
      contents.forEach((content) => {
        if (isFullyVisible(content)) {
          setIsVisble(content.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <div className="text-primary mx-auto text-xl text-center font-bold sm:text-2xl md:text-3xl md:w-1/2 lg:text-4xl lg:w-3/4">
      <motion.p
        className="mb-16 text-center uppercase font-light p-6 tracking-widest text-sm md:p-10"
        viewport={{ once: true }}
        whileInView={{ opacity: 1, transition: { delay: 3 } }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0, transition: { delay: 1 } }}
      >
        scroll down
      </motion.p>

      <section className="h-[50vh] relative">
        <motion.div
          className="absolute z-50 w-full top-1/3 h-80 bg-[#EEEEEE]"
          transition={{ duration: 2, ease: "easeInOut" }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
        ></motion.div>
        <p
          id="content-one"
          className={`about-content ${
            isVisible === "content-one" ? "opacity-100" : "opacity-0"
          }`}
        >
          I recently changed my career. I worked as an Engineer for nearly four
          years, specialized in jet engines for aircraft.
        </p>
      </section>
      <section className="h-[50vh]">
        <p
          id="content-two"
          className={`about-content ${
            isVisible === "content-two" ? "opacity-100" : "opacity-0"
          }`}
        >
          I am a Mechanical Engineering graduate with both an associate and a
          bachelor's degree. My fascination expanded, though, as I started to
          appreciate the mesmerizing beauty of web and app design and how an
          application could address so many issues.
        </p>
      </section>
      <section className="h-[50vh]">
        <p
          id="content-three"
          className={`about-content ${
            isVisible === "content-three" ? "opacity-100" : "opacity-0"
          }`}
        >
          I've been on a quest to learn full-stack web development since 2021,
          and in 2022 I made the career switch to being a backend developer.
        </p>
      </section>
      <section className="h-[50vh]">
        <p
          id="content-four"
          className={`about-content ${
            isVisible === "content-four" ? "opacity-100" : "opacity-0"
          }`}
        >
          When I'm not using the computer, I'm usually reading a book,
          practicing archery, or spending time with my wife and child.
        </p>
      </section>
      <section className="h-[50vh]">
        <p
          id="content-five"
          className={`about-content ${
            isVisible === "content-five" ? "opacity-100" : "opacity-0"
          }`}
        >
          I am immensely grateful to be doing what I love!
        </p>
      </section>
    </div>
  );
}

export default AboutPage;
