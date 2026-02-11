
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-14 sm:py-20 md:py-28 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] text-slate-400 uppercase mb-12 sm:mb-16">Voices of Peace</h2>
        <div className="space-y-14 sm:space-y-20 md:space-y-24">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="text-center space-y-5 sm:space-y-6 animate-in fade-in duration-700">
              <p className="text-[1.375rem] sm:text-2xl md:text-4xl font-serif text-slate-700 leading-[1.6] font-light italic">
                "{t.content}"
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-base sm:text-lg font-bold text-slate-950 tracking-tight">{t.name}</p>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
