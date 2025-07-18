import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "WizardZ App",
    description:
      "Redesigned digital marketing agency portfolio with modern UI/UX. Highlights services, animations, and smooth navigation.",
    image: "https://portfolio-plum-iota-35.vercel.app/assets/wizard-DbVXEgHY.png", // replace with actual path or URL
    stack: ["HTML", "GSAP", "Javascript", "CSS"],
    github: "#",
    linkedin: "#",
  },
  {
    title: "AI Background Remover",
    description:
      "AI-powered image tool with real-time background removal, secure authentication, and user-friendly interface.",
    image: "https://portfolio-plum-iota-35.vercel.app/assets/wizard-DbVXEgHY.png", // replace with actual path or URL
    stack: ["React", "Tailwind CSS", "Clerk", "Javascript"],
    github: "#",
    linkedin: "#",
  },
];

const Projects = () => {
  return (
    <section className="py-10 px-6 md:px-20 border-b border-gray-200" id="project">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 transition-transform hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full mb-5"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-black gap-2 px-4 py-2 bg-black-500 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
              >
               <FaGithub className="text-4xl w-4 h-4" />
                GitHub
              </a>

              <a
                href={project.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-500 transition"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341A53.33 53.33 0 1 1 107.17 60a53.34 53.34 0 0 1-53.33 47zM447.9 448h-92.6V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.2 5.3-2.8 12.6-2.8 20v152.7h-92.6s1.2-247.9 0-273.1h92.6v38.7c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.2-46.1 83.4-46.1 60.8 0 106.4 39.7 106.4 125.1z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
