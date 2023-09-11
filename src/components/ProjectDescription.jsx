"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from ".";

function ProjectDescription({
  href,
  title,
  description,
  src,
  delay,
  children,
}) {
  return (
    <motion.li
      className="flex flex-col-reverse p-7 rounded-lg md:flex-row md:space-x-5"
      transition={{ duration: 2, delay: delay, ease: "easeInOut" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Image
        alt="thumbnail"
        src={src}
        width={250}
        height={120}
        className="mt-5 rounded-md shadow-lg shadow-zinc-700 md:mt-0 md:w-64 md:h-36"
      />
      <div>
        <Link
          href={href}
          target="_blank"
          className="group inline-flex space-x-5 transition-all duration-300"
        >
          <span className="text-2xl font-bold transition-all ease-in-out duration-300 group-hover:text-quaternary">
            {title}
          </span>
          <Icon.Arrow className="rotate-[45deg] translate-y-2.5 transition-transform group-hover:-translate-y-0 group-hover:translate-x-3 group-hover:text-quaternary" />
        </Link>
        <p className="leading-5 mt-3 text-justify">{description}</p>
        <ul className="flex flex-wrap gap-3 mt-5">{children}</ul>
      </div>
    </motion.li>
  );
}

export default ProjectDescription;
