import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  Footer,
  KeyFeature,
  KeyFeatures,
  Navbar,
  PageWrapper,
  ProjectDetail,
  Sidebar,
  Tag,
} from "@/components";
import BackendContributions from "@/components/projects/lakoste/BackendContributions";

const images = [
  "/projects/lakoste/1.png",
  "/projects/lakoste/2.png",
  "/projects/lakoste/3.png",
  "/projects/lakoste/4.png",
  "/projects/lakoste/5.png",
  "/projects/lakoste/6.png",
  "/projects/lakoste/7.png",
];

function Lakoste() {
  return (
    <PageWrapper className="bg-primary">
      <Navbar className="text-tertiary" bgLineColor="bg-tertiary" />
      <section className="max-w-7xl mx-auto">
        <motion.h3
          className="text-7xl mx-7 font-extrabold text-tertiary my-24 lg:mx-0 lg:text-9xl"
          transition={{ duration: 2, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Lakoste
        </motion.h3>

        <div className="space-y-9 text-tertiary lg:mb-24 lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://lakoste.vercel.app/"
            images={images}
            delay={0.3}
            description="Lakoste is a financial planning application designed as part of a mentoring initiative. The primary goal of this project is to foster a supportive community for recent bootcamp graduates, providing them with real-world experience in building industry-grade applications while preparing them for job applications. As a backend developer and a committed advocate for nurturing tech talent, I’m excited to contribute to Lakoste and be part of a project that bridges the gap between training and practical experience."
          >
            <Tag label="Javascript" />
            <Tag label="Next.js" />
            <Tag label="Tailwind" />
            <Tag label="Redux" />
            <Tag label="Node.js" />
            <Tag label="Express" />
            <Tag label="PostgreSQL" />
            <Tag label="Sequelize" />
            <Tag label="Docker" />
          </ProjectDetail>
          <KeyFeatures>
            <KeyFeature
              text={
                "Financial planning: The app provides functionality as a financial planner, helping users manage their finances effectively."
              }
            />
            <KeyFeature
              text={
                "Mentorship and Community: The project promotes a collaborative environment where participants can seek mentorship, share knowledge, and grow together through peer learning."
              }
            />
            <KeyFeature
              text={
                "Industry-Like Application Development: Participants gain hands-on experience in developing features and systems that mirror real-world applications, preparing them for professional roles in the tech industry."
              }
            />
            <KeyFeature
              text={
                "Feature Development Playground: Lakoste acts as a sandbox for creativity, enabling developers to ideate, experiment, and implement various features that align with industry standards."
              }
            />
          </KeyFeatures>
        </div>

        <motion.div
          transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden mt-20 lg:block justify-center items-center lg:w-8/12 lg:h-fit mx-auto rounded-xl overflow-hidden"
        >
          <Carousel images={images} />
        </motion.div>

        <BackendContributions />

        <div className="h-5 lg:h-28"></div>
        <Sidebar />
        <Footer
          className="bg-tertiary text-primary"
          buttonClassName="bg-primary text-tertiary"
        />
      </section>
    </PageWrapper>
  );
}

export default Lakoste;
