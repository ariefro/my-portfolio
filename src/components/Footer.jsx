"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Footer({ className, buttonClassName }) {
  return (
    <motion.footer
      className={`${className} absolute font-semibold flex flex-col items-center justify-center left-0 right-0 py-20 lg:py-24 lg:flex-row lg:px-56`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
      }}
    >
      <p className="text-5xl text-center leading-10 mb-14 lg:text-8xl lg:text-left lg:mb-0 lg:tracking-wide lg:leading-[5rem] lg:w-[38rem]">
        Let's create something awesome together
      </p>
      <Link href="/contact">
        <motion.button
          className={`${buttonClassName} h-56 w-56 mx-auto rounded-full text-xl transition-all ease-in-out duration-300 lg:text-2xl lg:h-64 lg:w-64 lg:mx-10`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact me
        </motion.button>
      </Link>
    </motion.footer>
  );
}

export default Footer;
