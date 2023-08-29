"use client";

import { Input, Label } from "@/components";
import React, { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-7xl mx-auto">
      <h1 className="text-center text-tertiary font-semibold text-lg py-40 md:text-2xl lg:text-4xl">
        I&apos;m excited to learn about your project.
        <br />
        Ready to get started?
      </h1>
      <form action="#" method="POST" className="pb-24">
        <div className="relative z-0 w-full mb-8 group md:w-1/2">
          <Input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Label id="name">Name</Label>
        </div>
        <div className="relative z-0 w-full mb-8 group md:w-1/2">
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Label id="email">Email</Label>
        </div>
        <div className="relative z-0 w-full mb-8 group md:w-1/2">
          <textarea
            id="message"
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="block py-2.5 px-0 w-full text-sm text-quaternary bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-quaternary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
          >
            Message
          </label>
        </div>
        <button
          type="submit"
          disabled={!name || !email || !message}
          className="bg-tertiary hover:bg-gray-200 text-primary font-medium text-sm px-4 py-2 disabled:hover:text-pink-400"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactPage;
