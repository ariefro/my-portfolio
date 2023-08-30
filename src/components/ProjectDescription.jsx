import Link from "next/link";
import React from "react";
import { Icon } from ".";
import Image from "next/image";

function ProjectDescription({ href, title, description, src }) {
  return (
    <li className="flex space-x-5 p-7 hover:bg-secondary rounded-lg">
      <Image
        alt="thumbnail"
        src={src}
        width={250}
        height={120}
        className="mt-5 md:mt-0 md:w-64 md:h-36"
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
        <p className="leading-5 mt-3">{description}</p>
      </div>
    </li>
  );
}

export default ProjectDescription;
