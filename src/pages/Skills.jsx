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
  SiTypescript,
} from "react-icons/si";
import { BackgroundBeams } from "../components/bgMotion";

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
   {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-400" />,
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

const skillRows = [
  {
    label: "Frontend",
    items: devSkills.slice(0, 5),
    reverse: false,
  },
  {
    label: "Backend",
    items: devSkills.slice(5),
    reverse: true,
  },
  {
    label: "Tools",
    items: tools,
    reverse: false,
  },
];

const SkillMarquee = ({ row }) => {
  const repeatedItems = [...row.items, ...row.items, ...row.items, ...row.items];
  const distance = row.reverse ? ["-50%", "0%"] : ["0%", "-50%"];

  return (
    <div className="group relative overflow-hidden border-y border-white/10 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <motion.div
        className="skills-track"
        animate={{ x: distance }}
        transition={{
          duration: 28,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {repeatedItems.map((skill, index) => (
          <div
            key={`${row.label}-${skill.name}-${index}`}
            className="skill-chip"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="text-gray-100 hover:text-black">{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="skills"
      className="relative z-10 min-h-screen      bg-#CACACA px-0 py-16 text-black"
    >
      {/* Heading */}
      <div className="mx-auto mb-14 flex max-w-6xl flex-col items-center px-6 text-center">
        
        <h2 className="min-h-16 w-full text-4xl font-black uppercase sm:text-6xl">
          <SkillsAnimatedText className="text-4xl font-black md:text-6xl" />
        </h2>
        <p className="mt-5 max-w-2xl text-sm uppercase tracking-[0.25em] text-gray-400 sm:text-base">
          Technologies, tools & design platforms I work with
        </p>
      </div>

      <div ref={ref} className="space-y-6">
        {skillRows.map((row, index) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.12, duration: 0.5 }}
          >
            <div className="mx-auto mb-3 flex max-w-6xl items-center gap-4 px-6">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-400">
                {row.label}
              </span>
              <span className="h-px flex-1 bg-black/10" />
            </div>
            <SkillMarquee row={row} />
          </motion.div>
        ))}
              <BackgroundBeams/>

      </div>
    </section>
  );
};

export default Skills;
