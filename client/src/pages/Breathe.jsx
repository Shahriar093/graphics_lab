import React, { useState, useEffect } from "react";

const Breathe = () => {
  const [phase, setPhase] = useState("Inhale"); // Inhale, Hold, Exhale
  const [instruction, setInstruction] = useState("Get ready...");

  useEffect(() => {
    let timer;
    const flow = () => {
      setPhase("inhale");
      setInstruction("Breathe in slowly...");

      timer = setTimeout(() => {
        setPhase("hold");
        setInstruction("Hold your breath...");

        timer = setTimeout(() => {
          setPhase("exhale");
          setInstruction("Now, let it all out...");

          timer = setTimeout(flow, 4000); // Repeat cycle
        }, 4000);
      }, 4000);
    };

    flow();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center bg-[#f0f7ff] px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-light text-blue-900 mb-2 italic">
          Mindful Breathing
        </h1>
        <p className="text-blue-500 font-medium tracking-wide uppercase text-xs">
          Underwater Serenity
        </p>
      </div>

      {/* Breathing Circle Container */}
      <div className="relative flex items-center justify-center w-80 h-80">
        {/* Outer Glow */}
        <div className="absolute inset-0 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

        {/* The Animated Circle */}
        <div
          className={`rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-2xl shadow-blue-300 transition-all duration-[4000ms] ease-in-out flex items-center justify-center
          ${phase === "inhale" ? "w-64 h-64 opacity-100" : ""}
          ${phase === "hold" ? "w-64 h-64 opacity-80" : ""}
          ${phase === "exhale" ? "w-24 h-24 opacity-60" : ""}`}
        >
          <span className="text-white font-medium tracking-widest text-sm uppercase">
            {phase}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-16 text-center">
        <p className="text-xl text-blue-800 font-light transition-opacity duration-500">
          {instruction}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-10 text-blue-400 hover:text-blue-600 text-sm font-medium transition-colors border-b border-blue-200"
        >
          Reset Rhythm
        </button>
      </div>

      {/* Thesis Context Note */}
      <footer className="absolute bottom-10 opacity-40 text-blue-900 text-[10px] uppercase tracking-[0.2em]">
        Low Complexity Stress Relief System
      </footer>
    </div>
  );
};

export default Breathe;
