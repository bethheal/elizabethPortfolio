import SideBar from "./SideBar";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

function RootLayout() {
  useEffect(() => {
    // ScrollL contains a hash
    const hash = window.location.hash.replace("#/", "");
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash, {
          duration: 500,
          smooth: "easeInOutQuart",
          offset: -70,
        });
      }, 100);
    }
  }, []);

  return (
    <>
      <SideBar />
      <main className=" pt-24 lg:pt-0">
        <Home />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default RootLayout;
