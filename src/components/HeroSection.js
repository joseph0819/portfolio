import React from 'react';
import 'animate.css';
import myphoto from './img/myphoto.jpeg'

function Hero() {
  return (
    <section id="hero"className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white h-screen flex items-center relative mt-10">
      {/* Overlay for the gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30"></div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 relative z-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 animate__animated animate__fadeInLeft">
          <h1 className="text-5xl md:text-6xl font-bold ">
            Hi, I'm Chimaroke Joseph Umunna 
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            A Frontend Developer, Tech Blogger, and passionate about creating interactive user experiences. I love turning complex problems into simple, beautiful interfaces.
          </p>
          <p className="mt-4 text-lg md:text-xl">
            Currently, I write articles for OpenReplay and share insights on Hashnode, Medium, and Dev.to, focusing on frontend development and web performance optimization.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300 animate__animated animate__fadeInUp animate__delay-1s"
            >
              View My Work
            </a>
            <a
              href="#contact-form"
              className="ml-4 bg-transparent border-2 border-white text-white py-3 px-6 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition duration-300 animate__animated animate__fadeInUp animate__delay-1s"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center animate__animated animate__fadeInRight">
          <img
            src={myphoto}
            alt="Profile"                     
            className="w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl object-cover transition duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
