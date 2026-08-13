import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiHome } from "react-icons/ci";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { LiaFolderOpenSolid } from "react-icons/lia";
import { SlSocialLinkedin } from "react-icons/sl";
import { TbFileCv } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-scroll";
import { avatarImg } from "../assets/images";

const navItems = [
  { id: "home", icon: <CiHome />, label: "Home" },
  { id: "experience", icon: <GoPerson />, label: "Experience" },
  { id: "skills", icon: <TbFileCv />, label: "Skills" },
  {
    id: "projects",
    icon: <LiaFolderOpenSolid />,
    label: "Projects",
  },
  { id: "contact", icon: <TfiEmail />, label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/elizabethdowuona/",
    label: "LinkedIn",
    icon: <SlSocialLinkedin />,
  },
  {
    href: "https://github.com/bethheal",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.instagram.com/beth_tawiah/",
    label: "Instagram",
    icon: <FaInstagram />,
  },
];

const SideBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "skills", "projects", "contact"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEscape);

    document.body.style.overflow = isOpen ? "hidden" : "";

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelect = (itemId) => {
    setActiveSection(itemId);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed left-1/2 z-50 w-[min(92vw,1080px)] -translate-x-1/2 rounded-full border border-white/50 bg-black/10 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              className="h-10 w-10 rounded-full border border-orange-400/40 object-cover"
              src={avatarImg}
              alt="Elizabeth Dowuona"
            />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-black">
                LiT
              </p>
              <p className="text-xs text-orange-400/90">
                Portfolio • Software Engineer
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-orange-400/60 hover:bg-orange-500/15"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="fixed inset-y-4 right-4 z-50 flex w-[min(calc(100vw-2rem),20rem)] flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-black/10 px-5 py-6 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-orange-400">
                    Navigate
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-lg transition hover:border-orange-400/60 hover:text-orange-400"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

              <div className="mt-8 flex-1">
                <ul className="space-y-3 pr-0">
                  {navItems.map((item) => (
                    <li key={item.id} className="relative overflow-visible">
                      {activeSection === item.id && (
                        <>
                          <motion.div
                            layoutId="active-menu-item"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 24,
                            }}
                            className="absolute -left-3 -right-5 top-0 bottom-0 z-0 rounded-l-[2rem] bg-white shadow-[0_18px_48px_rgba(0,0,0,0.16)]"
                          />
                        </>
                      )}
                      <Link
                        to={item.id}
                        smooth={true}
                        duration={500}
                        offset={-90}
                        onClick={() => handleSelect(item.id)}
                        className={`relative z-20 flex items-center gap-4 border px-4 py-4 transition-all duration-300 ${
                          activeSection === item.id
                            ? "rounded-l-[2rem] rounded-r-none border-transparent bg-transparent text-[#111827]"
                            : "rounded-[2.25rem] border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        <span className="flex items-center gap-2 text-lg font-semibold">
                          {item.icon}
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 transition hover:border-orange-400/50 hover:text-orange-300"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideBar;
