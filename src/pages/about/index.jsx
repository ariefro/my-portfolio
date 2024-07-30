import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { About, Footer, Navbar, PageWrapper } from "@/components";

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
    <PageWrapper className="bg-tertiary">
      <Navbar className="text-primary" bgLineColor="bg-secondary" />
      <div className="text-primary max-w-7xl mx-auto text-xl text-center font-semibold sm:text-2xl md:text-3xl md:w-1/2 lg:text-4xl lg:w-3/4">
        <About
          className={"relative mt-[17vh]"}
          id={"content-one"}
          text={
            "I am a Mechanical Engineering graduate with both an associate and a bachelor's degree. My fascination expanded, though, as I started to appreciate the mesmerizing beauty of web and app design and how an application could address so many issues."
          }
          isVisible={isVisible}
        >
          <motion.div
            className="absolute z-40 w-full top-1/3 h-80 bg-[#EEEEEE]"
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
          ></motion.div>
        </About>
        <About
          id={"content-two"}
          text={
            "I am a Mechanical Engineering graduate with both an associate and a bachelor's degree. My fascination expanded, though, as I started to appreciate the mesmerizing beauty of web and app design and how an application could address so many issues."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-three"}
          text={
            " I've been on a quest to learn full-stack web development since 2021, and in 2022 I made the career switch to being a backend developer."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-four"}
          text={
            "When I'm not using the computer, I'm usually reading a book, practicing archery, or spending time with my wife and child."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-five"}
          text={"I am immensely grateful to be doing what I love!"}
          isVisible={isVisible}
        />
        <Footer
          className="bg-primary text-tertiary"
          buttonClassName="bg-tertiary text-primary"
        />
      </div>
    </PageWrapper>
  );
}

export default AboutPage;
