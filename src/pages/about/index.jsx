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
            "I am a web developer with a specialization in backend development, focused on building APIs and application architectures that are scalable and maintainable."
          }
          isVisible={isVisible}
        >
          <motion.div
            className="absolute z-40 w-full top-[30%] h-80 bg-[#EEE]"
            transition={{ duration: 2, ease: "easeInOut" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
          ></motion.div>
        </About>
        <About
          id={"content-two"}
          text={
            "I started my career as an aircraft engine engineer, where precision, reliability, and system thinking were critical. Today, I bring that same engineering discipline into software — designing systems that are maintainable, performant, and built for long-term growth."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-three"}
          text={
            "My shift into software began with curiosity about how digital products solve real-world problems at scale. That curiosity quickly turned into a full commitment Since 2021, I’ve been deeply focused on web development — building projects, studying system design, and refining how I write clean, production-ready code."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-four"}
          text={
            "In 2022, I transitioned into software engineering professionally and became a backend developer at AIForesee."
          }
          isVisible={isVisible}
        />
        <About
          id={"content-five"}
          className={"mb-20"}
          text={"There, I’ve worked on production systems, external API integrations, and backend services with a focus on performance, reliability, and clean architecture. I enjoy turning complex requirements into simple, well-structured systems that teams can confidently build on."}
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
