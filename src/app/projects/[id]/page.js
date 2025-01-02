"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: "1",
    title: "Modern Skyscraper",
    description: "A 50-story glass tower with state-of-the-art facilities.",
    category: "Commercial",
    image: "https://via.placeholder.com/600x400",
    details: "This skyscraper redefines modern architecture with cutting-edge design and premium amenities.",
    features: [
      "State-of-the-art glass facade",
      "Eco-friendly construction",
      "Premium office spaces",
    ],
    gallery: [
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
      "https://via.placeholder.com/600x400",
    ],
    stats: {
      duration: "3 Years",
      cost: "$500 Million",
      size: "250,000 sq ft",
    },
  },
  // Add other projects similarly
];

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-red-500">Project Not Found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Project Header */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-primary">{project.title}</h1>
        <p className="text-lg text-gray-600">{project.description}</p>
        <p className="text-md text-gray-700 mt-4">{project.details}</p>

        {/* Features Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
          <ul className="list-disc pl-5 space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-600">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Project Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-700">Duration</h3>
              <p className="text-gray-600">{project.stats.duration}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-700">Cost</h3>
              <p className="text-gray-600">{project.stats.cost}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-700">Size</h3>
              <p className="text-gray-600">{project.stats.size}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-accent-yellow text-black px-6 py-3 rounded-md hover:bg-accent-green transition font-semibold"
          >
            Get a Quote
          </a>
          <a
            href="/projects"
            className="ml-4 inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition"
          >
            Back to Projects
          </a>
        </div>
      </motion.div>
    </main>
  );
}
