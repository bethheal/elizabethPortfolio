import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import nodata from "../assets/animation/nodata.json";
import Lottie from "lottie-react";
import {
  portfolioImg,
  reviewImg,
  nectRuralImg,
  coffeeListImg,
  itfImg,
  realview,
  monthDesign,
  logoDesign,
  millmeProducts,
} from "../assets/images";

import { BackgroundBeams } from "../components/bgMotion";
import AnimatedText from "./PagesComponents/projects-text-animate";

const categories = [
  "All",
  "Open Source",
  "Website",
  "Web App",
  "Mobile App",
  "API Integration",
  "Graphic Design",
  "Motion Graphics",
  "UI/UX Design",
  "Other",
];

const ProjectsItems = [
  {
    title: "Ghana Hazard Reporter",
    category: "Open Source",
    image: reviewImg,
    organization: "Personal Project",
    TechStack: "TypeScript · React",
    description:
      "A platform designed to help users report hazards and contribute to safer communities through a simple and accessible digital experience.",
    github: "https://github.com/bethheal/ghana-hazard-reporter.git",
    live: null,
  },

  {
    title: "Kay AGRO Consult",
    category: "Website",
    image: portfolioImg,
    organization: "Kay Agro Consult",
    TechStack: "JavaScript · React",
    description:
      "A modern agricultural consulting website designed to showcase services, improve brand visibility, and create a clear digital experience for clients.",
    github: "https://github.com/bethheal/moses_konja.git",
    live: "https://mrkayagroconsult.netlify.app/",
  },

  {
    title: "Coffee Menu",
    category: "API Integration",
    image: coffeeListImg,
    organization: "Coffee Listing",
    TechStack: "API Integration · React",
    description:
      "An interactive coffee listing application that integrates external API data to display coffee products in a clean and responsive interface.",
    github: "https://github.com/bethheal/coffee-listing",
    live: "https://litcoffeelisting.netlify.app/",
  },

  {
    title: "Real View Estate and Construction",
    category: "Web App",
    image: realview,
    organization: "RealView",
    duration: "6 Weeks",
    TechStack: "ReactJS · Node.js · Express · PostgreSQL",
    description:
      "A property and construction management TechStack designed to connect users with real estate services while providing an intuitive digital experience.",
    github: "https://github.com/bethheal/RealViewSafe",
    live: "https://realviewfrontend.onrender.com/",
  },

  {
    title: "Millme Products",
    category: "Website",
    image: millmeProducts,
    organization: "Millme",
    TechStack: "ReactJS · TailwindCSS",
    description:
      "A product-focused website created to showcase Millme products through a clean, modern and user-friendly shopping experience.",
    github: "https://github.com/bethheal/MILLME",
    live: "https://millme.netlify.app/",
  },

  {
    title: "nectRural",
    category: "Web App",
    image: nectRuralImg,
    organization: "Personal Project",
    TechStack: "ReactJS · TailwindCSS",
    description:
      "A digital TechStack focused on improving access to rural opportunities and services through an accessible web application.",
    github: "https://github.com/bethheal/nectRural.git",
    live: "https://nect-rural.netlify.app/",
  },

  {
    title: "Integrity Trust Foundation",
    category: "Web App",
    image: itfImg,
    organization: "ITF",
    TechStack: "ReactJS · TailwindCSS",
    description:
      "A responsive web Platform built to communicate the foundation's mission, initiatives and community-focused activities.",
    github: "https://github.com/bethheal/itf_project",
    live: "https://integritytrust.netlify.app/",
  },

  {
    title: "LiT logo Design",
    category: "Graphic Design",
    image: logoDesign,
    organization: "LiT",
    TechStack: "Canva · Adobe Photoshop",
    description:
      "A custom logo design created for LiT, reflecting the brand's identity and values through a visually appealing and memorable graphic representation.",
    github: null,
    live: "https://canva.link/amcdftoorvpjo0m",
  },
  {
    title: "Angel logo Design",
    category: "Graphic Design",
    image: logoDesign,
    organization: "Angel Foods",
    TechStack: "Canva",
    description:
      "A custom logo design created for Angel Foods, reflecting the brand's identity and values through a visually appealing and memorable graphic representation.",
    github: null,
    live: "https://canva.link/o6zqnh4srw5mdkw",
  },
  {
    title: "Month Design",
    category: "Graphic Design",
    image: monthDesign,
    organization: "LiT",
    TechStack: "Canva",
    description:
      "A custom logo design created for LiT, reflecting the brand's identity and values through a visually appealing and memorable graphic representation.",
    github: null,
    live: "https://canva.link/2wne0haueaw7uta",
  },
  {
    title: "Design",
    category: "Graphic Design",
    image: itfImg,
    organization: "LiT",
    TechStack: "Canva",
    description:
      "A custom logo design created for LiT, reflecting the brand's identity and values through a visually appealing and memorable graphic representation.",
    github: null,
    live: "https://canva.link/2wne0haueaw7uta",
  },
];

/* ============================================================
   PROJECT CARD
============================================================ */

