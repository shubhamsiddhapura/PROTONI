import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const videoPath = "/promo2.mp4";

const Loader = () => {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const vid = videoRef.current;

    if (started && vid) {
      const handleEnded = () => navigate("/home");
      vid.addEventListener("ended", handleEnded);

      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("Autoplay with audio blocked:", error);
        });
      }

      return () => {
        vid.removeEventListener("ended", handleEnded);
      };
    }
  }, [started, navigate]);

  const handleStart = () => setStarted(true);

  return (
   <div
  className={`
    w-screen h-screen relative overflow-hidden bg-black
    bg-no-repeat bg-center bg-cover
    bg-[url('/THINKBEYONDMOBILE.png')] sm:bg-[url('/SCREEN.png')]
  `}
>
      {!started ? (
        <>
          {/* Button Centered */}
          <div className="absolute top-1/2 left-1/2  whitespace-nowrap z-10 -translate-x-1/2 -translate-y-1/2">
            <button
              onClick={handleStart}
              className="px-12 py-3 clash  text-white clash2 bg-gradient-to-tl from-gray-900 to bg-purple-900/80 font-semibold text-3xl rounded shadow-md hover:bg-purple-950 transition"
            >
              ACTIVATE AI
            </button>
          </div>
        </>
      ) : (
        <Link to="/home" className="block w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoPath}
            playsInline
            controls={false}
          />
        </Link>
      )}
    </div>
  );
};

export default Loader;
