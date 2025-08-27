import SideBar from "./SideBar";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Home from "../pages/Home";
import About from "../pages/About";
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
<main className="sm:ml-64 px-4 pt-6">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
    </main>
  </>
);

}

export default RootLayout;
