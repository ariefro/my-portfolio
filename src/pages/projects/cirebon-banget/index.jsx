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

function CirebonBanget() {
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
          Cirebon Banget
        </motion.h3>
        <div className="space-y-9 text-tertiary lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://cirebon-banget-web.vercel.app/"
            src="https://i.ibb.co/r3JgV6H/Screenshot-2024-02-07-at-17-55-28.png"
            delay={0.3}
            description="Cirebon Banget is a community portal web application, serves as a
            platform to showcase the existence, achievements, and creativity
            presented with engaging content to enhance the cultural literacy of the
            community, particularly the youth of Cirebon Raya. The application is currently under development."
          >
            <Tag label="Javascript" />
            <Tag label="Next.js" />
            <Tag label="Tailwind" />
            <Tag label="Redux" />
            <Tag label="Go" />
            <Tag label="Go Fiber" />
            <Tag label="PostgreSQL" />
            <Tag label="GORM" />
            <Tag label="Docker" />
          </ProjectDetail>
          <KeyFeatures>
            <KeyFeature
              text={
                "User Profiles: Users can create personalized profiles to engage with the community, share their achievements, and connect with others."
              }
            />
            <KeyFeature
              text={
                "Content Showcase: A platform to showcase various aspects of Cirebon Raya's culture, including arts, music, traditions, cuisine, and local events."
              }
            />
            <KeyFeature
              text={
                "Engaging Content: Curated and user-generated content to highlight the creativity, talent, and achievements of the community members, particularly focusing on the youth."
              }
            />
            <KeyFeature
              text={
                "Interactive Forums: Discussion forums where users can exchange ideas, share experiences, and discuss topics related to Cirebon Raya's culture, heritage, and contemporary issues."
              }
            />
            <KeyFeature
              text={
                "Community Blog: A platform for community members, local artists, historians, and enthusiasts to contribute articles, stories, and insights about Cirebon's culture and heritage."
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
            src={
              "https://i.ibb.co/r3JgV6H/Screenshot-2024-02-07-at-17-55-28.png"
            }
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

export default CirebonBanget;
