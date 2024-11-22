import React from 'react';

function Projects() {
  const projectList = [

    {
      title: 'Adashe',
      description: 'Project Adashe is building a system for data federation and virtualization, tied to a smart contract it can enable automatic execution of commands. We aim to to eliminate high costs and restrictions in payments, connecting the world of finance and data.',
      link: 'https://adashe.io/',
    },
    {
      title: 'Tech Learning Path Prompt System',
      description: 'An AI-powered tool for creating personalized learning paths in tech. Perfect for beginners and career switchers, it provides structured learning paths tailored to each user’s unique interests and goals in the tech industry.',
      link: 'https://nexus-ai-nine.vercel.app/index.html',
    },
    {
      title: 'Scissor - Link Management Tool',
      description: 'A comprehensive link management platform. Shorten URLs, create custom links, generate QR codes, and gain deep insights with advanced analytics. Scissor brings powerful link management capabilities to individuals and businesses alike.',
      link: 'https://scissor-beige.vercel.app/',
    },
    {
      title: 'QR Code Generator',
      description: 'An easy-to-use QR code generator, offering quick and customizable QR code creation for personal and professional needs. Perfect for events, product links, or any use that demands seamless sharing and connectivity.',
      link: 'https://qrgennn.netlify.app/',
    },
    
  ];

  return (
    <section id="projects" className="bg-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 text-center mt-4 mb-12 max-w-3xl mx-auto">
          Explore some of my real-world projects that showcase my frontend development expertise and problem-solving approach. These projects are designed to create practical, user-friendly experiences, from personalized learning tools to efficient link management solutions.
        </p>
        
        <div className="mt-12 grid gap-8 lg:grid-cols-4">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col hover:bg-blue-50"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{project.description}</p>
              <div className="mt-auto flex ">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-3/5 text-center bg-blue-500 text-white py-2 rounded-full font-medium hover:bg-blue-600 transition duration-300"
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
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full font-medium hover:bg-blue-600 transition duration-300"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
