"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Icon } from ".";

function Navbar({ className, bgLineColor }) {
  const [isNavExpand, setIsNavExpand] = useState(false);

  const toogleNavItems = (prevState) => {
    setIsNavExpand(!prevState);
  };

  return (
    <header>
      <nav
        className={`${className} flex justify-between items-center h-28 md:h-24`}
      >
        <p className="text-lg font-semibold">PORTOFOLIO 2023</p>
        <div className="hidden font-semibold text-md md:flex space-x-20">
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/projects">projects</Link>
          <Link href="/">contact</Link>
        </div>

        {isNavExpand ? (
          <div className="absolute z-50 inset-0 bg-primary text-tertiary">
            <button
              onClick={() => toogleNavItems(isNavExpand)}
              className="absolute top-7 right-4"
            >
              <Icon.Close />
            </button>
            <div className="flex flex-col font-semibold text-6xl space-y-6 mt-32 ml-4">
              <Link href="/" onClick={() => toogleNavItems(isNavExpand)}>
                home
              </Link>
              <Link href="/about" onClick={() => toogleNavItems(isNavExpand)}>
                about
              </Link>
              <Link
                href="/projects"
                onClick={() => toogleNavItems(isNavExpand)}
              >
                projects
              </Link>
              <Link href="/" onClick={() => toogleNavItems(isNavExpand)}>
                contact
              </Link>
            </div>
            <p className="absolute text-md bottom-5 ml-4">
              ariefromadhon26@gmail.com
            </p>
          </div>
        ) : (
          <button
            onClick={() => toogleNavItems(isNavExpand)}
            className="text-primary md:hidden"
          >
            <Icon.Hamburger />
          </button>
        )}
      </nav>
      <div className={`h-[0.2rem] w-full ${bgLineColor}`}></div>
    </header>
  );
}

export default Navbar;
