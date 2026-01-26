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
  "/projects/metalindo/1.png",
  "/projects/metalindo/2.png",
  "/projects/metalindo/3.png",
  "/projects/metalindo/4.png",
  "/projects/metalindo/5.png",
  "/projects/metalindo/6.png",
  "/projects/metalindo/7.png",
  //   "/projects/metalindo/8.png",
  "/projects/metalindo/9.png",
];

function Metalindo() {
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
          Metalindo
        </motion.h3>

        <section className="mx-7 lg:mx-0 text-tertiary max-w-7xl mb-20 mt-4">
          <h4 className="text-2xl font-bold mb-3">Project Summary</h4>
          <p className="leading-5 opacity-90">
            This project involved designing and developing a production-ready
            B2B corporate website for an industrial supplier, covering UI/UX
            design, dynamic product management, SEO optimization, SMTP-based
            inquiry handling, and real-world deployment using custom domains and
            DNS configuration.
          </p>
        </section>

        <div className="space-y-9 text-tertiary mb-10 lg:mb-24 lg:flex lg:space-x-24 lg:space-y-0">
          <ProjectDetail
            title="About"
            href="https://www.metalindo.co.id/"
            images={images}
            delay={0.3}
            description="Metalindo Sentosa Utama is a trusted B2B supplier of steel products, piping components, fabrication services, and industrial equipment for construction, manufacturing, and engineering sectors. This project provides a modern, responsive company website designed to showcase product information, technical specifications, and company details."
          >
            <Tag label="TypeScript" />
            <Tag label="Next.js" />
            <Tag label="Tailwind" />
            <Tag label="Framer Motion" />
          </ProjectDetail>

          <KeyFeatures>
            <KeyFeature text="Dynamic product & category pages generated from centralized data." />
            <KeyFeature text="SEO-ready structure with metadata and auto-generated sitemap." />
            <KeyFeature text="Contact & inquiry form integrated with custom-domain SMTP." />
            <KeyFeature text="Responsive image gallery using Swiper for product showcases." />
            <KeyFeature text="Fully responsive UI optimized for desktop and mobile devices." />
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

          <ul className="list-disc ml-5 space-y-2 opacity-90">
            <li>Frontend architecture & UI/UX implementation</li>
            <li>Dynamic product system & content structure</li>
            <li>Deployment, DNS configuration, and environment setup</li>
            <li>SEO optimization and performance tuning</li>
          </ul>
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

export default Metalindo;
