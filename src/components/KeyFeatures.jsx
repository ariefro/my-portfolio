import React from "react";
import { motion } from "framer-motion";

function KeyFeatures({ children }) {
  return (
    <motion.section
      className="px-9 lg:w-1/2 lg:pl-0"
      transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h3 className="text-2xl font-bold">Key Features</h3>
      <ul className="list-disc flex flex-wrap gap-3 mt-5">{children}</ul>
    </motion.section>
  );
}

export default KeyFeatures;
