import React from 'react';

export const SuccessSection: React.FC = () => {
  return (
    <section id="services" className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-tight tracking-tight">
              A Space Built for <br/> Quiet Reflection
            </h2>
            <div className="space-y-12">
              {[
                "Serene and well-maintained columbarium",
                "Dignified cremation services with care",
                "Quiet spaces for prayer and family reflection",
                "A home your family can visit with peace"
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-teal-100 pl-10 group">
                  <p className="text-xl text-slate-600 font-normal leading-relaxed group-hover:text-slate-900 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
             <div className="absolute inset-0 bg-teal-500/10 rounded-3xl translate-x-4 translate-y-4 -z-10 transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
             <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600&h=800" 
                alt="Sanctuary"
                className="rounded-3xl w-full grayscale opacity-80 hover:grayscale-0 transition-all duration-1000 shadow-sm"
              />
          </div>
        </div>
      </div>
    </section>
  );
};