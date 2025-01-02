"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Skyscraper",
    description: "A 50-story glass tower with state-of-the-art facilities.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Luxury Villa",
    description: "A breathtaking villa with modern design and amenities.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Industrial Complex",
    description: "A massive industrial site built to perfection.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title: "Urban Apartment",
    description: "Affordable and stylish urban housing solutions.",
    image: "https://via.placeholder.com/300x200",
  },
];

const Projects = () => {
  return (
    <section className="bg-background-light py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Our Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-accent-yellow hover:text-accent-green transition"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-secondary transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
