import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="fixed clash uppercase top-5 left-1/2 transform -translate-x-1/2 w-[95%] bg-transparent backdrop-blur-md rounded-2xl shadow-md z-50 border border-white/20"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-[5rem]">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#">
              <img
                src="/LOGO.svg"
                alt="Company Logo"
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-1 justify-center gap-6 items-center">
            {["/home", "#service", "#Technology","#product" ,"#about"].map((path, i) => {
              const names = ["Home", "Services", "Technology","Products", "About Us"];
              return (
                <a
                  key={path}
                  href={path}
                  className="px-4 py-2 text-white hover:border-gray-500 hover:border-1 hover:bg-white/10 rounded-xl shadow-inner backdrop-blur-md transition"
                >
                  {names[i]}
                </a>
              );
            })}
          </div>

          {/* Desktop Contact */}
          <div className="hidden md:flex justify-end items-center px-4 py-3 hover:bg-white/30 rounded-xl border border-white/20 shadow-inner backdrop-blur-md bg-white/10">
            <a href="#contact" className="text-white font-medium">
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="md:hidden mt-4 flex flex-col mb-3 gap-3 items-center bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-inner"
          >
            <a href="/home" className="text-white" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#service" className="text-white" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#Technology" className="text-white" onClick={() => setIsOpen(false)}>Technology</a>
            <a href="#product" className="text-white" onClick={() => setIsOpen(false)}>Technology</a>
            <a href="#about" className="text-white" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="#contact" className="text-white" onClick={() => setIsOpen(false)}>Contact Us</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
