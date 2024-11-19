import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send method
    emailjs
      .send(
        'service_fjls8xu', // Replace with your EmailJS service ID
        'template_6575m6j', // Replace with your EmailJS template ID
        formData,
        'WQr7nQeYCJnJAYeKE'   // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        (error) => {
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <section id="contact-form" className="bg-gray-100 py-16 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open.
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
