import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} />
        <motion.div
          className="absolute z-50 top-0 left-0 w-full h-full bg-secondary origin-bottom"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="absolute z-50 top-0 left-0 w-full h-full bg-secondary origin-top"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </motion.div>
      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
            icon: "🚀",
          },
          error: {
            duration: 3000,
          },
        }}
      />
    </AnimatePresence>
  );
}

export default App;
