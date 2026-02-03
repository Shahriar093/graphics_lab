import React from "react";

export default function About() {
  return (
    // Changed background to a soft light blue wash
    <div className="min-h-screen bg-[#f0f7ff] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Title Section */}
        <header className="mb-12 border-b border-blue-100 pb-6">
          <h1 className="text-4xl font-light text-blue-900 tracking-tight">
            Our Mission{" "}
            <span className="text-blue-500 italic"> & Serenity</span>
          </h1>
        </header>

        {/* Vision Section */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-blue-800/80 mb-6">
            In a world that never stops, we provide a digital pause. This
            application is designed to be a gentle companion for those seeking a
            moment of peace through guided breathing and low-stress
            interactions.
          </p>
        </section>

        {/* Feature Cards / Image Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-medium text-blue-900 mb-2">
              Simplicity
            </h3>
            <p className="text-blue-700/70 text-sm">
              We reduce cognitive load by using a minimalist design inspired by
              calm underwater environments.
            </p>
          </div>
          <div className="p-6 bg-blue-100/40 rounded-3xl border border-blue-200 shadow-sm">
            <h3 className="text-xl font-medium text-blue-900 mb-2">
              Science-Backed
            </h3>
            <p className="text-blue-700/70 text-sm">
              Our breathing rhythms are tuned to help regulate your nervous
              system and lower anxiety
            </p>
          </div>
        </div>

        {/* Thesis / Tech Context Section */}
        <section className="bg-white/80 backdrop-blur-md p-8 rounded-[2.5rem] border border-blue-50 shadow-md shadow-blue-100/50">
          <h2 className="text-2xl font-semibold mb-4 text-blue-900">
            The Philosophy
          </h2>
          <p className="text-blue-800/80 leading-relaxed mb-4">
            Just as we aim to detect fish in deep underwater environments with
            **less complexity**, we believe mental health tools should be
            powerful yet efficient. This app combines modern tech (Next.js &
            Tailwind) with the goal of outperforming traditional high-stress
            interfaces by maintaining clarity and calm.
          </p>

          {/* Placeholder for a calming diagram or image */}
          <div className="mt-6 w-full h-48 bg-blue-50/50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-blue-200 group hover:border-blue-400 transition-colors">
            <span className="text-blue-400 italic text-sm">
              [ Placeholder: Deep Sea Visualization or Thesis Logic ]
            </span>
            <span className="text-[10px] text-blue-300 mt-2 font-mono uppercase tracking-widest">
              Underwater Detection Context
            </span>
          </div>
        </section>

        {/* Closing Note */}
        <footer className="mt-16 text-center">
          <p className="text-blue-400 font-light italic text-sm">
            "Peace is the result of retraining your mind to process life as it
            is, rather than as you think it should be."
          </p>
        </footer>
      </div>
    </div>
  );
}
