import Link from "next/link";
import React from "react";
import { Icon } from ".";
import Image from "next/image";

function ProjectDescription({ href, title, description, src }) {
  return (
    <Link
      href={href}
      className="group flex flex-col-reverse p-5 rounded-lg transition-all duration-300 hover:bg-secondary hover:bg-opacity-25 md:space-x-5 md:flex-row"
    >
      <Image
        alt="thumbnail"
        src={src}
        width={250}
        height={120}
        className="mt-5 md:mt-0 md:w-64 md:h-36"
      />
      <div>
        <div className="flex space-x-3 mb-3">
          <h3 className="text-2xl font-bold transition-all ease-in-out duration-300 group-hover:text-quaternary">
            {title}
          </h3>
          <Icon.Arrow className="rotate-[45deg] translate-y-2.5 transition-transform group-hover:-translate-y-0 group-hover:translate-x-3 group-hover:text-quaternary" />
        </div>
        <p className="leading-5">{description}</p>
      </div>
    </Link>
  );
}

export default ProjectDescription;
