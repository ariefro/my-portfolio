"use client";

import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Input, Label } from "@/components";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    const toastLoading = toast.loading("Loading");
    e.preventDefault();

    try {
      await axios.post("/api/email", {
        name,
        email,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");

      toast.success(
        (t) => <div>Thankyou! Your message has been delivered.</div>,
        {
          id: toastLoading,
        }
      );
    } catch (error) {
      toast.error(<div className="first-letter:uppercase">{error}</div>, {
        id: toastLoading,
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <motion.h3
        className="text-tertiary font-semibold text-2xl py-24 md:text-3xl lg:text-4xl"
        transition={{ duration: 2, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        Get In Touch
      </motion.h3>
      <motion.form
        method="POST"
        className="relative pb-20 md:w-1/2"
        transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="relative z-0 w-full mb-14 group">
          <Input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Label id="name">Name</Label>
        </div>
        <div className="relative z-0 w-full mb-14 group">
          <Input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Label id="email">Email</Label>
        </div>
        <div className="relative z-0 w-full mb-14 group">
          <textarea
            id="message"
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="block py-2.5 px-0 w-full text-sm text-tertiary bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-gray-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-quaternary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7 md:text-base"
          >
            Message
          </label>
        </div>
        <button
          onClick={handleSubmit}
          disabled={!name || !email || !message}
          className="absolute bottom-12 right-0 bg-tertiary hover:bg-gray-200 text-primary font-medium text-sm px-4 py-2 disabled:hover:cursor-not-allowed disabled:hover:bg-tertiary"
        >
          Submit
        </button>
      </motion.form>
    </section>
  );
}

export default ContactPage;
