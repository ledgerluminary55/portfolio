"use client";
import { useState, useRef } from "react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { getSectionAnimation, fadeIn, slideUp } from "../../styles/animations";
export const ContactForm = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: [value] });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_6uc4uvj",
        "template_v6iay4h",
        {
          user_name: form.name,
          // from_email: form.email,
          to_name: "Iwaki Hiroto",
          user_email: form.email,
          to_email: "noahsflood908@gmail.com",
          message: form.message,
        },
        "umNQWT8FApST122et"
      )
      .then(() => {
        setLoading(false);
        alert(
          "A humble thanks for reaching us out. We will respond to you as soon as possible."
        );
        setForm({
          name: "",
          email: "",
          message: "",
        });
      });
  };

  return (
    <motion.section variants={fadeIn(1.5)} initial="hidden" animate="show">
      <div className="sm:flex sm:flex-row gap-16 text-white p-12  px-8  mx-8">
        <div>
          <h2 className=" text-5xl leading-snug">How May we help you?</h2>
          {/* <p className="text-white mt-10">
            We are here to help your business and unlock your potential.
          </p> */}
          <p className="my-5 text-slate-400">
            Please contact us if you have any question or project to discuss.
          </p>
        </div>
        <div className="w-full">
          {/* <form className="flex flex-col gap-5" ref={formRef} onSubmit={handleSubmit} method='post'> */}
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <div>
              <input
                value={form.name}
                name="name"
                onChange={handleChange}
                className="w-full border border-slate-800 bg-transparent p-1   rounded-lg"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-slate-800 bg-transparent p-1 rounded-lg"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full border border-slate-800 bg-transparent p-1  rounded-lg"
                placeholder="Please input whatever is on your mind"
                rows={10}
              />
            </div>
            <div className="">
              <button
                className="bg-lime-600 p-5 py-3  float-right  rounded-lg"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};
