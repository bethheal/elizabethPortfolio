import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Professional Skills");

  const tabs = ["Education", "Professional Skills", "Experience"];

  const softSkills = [
    { name: "Team Collaboration", level: "100%" },
    { name: "Adaptability", level: "95%" },
    { name: "Communication ", level: "65%" },
  ];

  const devSkills = [
    { name: "React.js", level: "85%" },
    { name: "CSS(TailwindCSS)", level: "90%" },
    { name: "JavaScript", level: "75%" },
    { name: "Node.js", level: "50%" },
    { name: "MongoDB", level: "45%" },
    { name: "Express.js", level: "30%" },
  ];

  return (
    <section className="bg-black mb-20 text-white min-h-screen py-16 px-4 sm:px-6">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold border-y-2 px-6 py-2">
          RESUME
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10 mt-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-md text-sm sm:text-base font-semibold transition duration-300 ${
              activeTab === tab
                ? "bg-orange-600 text-white shadow-md -translate-y-1"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Professional Skills */}
      {activeTab === "Professional Skills" && (
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row lg:justify-center gap-12">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-500">
              Features
            </h3>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Design Skill</h2>
            {softSkills.map((skill) => (
              <div key={skill.name} className="mb-4 w-64 sm:w-72 md:w-80">
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-2 bg-orange-500 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-orange-500">
              Features
            </h3>
            <h2 className="text-xl sm:text-2xl font-bold mb-6">
              Development Skill
            </h2>
            {devSkills.map((skill) => (
              <div key={skill.name} className="mb-4 w-64 sm:w-72 md:w-80">
                <div className="flex justify-between text-xs sm:text-sm mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.level}</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full">
                  <div
                    className="h-2 bg-orange-500 rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {activeTab === "Education" && (
        <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:flex-row lg:justify-center gap-6 sm:gap-12">
          <div>
            <h3 className="text-sm sm:text-md italic font-semibold mb-4 text-orange-500">
              Graduated 2022
            </h3>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md w-72 sm:w-80 md:w-96">
              <h4 className="text-base sm:text-lg font-semibold mb-1">
                BTech in Computer Science
              </h4>
              <span className="text-xs sm:text-sm bg-orange-600 px-2 py-1 rounded-md">
                CGPA: / 5.00
              </span>
              <p className="text-xs sm:text-sm mt-3 text-gray-300">
                Completed a 2-year Bachelor of Technology program...
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-md italic font-semibold mb-4 text-orange-500">
              Graduated 2020
            </h3>
            <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md w-72 sm:w-80 md:w-96">
              <h4 className="text-base sm:text-lg font-semibold mb-1">
                HND in Computer Science
              </h4>
              <span className="text-xs sm:text-sm bg-orange-600 px-2 py-1 rounded-md">
                CGPA: / 5.00
              </span>
              <p className="text-xs sm:text-sm mt-3 text-gray-300">
                Completed a 3-year Higher National Diploma in Computer Science...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
     {activeTab === "Experience" && (
  <div className="flex flex-col items-center text-center gap-6 w-full max-w-screen-lg px-2">
    <div className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md w-full max-w-xs sm:max-w-md md:max-w-lg">
      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
        Junior Web Developer (Apprentiship)
      </h4>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">
        GROW, Generation Ghana (05/2024 - 08/2024)
      </p>
      <p className="text-xs sm:text-sm mt-3 text-gray-300">
        Developed responsive web interfaces using React and TailwindCSS.
      </p>
    </div>

    <div className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md w-full max-w-xs sm:max-w-md md:max-w-lg">
      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
        IT Support Specialist
      </h4>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">
        Hyperlink Network System (09/2021 - 08/2023)
      </p>
      <p className="text-xs sm:text-sm mt-3 text-gray-300">
        Delivered expert technical support to businesses...
      </p>
    </div>

    <div className="bg-gray-800 p-4 sm:p-5 md:p-6 rounded-lg shadow-md w-full max-w-xs sm:max-w-md md:max-w-lg">
      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1">
        Training Program
      </h4>
      <p className="text-xs sm:text-sm text-gray-400 mb-2">
        Amalitech (05/2023)
      </p>
      <p className="text-xs sm:text-sm mt-3 text-gray-300">
        Acquired skills in styling and formatting web pages using CSS...
      </p>
    </div>
  </div>
)}

      {/* Download CV */}
      <div className="mt-16 flex justify-center">
        <a
          href="/public/Resume.pdf"
          download
          className="bg-orange-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold shadow-md hover:bg-orange-700 transition flex items-center space-x-2 text-sm sm:text-base"
        >
          <FaDownload />
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
};

export default Resume;
