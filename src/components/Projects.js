import React from 'react';

function Projects() {
  const projectList = [
    {
      title: 'PassGrades',
      description:
        'PassGrades helps students prepare for international exams like SAT, IELTS, and GRE through live and recorded courses. It offers personalized dashboards, progress tracking, and expert-led lessons to make learning efficient and accessible.',
      link: 'https://passgrades.com/',
    },
    {
      title: 'Entwuit',
      description:
        'Entwuit is a modern online learning platform that bridges skills and opportunities. It provides learners with curated courses, practical projects, and personalized mentorship to help them build real-world tech and business skills.',
      link: 'http://entwuit.com/',
    },
    {
      title: 'TrackApp',
      description:
        'TrackApp is a personal journaling and goal-tracking web application that helps users organize daily reflections, set targets, and monitor progress. It combines simplicity with clean UI design for an intuitive experience.',
      link: 'https://trackapp-plum.vercel.app/',
    },
    {
      title: 'Smart Bookshelf',
      description:
        'Smart Bookshelf is an interactive smart object project that integrates LED feedback and scanning capabilities. Designed for modern learning environments, it visualizes real-time interactions between physical and digital reading experiences.',
      link: 'https://jf-userinterfaceproj2.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 text-center mt-4 mb-12 max-w-3xl mx-auto">
          Explore some of my real-world projects that showcase my frontend development expertise and problem-solving
          approach. These projects are designed to create practical, user-friendly experiences, blending creativity and functionality.
        </p>

        {/* Project Cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-700 text-white rounded-lg shadow-lg p-6 hover:bg-white hover:text-slate-700 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-8 flex-grow">{project.description}</p>
              <div className="mt-auto flex">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-white text-slate-700 py-2 rounded-full font-medium hover:bg-slate-700 hover:text-white transition duration-300 border border-slate-700"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repository Link */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Interested in seeing more? You can view all my projects and code contributions on my GitHub repository.
          </p>
          <a
            href="https://github.com/joseph0819"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-700 text-white py-2 px-6 rounded-full font-medium hover:bg-white hover:text-slate-700 border border-slate-700 transition duration-300"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
