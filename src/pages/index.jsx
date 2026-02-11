import { motion } from "framer-motion";
import { Navbar, PageWrapper, Sidebar } from "@/components";

function Home() {
  const config = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto">
        <Navbar className="text-primary" bgLineColor="bg-secondary" />
        <section>
          <div className="text-primary relative mt-16 space-y-5">
            <motion.p
              className="font-bold text-5xl leading-tight sm:text-7xl md:text-9xl"
              transition={config}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Arief
              <br />
              Romadhon
            </motion.p>
            <motion.p
              className="font-light text-lg tracking-widest md:text-2xl md:tracking-[0.5rem]"
              transition={{ ...config, delay: 0.5 }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
            >
              BACKEND DEVELOPER
            </motion.p>
          </div>
          {/*<motion.p*/}
          {/*  className="mt-14 text-sm w-64 md:text-lg md:w-80"*/}
          {/*  transition={{ ...config, delay: 1.5 }}*/}
          {/*  initial={{ opacity: 0 }}*/}
          {/*  animate={{ opacity: 1 }}*/}
          {/*>*/}
          {/*  Currently looking for opportunities as a backend developer*/}
          {/*</motion.p>*/}
          <motion.div
            className="absolute bottom-5 text-sm md:text-lg"
            transition={{ ...config, delay: 1.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p>BLITAR, INDONESIA</p>
            <p>ariefromadhon26@gmail.com</p>
          </motion.div>
          <Sidebar />
        </section>
      </div>
    </PageWrapper>
  );
}

export default Home;
