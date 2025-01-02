"use client";

import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const markerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [40, 40],
});

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-br from-background-light via-white to-gray-100 py-16 overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
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
            x: [0, -50, 50, 0],
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12">
          Get in Touch
        </h2>

        {/* Contact Form and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white p-8 rounded-lg shadow-lg space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-secondary transition font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Information with Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <HiOutlinePhone className="text-primary w-6 h-6 mr-3" />
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineMail className="text-primary w-6 h-6 mr-3" />
                  <p className="text-gray-700">contact@jakesconstructions.com</p>
                </div>
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="text-primary w-6 h-6 mr-3" />
                  <p className="text-gray-700">123 Construction Lane, Buildtown</p>
                </div>
              </div>
            </div>

            {/* Leaflet Map */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <MapContainer
                center={[40.7128, -74.006]} // Replace with your location
                zoom={13}
                className="h-72 w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                <Marker position={[40.7128, -74.006]} icon={markerIcon}>
                  <Popup>
                    Jake&apos;s Constructions <br /> 123 Construction Lane, Buildtown
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
