import React from "react";
import { Link } from "react-router-dom";

const Games = () => {
  const gameList = [
    {
      id: "bubble-pop",
      title: "Deep Sea Pop",
      description: "Pop gentle bubbles to release tension.",
      icon: "🫧",
      color: "bg-blue-100",
    },
    {
      id: "pattern-match",
      title: "Fish Harmony",
      description: "Match species in a calm underwater grid.",
      icon: "🐠",
      color: "bg-cyan-100",
    },
    {
      id: "zen-draw",
      title: "Sand Ripples",
      description: "Draw patterns in virtual glowing sand.",
      icon: "🏖️",
      color: "bg-indigo-100",
    },
  ];

  return (
    <div className="min-h-[90vh] bg-[#f0f7ff] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-light text-blue-900 mb-3">
            Mindful Play
          </h1>
          <p className="text-blue-500 italic text-sm">
            Games designed to lower cortisol, not raise it.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gameList.map((game) => (
            <div
              key={game.id}
              className="group bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] p-8 shadow-xl shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div
                className={`w-16 h-16 ${game.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}
              >
                {game.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {game.title}
              </h3>
              <p className="text-blue-700/60 text-sm leading-relaxed mb-6">
                {game.description}
              </p>
              <button className="w-full py-3 bg-blue-500 text-white rounded-xl font-medium text-sm hover:bg-blue-600 shadow-md shadow-blue-200 transition-colors">
                Start Session
              </button>
            </div>
          ))}
        </div>

        {/* Thesis Context Section */}
        <div className="mt-20 p-8 bg-blue-900/5 rounded-[2rem] border border-blue-100 text-center">
          <h4 className="text-blue-900 font-medium mb-2 text-sm uppercase tracking-widest">
            Research Context
          </h4>
          <p className="text-blue-800/50 text-xs italic leading-relaxed">
            Utilizing low-complexity visual processing inspired by underwater
            fish detection research to promote cognitive rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Games;
