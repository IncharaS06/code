import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const logos = [
  { src: "/logo-black1.png", alt: "Grayscale Logo" },
  { src: "/Unstop-Logo-Blue-Large.png", alt: "Unstop Logo" },
  { src: "/xyz.png", alt: "XYZ Logo" },
];

const SponsorSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateLoop = async () => {
      while (true) {
        await controls.start({
          x: ["100%", "-100%"], // Start offscreen right → scroll to left
          transition: {
            duration: 10,
            ease: "linear",
          },
        });
        controls.set({ x: "100%" }); // Reset position
      }
    };

    animateLoop();
  }, [controls]);

  return (
    <section
      id="sponsors"
      className="w-full bg-gradient-to-b from-[#070A29] via-[#0E1649] to-[#070A29] py-16 overflow-hidden"
    >
      <div className="text-center text-white mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Our Sponsors
        </h2>
        <p className="text-lg text-gray-300">We are proudly supported by:</p>
      </div>

      <div className="overflow-hidden w-full h-[160px] relative">
        <motion.div
          className="flex gap-16 absolute"
          animate={controls}
          initial={{ x: "100%" }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[300px] h-[150px] bg-white rounded-xl shadow-lg flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain p-6"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorSection;
