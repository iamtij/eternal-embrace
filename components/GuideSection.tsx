
import React from 'react';

export const GuideSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="space-y-8 sm:space-y-12">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.2]">We Walk With You</h2>
          <p className="text-[1.125rem] sm:text-xl text-slate-500 leading-[1.75] font-normal max-w-2xl mx-auto">
            At Eternal Embrace, we understand the sacred nature of these choices. We provide compassion, transparent pricing, and a respectful environment for your family's journey.
          </p>
          <div className="pt-6 sm:pt-8 flex justify-center items-center space-x-6 sm:space-x-12 opacity-60">
             <div className="h-px w-16 sm:w-24 bg-slate-300" />
             <div className="text-xs sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.4em] text-slate-900 uppercase">Legacy of Care</div>
             <div className="h-px w-16 sm:w-24 bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
