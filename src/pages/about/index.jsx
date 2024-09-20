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
      <div className="text-primary max-w-7xl mx-auto text-xl text-center font-bold sm:text-2xl md:text-3xl md:w-1/2 lg:text-4xl lg:w-3/4">
        <About
          className={"relative mt-[17vh]"}
          id={"content-one"}
          text={
            "I am a Mechanical Engineering graduate with both an associate and a bachelor's degree. I worked as an Engineer for four years, specialized in jet engines for aircraft."
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
            "However, I gradually began to notice the beauty in web and application design, as well as the way an application could solve so many real-world problems. This sparked a growing interest in me, and from that point forward, I became deeply fascinated by the intersection of creativity and technology."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-three"}
          text={
            "I've been on a quest to learn full-stack web development since 2021, and in 2022 I made the career switch to being a backend developer."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-four"}
          text={
            "I have a strong drive for creating efficient solutions and a constant thirst for learning new technologies. I find joy in crafting the architecture and logic that enable a product to function smoothly, ensuring that the technology behind the scenes is both scalable and secure."
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
