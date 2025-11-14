import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Simple Toast Notifications with React-Hot-Toast',
    description:
      'This article will cover the basics of using this package to create toast notifications in your React application...',
    link: 'https://blog.openreplay.com/simple-toast-notifications-with-react-hot-toast/',
  },
  {
    id: 2,
    title: 'Simple Sidebars with React-Pro-Sidebar and Material UI',
    description:
      'This tutorial will guide users on how to create functional sidebars in your React applications with React Pro Sidebar library...',
    link: 'https://blog.openreplay.com/simple-sidebars-with-react-pro-sidebar-and-material-ui/',
  },
  {
    id: 3,
    title: 'Securing User PIN input in React',
    description:
      'This article will show users how to use the react-pin-input library to create secure PINS in your React application...',
    link: 'https://blog.openreplay.com/securing-pin-input/',
  },
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNext = () => setCurrentIndex((p) => (p + 1) % blogPosts.length);
  const handlePrev = () => setCurrentIndex((p) => (p - 1 + blogPosts.length) % blogPosts.length);

  const visiblePosts = [
    blogPosts[currentIndex % blogPosts.length],
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
  ];

  const handleWheel = (e) => {
    if (isScrolling) return;
    setIsScrolling(true);
    const timeout = 700;
    if (e.deltaX > 0)
      setTimeout(() => {
        handleNext();
        setIsScrolling(false);
      }, timeout);
    else if (e.deltaX < 0)
      setTimeout(() => {
        handlePrev();
        setIsScrolling(false);
      }, timeout);
  };

  return (
    <section id="blog" className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Latest Blogs</h2>

        {/* Desktop Carousel */}
        <div
          className="hidden relative w-full lg:flex items-center justify-center"
          onWheel={handleWheel}
        >
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
          >
            <FaChevronLeft />
          </button>

          <div className="flex space-x-6 overflow-hidden w-full justify-center">
            {visiblePosts.map((post, idx) => (
              <div
                key={post.id}
                className={`flex-shrink-0 flex flex-col justify-between p-6 border rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                  idx === 1 ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                }`}
                style={{ width: '280px', height: '360px' }}
              >
                <div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-sm leading-relaxed">{post.description}</p>
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-start bg-blue-500 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-600 transition duration-300"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile & Tablet List */}
        <div className="lg:hidden space-y-4 mt-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="p-6 border rounded-lg bg-white shadow-lg hover:shadow-xl hover:bg-gray-100 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.description}</p>
              </div>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 self-start bg-blue-500 text-white py-2 px-4 rounded-full font-medium hover:bg-blue-600 transition duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <p className="mt-12 text-center text-gray-700 text-lg">
          You can find more of my articles and tutorials on{' '}
          <a
            href="https://medium.com/@umunnajoseph70"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Medium
          </a>
          ,{' '}
          <a
            href="https://dev.to/joseph0819"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Dev.to
          </a>
          ,{' '}
          <a
            href="https://hashnode.com/@Joseph99"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Hashnode
          </a>
          , and{' '}
          <a
            href="https://blog.openreplay.com/authors/joseph-umunna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            OpenReplay Blog
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Blog;
