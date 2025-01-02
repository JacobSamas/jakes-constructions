import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p>
            Jake&apos;s Constructions is committed to building the future with
            excellence and innovation. Contact us to learn more about our projects.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-accent-yellow transition">
                Home
              </Link>
            </li>
            <li>
              <a href="/about" className="hover:text-accent-yellow transition">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-accent-yellow transition">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent-yellow transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-center">
              <HiOutlinePhone className="mr-2" /> +1 (555) 123-4567
            </li>
            <li className="flex items-center">
              <HiOutlineMail className="mr-2" /> contact@jakesconstructions.com
            </li>
            <li className="flex items-center">
              <HiOutlineLocationMarker className="mr-2" /> 123 Construction Lane, Buildtown
            </li>
          </ul>

          {/* Social Media */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="hover:text-accent-yellow transition">
              <FaFacebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-accent-yellow transition">
              <FaTwitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-accent-yellow transition">
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jake&apos;s Constructions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
