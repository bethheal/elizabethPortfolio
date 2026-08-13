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

{/* =========================
    NAME
========================== */}
<div className="relative pt-10 sm:pt-14 md:pt-16 lg:pt-16">
  <h1
    className="
      w-full
      text-center
      text-[15vw]
      font-medium
      uppercase
      leading-[0.78]
      tracking-[-0.075em]
      text-white

      sm:text-[14vw]
      md:text-[12.5vw]
      lg:text-[11vw]
      xl:text-[10.5vw]
      2xl:text-[10vw]
    "
  >
    ELIZABETH MAAME
  </h1>

  {/* =================================================
      SOFTWARE + PROFILE IMAGE + ENGINEER
  ================================================= */}
  <div
    className="
      relative
      mt-10
      flex
      min-h-[390px]
      w-full
      items-start
      justify-center

      sm:mt-12
      sm:min-h-[470px]

      md:mt-14
      md:min-h-[560px]

      lg:mt-16
      lg:min-h-[650px]

      xl:min-h-[700px]
    "
  >
    {/* =========================
        SOFTWARE
    ========================== */}
    <span
      className="
        relative
        z-10
        mt-10
        shrink-0
        whitespace-nowrap
        text-[7vw]
        font-light
        uppercase
        leading-none
        tracking-[-0.06em]
        text-white/90

        sm:mt-12
        sm:text-[6.5vw]

        md:mt-16
        md:text-[6vw]

        lg:mt-20
        lg:text-[5.8vw]

        xl:text-[5.5vw]
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
        mx-[-1.5vw]
        mt-[-55px]
        h-[390px]
        w-[250px]
        shrink-0
        overflow-hidden
        rounded-[2px]
        shadow-[0_30px_80px_rgba(0,0,0,0.8)]

        sm:mx-[-2vw]
        sm:mt-[-75px]
        sm:h-[480px]
        sm:w-[310px]

        md:mx-[-2vw]
        md:mt-[-95px]
        md:h-[560px]
        md:w-[360px]

        lg:mx-[-2vw]
        lg:mt-[-115px]
        lg:h-[650px]
        lg:w-[420px]

        xl:h-[700px]
        xl:w-[455px]
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
        mt-10
        shrink-0
        whitespace-nowrap
        text-[7vw]
        font-light
        uppercase
        leading-none
        tracking-[-0.06em]
        text-white/90

        sm:mt-12
        sm:text-[6.5vw]

        md:mt-16
        md:text-[6vw]

        lg:mt-20
        lg:text-[5.8vw]

        xl:text-[5.5vw]
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
