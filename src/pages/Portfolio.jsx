import React from "react";
import { FaGithub } from "react-icons/fa";
import { portfolioImg, reviewImg, portfolioImg1 } from "../assets";

const portfolioItems = [
  {
    title: "Ghana Hazard Reporter",
    category: "Open Source",
    image: reviewImg,
    github: "https://github.com/bethheal/ghana-hazard-reporter.git",
  },
  {
    title: "Mr Kay AGRO Consult",
    category: "Website",
    image: portfolioImg,
    github: "https://github.com/bethheal/moses_konja.git",
  },
  {
    title: "nectRural",
    category: "Web App",
    image: portfolioImg1,
    github: "https://github.com/bethheal/nectRural.git",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-black mb-20 text-white min-h-screen py-10 px-4 sm:py-16 sm:px-6 overflow-x-hidden">
      {/* Heading */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-y-2 px-4 sm:px-6 py-2 text-center">
          PORTFOLIO
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-10">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="bg-[#2c2c2c] p-4 rounded-xl shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 object-cover rounded-lg mb-4"
            />
            <p className="text-red-500 text-sm font-semibold uppercase">
              {item.category}
            </p>
            <h3 className="text-base sm:text-lg font-semibold mt-1 mb-4">
              {item.title}
            </h3>

            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm text-orange-400 hover:text-orange-500 transition"
            >
              <FaGithub className="text-lg" />
              <span>View on GitHub</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
