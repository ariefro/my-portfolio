import Link from "next/link";
import React from "react";

function Footer({ className, buttonClassName }) {
  return (
    <footer
      className={`${className} absolute font-semibold flex flex-col items-center justify-center left-0 right-0 py-16 lg:flex-row lg:px-56`}
    >
      <p className="text-5xl text-center leading-10 mb-14 lg:text-8xl lg:text-left lg:mb-0 lg:tracking-wide lg:leading-[5rem] lg:w-[38rem]">
        Let's create something awesome together
      </p>
      <Link href="/">
        <button
          className={`${buttonClassName} h-56 w-56 mx-auto rounded-full text-xl transition-all ease-in-out duration-300 hover:text-quaternary lg:text-2xl lg:h-64 lg:w-64 lg:mx-10`}
        >
          Contact me
        </button>
      </Link>
    </footer>
  );
}

export default Footer;
