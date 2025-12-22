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

const images = [
  "/projects/scribbly/1.png",
  "/projects/scribbly/2.png",
  "/projects/scribbly/3.png",
  "/projects/scribbly/4.png",
];

function Siiso() {
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
          Scribbly
        </motion.h3>

        <div className="space-y-9 text-tertiary mb-24 lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://scribbly-lake.vercel.app/"
            images={images}
            delay={0.3}
            description="Scribbly is a real-time collaborative text editor inspired by Google Docs, built with Next.js, TypeScript, and TailwindCSS, leveraging Liveblocks and Lexical Editor for real-time functionality."
          >
            <Tag label="TypeScript" />
            <Tag label="Next.js" />
            <Tag label="TailwindCSS" />
            <Tag label="Liveblocks" />
            <Tag label="Lexical Editor" />
            <Tag label="ShadCN" />
          </ProjectDetail>

          <KeyFeatures>
            <KeyFeature
              text={
                "Secure Authentication: Log in using Google through Clerk for secure session management."
              }
            />
            <KeyFeature
              text={
                "Collaborative Text Editor: Multiple users can edit the same document simultaneously with real-time synchronization and conflict resolution."
              }
            />
            <KeyFeature
              text={
                "Active Collaborators: Display active collaborators in real time with presence indicators."
              }
            />
            <KeyFeature
              text={
                "Document Management: Create, delete, share, and list documents with view/edit permissions."
              }
            />
            <KeyFeature
              text={
                "Notifications: Stay updated with alerts for document shares, new comments, and collaborator activities."
              }
            />
            <KeyFeature
              text={
                "Commenting System: Add inline and general comments, with threading for discussions to enhance collaboration."
              }
            />
            <KeyFeature
              text={
                "Responsive Design: Optimized for smooth usage across all devices, from desktops to mobile screens."
              }
            />
          </KeyFeatures>
        </div>

        <motion.div
          transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="my-10 lg:mt-20 hidden lg:block lg:w-8/12 lg:h-fit mx-auto"
        >
          <Carousel images={images} />
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

export default Siiso;
