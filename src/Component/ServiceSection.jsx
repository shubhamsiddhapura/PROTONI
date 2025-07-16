import webImg from "../assets/service/consult.webp";
import appImg from "../assets/service/ml.png";
import uiuxImg from "../assets/service/nlp.webp";
import seoImg from "../assets/service/vision.png";
import marketingImg from "../assets/service/analysis.webp";
import cloudImg from "../assets/service/inti.webp";
import securityImg from "../assets/service/cyber.webp";
import blockchainImg from "../assets/service/blockchain.png";

const servicesList = [
  {
    name: "AI Consulting",
    description:
      "Strategic AI advisory delivering end-to-end solutions—from readiness assessment to deployment—maximizing ROI and competitive edge.",
    img: webImg,
  },
  {
    name: "ML Development",
    description:
      "Custom ML models engineered for predictive insights and automated decision-making, powered by scalable infrastructure and modern frameworks.",
    img: appImg,
  },
  {
    name: "Natural Language Processing (NLP)",
    description:
      "Transform unstructured text into intelligence using advanced NLP for sentiment analysis, conversational AI, and content automation.",
    img: uiuxImg,
  },
  {
    name: "Computer Vision",
    description:
      "Deploy deep learning–based visual intelligence for object detection, image/video analysis, and automation across real-world environments.",
    img: seoImg,
  },
  {
    name: "Predictive Analysis",
    description:
      "Forecast trends and optimize operations with ML-driven predictive modeling using historical and real-time data insights.",
    img: marketingImg,
  },
  {
    name: "AI Integration",
    description:
      "Embed AI into systems and workflows to drive automation, real-time analytics, and intelligent decisioning across the tech stack.",
    img: cloudImg,
  },
 
  {
    name: "Cybersecurity",
    description: "Protect digital assets with advanced security solutions and risk assessments.",
    img: securityImg,
  },
  {
    name: "Blockchain Development",
    description: "Build secure and transparent blockchain applications for various industries.",
    img: blockchainImg,
  },
];
const ServicesSection = () => {
  return (
    <section className="">
      <div className="max-w-7xl py-10 mx-auto px-4">
        <h2 className="text-6xl clash font-medium text-center mb-16 text-white">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10">
          {servicesList.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative w-full h-72 group [perspective:1200px] mx-auto"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* Front */}
                <div className="absolute clash rounded-xl w-full h-full backdrop-blur-xl border border-white/20 shadow-[inset_0_0_30px_#FFFFFFBF] flex flex-col items-center justify-center text-center px-6 py-8 [backface-visibility:hidden]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-28 h-28   object-cover mb-4"
                  />
                  <h3 className=" text-sm cursor-hover md:text-lg font-semibold tracking-wide text-white">
                    {service.name}
                  </h3>
                </div>

                {/* Back */}
                <div className="absolute clash w-full rounded-xl h-full bg-gradient-to-tl from-black to-purple-900 shadow-[inset_0_0_100px_#9F33FF] p-6 text-sm [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center">
                  <p className="text-white  text-lg leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default ServicesSection;
