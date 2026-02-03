import React from "react";

const Home = () => {
  return (
    // Background uses a soft, airy blue gradient mimicking the sky or clear water
    <div className="min-h-screen bg-gradient-to-b from-[#eef7ff] to-[#cfe2f3] px-6 py-12 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-tight mb-4 text-blue-900 italic">
            Serene<span className="text-blue-500">Flow</span>
          </h1>
          <p className="text-xl text-blue-700/80 font-medium">
            A gentle space to breathe, release, and reconnect.
          </p>
        </header>

        {/* Hero Video/Animation Section */}
        <div className="mb-16 relative aspect-video bg-white/40 backdrop-blur-sm rounded-[3rem] border border-blue-100 flex items-center justify-center shadow-2xl shadow-blue-200/50 overflow-hidden group">
          <div className="text-center p-8">
            <div className="w-20 h-20 border-4 border-blue-300 border-t-transparent rounded-full animate-spin mx-auto mb-4 opacity-20"></div>
            <p className="text-blue-800 font-light">
              [ Primary Soothing Video / Interactive Breathing Circle ]
            </p>
            <p className="text-xs text-blue-400 mt-2 italic">
              Focus your eyes here to begin relaxation
            </p>
          </div>
        </div>

        {/* Content Section */}
        <main className="space-y-12">
          {/* Introduction Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/30 p-10 rounded-[2.5rem] border border-white/50">
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-blue-900">
                Find Your Calm
              </h2>
              <p className="leading-relaxed text-blue-800/70 text-lg">
                Life can be overwhelming, but your mind deserves a break. Our
                app uses low-complexity interactions to help reduce mental
                fatigue and lower your heart rate.
              </p>
            </div>
            <div className="h-64 bg-blue-100/50 rounded-3xl flex items-center justify-center border-2 border-dashed border-blue-200 text-blue-400">
              [ Nature/Underwater Illustration ]
            </div>
          </section>

          {/* New Feature: Exercise Selection */}
          <section className="text-center">
            <h2 className="text-2xl font-medium text-blue-900 mb-8">
              Choose Your Path to Peace
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Box Breathing", desc: "Balance your energy" },
                { title: "Deep Sea Drift", desc: "Visual meditation" },
                { title: "Stress Pop", desc: "Micro-interaction game" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/60 p-6 rounded-3xl hover:bg-blue-500 hover:text-white transition-all cursor-pointer group shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl mb-4 mx-auto group-hover:bg-blue-400 transition-colors"></div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm opacity-70">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Large Visual Gallery Placeholder */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-blue-900 text-center">
              Visual Sanctuary
            </h2>
            <div className="columns-1 md:columns-2 gap-6 space-y-6">
              <div className="h-40 bg-blue-200/30 rounded-3xl border border-blue-100 flex items-center justify-center text-blue-400 italic">
                [ Calm Ocean Image ]
              </div>
              <div className="h-80 bg-blue-200/30 rounded-3xl border border-blue-100 flex items-center justify-center text-blue-400 italic">
                [ Deep Sea Fish Species Video ]
              </div>
              <div className="h-60 bg-blue-200/30 rounded-3xl border border-blue-100 flex items-center justify-center text-blue-400 italic">
                [ Abstract Light Patterns ]
              </div>
            </div>
          </section>
        </main>

        {/* Footer Note */}
        <footer className="mt-24 text-center">
          <div className="inline-block p-4 px-8 bg-blue-900 text-white rounded-full text-sm tracking-widest uppercase mb-4 shadow-lg shadow-blue-900/20">
            Exhale the Stress
          </div>
          <p className="text-blue-500 font-light">
            Take a deep breath. You are in a safe space.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
