import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

import qa from "../assets/q&a.avif";
import left from "../assets/left shadow.png";
import right from "../assets/right.png";

const Contactus = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dnvnrms", // Replace with actual service ID
        "template_x2l8k9r", // Replace with actual template ID
        form.current,
        "nIgEDsXhw9mregwl2" // Replace with actual public key
      )
      .then(
        () => {
          setStatus("Your message has been sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div
      className="clash flex flex-col items-center justify-center px-4 py-16"
      data-aos="fade-up"
    >
      <img src={qa} className="mx-auto h-40" alt="" data-aos="zoom-in" />
      <h2
        className="text-6xl font-bold clash text-white text-center mb-6"
        data-aos="fade-up"
      >
        Contact Us
      </h2>

      <div
        className="relative w-full max-w-2xl backdrop-blur-xl rounded-2xl shadow-2xl p-8"
        data-aos="fade-up"
      >
        <img
          src={left}
          alt="left shadow"
          className="absolute -left-76 top-0 h-full pointer-events-none"
        />
        <img
          src={right}
          alt="right shadow"
          className="absolute -right-104 top-[4rem] h-full object-contain pointer-events-none"
        />

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="100">
            <label className="block text-lg font-medium text-white mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-300"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <label className="block text-lg font-medium text-white mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-300"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <label className="block text-lg font-medium text-white mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full bg-white/10 text-white border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder:text-gray-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#8227dc86] text-white font-medium py-3 hover:bg-white/30 transition duration-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Send Message
          </button>

          {status && (
            <p className="text-center text-sm text-green-300 mt-2">
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contactus;
