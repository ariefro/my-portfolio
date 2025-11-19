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
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722386740/projects/siiso/Screenshot_2024-07-30_at_21.09.05_saqrho.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722386743/projects/siiso/Screenshot_2024-07-30_at_21.09.25_aclrzv.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722386741/projects/siiso/Screenshot_2024-07-30_at_21.10.24_vmhx7q.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722386740/projects/siiso/Screenshot_2024-07-30_at_21.10.45_u8bn4m.png",
  "https://res.cloudinary.com/ddcummtld/image/upload/v1722398524/projects/siiso/Screenshot_2024-07-31_at_11.01.39_nsgnnu.png",
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
          Siiso
        </motion.h3>

        <div className="space-y-9 text-tertiary mb-24 lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://sisoo.vercel.app/"
            images={images}
            delay={0.3}
            description="Siiso is web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more."
          >
            <Tag label="Javascript" />
            <Tag label="Next.js" />
            <Tag label="Tailwind" />
            <Tag label="Chart.js" />
            <Tag label="Spotify API" />
          </ProjectDetail>

          <KeyFeatures>
            <KeyFeature
              text={
                "Personalized Insights: The app provides a comprehensive overview of your Spotify journey. Discover your top artists and top tracks, and delve into detailed audio information about each song."
              }
            />
            <KeyFeature
              text={
                "Audio Analysis: Get up close and personal with your favorite songs. Explore audio details like tempo, danceability, and valence to gain a deeper understanding of why certain tracks resonate with you."
              }
            />
            <KeyFeature
              text={
                "Playlist Recommendations: Create and save new playlists based on your existing playlists. Our advanced algorithms analyze your music preferences and suggest tracks that match your taste seamlessly."
              }
            />
            <KeyFeature
              text={
                "Recently Played Tracks: Stay up-to-date with your music exploration by exploring your recently played tracks. Revisit those moments of musical inspiration and relive your music discovery journey."
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
