import Link from "next/link";
import React from "react";
import { Icon } from ".";

function ProjectDescription({ href, title, description }) {
  return (
    <Link href={href} className="group">
      <div className="flex justify-between">
        <h3 className="text-2xl uppercase font-bold group-hover:text-quaternary">
          {title}
        </h3>
        <Icon.Arrow className="rotate-[45deg] translate-y-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:text-quaternary" />
      </div>
      <p className="leading-5">{description}</p>
    </Link>
  );
}

export default ProjectDescription;
