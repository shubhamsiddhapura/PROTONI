import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.15,
        ease: "power2.out",
      });

      gsap.to(ringRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = () => {
      gsap.to(ringRef.current, {
        scale: 1.5,
        backgroundColor: "rgba(128, 0, 255, 0.2) ", 
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(ringRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const hoverTargets = document.querySelectorAll("a, button, .cursor-hover");

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-purple-900 pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-purple-900 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
    </>
  );
};

export default CustomCursor;
