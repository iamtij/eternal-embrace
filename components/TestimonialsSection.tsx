
import React from 'react';
import { TESTIMONIALS } from '../constants';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 md:py-48 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-xs font-bold tracking-[0.4em] text-slate-400 uppercase mb-24">Voices of Peace</h2>
        <div className="space-y-32">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="text-center space-y-10 animate-in fade-in duration-700">
              <p className="text-2xl md:text-4xl font-serif text-slate-700 leading-relaxed font-light italic">
                "{t.content}"
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-lg font-bold text-slate-950 tracking-tight">{t.name}</p>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
