import React from 'react';
import 'animate.css';

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_70%)]"></div>

      <div className="relative z-10 text-center px-6 animate__animated animate__fadeIn">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Hi, I’m <span className="text-gray-100">Chimaroke Joseph Umunna</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Ph.D. Student & Frontend Developer exploring intelligent, human-centered systems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate__animated animate__fadeInUp animate__delay-1s">
          <a
            href="#projects"
            className="bg-white text-slate-700 py-3 px-8 rounded-full font-semibold hover:bg-slate-700 hover:text-white transition-all duration-300 shadow-md"
          >
            View My Work
          </a>
          <a
            href="#contact-form"
            className="border-2 border-white text-white py-3 px-8 rounded-full font-semibold hover:bg-white hover:text-slate-700 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
