import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { logoDesign } from "../assets/images";

const Contact = () => {
  const LINKEDIN = "https://www.linkedin.com/in/elizabethdowuona/";
  const INSTAGRAM = "https://www.instagram.com/beth_tawiah/";
  const GITHUB = "https://github.com/bethheal/";
  const EMAIL = "elizabethbarden18@gmail.com";

  const footerLinks = {
    studio: [
      { label: "About", to: "about" },
      { label: "Experience", to: "experience" },
      { label: "Skills", to: "skills" },
    ],
    work: [
      { label: "Projects", to: "projects" },
      { label: "Contact", to: "contact" },
    ],
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#090b10] px-4 pb-5 pt-16 text-white sm:px-6 lg:px-10"
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      {/* Main breathing glow */}
      <motion.div
        className="pointer-events-none absolute left-[25%] top-[25%] h-[350px] w-[350px] rounded-full bg-[#d9ff32]/20 blur-[120px]"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.18, 0.35, 0.18],
          x: [0, 40, -20, 0],
          y: [0, -25, 30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary breathing glow */}
      <motion.div
        className="pointer-events-none absolute -bottom-32 right-[18%] h-[300px] w-[300px] rounded-full bg-[#b8e91e]/10 blur-[100px]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle moving light */}
      <motion.div
        className="pointer-events-none absolute left-0 top-0 h-px w-[35%] bg-gradient-to-r from-transparent via-[#d9ff32]/40 to-transparent"
        animate={{
          x: ["0%", "220%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* =====================================================
          FOOTER CONTAINER
      ====================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="
          relative
          mx-auto
          max-w-[1280px]
          overflow-hidden
          rounded-[28px]
          border
          border-white/[0.07]
          bg-white/[0.025]
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          backdrop-blur-2xl
        "
      >
        {/* Glass shine */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent" />

        {/* Top inner glow */}
        <div className="pointer-events-none absolute left-[8%] top-0 h-px w-[84%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
          {/* =================================================
              MAIN FOOTER CONTENT
          ================================================== */}

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
            {/* BRAND */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3">
                {/* Logo mark */}
                <motion.div
                  whileHover={{
                    rotate: 90,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="flex h-7 w-7 items-center justify-center"
                >
                 
                  <span className="text-3xl font-black leading-none  border-[#f54a00] border-1 rounded-full ">
                     <img className="rounded-full" src={logoDesign} alt="LiT Logo" />
                  </span>
                </motion.div>

                <span className="text-[17px] font-bold tracking-[0.18em]">
                  LiT
                </span>
              </div>

              <motion.p
                variants={itemVariants}
                className="mt-6 max-w-[270px] text-sm leading-6 text-white/50"
              >
                Software engineer crafting digital experiences, scalable
                products, and thoughtful interfaces.
              </motion.p>

              {/* CTA */}
             <motion.a
  variants={itemVariants}
  href={`mailto:${EMAIL}`}
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{
    scale: 0.97,
  }}
  className="
    group
    mt-7
    inline-flex
    items-center
    gap-3
    rounded-full
    bg-[#f54a00]
    px-5
    py-3
    text-xs
    font-bold
    tracking-wide
    text-[#090b10]
    shadow-[0_0_30px_rgba(217,255,50,0.15)]
    transition-shadow
    duration-300
    hover:shadow-[0_0_35px_rgba(217,255,50,0.35)]
  "
>
  Let's talk

  <motion.span
    animate={{
      x: [0, 3, 0],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
    }}
  >
    <FaArrowRight className="text-[10px]" />
  </motion.span>
</motion.a>
            </motion.div>

            {/* STUDIO */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f54a00]">
                Studio
              </h3>

              <div className="space-y-4">
                {footerLinks.studio.map((link) => (
                  <ScrollLink
                    key={link.label}
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="
                      group
                      relative
                      block
                      w-fit
                      cursor-pointer
                      text-sm
                      text-white/50
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {link.label}

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        w-0
                        bg-[#f54a00]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </ScrollLink>
                ))}
              </div>
            </motion.div>

            {/* WORK */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f54a00]">
                Work
              </h3>

              <div className="space-y-4">
                {footerLinks.work.map((link) => (
                  <ScrollLink
                    key={link.label}
                    to={link.to}
                    smooth
                    duration={600}
                    offset={-70}
                    className="
                      group
                      relative
                      block
                      w-fit
                      cursor-pointer
                      text-sm
                      text-white/50
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                  >
                    {link.label}

                    <span
                      className="
                        absolute
                        -bottom-1
                        left-0
                        h-px
                        w-0
                        bg-[#f54a00]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </ScrollLink>
                ))}
              </div>
            </motion.div>

            {/* CONNECT */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#f54a00]">
                Connect
              </h3>

              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 5 }}
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  Instagram
                  <FaArrowRight className="text-[8px] opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={LINKEDIN}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  LinkedIn
                  <FaArrowRight className="text-[8px] opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  GitHub
                  <FaArrowRight className="text-[8px] opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={`mailto:${EMAIL}`}
                  className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
                >
                  {EMAIL}
                  <FaEnvelope className="text-[9px] opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* =================================================
              DIVIDER
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="my-10 h-px w-full bg-white/[0.07]"
          />

          {/* =================================================
              BOTTOM BAR
          ================================================== */}

          <motion.div
            variants={itemVariants}
            className="
              flex
              flex-col
              gap-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-white/35
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-2">
              <span>© {new Date().getFullYear()}</span>
              <span className="text-white/15">•</span>
              <span>LiT. All rights reserved.</span>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                transition-colors
                hover:text-[#f54a00]
              "
            >
              <span>Back to top</span>

              <span
                className="
                  grid
                  h-7
                  w-7
                  place-items-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  group-hover:border-[#d9ff32]/40
                  group-hover:bg-[#d9ff32]/10
                "
              >
                <FaArrowUp className="text-[9px]" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          MOBILE SOCIAL BAR
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mt-5 flex max-w-[1280px] items-center justify-center gap-3 lg:hidden"
      >
        {[
          {
            icon: <FaLinkedinIn />,
            href: LINKEDIN,
            label: "LinkedIn",
          },
          {
            icon: <FaInstagram />,
            href: INSTAGRAM,
            label: "Instagram",
          },
          {
            icon: <FaGithub />,
            href: GITHUB,
            label: "GitHub",
          },
        ].map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.12,
              y: -3,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-white/[0.07]
              bg-white/[0.03]
              text-white/50
              backdrop-blur-xl
              transition-colors
              hover:border-[#d9ff32]/30
              hover:bg-[#d9ff32]/10
              hover:text-[#f54a00]
            "
            aria-label={social.label}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </footer>
  );
};

export default Contact;