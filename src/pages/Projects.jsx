import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioImg, reviewImg, nectRuralImg, coffeeListImg, itfImg, realview, millmeProducts} from "../assets";
import { BackgroundBeams } from "../components/bgMotion";
import AnimatedText from "./PagesComponents/projects-text-animate";

const categories = ["All", "Open Source", "Website", "Web App", "API Integration"];

const ProjectsItems = [
  {
    title: "Ghana Hazard Reporter",
    category: "Open Source",
    image: reviewImg,
    github: "https://github.com/bethheal/ghana-hazard-reporter.git",
  },
  {
    title: "Kay AGRO Consult",
    category: "Website",
    image: portfolioImg,
    github: "https://github.com/bethheal/moses_konja.git",
    live: "https://mrkayagroconsult.netlify.app/",
  },
  {
    title: "Coffee Menu",
    category: "API Integration",
    image: coffeeListImg,
    github:"https://github.com/bethheal/coffee-listing",
    live: "https://litcoffeelisting.netlify.app/",
  },
   {
    title: "Real View Estate and Construction",
    category: "Web App",
    image: realview,
    github:"https://github.com/bethheal/RealViewSafe",
    live: "https://realviewfrontend.onrender.com/",
  },
     {
    title: "Millme Products",
    category: "Website",
    image: millmeProducts,
    github:"https://github.com/bethheal/MILLME",
    live: "https://millme.netlify.app/",
  },
  

  {
    title: "nectRural",
    category: "Web App",
    image: nectRuralImg,
    github: "https://github.com/bethheal/nectRural.git",
    live: "https://nect-rural.netlify.app/",
  },
  {
    title: "Integrity Trust Foundation",
    category: "Web App",
    image: itfImg,
    github: "https://github.com/bethheal/itf_project",
    live: "https://integritytrust.netlify.app/",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory.toLowerCase() === "all"
      ? ProjectsItems
      : ProjectsItems.filter(
          (item) =>
            item.category &&
            item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <section
      id="projects"
      className="relative bg-black text-white min-h-screen py-16 px-6 overflow-hidden"
    >
      {/* Background effect */}
      <BackgroundBeams />

      {/* Foreground content */}
      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold px-6 py-2">
            <AnimatedText className="text-3xl md:text-5xl font-bold" />
          </h2>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center flex-wrap gap-4 md:space-x-6 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base pointer font-medium border-b-2 px-2 py-1
              transition duration-200 ease-in-out transform
              ${
                activeCategory === cat
                  ? "border-white text-white scale-105"
                  : "border-transparent text-gray-400 hover:text-white hover:scale-105"
              }
              active:scale-95`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="bg-white/30 backdrop-blur-xl p-1 rounded-2xl border border-white/40 shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition transform"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-2xl"
                  />

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="uppercase text-xs text-gray-400 font-semibold tracking-wide mb-2">
                      {item.category}
                    </p>
                    <h3 className="text-lg font-semibold mb-4">{item.title}</h3>

                    <div className="flex justify-between items-center cursor-pointer">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm text-orange-400 hover:text-orange-500 transition"
                        >
                          <FaGithub className="text-lg" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-sm text-green-400 hover:text-green-600 transition"
                        >
                          <GoProjectSymlink className="text-lg" />
                          <span>Preview Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-400"
              >
                No projects found in this category.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
