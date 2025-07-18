import React from "react";
import MainHeading from "./heading/MainHeading";

const About = () => {
  return (
    <section className="py-10 px-6 md:px-20 border-b border-gray-200" id="about">
      <MainHeading
        Text="About Me"
        fontSize="text-3xl"
        extraClass="font-bold"
        color="text-gray-800"
      />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
        {/* Left Column – Text */}
        <div className="md:col-span-7 flex flex-col text-black space-y-5">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Who Am I</h3>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            I'm{" "}
            <strong className="bg-yellow-300 text-black">Abdul Rehman</strong>, a
            passionate Full Stack Developer from Pakistan who enjoys crafting clean,
            responsive, and interactive user interfaces — blending logic with
            creativity to deliver seamless digital experiences.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            I specialize in{" "}
            <strong className="bg-yellow-300 text-black">
              React.js, Node.js, Express.js, and MongoDB
            </strong>
            , and have developed 20+ high-performance websites with pixel-perfect
            design and fluid animations using tools like Framer Motion.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            I love{" "}
            <strong className="bg-yellow-300 text-black">solving problems</strong>,
            exploring new technologies, and turning ideas into fast, scalable, and
            intuitive web applications that not only work efficiently — but also feel
            great to use.
          </p>
          <p className="text-lg leading-relaxed text-gray-600">
            <strong className="bg-yellow-300 text-black">
              "Every challenge is an opportunity to grow."
            </strong>
          </p>
        </div>

        {/* Right Column – Profile + Facts */}
        <div className="md:col-span-5 flex flex-col items-center justify-center space-y-6">
          {/* <img
            src="/profile.jpg" // replace with your actual image path
            alt="Abdul Rehman"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          /> */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Facts</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>🎓 Final Year CS Student – Sir Syed University</li>
              <li>💻 Full Stack Developer (MERN Stack)</li>
              <li>🚀 Built 20+ React-based projects</li>
              <li>🔧 Skilled in APIs, MongoDB, Express</li>
              <li>📍 Based in Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
