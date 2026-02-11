
import React from 'react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="why-us" className="py-14 sm:py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-8 sm:mb-12 tracking-tight leading-[1.2]">
          You Want to Honor Them Properly
        </h2>
        
        <p className="text-[1.125rem] sm:text-xl text-slate-500 mb-10 sm:mb-12 leading-[1.75] font-normal max-w-2xl mx-auto">
          The passing of a loved one brings enough weight. Deciding on a final home should provide comfort, not more burden.
        </p>

        <div className="grid gap-6 sm:gap-8 text-left max-w-2xl mx-auto">
          {[
            "Finding a place that feels truly peaceful and sacred",
            "Avoiding the pressure of rushed, difficult decisions",
            "Full clarity on costs without any hidden surprises",
            "Ensuring the dignity your loved one truly deserves"
          ].map((text, i) => (
            <div key={i} className="flex items-start sm:items-center space-x-4 sm:space-x-8 group">
              <div className="w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full bg-brand-green flex-shrink-0 mt-1.5 sm:mt-0 transition-transform group-hover:scale-150" />
              <p className="text-[1.125rem] sm:text-xl md:text-2xl text-slate-700 font-normal leading-[1.6]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <p className="text-xl sm:text-2xl font-serif italic text-slate-400 leading-[1.75]">
            "You want something meaningful, not rushed."
          </p>
        </div>
      </div>
    </section>
  );
};
