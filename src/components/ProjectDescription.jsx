"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icon } from ".";

function ProjectDescription({ href, title, description, delay }) {
  return (
    <Link href={href} className="group transition-all duration-300">
      <motion.li
        className="flex flex-col-reverse rounded-lg md:flex-row md:space-x-5"
        transition={{ duration: 2, delay: delay, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div>
          <div className="group inline-flex space-x-5 transition-all duration-300">
            <span className="text-2xl font-bold transition-all ease-in-out duration-300 group-hover:text-quaternary">
              {title}
            </span>
            <Icon.Arrow className="rotate-[45deg] translate-y-2.5 transition-transform group-hover:-translate-y-0 group-hover:translate-x-3 group-hover:text-quaternary" />
          </div>

          <p className="leading-5 mt-3 w-3/4 lg:w-full">{description}</p>
        </div>
      </motion.li>
    </Link>
  );
}

export default ProjectDescription;
