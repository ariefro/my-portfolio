"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from ".";

function Navbar({ className, bgLineColor }) {
  const [isNavExpand, setIsNavExpand] = useState(false);

  const toogleNavItems = () => {
    setIsNavExpand(!isNavExpand);
  };

  return (
    <header className="max-w-7xl mx-auto text-lg">
      <motion.nav
        className={`${className} flex justify-between items-center h-28 md:h-24`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
      >
        <p className="font-semibold">PORTOFOLIO 2025</p>
        <div className="hidden font-semibold text-md md:flex space-x-20">
          <Link
            href="/"
            className="hover:text-quaternary transition-all duration-200"
          >
            home
          </Link>
          <Link
            href="/about"
            className="hover:text-quaternary transition-all duration-200"
          >
            about
          </Link>
          <Link
            href="/work"
            className="hover:text-quaternary transition-all duration-200"
          >
            work
          </Link>
          <Link
            href="/contact"
            className="hover:text-quaternary transition-all duration-200"
          >
            contact
          </Link>
        </div>

        {isNavExpand ? (
          <motion.div
            className="fixed z-50 inset-0 bg-primary text-tertiary"
            initial={{ opacity: 1, y: "-100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              onClick={() => toogleNavItems()}
              className="absolute top-9 right-5 hover:text-quaternary transition-all duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2.4 }}
            >
              <Icon.Close />
            </motion.button>
            <div className="flex flex-col font-semibold text-6xl space-y-6 mt-32 ml-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.4 }}
              >
                <Link
                  href="/"
                  className="hover:text-quaternary transition-all duration-200"
                >
                  home
                </Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 0.8 }}
              >
                <Link
                  href="/about"
                  className="hover:text-quaternary transition-all duration-200"
                >
                  about
                </Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              >
                <Link
                  href="/work"
                  className="hover:text-quaternary transition-all duration-200"
                >
                  work
                </Link>
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.6 }}
              >
                <Link
                  href="/contact"
                  className="hover:text-quaternary transition-all duration-200"
                >
                  contact
                </Link>
              </motion.span>
            </div>
            <motion.p
              className="absolute text-md bottom-5 ml-4"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              ariefromadhon26@gmail.com
            </motion.p>
          </motion.div>
        ) : (
          <button
            onClick={() => toogleNavItems()}
            id="hamburger"
            aria-label="hamburger"
            role="button"
            className={`${className} md:hidden`}
          >
            <Icon.Hamburger />
          </button>
        )}
      </motion.nav>
      <motion.div
        className={`h-[0.2rem] w-full ${bgLineColor}`}
        transition={{
          duration: 1,
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
      ></motion.div>
    </header>
  );
}

export default Navbar;
