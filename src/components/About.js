import React from 'react';
import myphoto from './img/img-3.jpeg';
import CV from './files/CV.pdf';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 text-slate-800 py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
          About Me
        </h2>

        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
          {/* Image */}
          <img
            src={myphoto}
            alt="Chimaroke Joseph Umunna"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-xl border-4 border-slate-200 hover:scale-105 transition-transform duration-500"
          />

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg md:text-xl leading-relaxed text-slate-700">
              I'm <span className="font-semibold text-slate-900">Chimaroke Joseph Umunna </span>, a{' '}
              Ph.D. Student in Computer Science & Engineering at the{' '}
              <span className="font-semibold text-slate-900">University of Cincinnati</span> {' '}
              focused on creating human-centered,
              intelligent digital experiences.
            </p>

            <p className="mt-4 text-lg md:text-xl text-slate-700 leading-relaxed">
              {' '}
              My background in{' '}
              <span className="font-semibold text-slate-900">Statistics</span> and{' '}
              <span className="font-semibold text-slate-900">Computer Science</span> helps me blend logic with creative problem-solving.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://drive.google.com/file/d/1iAr6y5g4IDS24fbofgC6HFLdcSJp2R9k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 outline-2 text-white py-2.5 px-8 rounded-full font-medium hover:bg-white hover:text-slate-900 transition duration-300 shadow-md"
              >
                View Resume
              </a>
              <a
                href={CV}
                download
                className="border border-slate-900 text-slate-900 py-2.5 px-8 rounded-full font-medium hover:bg-gradient-to-br hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 hover:text-white transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200 rounded-xl p-10 shadow-md">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Education</h3>
            <ul className="space-y-3">
              <li>Ph.D. in Computer Science & Engineering – University of Cincinnati (Ongoing)</li>
              <li>B.Sc. in Statistics – Michael Okpara University of Agriculture, Umudike</li>
              <li>National Diploma in Computer Science – Federal Polytechnic, Bida</li>
              <li>TIIDELab Fellowship – Software Development & Artificial Intelligence</li>
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
            <ul className="space-y-3">
              <li>Research Assistant - University of Cincinnati, Ohio ( Aug 2025 – Present )</li>
              <li>Frontend Dev - Royalsmith Trucking LLC (  June 2024 – Nov 2024 )</li>
              <li>Frontend Dev – KSolutionsNG ( May 2023 – June 2025 )</li>
              <li>Technical Writer – Freelance ( Dec 2022 – Jan 2025 )</li>
              <li>Frontend Dev – AltSchool Africa Internship ( Jan 2022 - Sept 2022 )</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python',
              'JavaScript',
              'React.js',
              'Next.js',
              'Tailwind CSS',
              'Git & Version Control',
              'Technical Writing',
              'Data Analysis',
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-200 text-slate-900 font-medium rounded-full hover:bg-gradient-to-br hover:from-slate-900 hover:via-slate-800 hover:to-slate-900 hover:text-white transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200 py-10 px-8 rounded-lg shadow-md text-center">
          <p className="text-lg italic max-w-3xl mx-auto leading-relaxed">
            “Every project I build teaches me something new, and that’s the part I love most.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
