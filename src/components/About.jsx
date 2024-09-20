import React from "react";

function About({ id, text, isVisible, className, children }) {
  return (
    <section className={`${className} h-[50vh] leading-tight`}>
      {children}
      <p
        id={id}
        className={`about-content ${
          isVisible === id ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </p>
    </section>
  );
}

export default About;
