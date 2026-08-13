import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
const experiences = [
  {
    title: "Software Engineer",
    company: "SummerHealth Ghana",
    duration: "11/2025 – 04/2026",
    location: "Remote, Ghana",
    website: "",
    description:
      "Designed user interfaces and user flows in Figma, built responsive frontend components using Next.js and TypeScript, and used LLM tools to accelerate prototyping and development. Collaborated with the team lead to refine designs and implement features.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Figma",
      "LLMs",
    ],
  },

  {
    title: "Full Stack Developer (Training)",
    company: "Developers In Vogue",
    duration: "02/2025 – 11/2025",
    location: "Ghana",
    website: "",
    description:
      "Completed end-to-end MERN stack training, developing multiple full-stack applications with RESTful APIs. Implemented authentication, CRUD operations, responsive interfaces, and collaborated on team projects using Git and GitHub.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "REST API",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
    ],
  },

  {
    title: "Junior Web Developer (Apprenticeship)",
    company: "GROW, Generation Ghana",
    duration: "05/2024 – 08/2024",
    location: "Ghana",
    website: "",
    description:
      "Built frontend projects using React.js and developed responsive user interfaces with HTML, CSS, Tailwind CSS, and JavaScript. Contributed to debugging, feature implementation, and technical support for development tools and systems.",
    technologies: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },

  {
    title: "IT Support Specialist",
    company: "Hyperlink Network Systems",
    duration: "09/2021 – 08/2023",
    location: "Accra, Ghana",
    website: "",
    description:
      "Provided technical support to businesses by diagnosing and resolving issues involving internet connectivity, hardware, software, operating systems, and data security. Installed and maintained technical systems while delivering responsive customer support.",
    technologies: [
      "IT Support",
      "Hardware",
      "Software",
      "Networking",
      "Operating Systems",
      "Data Security",
    ],
  },

  {
    title: "MIS Personnel",
    company: "Greater Accra Regional Coordinating Council",
    duration: "09/2020 – 09/2021",
    location: "Accra, Ghana",
    website: "",
    description:
      "Managed and updated website content to improve visibility and site traffic. Provided technical assistance to employers with software and hardware issues, helping improve workflow efficiency.",
    technologies: [
      "MIS",
      "Website Management",
      "Technical Support",
      "Hardware",
      "Software",
    ],
  },

  {
    title: "Training Program",
    company: "Amalitech",
    duration: "05/2023",
    location: "Accra, Ghana",
    website: "",
    description:
      "Completed foundational web development training covering HTML, CSS, and JavaScript. Developed practical skills in styling web pages and implementing client-side interactivity and functionality.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Development",
    ],
  },
];

