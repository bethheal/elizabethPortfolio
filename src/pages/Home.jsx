import React from "react";
import { profileImg } from "../assets/images";
import { FaArrowRight, FaCircle } from "react-icons/fa";
import { Link } from "react-scroll";
import ServiceTicker from "./PagesComponents/ServiceTicker";

const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-[#080808] text-white"
    >
       <div className="text-center mb-10">
        <h2 className="text-2xl  text-black sm:text-3xl md:text-4xl font-bold border-y-2 inline-block px-4 sm:px-6 py-2">
          Projects
        </h2>
      </div>
      {/* =========================
          BACKGROUND EFFECTS
      ========================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Orange glow */}
        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[150px]" />

        {/* White glow */}
        <div className="absolute bottom-[5%] left-[-10%] h-[300px] w-[300px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        {/* =========================
            NAME
        ========================== */}

        <div className="relative pt-12 sm:pt-16 md:pt-20 lg:pt-16">
          <h1
            className="
              whitespace-nowrap
              text-center
              text-[16vw]
              font-medium
              uppercase
              leading-[0.75]
              tracking-[-0.07em]
              text-white
              sm:text-[15vw]
              md:text-[13vw]
              lg:text-[11.5vw]
              xl:text-[11vw]
            "
          >
            ELIZABETH MAAME
          </h1>

          {/* =================================================
              SOFTWARE + BIG PROFILE IMAGE + ENGINEER
          ================================================= */}

          <div
            className="
              relative
              mt-8
              flex
              min-h-[520px]
              items-start
              justify-center
              md:mt-10
              md:min-h-[600px]
              lg:min-h-[680px]
            "
          >
            {/* =========================
                SOFTWARE
            ========================== */}

            <span
              className="
                relative
                z-10
                mt-8
                whitespace-nowrap
                text-[8vw]
                font-light
                uppercase
                leading-none
                tracking-[-0.05em]
                text-white/90
                sm:text-5xl
                md:text-6xl
                lg:mt-12
                lg:text-[6.2vw]
              "
            >
              Software
            </span>

            {/* =========================
                BIG PROFILE IMAGE
            ========================== */}

            <div
              className="
                relative
                z-30
                mx-[-2vw]
                mt-[-100px]
                h-[430px]
                w-[290px]
                shrink-0
                overflow-hidden
                shadow-[0_30px_80px_rgba(0,0,0,0.8)]

                sm:mx-[-2.5vw]
                sm:mt-[-105px]
                sm:h-[500px]
                sm:w-[330px]

                md:mt-[-130px]
                md:h-[580px]
                md:w-[380px]

                lg:mx-[-2vw]
                lg:mt-[-140px]
                lg:h-[680px]
                lg:w-[440px]
              "
            >
              <img
                src={profileImg}
                alt="Elizabeth Dowuona"
                className="
                  h-full
                  w-full
                  object-cover
                  object-top
                "
              />

              {/* Bottom fade */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  bottom-0
                  h-[38%]
                  bg-gradient-to-t
                  from-[#080808]
                  via-[#080808]/70
                  to-transparent
                "
              />
            </div>

            {/* =========================
                ENGINEER
            ========================== */}

            <span
              className="
                relative
                z-10
                mt-8
                whitespace-nowrap
                text-[8vw]
                font-light
                uppercase
                leading-none
                tracking-[-0.05em]
                text-white/90
                sm:text-5xl
                md:text-6xl
                lg:mt-12
                lg:text-[6.2vw]
              "
            >
              Engineer
            </span>
          </div>
        </div>

        {/* =========================
            HERO CONTENT
        ========================== */}

        <div
          className="
            relative
            z-40
            -mt-[150px]
            flex
            flex-col
            items-center
            justify-between
            gap-10
            pb-16
            lg:-mt-[300px]
            lg:flex-row
            lg:items-end
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================== */}

          <div
            className="
              flex
              w-full
              max-w-[350px]
              flex-col
              items-center
              text-center
              lg:items-start
              lg:text-left
            "
          >
            {/* Availability */}
            <div
              className="
                mb-6
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-white/5
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <FaCircle className="h-2 w-2 text-lime-400" />

              <span className="text-xs font-light text-white/80 sm:text-sm">
                Open for freelance works.
              </span>
            </div>

            {/* Description */}
            <p
              className="
                max-w-[330px]
                text-sm
                font-light
                leading-7
                text-white/65
                sm:text-base
                sm:leading-8
              "
            >
              Hey there! I'm a Software Engineer building modern, responsive and
              user-focused digital experiences for the global marketplace.
            </p>

            {/* Button */}
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-70}
              className="
                group
                mt-7
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-300
                hover:bg-orange-500
                hover:text-white
              "
            >
              <span>Schedule Call</span>

              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                <FaArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </div>

          {/* =========================
              RIGHT CONTENT
          ========================== */}

          {/* =========================
    RIGHT CONTENT
========================== */}
          <div
            className="
    flex
    w-full
    max-w-[300px]
    flex-col
    items-center
    text-center
    lg:items-end
    lg:text-right
  "
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              What I Do
            </p>

            <h2
              className="
      mt-4
      text-2xl
      font-light
      uppercase
      leading-tight
      tracking-tight
      sm:text-3xl
    "
            >
              Digital
              <br />
              Experiences
            </h2>

            <ServiceTicker />
          </div>
        </div>

        {/* =========================
            TECHNOLOGY STRIP
        ========================== */}

        <div
          className="
            relative
            z-40
            mb-8
            flex
            w-full
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-4
            border-t
            border-white/10
            py-5
            sm:justify-between
            sm:gap-x-5
          "
        ></div>
      </div>
    </section>
  );
};

export default Home;
