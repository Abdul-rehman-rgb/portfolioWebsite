import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from "react-icons/fa";
import MainHeading from "../heading/MainHeading";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-4xl text-cyan-500" /> },
  { name: "Redux", icon: <FaReact className="text-4xl text-purple-500" /> },
  { name: "Next.js", icon: <FaReact className="text-4xl text-black" /> },
  { name: "React Native", icon: <FaReact className="text-4xl text-blue-400" /> },
  { name: "Tailwind", icon: <FaReact className="text-4xl text-sky-400" /> },
];

const Skills = () => {
  return (
    <>
    <div className="py-10 px-4 sm:px-10 md:px-20 lg:px-40 border-b border-gray-200 min-h-[60vh]" id="skills">
        <MainHeading Text="My Skills" fontSize="text-3xl" extraClass="font-bold mb-20 mt-20" color="text-gray-800" />
      
    <div className="grid grid-cols-4 max-sm:grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-4 justify-items-center px-4 mt-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="group w-32 h-32 p-4 rounded-2xl flex flex-col items-center justify-center bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div className="mb-2 transition-transform duration-500 group-hover:rotate-[360deg]">
            {skill.icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-800">{skill.name}</h3>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Skills;

