import React, { useEffect, useState } from "react";

export default function CountUpStats({ items = [], duration = 1500 }) {
  return (
    <div className="w-full flex justify-center gap-6 flex-wrap mt-6">
      {items.map((it) => (
        <CounterCard key={it.label} label={it.label} end={it.value} duration={duration} />
      ))}
    </div>
  );
}

function CounterCard({ label, end = 0, duration = 1500 }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const range = end - start;
    if (range <= 0) {
      setValue(end);
      return;
    }
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(start + range * progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    }

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-center px-4 py-2 bg-white/5 rounded-md min-w-[90px]">
      <span className="text-2xl sm:text-3xl font-bold text-white">{value}</span>
      <span className="text-xs sm:text-sm text-gray-300 mt-1">{label}</span>
    </div>
  );
}
