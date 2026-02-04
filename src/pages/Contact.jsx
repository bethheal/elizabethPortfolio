import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaInfo,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { contactImg } from "../assets";

const Contact = () => {
  const LINKEDIN = "https://www.linkedin.com/in/elizabethdowuona/";
  const INSTAGRAM = "https://www.instagram.com/beth_tawiah/";
  const GITHUB = "https://github.com/bethheal/";
  const EMAIL = "elizabethbarden18@gmail.com";

  const ACCENT = "#fffff"; // background/accent
  const HOVER = "#FF8904"; // hover accent

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#fffff] px-4 py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[28px] bg-zinc-950 shadow-2xl"
        >
          {/* subtle background texture */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          </div>

          {/* Left vertical nav */}
          <div className="absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 sm:flex">
            <ScrollLink
              to="home"
              smooth
              duration={500}
              offset={-70}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15 cursor-pointer"
              style={{ color: "white" }}
              aria-label="Go to Home"
              role="button"
            >
              <FaHome className="text-[18px]" />
            </ScrollLink>

            <a
              href={`mailto:${EMAIL}`}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15 cursor-pointer"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope className="text-[18px]" />
            </a>

            {/* Optional: scroll to about (change to your section id) */}
            <ScrollLink
              to="about"
              smooth
              duration={500}
              offset={-70}
              className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15 cursor-pointer"
              aria-label="Go to About"
              role="button"
            >
              <FaInfo className="text-[18px]" />
            </ScrollLink>
          </div>

          {/* Top-right socials */}
          <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
              aria-label="LinkedIn"
              title="LinkedIn"
              onMouseEnter={(e) => (e.currentTarget.style.color = HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              <FaLinkedinIn />
            </a>

            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
              aria-label="Instagram"
              title="Instagram"
              onMouseEnter={(e) => (e.currentTarget.style.color = HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              <FaInstagram />
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/15"
              aria-label="GitHub"
              title="GitHub"
              onMouseEnter={(e) => (e.currentTarget.style.color = HOVER)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
            >
              <FaGithub />
            </a>
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 gap-10 px-6 py-10 sm:px-12 sm:py-14 lg:grid-cols-2 lg:gap-0">
            {/* Left: form */}
            <div className="lg:pr-12">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Let’s <span className="text-[#FFD6A7]">talk</span>
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/60">
                Send me a message. You can also
                reach me directly via email.
              </p>

              <form
                className="mt-7 ml-10 space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="mb-2 block text-xs text-white/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#FFD6A7]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#FFD6A7]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-white/70">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Type your message here..."
                    rows={5}
                    className="w-full resize-none rounded-2xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-[#FFD6A7]"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFD6A7] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition-colors hover:bg-[#FF8904]"
                >
                  Send Message
                </button>

                <p className="pt-2 text-xs text-white/50">
                  Or email me:{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-white hover:text-[#FF8904]"
                  >
                    {EMAIL}
                  </a>
                </p>
              </form>
            </div>

            {/* Right: image + blob */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* yellow blob */}
              <div className="absolute -bottom-10 right-4 h-[220px] w-[220px] rounded-[60%_40%_55%_45%/55%_45%_55%_45%] bg-[#FFD6A7]/95 sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px]" />

              {/* white outline accent */}
              <div className="pointer-events-none absolute -bottom-10 right-2 h-[160px] w-[160px] rounded-[60%_40%_55%_45%/55%_45%_55%_45%] border-2 border-white/80 sm:h-[220px] sm:w-[220px]" />

              {/* circular photo */}
              <div className="relative z-10 h-[180px] w-[180px] overflow-hidden rounded-full drop-shadow-2xl sm:h-[260px] sm:w-[260px] md:h-[340px] md:w-[340px]">
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  src={contactImg}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Optional: subtle ring behind circle for extra depth */}
              <div className="pointer-events-none absolute -bottom-2 right-10 hidden h-[380px] w-[380px] rounded-full border border-white/10 lg:block" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
