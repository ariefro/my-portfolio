"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Carousel } from ".";

function ProjectDetail({ title, description, href, images, delay, children }) {
  return (
    <motion.div
      className="px-9 rounded-lg lg:w-1/2 lg:pl-0 lg:pr-4"
      transition={{ duration: 2, delay: delay, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span className="text-2xl font-bold transition-all ease-in-out duration-300">
        {title}
      </span>
      <p className="leading-5 mt-3">{description}</p>
      <motion.div
        transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="lg:hidden my-7 flex justify-center items-center lg:w-8/12 lg:h-fit mx-auto"
      >
        <Carousel images={images} />
      </motion.div>
      <ul className="flex flex-wrap gap-3 my-8">{children}</ul>
      <Link
        href={href}
        target="_blank"
        className="underline underline-offset-4 font-bold hover:text-quaternary transition-all ease-in-out duration-300"
      >
        Visit website
      </Link>
    </motion.div>
  );
}

export default ProjectDetail;
