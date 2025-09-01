import React, { useState, useEffect } from "react";
import RootLayout from "./components/RootLayout";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay or wait for assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time based on load experience

    return () => clearTimeout(timer);
  }, []);

  // Show scroll-to-top button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Show Loader before app renders */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <RootLayout />

          {/* Scroll-to-top button */}
          <AnimatePresence>
            {showScroll && (
              <motion.button
                key="scroll-button"
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-50 bg-orange-600 text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <FaArrowUp size={20} />
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
}

export default App;
