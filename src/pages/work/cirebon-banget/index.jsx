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
import BackendContributions from "@/components/projects/cirebon-banget/BackendContributions";
import FrontendContributions from "@/components/projects/cirebon-banget/FrontendContributions";

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

        <div className="space-y-9 text-tertiary mb-10 lg:mb-24 lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://www.cirebonbanget.com/"
            images={images}
            delay={0.3}
            description="Cirebon Banget is a community portal web application that serves as a platform to showcase the existence, achievements, and creativity presented with engaging content to enhance the cultural literacy of the community, particularly the youth of Cirebon Raya."
          >
            <Tag label="Javascript" />
            <Tag label="Next.js" />
            <Tag label="Tailwind" />
            <Tag label="Redux" />
            <Tag label="Go" />
            <Tag label="Go Fiber" />
            <Tag label="PostgreSQL" />
            <Tag label="GORM" />
            <Tag label="Redis" />
            <Tag label="Docker" />
          </ProjectDetail>
          <KeyFeatures>
            <KeyFeature
              text={
                "Users can create personalized profiles, update profile pictures, and manage personal information securely. Users can also track their published articles, bookmarked content, and other activity history."
              }
            />
            <KeyFeature
              text={
                "A platform for users to publish articles highlighting various aspects of Cirebon Raya’s culture, including arts, music, traditions, cuisine, and local events. Users can search and filter articles by category, tag, or title."
              }
            />
            <KeyFeature
              text={
                "Curated and user-generated content where users can contribute articles, leave comments, and interact through likes and bookmarks, fostering engagement and community participation."
              }
            />
            <KeyFeature
              text={
                "Secure user authentication system, including Google login, email verification, and password reset."
              }
            />
            <KeyFeature
              text={
                "Real-time notifications keep users updated on relevant interactions, such as new comments on their articles or other significant activities requiring their attention."
              }
            />
            <KeyFeature
              text={
                "Users can request membership within the community, enabling role-based access or privileges within the platform."
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

        <div className="text-tertiary mt-24 px-9">
          <h2 className="text-2xl font-bold mb-4">My Role and Contributions</h2>

          <p className="mb-4">
            As the <strong>Backend Developer</strong>, I was responsible for
            designing and implementing the entire backend infrastructure,
            focusing on building a secure, scalable, and high-performance
            system. Additionally, I contributed to frontend development to
            ensure a smooth and cohesive user experience. Below are my specific
            contributions:
          </p>

          <BackendContributions />
          <FrontendContributions />
        </div>

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
