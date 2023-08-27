import { ProjectDescription } from "@/components";
import React from "react";

function ProjectsPage() {
  return (
    <section className="max-w-7xl px-4 mx-auto bg-pink-300">
      <div className="flex flex-col space-y-10 py-24 pr-5 text-tertiary md:w-1/2">
        <ProjectDescription
          href="#"
          title="wallet"
          description="Financial planning app that is Initiative project for mentoring
          program"
        />
        <ProjectDescription
          href="#"
          title="spotify profile"
          description="Web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more."
        />
        <ProjectDescription
          href="#"
          title="blackbox"
          description="AI Chatbot with OpenAI API"
        />
      </div>
    </section>
  );
}

export default ProjectsPage;
