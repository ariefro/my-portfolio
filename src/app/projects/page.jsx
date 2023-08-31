import { ProjectDescription, Tag } from "@/components";
import React from "react";

function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto">
      <ul className="flex flex-col space-y-7 py-24 pr-5 text-tertiary lg:w-2/3">
        <ProjectDescription
          title="Wallet"
          href="https://lakoste.vercel.app/"
          src="https://i.ibb.co/VgqbD1s/Cover-preview.png"
          description="Financial planning app that is Initiative project for mentoring
          program"
        >
          <Tag label="Next.js" />
          <Tag label="Tailwind CSS" />
          <Tag label="Redux" />
          <Tag label="Express" />
          <Tag label="Postgresql" />
          <Tag label="Docker" />
        </ProjectDescription>
        <ProjectDescription
          title="Spotify Profile"
          href="https://sisoo.vercel.app/"
          src="https://i.ibb.co/cbZ9Tjh/Screenshot-2023-08-30-at-10-33-14.png"
          description="Web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more."
        >
          <Tag label="Next.js" />
          <Tag label="NextAuth.js" />
          <Tag label="Tailwind CSS" />
          <Tag label="Chart.js" />
          <Tag label="Spotify API" />
        </ProjectDescription>
        <ProjectDescription
          title="Build a AI Chatbot"
          href="https://blackboxai.vercel.app/"
          src="https://i.ibb.co/h9ZdPrS/Screenshot-2023-08-30-at-11-06-29.png"
          description="AI Chatbot with OpenAI API"
        >
          <Tag label="Next.js" />
          <Tag label="NextAuth.js" />
          <Tag label="Tailwind CSS" />
          <Tag label="OpenAI API" />
          <Tag label="Firebase" />
        </ProjectDescription>
      </ul>
    </section>
  );
}

export default ProjectsPage;
