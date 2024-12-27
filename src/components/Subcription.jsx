"use client";

import { useRef } from "react";

export const Subcription = () => {
  const containerRef = useRef(null);

  return (
    <div className="bg-[linear-gradient(to_bottom,#228B22,#6B8E23)] py-[72px] text-white px-8">
      <div className="container mx-auto max-w-xl relative">
        <h2 className="text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter">
          Subscribe to Stay Updated
        </h2>
        <p className="text-center mt-5 text-xl text-white/70 max-w-xl mx-auto">
          Stay ahead with the latest updates! Subscribe now to be the first to
          know about our exciting new features, tools, and improvements designed
          just for you.
        </p>
        <form className="flex flex-col mt-10 gap-2.5 max-w-sm mx-auto sm:flex-row sm:flex-1">
          <input
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/70 active:outline-none"
            placeholder="your@email.com"
          />
          <button className="h-12 bg-white text-[#6B8E23] font-medium px-5 rounded-lg">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
