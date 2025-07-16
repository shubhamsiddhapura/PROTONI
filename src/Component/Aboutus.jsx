import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vision from "../assets/vision.gif";
import mission from "../assets/mission.gif";
import tag1 from "../assets/tag1.svg";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-gray-950 text-white px-6 py-16 md:px-10 overflow-hidden">
      <img src={tag1} alt="" className="mx-auto pb-3" data-aos="fade-down" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">
        <h2
          className="text-5xl md:text-7xl clash font-bold text-center"
          data-aos="zoom-in"
        >
          Behind Protonix AI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div
            className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-6 shadow-[inset_0_0_30px_#FFFFFFBF]"
            data-aos="fade-right"
          >
            <h3 className="text-4xl cursor-hover clash uppercase font-bold text-center mb-3">
              Our Vision
            </h3>
            <img
              src={vision}
              className="h-52 w-52 mx-auto"
              alt="Our Vision"
            />
            <p className="text-gray-300 clash text-center text-lg leading-relaxed pt-4">
              We envision a future where technology unites with human potential
              to address complex challenges. Our vision is to harness advanced
              technology for intelligent, scalable solutions that drive
              meaningful change across industries.
            </p>
          </div>

          {/* Mission */}
          <div
            className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-6 shadow-[inset_0_0_30px_#FFFFFFBF]"
            data-aos="fade-left"
          >
            <h3 className="text-4xl cursor-hover clash uppercase font-bold text-center mb-3">
              Our Mission
            </h3>
            <img
              src={mission}
              className="h-52 w-52 mx-auto"
              alt="Our mission"
            />
            <p className="text-gray-300 clash text-center text-lg leading-relaxed pt-4">
              At Protonix AI, we turn complex challenges into efficient digital
              solutions, empowering businesses to excel in a fast-paced world.
              With innovation and agility, we bring your vision to life whether
              through advanced web platforms, mobile apps, or intelligent
              technology-driven systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
