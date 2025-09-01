import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="animate-spin h-16 w-16 rounded-full border-4 border-orange-500 border-t-transparent"></div>
    </div>
  );
};

export default Loader;
