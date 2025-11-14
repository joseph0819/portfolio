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

    emailjs
      .send(
        'service_1lsgrqh',      // your EmailJS service ID
        'template_6575m6j',     // your template ID
        formData,
        'Q2V7WHLyzNmL4U-5F'     // your public key
      )
      .then(
        () => {
          alert('Message sent successfully!');
          setFormData({ user_name: '', user_email: '', message: '' });
        },
        () => {
          alert('Failed to send the message, please try again later.');
        }
      );
  };

  return (
    <section id="contact-form" className="bg-gray-50 py-20 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Get in Touch</h2>
        <p className="text-lg text-slate-600 text-center mb-8">
          Whether you’d like to collaborate, ask a question, or just say hello — I’d love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg space-y-6 border border-slate-200"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-slate-700"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-slate-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:border-slate-700 h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-slate-700 text-white py-3 rounded-md font-semibold hover:bg-white hover:text-slate-700 border border-slate-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
