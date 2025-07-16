import coreai from "../assets/tech/coreai.webp";

import dateng from "../assets/tech/dataengi.webp";

import datamodel from "../assets/tech/data model.webp";

import cloud from "../assets/tech/cloud.webp";
import moniter from "../assets/tech/montering.webp";

import frontend from "../assets/tech/frontedn.webp";

const technologies = [
  {
    title: "Core AI/ML Stack",
    images: [coreai],
  },
  {
    title: "Data Engineering",
    images: [dateng],
  },
  {
    title: "Model Deployment",
    images: [datamodel],
  },
  {
    title: "Cloud Infrastructure",
    images: [cloud],
  },
  {
    title: "Monitoring & MLOps",
    images: [moniter],
  },
    {
    title: " Edge AI ",
    images: [frontend],
  },
    
];

const aosAnimations = ["fade-up"];

const Technology = () => {
  return (
    <div className="p-5 pt-16  bg-gray-950 min-h-screen">
      <h2 className="text-4xl md:text-6xl font-bold cursor-hover clash text-center mb-14 text-white">
        Modern Tools. Smarter Solutions
      </h2>

      <div className=" flex flex-col md:grid md:grid-cols-3 border-white/20 shadow-[inset_0_0_30px_#FFFFFFBF] p-10 md:p-16 rounded-2xl gap-10 w-full  mx-auto">
        {technologies.map((tech, index) => (
          <div
            key={index}
            data-aos={aosAnimations[index % aosAnimations.length]} // apply different animation
            data-aos-delay={index * 100} // stagger animations
            className="clash rounded-xl w-full bg-black/30 h-full backdrop-blur-xl border border-white/20 shadow-[inset_0_0_30px_#FFFFFFBF]
              flex flex-col items-center justify-center text-center px-6 py-12 [backface-visibility:hidden] relative"
          >
            
           <div className=" md:flex md:flex-wrap md:justify-center gap-6 md:gap-16">
                  {tech.images.map((img, i) => (
                  <img
                  key={i}
                  src={img}
                  alt={`${tech.title}-${i}`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                  className="w-32 h-32 md:w-44 md:h-44 object-contain"
                  />
                ))}
            </div>
            <h3 className="text-2xl cursor-hover md:text-3xl font-bold text-white mb-10">{tech.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
