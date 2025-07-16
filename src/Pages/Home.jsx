
import ServicesSection from "../Component/ServiceSection";
import Aboutus from "../Component/Aboutus";
import Product from "../Component/Product";
import Contactus from "../Component/Contactus";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar"

const Home = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gray-950 text-white scroll-smooth">
      
      <Navbar />
  {/* Hero Section */}
  <div id="#" className="relative w-full h-screen">
 <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src="/bg.mp4" type="video/mp4" />
</video>

    <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-gray-950 to-transparent z-10"></div>

    <div
      className="absolute cursor-hover z-20 top-1/2 left-1/2 clash transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
<p className="text-[2.5rem] sm:text-4xl md:text-9xl lg:text-8xl pt-6  uppercase  whitespace-nowrap leading-tight">
  Innovating <span className="text-purple-500 clash font-bold sm:text-7xl md:text-8xl lg:text-[8rem]">AI</span>,<br />
  One Algorithm<br />
  at a Time
</p>




    </div>
  </div>

  {/* Sections without gaps but scroll accurate */}
  <section id="service" className="scroll-mt-16 px-4 md:px-10">
    <ServicesSection />
  </section>

  <section id="Technology" className="scroll-mt-16 clash px-4 pb-10 md:px-10">
    <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 
              className="section-title  text-7xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Modern Tools, Modern Solutions
            </h2>
            <p 
              className="section-subtitle text-xl text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Advanced tools and modern frameworks that drive our creative solutions
            </p>
          </div>
          
          {/* Moving Technology Row */}
          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-left">
                {[
  'PyTorch', 'TensorFlow', 'Transformers', 'LangChain',
  'FastAPI', 'OpenCV', 'Gradio',
  'PyTorch', 'TensorFlow', 'Transformers', 'LangChain',
  'FastAPI', 'OpenCV','Gradio'
].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-4 glass px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <span className="text-xl font-bold text-white whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>
          
          {/* Second row moving in opposite direction */}
          <div className="relative mt-8">
            <div className="flex overflow-hidden">
              <div className="flex animate-scroll-right">
                {[
  'LLamaIndex', 'HuggingFace Hub', 'Weights & Biases', 'Ray', 
  'ONNX', 'DeepSpeed', 'MLflow',
  'LLamaIndex', 'HuggingFace Hub', 'Weights & Biases', 'Ray', 
  'ONNX', 'DeepSpeed','MLflow'
].map((tech, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-4 glass px-6 py-4  bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                  >
                    <span className="text-lg font-medium text-white whitespace-nowrap">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10"></div>
          </div>
        </div>
      </section>
  </section>
  <section id="product" className="scroll-mt-16 px-4 md:px-10">
    <Product />
  </section>

  <section id="about" className="scroll-mt-32  px-4 md:px-10">
    <Aboutus />
  </section>
  <section id="contact" className="scroll-mt-16 py-5 px-4 md:px-10">
    <Contactus />
  </section>

  <Footer />
  

</div>

  );
};

export default Home;
