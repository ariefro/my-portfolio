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
        <ul className="flex flex-col space-y-12 pt-16 pb-24 pr-5 text-tertiary lg:w-2/3">
          <ProjectDescription
            title="Cirebon Banget"
            href="/work/cirebon-banget"
            delay={0.3}
            description="Cirebon Banget is a web application that showcases the achievements and creativity of the Cirebon community, with engaging content aimed at enhancing cultural literacy, especially among the youth of Cirebon Raya."
          />
          <ProjectDescription
            title="Metalindo Sentosa Utama"
            href="/work/metalindo"
            delay={0.3}
            description="Metalindo Sentosa Utama is a trusted B2B supplier of steel products, piping components, fabrication services, and industrial equipment for construction, manufacturing, and engineering sectors. This project provides a modern, responsive company website designed to showcase product information, technical specifications, and company details."
          />
          <ProjectDescription
            title="Scribbly"
            href="/work/scribbly"
            delay={0.3}
            description="Scribbly is a real-time collaborative text editor inspired by Google Docs, built with Next.js, TypeScript, and TailwindCSS, leveraging Liveblocks and Lexical Editor for real-time functionality."
          />
          <ProjectDescription
            title="Blackbox"
            href="/work/blackbox"
            src="https://i.ibb.co/h9ZdPrS/Screenshot-2023-08-30-at-11-06-29.png"
            delay={0.6}
            description="Meet Blackbox, the smart AI chatbot app powered by the advanced OpenAI API. It's your go-to conversational partner, offering assistance, information, and engaging discussions whenever you need them."
          />
          <ProjectDescription
            title="Siiso"
            href="/work/siiso"
            src="https://i.ibb.co/cbZ9Tjh/Screenshot-2023-08-30-at-10-33-14.png"
            delay={0.9}
            description="Siiso is a web app that visualizes your personalized Spotify data. Easily view your top artists, tracks, and recently played songs, along with detailed audio information for each track. Plus, you can create and save new playlists based on recommendations from your existing playlists and much more."
          />
          <ProjectDescription
            title="Lakoste"
            href="/work/lakoste"
            src="https://i.ibb.co/VgqbD1s/Cover-preview.png"
            delay={1.2}
            description="Lakoste is a financial planning app and mentoring project tailored for colleagues fresh out of bootcamp training, providing support for job applications and hands-on experience in building industry-like applications. As a backend developer and avid tech advocate, I'm excited to contribute my technical expertise to Lakoste, an initiative I've been deeply involved in."
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
