import { ProjectDescription } from "@/components";
import React from "react";

function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-10 py-24 pr-5 text-tertiary lg:w-2/3">
        <ProjectDescription
          title="Wallet"
          href="#"
          src="https://i.ibb.co/VgqbD1s/Cover-preview.png"
          description="Financial planning app that is Initiative project for mentoring
          program"
        />
        <ProjectDescription
          title="Spotify Profile"
          href="https://sisoo.vercel.app/"
          src="https://i.ibb.co/cbZ9Tjh/Screenshot-2023-08-30-at-10-33-14.png"
          description="Web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more."
        />
        <ProjectDescription
          title="Build a AI Chatbot"
          href="https://blackboxai.vercel.app/"
          src="https://i.ibb.co/h9ZdPrS/Screenshot-2023-08-30-at-11-06-29.png"
          description="AI Chatbot with OpenAI API"
        />
      </div>
    </section>
  );
}

export default ProjectsPage;
