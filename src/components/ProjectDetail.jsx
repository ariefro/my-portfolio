"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

function ProjectDetail({ title, description, href, src, delay, children }) {
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
      <ul className="flex flex-wrap gap-3 my-8">{children}</ul>
      <Link
        href={href}
        target="_blank"
        className="underline underline-offset-4 font-bold hover:text-quaternary transition-all ease-in-out duration-300"
      >
        Visit website
      </Link>
      <Image
        alt="thumbnail"
        src={src}
        width={360}
        height={210}
        className="mt-10 rounded-md shadow-lg shadow-zinc-700 lg:hidden"
      />
    </motion.div>
  );
}

export default ProjectDetail;
