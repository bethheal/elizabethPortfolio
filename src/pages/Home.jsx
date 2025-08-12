import React from "react";
import { bgImg, profileImg } from "../assets";
import { FaLongArrowAltRight, FaQuoteLeft } from "react-icons/fa";
import AvatarReview from "./PagesComponents/AvatarReview";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center min-h-screen px-2 w-full overflow-x-hidden mb-30"
    >
      {/* Header Greeting */}
      <div className="pt-20 font-semibold flex flex-col items-center text-center w-full">
        <h1 className="text-base sm:text-lg md:text-xl">Hello There</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          I'm <span className="italic text-orange-600">Elizabeth Dowuona</span>
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base">
          Software Developer
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-4 pt-8 sm:gap-8 sm:pt-12 lg:flex-row lg:items-start lg:text-left text-center w-full justify-center">
        {/* Left Section */}
        <div className="flex flex-col items-center px-2 sm:px-4 lg:items-start flex-1">
          <FaQuoteLeft className="self-center lg:self-start" />
          <p className="font-light text-xs sm:text-sm text-gray-700 mt-4 mb-8 max-w-sm">
            Passionate about turning ideas into intuitive digital experiences, I
            specialize in building responsive, user-focused interfaces. I thrive
            in collaborative environments, constantly seek to learn and evolve
            in the ever-changing world of tech.
          </p>

          <div className="flex flex-col items-center lg:items-start">
            <AvatarReview />
            <span className="text-orange-600 font-bold text-base sm:text-lg">
              10<span>+</span> Reviews
            </span>
            <p className="font-light text-xs sm:text-sm text-gray-700">
              Reviews from clients
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-sm lg:max-w-md">
            {/* Background Image */}
            <img
              src={bgImg}
              alt="Background"
              className="w-full h-48 sm:h-56 lg:h-64 object-cover object-center rounded-xl"
            />

            {/* Profile Image */}
            <img
              src={profileImg}
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 object-cover object-center rounded-full border-4 border-white shadow-lg absolute top-12 sm:top-14 lg:top-8 z-10"
            />

            {/* Buttons */}
            <div className="relative mt-4 sm:absolute sm:top-[calc(100%+4rem)] flex flex-col sm:flex-row gap-3 z-20 bg-white p-2 rounded-full shadow-xl">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                className="bg-black text-orange-600 px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 text-xs sm:text-sm shadow-xl hover:bg-orange-600 hover:text-white transition-colors duration-300"
              >
                <span>Portfolio</span>
                <FaLongArrowAltRight className="rounded-full text-white w-4 h-4 bg-orange-600" />
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70} 
                className="text-orange-600 cursor-pointer px-5 py-2 border border-black rounded-full text-xs sm:text-sm shadow hover:bg-orange-600 hover:text-white transition-colors duration-300">
                Hire me
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center space-y-4 flex-1">
          <p className="bg-black text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
            React.js
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <p className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
              Node.js
            </p>
            <p className="bg-orange-200 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
              <span className="bg-orange-600 w-2 h-2 rounded-full inline-block"></span>
              Express.js
            </p>
            <p className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
              Git & GitHub
            </p>
            <p className="bg-black text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
              Website Design
            </p>
          </div>

          <p className="bg-orange-200 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1">
            <span className="bg-orange-600 w-2 h-2 rounded-full inline-block"></span>
            Firebase
          </p>
        </div>
      </div>

      {/* Skills Scroller */}
      <div className="w-full relative bg-black py-2 mt-10 sm:mt-20 overflow-x-auto no-scrollbar lg:mt-34">
        <div className="flex animate-scroll items-center whitespace-nowrap px-4 text-xs sm:text-sm space-x-4">
          <span className="text-white">Responsive Design</span>
          <span className="text-red-500">+</span>
          <span className="text-white">Database</span>
          <span className="text-red-500">+</span>
          <span className="text-white">API Integration</span>
          <span className="text-red-500">+</span>
          <span className="text-white">Optimization</span>
          <span className="text-red-500">+</span>
          <span className="text-white">Authentication</span>
          <span className="text-red-500">+</span>
          <span className="text-white">Deployment</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
