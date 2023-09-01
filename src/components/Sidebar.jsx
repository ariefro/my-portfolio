"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from ".";
import Link from "next/link";

function Sidebar() {
  return (
    <motion.div
      className="fixed z-40 flex flex-col items-center space-y-1 right-0 top-1/3 text-tertiary md:top-1/2"
      transition={{
        duration: 1,
        delay: 1,
        type: "spring",
      }}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <Link
        href="https://github.com/ariefro"
        target="_blank"
        className="flex flex-col items-center space-y-4 pt-7 pb-3 rounded-l-lg bg-secondary"
      >
        <p className="-rotate-90">Github</p>
        <Icon.Github className="-rotate-90" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ariefromadhon/"
        target="_blank"
        className="px-[0.85rem] py-2 rounded-l-lg bg-secondary"
      >
        <Icon.Linkedin />
      </Link>
      <Link
        href="https://drive.google.com/file/d/1Ux4bfiJ8j4bDbr0YOd9H3QxQreY84XvQ/view?usp=sharing"
        target="_blank"
        className="px-[0.9rem] py-2 rounded-l-lg bg-secondary"
      >
        CV
      </Link>
    </motion.div>
  );
}

export default Sidebar;
