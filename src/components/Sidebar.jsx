import React from "react";
import { Icon } from ".";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="fixed z-40 flex flex-col items-center space-y-1 right-0 top-1/3 text-tertiary md:top-1/2">
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
    </div>
  );
}

export default Sidebar;
