import React, { useState, useEffect } from "react";
import { CiHome } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { LiaFolderOpenSolid } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbFileCv } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-scroll";
import { avatarImg } from "../assets";

const SideBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "Projects", "contact"];
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <CiHome />, label: "Home" },
    { id: "about", icon: <GoPerson />, label: "About" },
    { id: "skills", icon: <TbFileCv />, label: "Skills" },
    { id: "projects", icon: <LiaFolderOpenSolid />, label: "Projects" },
    { id: "contact", icon: <TfiEmail />, label: "Contact" },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 p-2 text-white bg-black rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "X" : "☰"}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen bg-black transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <div className="flex flex-col text-white items-center justify-center mb-4 space-y-3">
            <img
              className="w-[120px] h-[140px] p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={avatarImg}
              alt="avatar"
            />
            <p>Elizabeth Dowuona</p>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://www.linkedin.com/in/elizabethdowuona/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialLinkedin className="hover:text-orange-600" />
              </a>
              <a
                href="https://github.com/bethheal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="hover:text-orange-600" />
              </a>
              <a
                href="https://www.instagram.com/beth_tawiah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-orange-600" />
              </a>
            </div>
          </div>

          <ul className="space-y-4 items-center font-medium w-full pt-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsOpen(false); // close on mobile click
                  }}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors duration-300 group
                    ${
                      activeSection === item.id
                        ? "bg-orange-400 text-white"
                        : "text-white hover:bg-gray-700"
                    }`}
                >
                  {item.icon}
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
