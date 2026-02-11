import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-36 sm:pt-44 md:pt-52 pb-16 sm:pb-24 md:pb-28 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex flex-col items-center text-center space-y-10 sm:space-y-12 md:space-y-14 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <h1 className="text-[2.25rem] leading-[1.25] sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-950 tracking-tight max-w-[28ch] sm:max-w-none mx-auto">
              When Someone You Love Deserves{' '}
              <br className="hidden sm:block" />
              <span className="text-brand-gradient">a Peaceful Resting Place</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-[65ch] mx-auto leading-[1.75] font-normal px-1">
              Choosing a final resting place is not easy. You want something dignified, peaceful, and worthy of their memory.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <a 
              href="#contact"
              className="bg-brand-gradient text-white px-8 sm:px-10 py-5 rounded-full font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 min-h-[56px] inline-flex items-center justify-center touch-manipulation"
            >
              Talk to Us Today
            </a>
            <a 
              href="#services"
              className="text-slate-600 px-8 sm:px-10 py-5 font-semibold text-base sm:text-lg hover:text-brand-green transition-colors flex items-center justify-center tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 rounded-full min-h-[56px] touch-manipulation"
            >
              View Available Spaces
            </a>
          </div>

          <div className="w-full pt-10 sm:pt-16">
            <div className="aspect-[4/3] sm:aspect-[21/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative group">
              <img 
                src="/eternal-facade.png" 
                alt="Eternal Embrace — a serene, modern facility surrounded by open fields and mountains"
                className="w-full h-full object-cover object-[center_40%] opacity-95 transition-transform duration-[5s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
