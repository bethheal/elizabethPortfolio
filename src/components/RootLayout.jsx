import SideBar from "./SideBar";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Home from "../pages/home";
import About from "../pages/about";
import Resume from "../pages/Resume";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";




function RootLayout() {
  useEffect(() => {
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
    <div className="flex">
      <SideBar />
      <main className="flex-1 ml-64 p-4">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="resume" className="min-h-screen">
          <Resume/>
        </section>

        <section id="portfolio" className="min-h-screen">
          <Portfolio/>
        </section>

        <section id="contact" className="min-h-screen">
          <Contact/>
        </section>
      </main>
    </div>
  );
}

export default RootLayout;
