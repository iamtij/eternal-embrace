
import React from 'react';

export const GuideSection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">We Walk With You</h2>
          <p className="text-xl text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
            At Eternal Embrace, we understand the sacred nature of these choices. We provide compassion, transparent pricing, and a respectful environment for your family's journey.
          </p>
          <div className="pt-12 flex justify-center items-center space-x-12 opacity-40">
             <div className="h-px w-24 bg-slate-300" />
             <div className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">Legacy of Care</div>
             <div className="h-px w-24 bg-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
