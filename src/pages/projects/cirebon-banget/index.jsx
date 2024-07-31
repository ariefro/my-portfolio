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
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722416929/projects/cirebon%20banget/Screenshot_2024-07-31_at_15.40.13_gqlscl.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722416927/projects/cirebon%20banget/Screenshot_2024-07-31_at_15.41.37_dmlzwq.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722416921/projects/cirebon%20banget/Screenshot_2024-07-31_at_15.47.07_um85np.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722418995/projects/cirebon%20banget/Screenshot_2024-07-31_at_16.16.46_iite6m.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722417069/projects/cirebon%20banget/Screenshot_2024-07-31_at_16.10.49_bh5knz.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722416914/projects/cirebon%20banget/Screenshot_2024-07-31_at_15.52.58_gveq2p.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722419128/projects/cirebon%20banget/Screenshot_2024-07-31_at_16.45.13_jslckt.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722418996/projects/cirebon%20banget/Screenshot_2024-07-31_at_16.40.44_vxhzer.png",
];

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
            images={images}
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
          className="my-10 hidden lg:block lg:w-8/12 lg:h-fit mx-auto"
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

export default CirebonBanget;
