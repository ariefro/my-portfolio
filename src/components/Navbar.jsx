"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from ".";

function Navbar() {
  const [isNavExpand, setIsNavExpand] = useState(false);

  const toogleNavItems = (prevState) => {
    setIsNavExpand(!prevState);
  };

  return (
    <header>
      <nav className="flex justify-between items-center h-24">
        <p className="text-lg font-semibold">PORTOFOLIO 2023</p>
        <div className="hidden font-semibold text-md md:flex space-x-20">
          <Link href="/">home</Link>
          <Link href="/">about</Link>
          <Link href="/">work</Link>
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
              <Link href="/">home</Link>
              <Link href="/">about</Link>
              <Link href="/">work</Link>
              <Link href="/">contact</Link>
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
      <div className="h-[0.15rem] w-full bg-black"></div>
    </header>
  );
}

export default Navbar;
