import React from 'react';
import myphoto from './img/myphoto.jpeg';

const About = () => {
  return (
    <section id="about" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6 md:mb-12">About Me</h2>

        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Hide the image on mobile devices */}
          <img
            src={myphoto}
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover shadow-lg hidden md:block"
          />
          <div className="text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm <span className="font-semibold text-blue-600">Joseph Umunna</span>, a passionate <span className="font-semibold text-blue-600">Frontend Developer</span> and <span className="font-semibold text-blue-600">Technical Writer</span>.
              I have a <span className="font-semibold">National Diploma in Computer Science</span> and a <span className="font-semibold">Bachelor's degree in Statistics</span>, giving me a balanced foundation in both technical and analytical skills.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              After completing an internship with <span className="font-semibold text-blue-600">AltSchool Africa</span>, I now work as a freelancer, creating impactful projects and writing technical articles. I’m dedicated to building user-centered solutions and expanding my skill set.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <a
                href="https://drive.google.com/file/d/1lmj8qqV-1HAxiqDMSBO7jal8GCV98I_W/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition duration-300"
              >
                View Resume
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1lmj8qqV-1HAxiqDMSBO7jal8GCV98I_W"
                download
                className="inline-block bg-gray-300 text-gray-800 py-2 px-6 rounded-full font-medium hover:bg-gray-400 transition duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education & Experience Timeline */}
          <div className="p-6 border-l-4 border-blue-600 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:border-blue-800 transition duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education & Experience</h3>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">B.Sc in Statistics</span> – Developed analytical and statistical skills.
              </li>
              <li>
                <span className="font-semibold">National Diploma in Computer Science</span> – Built a strong foundation in programming.
              </li>
              <li>
                <span className="font-semibold">TIIDELab Fellowship</span> – Explored <span className="font-semibold text-blue-600">Software Development</span> and <span className="font-semibold text-blue-600">Artificial Intelligence</span> in depth.
              </li>
              <li>
                <span className="font-semibold">AltSchool Africa Internship</span> – Gained hands-on experience in frontend development.
              </li>
              <li>
                <span className="font-semibold">Royalsmith Trucking LLC</span> – Frontend Engineer, Jan. 2022 – March 2022.
              </li>
              <li>
                <span className="font-semibold">KSolutionsNG Consulting</span> – Frontend Engineer, April 2023 – Present.
              </li>
              <li>
                <span className="font-semibold">Freelance Developer</span> – Currently working on freelance projects and writing articles on the side.
              </li>
            </ul>
          </div>

          {/* Hobbies & Interests */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border-r-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hobbies & Interests</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Playing sports like <span className="font-semibold text-blue-600">football</span>, <span className="font-semibold text-blue-600">basketball</span>, and <span className="font-semibold text-blue-600">volleyball</span>.</li>
              <li>Exploring new technologies and creating interactive user experiences.</li>
              <li>Traveling to new places and learning about diverse cultures.</li>
              <li>Playing <span className="font-semibold text-blue-600">video games</span> to unwind and relax.</li>
              <li>Reading books, especially on <span className="font-semibold text-blue-600">self-development</span> and <span className="font-semibold text-blue-600">technology trends</span>.</li>
              <li>Listening to podcasts on <span className="font-semibold text-blue-600">tech innovations</span> and <span className="font-semibold text-blue-600">entrepreneurship</span>.</li>
              <li>Volunteering and mentoring new tech enthusiasts in the community.</li>
            </ul>
          </div>
        </div>

        {/* Professional Skills Section */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Professional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">HTML & CSS</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">JavaScript</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">React</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">Next.js</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">Tailwind CSS</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">Technical Writing</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">Version Control (Git)</span>
            <span className="px-4 py-2 bg-blue-100 text-blue-600 font-medium rounded-full">Data Analysis</span>
          </div>
        </div>

        {/* Project Section with Button */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">My Projects</h3>
          <p className="text-gray-600 text-center mb-4">
            I have worked on various projects that showcase my skills in frontend development and technical writing. Each project has been a learning experience that has pushed me to grow and innovate.
          </p>
          <div className="text-center">
            <a
              href="#projects"
              className="mt-4 inline-block text-blue-500 bg-blue-100 py-2 px-6 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-12 text-center bg-gray-50 py-8 px-6 border-t-4 border-blue-600 rounded-lg shadow-lg transition duration-300">
          <p className="text-lg text-gray-700 italic leading-relaxed">
            "I believe that with dedication and creativity, technology can empower us to solve real-world problems and make life a little easier. I’m here to learn, build, and make an impact, one project at a time."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
