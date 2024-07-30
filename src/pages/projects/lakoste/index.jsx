import React from "react";
import { motion } from "framer-motion";
import {
  Footer,
  KeyFeature,
  KeyFeatures,
  Navbar,
  PageWrapper,
  ProjectDetail,
  Sidebar,
  Tag,
} from "@/components";
import Image from "next/image";

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
        <div className="space-y-9 text-tertiary lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://lakoste.vercel.app/"
            src="https://i.ibb.co/VgqbD1s/Cover-preview.png"
            delay={0.3}
            description="Lakoste is a financial planning app. This is a mentoring project designed to cultivate a supportive community for colleagues who have recently completed bootcamp training, preparing them for job applications and hands-on experience in building industry-like applications. As a backend developer and a passionate advocate for tech enthusiasts, I'm thrilled to be a part of Lakoste, an initiative I've been actively involved in. My role as a backend developer is to contribute technical expertise to this endeavor."
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
                "Mentoring and community building: The project fosters a supportive community where colleagues can engage in mentoring and collaborative learning."
              }
            />
            <KeyFeature
              text={
                "Industry-like app development: Participants gain hands-on experience in building applications similar to those found in the industry."
              }
            />
            <KeyFeature
              text={
                "Playground for feature development: The app offers a platform for exploring and developing various features, allowing participants to enhance their skills and creativity."
              }
            />
          </KeyFeatures>
        </div>
        <motion.div
          transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-20"
        >
          <Image
            alt="thumbnail"
            src={"https://i.ibb.co/VgqbD1s/Cover-preview.png"}
            width={2160}
            height={1600}
            className="hidden rounded-md shadow-lg shadow-zinc-700 lg:block mx-auto lg:w-8/12 lg:h-fit"
          />
        </motion.div>
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
