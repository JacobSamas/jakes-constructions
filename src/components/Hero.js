"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 md:py-32 lg:py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold"
        >
          Welcome to{" "}
          <span className="text-accent-yellow">Jake&apos;s Constructions</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-200"
        >
          Building the future, one structure at a time.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <a
            href="#"
            className="bg-accent-yellow text-black px-6 py-3 rounded-md font-semibold hover:bg-accent-green transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute w-72 h-72 bg-accent-yellow opacity-20 rounded-full blur-xl -top-10 -left-10"
        />
        <motion.div
          animate={{
            x: [0, -100, 100, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="absolute w-96 h-96 bg-accent-green opacity-20 rounded-full blur-xl -bottom-20 -right-20"
        />
      </div>
    </section>
  );
};

export default Hero;
