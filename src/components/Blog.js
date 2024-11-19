import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: 'Simple Toast Notifications with React-Hot-Toast',
    description: 'This article will cover the basics of using this package to create toast notifications in your React application...',
    link: 'https://blog.openreplay.com/simple-toast-notifications-with-react-hot-toast/',
  },
  {
    id: 2,
    title: 'Simple Sidebars with React-Pro-Sidebar and Material UI',
    description: 'This tutorial will guide users on how to create functional sidebars in your React applications with React Pro Sidebar library...',
    link: 'https://blog.openreplay.com/simple-sidebars-with-react-pro-sidebar-and-material-ui/',
  },
  {
    id: 3,
    title: 'Securing User PIN input in React',
    description: 'This article will show users how to use the react-pin-input library to create secure PINS in your React application...',
    link: 'https://blog.openreplay.com/securing-pin-input/',
  },
  {
    id: 4,
    title: 'A better UX: create URL previews in React',
    description: 'This article will allow you to enrich your React projects with eye-catching and informative URL previews...',
    link: 'https://blog.openreplay.com/a-better-ux--create-url-previews-in-react/',
  },
  {
    id: 5,
    title: 'Thriving in a Remote Work Environment',
    description: 'This article explores the critical aspects of thriving as a remote front-end developer, equipping you with the strategies to excel...',
    link: 'https://blog.openreplay.com/thriving-in-a-remote-work-environment/',
  },
  {
    id: 6,
    title: 'Adding Social Sharing Features to React Apps',
    description: 'This article will teach users how to use employ social buttons in your React application with the React-Share library...',
    link: 'https://blog.openreplay.com/adding-social-sharing-features-to-react-apps/',
  },
  {
    id: 7,
    title: 'Creating a Simple Carousel with React-Slick',
    description: 'Carousels allow users to scroll through items by sliding and swiping. This article will show you how to add carousels to your app by using React Slick...',
    link: 'https://blog.openreplay.com/creating-a-simple-carousel-with-react-slick/',
  },
  {
    id: 8,
    title: 'The Developer Experience -- Efficient Development in React',
    description: 'Ensuring a positive DX is paramount. This article explores the tools that contribute to an efficient development process...',
    link: 'https://blog.openreplay.com/the-developer-experience--efficient-development-in-react/',
  },
  {
    id: 9,
    title: 'Medusa vs. Shopify: Comparing both CMS tools',
    description: 'This article will compare two e-commerce platforms -Medusa and Shopify- outlining the features that are unique to each platform...',
    link: 'https://blog.openreplay.com/medusa-vs-shopify--comparing-both-cms-tools/',
  },
];

const Blog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);  // State to prevent rapid scrolling

  // Handle next click (moving one step)
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  // Handle previous click (moving one step)
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
  };

  // Get the three blog posts to display
  const visiblePosts = [
    blogPosts[(currentIndex) % blogPosts.length],
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
  ];

  // Mouse scroll handler
  const handleWheel = (event) => {
    if (isScrolling) return; // If scrolling is happening, prevent further action
    
    setIsScrolling(true); // Mark that scrolling is happening
    const timeout = 700;  // Timeout in milliseconds for slower scroll

    // Determine scroll direction: 
    // Scroll left (move to previous card) if deltaX is negative, scroll right (move to next card) if deltaX is positive
    if (event.deltaX > 0) {
      // Scroll right (move to next card)
      setTimeout(() => {
        handleNext();
        setIsScrolling(false); // Allow further scrolling after the delay
      }, timeout);
    } else if (event.deltaX < 0) {
      // Scroll left (move to previous card)
      setTimeout(() => {
        handlePrev();
        setIsScrolling(false); // Allow further scrolling after the delay
      }, timeout);
    }
  };

  return (
    <section id="blog" className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Latest Blogs</h2>

        {/* Full-width Carousel */}
        <div
          className="relative w-full flex items-center justify-center"
          onWheel={handleWheel} // Add wheel event for mouse scrolling
        >
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 focus:outline-none"
          >
            <FaChevronLeft />
          </button>

          <div className="flex space-x-6 overflow-hidden w-full justify-center">
            {visiblePosts.map((post, idx) => (
              <div
                key={post.id}
                className={`flex-shrink-0 p-6 border rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 hover:shadow-2xl ${
                  idx === 1 ? 'bg-gray-800 text-white' : ''
                }`} // Middle card gets a dark background
                style={{
                  width: '280px', // Adjusted width for uniform display
                }}
              >
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-4 text-sm">{post.description}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-500 bg-blue-100 py-2 px-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 focus:outline-none"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile and Tablet List View */}
        <div className="lg:hidden space-y-4 mt-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-6 border rounded-lg bg-white shadow-2xl hover:shadow-xl hover:bg-gray-100 transition duration-300">
              <h3 className="text-lg font-bold text-gray-800">{post.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 bg-blue-100 py-2 px-4 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300"
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