const Experience = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleExperience = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#080808] px-4 py-16 text-white sm:px-8 md:px-12 lg:px-16"
    >
      {/* =========================
          BACKGROUND GLOW EFFECTS
      ========================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Orange glow - top right */}
        <div
          className="
            absolute
            -right-40
            -top-40
            h-96
            w-96
            rounded-full
            bg-orange-600/10
            blur-3xl
            animate-pulse
          "
        />

        {/* Orange glow - bottom left */}
        <div
          className="
            absolute
            -bottom-40
            -left-40
            h-96
            w-96
            rounded-full
            bg-orange-500/10
            blur-3xl
            animate-pulse
          "
          style={{ animationDelay: "1.5s" }}
        />

        {/* Small floating glow */}
        <div
          className="
            absolute
            right-[20%]
            top-[35%]
            h-32
            w-32
            rounded-full
            bg-orange-400/5
            blur-3xl
            animate-bounce
          "
          style={{
            animationDuration: "6s",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =========================
            SECTION TITLE
        ========================== */}

        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-orange-500" />

            <span className="text-sm font-medium uppercase tracking-[0.3em] text-orange-500">
              Experiences
            </span>
          </div>

          {/* <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Experience
            <span className="text-orange-500">.</span>
          </h2> */}

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A journey through my professional experience, projects, and
            technical growth.
          </p>
        </div>

        {/* =========================
            EXPERIENCE LIST
        ========================== */}

        <div className="space-y-4">
          {experiences.map((experience, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group"
                style={{
                  animation: `experienceFadeIn 0.7s ease-out ${
                    index * 150
                  }ms both`,
                }}
              >
                {/* =========================
                    EXPERIENCE HEADER
                ========================== */}

                <button
                  type="button"
                  onClick={() => toggleExperience(index)}
                  className={`
                    relative
                    flex
                    w-full
                    items-center
                    justify-between
                    overflow-hidden
                    rounded-xl
                    border
                    px-5
                    py-5
                    text-left
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    sm:px-8
                    sm:py-6

                    ${
                      isOpen
                        ? `
                          border-orange-500/50
                          bg-orange-500/90
                          shadow-[0_0_35px_rgba(249,115,22,0.18)]
                        `
                        : `
                          border-white/10
                          bg-white/[0.04]
                          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
                          hover:border-orange-500/30
                          hover:bg-white/[0.07]
                          hover:shadow-[0_0_30px_rgba(249,115,22,0.08)]
                        `
                    }
                  `}
                >
                  {/* Glass reflection */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      inset-x-0
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-white/30
                      to-transparent
                    "
                  />

                  {/* Hover orange glow */}
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-40
                      w-40
                      rounded-full
                      bg-orange-500/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative flex min-w-0 flex-1 items-center gap-4">
                    

                    <h3
                      className={`
                        truncate
                        text-base
                        font-bold
                        transition-all
                        duration-300
                        sm:text-xl
                        md:text-2xl

                        ${
                          isOpen
                            ? "text-white"
                            : "text-gray-100 group-hover:text-white"
                        }
                      `}
                    >
                      {experience.title} <span className="text-orange-600">--</span> {experience.company}
                    </h3>
                  </div>

                  <div className="relative ml-4 flex shrink-0 items-center gap-3 sm:gap-5">

                    {/* Duration */}
                    <span
                      className={`
                        hidden
                        text-sm
                        font-bold
                        transition-colors
                        duration-300
                        sm:block
                        md:text-lg

                        ${isOpen ? "text-white" : "text-gray-400"}
                      `}
                    >
                      {experience.duration}
                    </span>

                    {/* Mobile duration */}
                    <span
                      className={`
                        text-xs
                        font-bold
                        sm:hidden

                        ${isOpen ? "text-white" : "text-gray-400"}
                      `}
                    >
                      {experience.duration}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-500

                        ${
                          isOpen
                            ? `
                              rotate-0
                              border-white/70
                              bg-white/10
                              text-white
                            `
                            : `
                              border-white/20
                              text-orange-500
                              group-hover:rotate-0
                              group-hover:border-orange-500/60
                              group-hover:bg-orange-500/10
                            `
                        }
                      `}
                    >
                      {isOpen ? (
                        <FaChevronUp className="text-xs" />
                      ) : (
                        <FaChevronDown className="text-xs" />
                      )}
                    </span>
                  </div>
                </button>

                {/* =========================
                    EXPANDED CONTENT
                ========================== */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className="
                        relative
                        mt-1
                        overflow-hidden
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.035]
                        px-5
                        py-7
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
                        backdrop-blur-2xl
                        sm:px-8
                        sm:py-9
                        md:px-10
                      "
                    >
                      {/* Glass shine */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          left-0
                          top-0
                          h-px
                          w-full
                          bg-gradient-to-r
                          from-transparent
                          via-orange-500/60
                          to-transparent
                        "
                      />

                      {/* Background orange glow */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-20
                          -top-20
                          h-64
                          w-64
                          rounded-full
                          bg-orange-500/5
                          blur-3xl
                        "
                      />

                      <div className="relative z-10 max-w-4xl">

                        {/* Location + Website */}
                        <div
                          className="
                            mb-6
                            flex
                            flex-wrap
                            items-center
                            gap-x-7
                            gap-y-3
                            text-sm
                            text-gray-400
                            sm:text-base
                          "
                        >
                          {experience.location && (
                            <div className="flex items-center gap-3 transition-colors duration-300 hover:text-white">
                              <FaMapMarkerAlt className="text-orange-500" />

                              <span>{experience.location}</span>
                            </div>
                          )}

                          {experience.website && (
                            <div className="flex items-center gap-3 transition-colors duration-300 hover:text-white">
                              <FaExternalLinkAlt className="text-orange-500" />

                              <span>{experience.website}</span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p
                          className="
                            max-w-4xl
                            text-sm
                            leading-7
                            text-gray-300
                            sm:text-base
                            sm:leading-8
                            md:text-lg
                          "
                        >
                          {experience.description}
                        </p>

                        {/* Technology Tags */}
                        {experience.technologies.length > 0 && (
                          <div className="mt-7 flex flex-wrap gap-2.5">
                            {experience.technologies.map(
                              (technology, techIndex) => (
                                <span
                                  key={technology}
                                  className="
                                    rounded-full
                                    border
                                    border-orange-500/20
                                    bg-orange-500/10
                                    px-4
                                    py-2
                                    text-xs
                                    font-medium
                                    text-orange-300
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-orange-500/50
                                    hover:bg-orange-500/20
                                    hover:text-orange-200
                                    hover:shadow-[0_5px_20px_rgba(249,115,22,0.12)]
                                    sm:text-sm
                                  "
                                  style={{
                                    animation: `tagFadeIn 0.4s ease-out ${
                                      techIndex * 70
                                    }ms both`,
                                  }}
                                >
                                  {technology}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================
          CUSTOM ANIMATIONS
      ========================== */}

      <style>
        {`
          --keyframes experienceFadeIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          --keyframes tagFadeIn {
            from {
              opacity: 0;
              transform: translateY(8px) scale(0.95);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          --keyframes floatingIcon {
            0%,
            100% {
              transform: translateY(0) rotate(-4deg);
            }

            50% {
              transform: translateY(-12px) rotate(4deg);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Experience;