import React from 'react';

export const PlanSection: React.FC = () => {
  const steps = [
    { title: "Schedule a Visit", desc: "A private consultation or tour at your convenience." },
    { title: "Choose the Space", desc: "Select a peaceful arrangement that fits your family." },
    { title: "Sacred Remembrance", desc: "A beautiful setting to honor and visit their life." }
  ];

  return (
    <section id="plan" className="py-32 md:py-48 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 tracking-tight">A Simple Path Forward</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-20">
          {steps.map((step, i) => (
            <div key={i} className="text-center space-y-8">
              <span className="inline-block text-xs font-bold tracking-[0.3em] text-teal-600 uppercase">Step 0{i+1}</span>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed font-normal">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a 
            href="#contact"
            className="inline-block bg-brand-gradient text-white px-10 py-5 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Reserve a Space
          </a>
          <p className="mt-8 text-sm text-slate-400 font-medium">We answer every question with care and respect.</p>
        </div>
      </div>
    </section>
  );
};