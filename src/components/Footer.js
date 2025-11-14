import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-slate-700 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Contact Me Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-semibold mb-2 text-white">Contact Me</h4>
          <p className="flex items-center text-gray-300">
            <FaEnvelope className="mr-2" /> umunnacj@mail.uc.edu
          </p>
          <p className="flex items-center mt-2 text-gray-300">
            <FaPhoneAlt className="mr-2" /> 1-513-206-5282
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-6 mb-6 md:mb-0">
          <a
            href="https://www.linkedin.com/in/umunnajoseph"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/joseph0819"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://x.com/ceejay08199"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Chimaroke Joseph Umunna . All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
