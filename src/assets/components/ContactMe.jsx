import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_z16ffww',       // Replace with your Service ID
      'template_hw45mq8',      // Replace with your Template ID
      form.current,
      'aTxJXyDo9cxJFMHwR'        // Replace with your Public Key (from EmailJS dashboard)
    )
      .then((result) => {
        alert("Message sent successfully!");
        form.current.reset();
      }, (error) => {
        alert("Failed to send message. Please try again later.");
        console.error(error.text);
      });
  };

  return (
    <div className="min-h-screen text-black px-4 py-12" id="contact">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>

          <div className="space-y-4 text-gray-600 font-medium">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-pink-500" />
              <span>Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-800" />
              <a href="mailto:abdul4758rehman@gmail.com" className="hover:text-blue-600">
                abdul4758rehman@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-600" />
              <a
                href="https://www.linkedin.com/in/abdul-rehman-4a3104205"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-800"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="your.email@example.com"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Tell me about your project or just say hello!"
                rows="4"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
