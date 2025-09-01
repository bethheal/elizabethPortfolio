import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillsAnimatedText from "./PagesComponents/skills-text-animate";

// Dev Tools Icons
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiMiro,
  SiTrello,
  SiClickup,
  SiNetlify,
} from "react-icons/si";

const devSkills = [
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-cyan-400" />,
    level: 90,
  },

  { name: "React.js", icon: <FaReact className="text-sky-400" />, level: 85 },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: 80 },

  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400" />,
    level: 75,
  },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" />, level: 70 },

  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 50 },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400" />,
    level: 45,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300" />,
    level: 30,
  },
];

const tools = [
  { name: "Figma", icon: <SiFigma className="text-pink-500 text-4xl" /> },
  { name: "Miro", icon: <SiMiro className="text-yellow-400 text-4xl" /> },
  { name: "Trello", icon: <SiTrello className="text-blue-500 text-4xl" /> },
  { name: "ClickUp", icon: <SiClickup className="text-purple-400 text-4xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-cyan-500 text-4xl" /> },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="skills"
      className="relative z-10 bg-black text-white min-h-screen py-10 mt-10  mb-10 px-6 "
    >
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold  px-6 py-2">
          <SkillsAnimatedText className="text-3xl md:text-5xl pt-10 font-bold" />
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Technologies, tools & design platforms I work with
        </p>
      </div>

      {/* Development Skills */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
      >
        {devSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="text-5xl mb-3">{skill.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>

            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-2 bg-orange-500 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 1.5, delay: index * 0.1 }}
              />
            </div>
            <span className="text-sm text-gray-400 mt-2">{skill.level}%</span>
          </motion.div>
        ))}
      </div>

      {/* Tools & Design Platforms */}
      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            className="flex flex-col items-center bg-gray-900 p-6 rounded-xl shadow-md hover:-translate-y-2 transition"
          >
            {tool.icon}
            <span className="mt-3 text-sm font-semibold">{tool.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
