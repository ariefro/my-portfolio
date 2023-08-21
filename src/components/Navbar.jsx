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
      <nav className="flex justify-between items-center h-20">
        <p className="text-lg font-semibold">PORTOFOLIO 2023</p>

        {isNavExpand ? (
          <div className="absolute inset-0 bg-primary text-tertiary">
            <button
              onClick={() => toogleNavItems(isNavExpand)}
              className="absolute top-5 right-4"
            >
              <Icon.Close />
            </button>
            <div className="flex flex-col font-semibold text-6xl space-y-6 mt-32 ml-4">
              <Link href="/">home</Link>
              <Link href="/">about</Link>
              <Link href="/">work</Link>
              <Link href="/">contact</Link>
            </div>
            <p className="absolute bottom-5 ml-4">ariefromadhon26@gmail.com</p>
          </div>
        ) : (
          <button
            onClick={() => toogleNavItems(isNavExpand)}
            className="text-primary"
          >
            <Icon.Hamburger />
          </button>
        )}
      </nav>
      <div className="h-[0.2rem] w-full bg-black"></div>
    </header>
  );
}

export default Navbar;