const ProjectCard = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.article
      layout
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 30,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
        y: 30,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.45,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        w-full
        max-w-[370px]
        overflow-hidden
        rounded-[30px]
        border
        border-white/70
        bg-white
        p-2
        shadow-[0_10px_35px_rgba(0,0,0,0.12)]
        transition-shadow
        duration-500
        hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]
      "
    >
      {/* ======================================================
          IMAGE AREA
      ====================================================== */}

      <div
        className="
          relative
          h-[245px]
          overflow-hidden
          rounded-[25px]
        "
      >
        {/* Project Image */}

        <img
          src={item.image}
          alt={item.title}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Dark Gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/75
            via-black/10
            to-transparent
          "
        />

        {/* Project Info Over Image */}

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="min-w-0 text-white">
            <h3
              className="
                text-lg
                font-semibold
                leading-tight
                drop-shadow-md
              "
            >
              {item.title}
            </h3>
          </div>

          {/* Preview Button */}

          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
    group/preview
    relative
    flex
    h-[44px]
    shrink-0
    items-center
    gap-1.5
    overflow-hidden
    rounded-xl
    border
    border-transparent
    bg-black/20
    px-4
    py-3
    text-xs
    font-medium
    text-white
    backdrop-blur-md
    cursor-pointer
    transition-all
    duration-300
    hover:border-white/40
    hover:bg-black/30
    hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]
  "
          >
            <span className="preview-text-window">
              <span className="preview-text-track">
                <span className="preview-text">Preview Project</span>

                <span className="preview-text" aria-hidden="true">
                  Preview Project
                </span>
              </span>
            </span>

            <FiArrowUpRight
              className="
      text-sm
      transition-transform
      duration-5000
      group-hover/preview:translate-x-0.5
      group-hover/preview:-translate-y-0.5
    "
            />
          </a>
        </div>
      </div>

      {/* ======================================================
          CONTENT AREA
      ====================================================== */}

      <div className="px-4 pb-2 pt-5">
        {/* ====================================================
            METADATA PILLS
        ==================================================== */}

        <div className="flex flex-wrap gap-2">
          {/* Organization */}

          <span
            className="
              rounded-md
              bg-gray-100
              px-3
              py-2
              text-[11px]
              font-medium
              text-gray-500
            "
          >
            {item.organization}
          </span>

          {/* Category */}

          <span
            className="
              rounded-md
              bg-gray-100
              px-3
              py-2
              text-[11px]
              font-medium
              text-gray-500
            "
          >
            {item.category}
          </span>

          {/* TechStack */}

          <span
            className="
              rounded-md
              bg-gray-100
              px-3
              py-2
              text-[11px]
              font-medium
              text-gray-500
            "
          >
            {item.TechStack}
          </span>
        </div>

        {/* Divider */}

        <div className="my-3 h-px w-full bg-gray-200" />

        {/* ====================================================
            EXPANDABLE DESCRIPTION
        ==================================================== */}

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              {/* Description */}

              <p
                className="
                  pb-1
                  text-sm
                  leading-[1.45]
                  text-gray-500
                "
              >
                {item.description}
              </p>

              {/* =================================================
                  LINKS
              ================================================= */}

              <div className="mt-4 flex items-center justify-between">
                {/* GitHub */}

                {item.github ? (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-gray-500
                      transition-colors
                      hover:text-black
                    "
                  >
                    <FaGithub className="text-base" />

                    <span>GitHub</span>
                  </a>
                ) : (
                  <span />
                )}

                {/* Live Project */}

                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-medium
                      text-orange-500
                      transition-colors
                      hover:text-orange-600
                    "
                  >
                    <GoProjectSymlink className="text-base" />

                    <span>Live Project</span>
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ====================================================
            BOTTOM ARROW BUTTON
        ==================================================== */}

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={toggleDescription}
            aria-expanded={isExpanded}
            aria-label={
              isExpanded
                ? `Collapse ${item.title} description`
                : `Expand ${item.title} description`
            }
            className="
              flex
              h-7
              w-[48%]
              items-center
              justify-center
        
              transition-all
              duration-300
              active:scale-95
            "
          >
            {isExpanded ? (
              <FiChevronUp
                className="
                  text-xl
                  text-black
                  transition-transform
                  duration-300
                "
              />
            ) : (
              <FiChevronDown
                className="
                  text-xl
                  text-black
                  transition-transform
                  duration-300
                "
              />
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ============================================================
   PROJECTS SECTION
============================================================ */

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  /* ============================================================
     FILTER PROJECTS
  ============================================================ */

  const filteredItems =
    activeCategory === "All"
      ? ProjectsItems
      : ProjectsItems.filter(
          (item) =>
            item.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <section
      id="projects"
      className="
        relative
        mt-16
        min-h-screen
        overflow-hidden
        px-4
        py-16
        text-black
        sm:px-6
        bg-#CACACA
      "
    >
      {/* Section Title */}

      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <BackgroundBeams />

      {/* ======================================================
          FOREGROUND
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ====================================================
            HEADING
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mb-10 flex justify-center"
        >
          <h2
            className="
              px-6
              py-2
              text-3xl
              font-bold
              sm:text-4xl
            "
          >
            <AnimatedText
              className="
                text-3xl
                font-bold
                md:text-5xl
              "
            />
          </h2>
        </motion.div>

        {/* ====================================================
            FILTERS
        ==================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-14
            flex
            flex-wrap
            justify-center
            gap-5
          "
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                border-b-2
                px-2
                py-1
                text-sm
                font-medium
                transition-all
                duration-200
                md:text-base

                ${
                  activeCategory === cat
                    ? "scale-105 border-black text-orange-600"
                    : "border-transparent text-gray-400 hover:scale-105 hover:text-orange-600"
                }

                active:scale-95
              `}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* ====================================================
            PROJECTS GRID
        ==================================================== */}

        <motion.div
          layout
          className="
            grid
            grid-cols-1
            justify-items-center
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <ProjectCard key={item.title} item={item} index={index} />
              ))
            ) : (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="col-span-full flex flex-col items-center justify-center py-10"
              >
                <p className="text-center text-gray-400">
                  No projects found in this category.
                </p>
                <Lottie
                  animationData={nodata}
                  loop={true}
                  className="h-40 w-40"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
