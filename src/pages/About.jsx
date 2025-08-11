import React from "react";
import { SiMongoosedotws } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="bg-amber-50 my-10 pt-10 px-4 sm:px-8 md:px-16 lg:px-24 md:my-20"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold border-y-2 inline-block px-4 sm:px-6 py-2">
          ABOUT ME
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <p className="text-sm sm:text-base md:text-lg font-light text-gray-800 mb-6 leading-relaxed">
            I’m{" "}
            <span className="font-bold text-base sm:text-lg">
              Elizabeth,
            </span>{" "}
            <span className="font-light text-base sm:text-lg">
              a Frontend Developer Enthusiast
            </span>{" "}
            skilled in creating responsive and interactive user interfaces.
            <br />
            I thrive on using modern tools like React and Tailwind CSS to build
            sleek, engaging web experiences that are both functional and
            user-friendly. With a strong eye for design and a love for clean
            code, I bring energy and precision to every project I take on.
          </p>

          {/* Stats */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 bg-black text-white p-6 sm:p-8 gap-6 sm:gap-10 max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl rounded-lg">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">
                  4+
                </p>
                <p className="text-xs sm:text-sm">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">
                  10+
                </p>
                <p className="text-xs sm:text-sm">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600">
                  2+
                </p>
                <p className="text-xs sm:text-sm">In Progress</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold mb-6">What I Do?</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <MdOutlineDeveloperMode className="text-4xl sm:text-5xl md:text-6xl text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Frontend Development
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  Building responsive and dynamic UIs using React, Tailwind CSS,
                  HTML, and CSS.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <SiMongoosedotws className="text-4xl sm:text-5xl md:text-6xl text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  Backend Integration
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  Connecting applications with APIs and managing data flow using
                  tools like Axios and Fetch.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <FaConnectdevelop className="text-4xl sm:text-5xl md:text-6xl text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-sm sm:text-base">
                  API Integration
                </h4>
                <p className="text-xs sm:text-sm text-gray-700">
                  Seamlessly integrating third-party APIs for authentication,
                  data, and more.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
