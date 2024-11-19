import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Contact Me Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-semibold mb-2">Contact Me</h4>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" /> umunnajoseph70@gmail.com
          </p>
          <p className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" /> +234 703 861 4683
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://www.linkedin.com/in/umunnajoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/joseph0819"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://twitter.com/yourtwitterhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8">
        <p>&copy; 2024 Umunna Joseph. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
