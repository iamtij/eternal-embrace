import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-950 leading-[1.15] tracking-tight">
              When Someone You Love Deserves a <br className="hidden md:block" />
              <span className="text-brand-gradient">Peaceful Resting Place</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
              Choosing a final resting place is not easy. You want something dignified, peaceful, and worthy of their memory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <a 
              href="#contact"
              className="bg-brand-gradient text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95"
            >
              Talk to Us Today
            </a>
            <a 
              href="#services"
              className="text-slate-600 px-10 py-5 font-semibold text-lg hover:text-brand-green transition-colors flex items-center justify-center tracking-wide"
            >
              View Available Spaces
            </a>
          </div>

          <div className="w-full pt-16">
            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80&w=1200&h=500" 
                alt="Serene Environment"
                className="w-full h-full object-cover opacity-90 transition-transform duration-[5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
