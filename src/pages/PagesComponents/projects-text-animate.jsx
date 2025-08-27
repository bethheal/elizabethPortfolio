import { useState, useEffect } from "react";

export default function AnimatedText() {
  const words = ["Experiments", "Creativity", "Work"];
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
      className={`absolute inset-x-0 top-0 m-auto inline-block w-full text-center
        transition-all duration-500 ease-in-out
        ${show ? "opacity-100 blur-0" : "opacity-0 blur-sm"}
      `}
    >
      {words[index]}
    </span>
  );
}
