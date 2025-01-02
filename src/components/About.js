"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Jake Sullivan",
    title: "Founder & CEO",
    image: "https://via.placeholder.com/150", 
  },
  {
    id: 2,
    name: "Sophia Martinez",
    title: "Chief Architect",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Liam Johnson",
    title: "Project Manager",
    image: "https://via.placeholder.com/150",
  },
];

const About = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          About Us
        </h2>

        {/* Introductory Text with Image */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left max-w-lg"
          >
            <p className="text-lg md:text-xl text-gray-600">
              At <span className="text-primary font-semibold">Jake&apos;s Constructions</span>, 
              we have been building extraordinary structures for over a decade. Our dedication 
              to innovation, quality, and client satisfaction has established us as industry 
              leaders in modern construction solutions.
            </p>
          </motion.div>

          {/* Image */}
          <motion.img
            src="https://via.placeholder.com/400x300"
            alt="Construction Illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Mission and Vision Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-background-light p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize the construction industry with cutting-edge technologies and 
              sustainable practices, creating lasting structures that inspire and endure.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-background-light p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To become a global leader in innovative construction, building a better tomorrow 
              for communities around the world.
            </p>
          </motion.div>
        </div>

        {/* Team Highlights */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-primary mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white p-6 rounded-lg shadow-lg"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h4 className="text-xl font-bold text-primary">{member.name}</h4>
                <p className="text-gray-600">{member.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
