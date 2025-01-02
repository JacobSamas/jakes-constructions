"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projectsData = [
  {
    id: 1,
    title: "Modern Skyscraper",
    description: "A 50-story glass tower with state-of-the-art facilities.",
    category: "Commercial",
    image: "https://via.placeholder.com/600x400", 
  },
  {
    id: 2,
    title: "Luxury Villa",
    description: "A breathtaking villa with modern design and amenities.",
    category: "Residential",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 3,
    title: "Urban Apartment",
    description: "Affordable and stylish urban housing solutions.",
    category: "Residential",
    image: "https://via.placeholder.com/600x400",
  },
  {
    id: 4,
    title: "Industrial Complex",
    description: "A massive industrial site built to perfection.",
    category: "Industrial",
    image: "https://via.placeholder.com/600x400",
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-background-light">
      {/* Hero Banner */}
      <section className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Our Projects</h1>
        <p className="mt-4 text-lg">
          Explore our portfolio of groundbreaking projects across industries.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4">
                  <span className="inline-block px-3 py-1 bg-accent-yellow text-sm font-semibold rounded-full text-black">
                    {project.category}
                  </span>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="mt-6 inline-block text-accent-yellow hover:text-accent-green transition"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
