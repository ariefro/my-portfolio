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

function Blackbox() {
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
          Blackbox
        </motion.h3>
        <div className="space-y-9 text-tertiary lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://blackboxai.vercel.app/"
            src="https://i.ibb.co/h9ZdPrS/Screenshot-2023-08-30-at-11-06-29.png"
            delay={0.3}
            description="Introducing Blackbox, the intelligent AI chatbot app powered by the cutting-edge OpenAI API. Blackbox is designed to be your knowledgeable conversational partner, ready to assist, inform, and engage in insightful discussions anytime, anywhere."
          >
            <Tag label="Typescript" />
            <Tag label="Next.js" />
            <Tag label="Tailwind" />
            <Tag label="OpenAI API" />
            <Tag label="Firebase" />
          </ProjectDetail>
          <KeyFeatures>
            <KeyFeature
              text={
                "Individual Workspaces: Flexibility creates workspaces, ensuring isolation of chat topics as needed."
              }
            />
            <KeyFeature
              text={
                "Instant Knowledge: Access a wealth of information instantly. ConversaBot connects to vast knowledge sources to provide you with accurate answers and valuable insights on a wide range of topics."
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
              "https://i.ibb.co/h9ZdPrS/Screenshot-2023-08-30-at-11-06-29.png"
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

export default Blackbox;
