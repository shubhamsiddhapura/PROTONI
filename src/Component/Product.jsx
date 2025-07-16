import React from "react";
import nlpImg from "../assets/product/6.jpeg";
import visionImg from "../assets/product/2.jpeg";
import chatImg from "../assets/product/1.jpeg";
import faceImg from "../assets/product/3.jpeg";
import arImg from "../assets/product/4.jpeg";
import sheetsyncImg from "../assets/product/5.jpeg";

//import video from " /ai.mp4"

const productData = [
  {
    title: "Protonix NLP",
    description:
      "Protonix NLP is our advanced natural language processing engine engineered to understand, analyze, and generate human language with exceptional accuracy. Built on cutting-edge transformer architectures, it powers intelligent automation across customer support, content moderation, document parsing, and conversational AI—turning raw text into actionable insight at scale.",
    img: nlpImg,
  },
  {
    title: "Protonix Vision",
    description:
      "Protonix Vision is our state-of-the-art computer vision platform designed to extract intelligence from images and video with precision and speed. Leveraging deep learning and real-time visual processing, it enables automated surveillance, defect detection, facial recognition, and visual analytics—powering smarter, vision-enabled ecosystems across industries.",
    img: visionImg,
  },
  {
    title: "Protonix Chat",
    description:
      "Protonix Chat is our intelligent conversational AI platform, built to deliver natural, context-aware interactions through voice and text. Powered by advanced LLMs and custom NLP pipelines, it enables businesses to deploy smart virtual assistants, automate customer support, and drive personalized user engagement across digital touchpoints.",
    img: chatImg,
  },
  {
    title: "Protonix Identity",
    description:
      "This system leverages state-of-the-art facial recognition algorithms powered by deep learning to deliver fast, accurate, and contactless attendance tracking. Engineered for seamless integration with workforce platforms, it ensures enhanced security, reduces manual errors, and streamlines attendance workflows across diverse organizational environments.",
    img: faceImg,
  },
  {
    title: "Protonix XR",
    description:
      "Harnessing cutting-edge augmented reality technology, this solution delivers a hyper-realistic virtual try-on experience, allowing users to visualize and interact with exquisite jewelry pieces in real time. Designed to blend luxury retail with immersive digital innovation, it elevates customer engagement and empowers personalized styling from anywhere.",
    img: arImg,
  },
  {
    title: "Protonix Extract",
    description:
      "An AI-powered data automation engine that seamlessly extracts and synchronizes structured insights from dynamic online sources into your workflows. It transforms fragmented web data into real-time intelligence for fast, scalable decision-making and integration.",
    img: sheetsyncImg,
  },
];

const Product = () => {
  return (
    <section className="px-4 md:px-10 py-24 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto"><div className="relative w-full  h-96">
      <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-gray-950 to-transparent z-10"></div>

  {/* 🔹 Video */}
  <video
    autoPlay
    loop
    muted
    className="w-full h-full object-cover"
  >
    <source src="/ai.mp4" type="video/mp4" />
  </video>

    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
</div>
        <h2 className="text-6xl cursor-hover md:text-7xl font-bold clash  text-center mb-16">
          Explore Our AI Innovations
        </h2>

        {/* Grid Container with group */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {productData.map((product, index) => (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group relative rounded-xl to-purple-900
        border border-white/10 backdrop-blur-xl overflow-hidden cursor-pointer
        transition-transform duration-500 transform hover:scale-105"
    >
      {/* Image */}
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-52 object-cover"
      />

      {/* Title */}
      <div className="p-4">
        <h3 className="text-2xl cursor-hover text-center clash font-semibold">{product.title}</h3>
      </div>

      {/* Description overlay (hover reveal only) */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-tl from-black to-purple-900 p-4 opacity-0 translate-y-full
        group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
      >
        <p className="text-[1rem] clash text-gray-300">
          {product.description}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Product;
