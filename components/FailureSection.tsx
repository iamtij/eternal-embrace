
import React from 'react';

export const FailureSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center border-t border-slate-100 pt-14 sm:pt-20">
        <h2 className="text-[1.75rem] sm:text-3xl md:text-4xl font-serif font-bold text-slate-950 mb-8 sm:mb-10 tracking-tight leading-[1.25]">
          This moment only happens once.
        </h2>
        <p className="text-[1.125rem] sm:text-lg text-slate-500 font-normal leading-[1.75] max-w-xl mx-auto">
          Avoid the weight of a rushed decision. Give your family the gift of enduring peace and your loved one the dignity they truly deserve.
        </p>
      </div>
    </section>
  );
};
