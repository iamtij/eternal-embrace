import React from 'react';
import { Check } from 'lucide-react';

const SERVICES = [
  {
    title: 'Cremation Services',
    image: '/service-cremation.jpg',
    alt: 'Cremation services — respectful care with urn and floral tribute',
  },
  {
    title: 'Columbarium',
    image: '/service-columbarium.jpg',
    alt: 'Columbarium hallway with serene niches and flowers',
  },
  {
    title: 'Chapel Services',
    image: '/service-chapel.jpg',
    alt: 'Chapel interior prepared for a dignified service',
  },
] as const;

export const SuccessSection: React.FC = () => {
  return (
    <section id="services" className="py-14 sm:py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-serif font-bold text-slate-950 leading-[1.2] tracking-tight">
            A Space Built for <br className="hidden sm:block" /> Quiet Reflection
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SERVICES.map(({ title, image, alt }) => (
            <article
              key={title}
              className="flex flex-col group rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-50/80 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6">
                <Check
                  className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 shrink-0 mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden
                />
                <p className="text-[1.125rem] sm:text-xl text-slate-700 font-semibold leading-snug group-hover:text-slate-950 transition-colors">
                  {title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
