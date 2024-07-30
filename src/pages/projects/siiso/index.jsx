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
        <div className="space-y-9 text-tertiary lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://sisoo.vercel.app/"
            src="https://i.ibb.co/cbZ9Tjh/Screenshot-2023-08-30-at-10-33-14.png"
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
          className="mt-20"
        >
          <Image
            alt="thumbnail"
            src={
              "https://i.ibb.co/cbZ9Tjh/Screenshot-2023-08-30-at-10-33-14.png"
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

export default Siiso;
