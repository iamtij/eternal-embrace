
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="why-us" className="py-32 md:py-48 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-12 tracking-tight">
          You Want to Honor Them Properly
        </h2>
        
        <p className="text-xl text-slate-500 mb-20 leading-relaxed font-normal max-w-2xl mx-auto">
          The passing of a loved one brings enough weight. Deciding on a final home should provide comfort, not more burden.
        </p>

        <div className="grid gap-12 text-left max-w-2xl mx-auto">
          {[
            "Finding a place that feels truly peaceful and sacred",
            "Avoiding the pressure of rushed, difficult decisions",
            "Full clarity on costs without any hidden surprises",
            "Ensuring the dignity your loved one truly deserves"
          ].map((text, i) => (
            <div key={i} className="flex items-center space-x-8 group">
              <div className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0 transition-transform group-hover:scale-150" />
              <p className="text-xl md:text-2xl text-slate-700 font-normal leading-snug">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <p className="text-2xl font-serif italic text-slate-400 leading-relaxed">
            "You want something meaningful, not rushed."
          </p>
        </div>
      </div>
    </section>
  );
};
