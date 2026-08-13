import { useState, useEffect } from "react";

export default function SkillsAnimatedText({ className = "" }) {
  const words = ["Skills", "Tools & ", "Platforms"];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start by hiding current word
      setShow(false);

      // Wait for animation out, then change word
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setShow(true);
      }, 500); // 300ms = matches transition duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
    
      className={`inline-block text-center
        transition-all duration-500 ease-in-out
        ${show ? "opacity-100 blur-0" : "opacity-0 blur-sm"} ${className}
      `}
    >

      {words[index]}
                  <span className="text-orange-600">.</span>

    </span>
  );
}
