import { motion } from "framer-motion";
import {
  Footer,
  Navbar,
  PageWrapper,
  ProjectDescription,
  Sidebar,
  Tag,
} from "@/components";

function ProjectsPage() {
  return (
    <PageWrapper className="bg-primary">
      <Navbar className="text-tertiary" bgLineColor="bg-tertiary" />
      <section className="max-w-7xl mx-auto">
        <motion.h3
          className="text-2xl font-semibold text-tertiary mt-24 md:text-3xl lg:text-4xl"
          transition={{ duration: 2, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Some Things I've Built
        </motion.h3>
        <ul className="flex flex-col space-y-7 pt-16 pb-24 pr-5 text-tertiary lg:w-2/3">
          <ProjectDescription
            title="Cirebon Banget"
            href="/projects/cirebon-banget"
            src="https://i.ibb.co/r3JgV6H/Screenshot-2024-02-07-at-17-55-28.png"
            delay={0.3}
            description="Cirebon Banget is a community portal web application, serves as a
            platform to showcase the existence, achievements, and creativity
            presented with engaging content to enhance the cultural literacy of the
            community, particularly the youth of Cirebon Raya. The application is currently under development."
          />
          <ProjectDescription
            title="Blackbox"
            href="/projects/blackbox"
            src="https://i.ibb.co/h9ZdPrS/Screenshot-2023-08-30-at-11-06-29.png"
            delay={0.6}
            description="Introducing Blackbox, the intelligent AI chatbot app powered by the cutting-edge OpenAI API. Blackbox is designed to be your knowledgeable conversational partner, ready to assist, inform, and engage in insightful discussions anytime, anywhere."
          />
          <ProjectDescription
            title="Siiso"
            href="/projects/siiso"
            src="https://i.ibb.co/cbZ9Tjh/Screenshot-2023-08-30-at-10-33-14.png"
            delay={0.9}
            description="Siiso is web app for visualizing personalized Spotify data. View your top
        artists, top tracks, recently played tracks, and detailed audio
        information about each track. Create and save new playlists of
        recommended tracks based on your existing playlists and more."
          />
          <ProjectDescription
            title="Lakoste"
            href="/projects/lakoste"
            src="https://i.ibb.co/VgqbD1s/Cover-preview.png"
            delay={1.2}
            description="Lakoste is a financial planning app. This is a mentoring project designed to cultivate a supportive community for colleagues who have recently completed bootcamp training, preparing them for job applications and hands-on experience in building industry-like applications. As a backend developer and a passionate advocate for tech enthusiasts, I'm thrilled to be a part of Lakoste, an initiative I've been actively involved in. My role as a backend developer is to contribute technical expertise to this endeavor."
          />
        </ul>
        <Sidebar />
        <Footer
          className="bg-tertiary text-primary"
          buttonClassName="bg-primary text-tertiary"
        />
      </section>
    </PageWrapper>
  );
}

export default ProjectsPage;
