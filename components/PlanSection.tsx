import React from 'react';

export const PlanSection: React.FC = () => {
  const steps = [
    { title: "Schedule a Visit", desc: "A private consultation or tour at your convenience." },
    { title: "Choose the Space", desc: "Select a peaceful arrangement that fits your family." },
    { title: "Sacred Remembrance", desc: "A beautiful setting to honor and visit their life." }
  ];

  return (
    <section id="plan" className="py-14 sm:py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-[1.2]">A Simple Path Forward</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-6 sm:space-y-8">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-teal-600 uppercase">Step 0{i+1}</span>
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900 tracking-tight leading-[1.3]">{step.title}</h3>
                <p className="text-[1.125rem] sm:text-base text-slate-500 leading-[1.6] font-normal">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <a 
            href="#contact"
            className="inline-flex bg-brand-gradient text-white px-8 sm:px-10 py-5 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-h-[56px] items-center justify-center touch-manipulation"
          >
            Reserve a Space
          </a>
          <p className="mt-6 sm:mt-8 text-[1rem] sm:text-sm text-slate-400 font-medium">We answer every question with care and respect.</p>
        </div>
      </div>
    </section>
  );
};