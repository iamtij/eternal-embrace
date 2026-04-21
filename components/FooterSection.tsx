import React from 'react';
import { Facebook, MapPin, Phone } from 'lucide-react';
import { Logo } from './Logo';

const ADDRESS_LINE =
  'Strong Republic Nautical Highway, Bayanan II, Calapan City, Oriental Mindoro';

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61578672772176';

export const FooterSection: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100">
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="relative overflow-hidden bg-gradient-to-br from-emerald-100/90 via-teal-50/95 to-sky-100/85"
      >
        <div
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[min(100%,42rem)] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 right-0 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl sm:h-64 sm:w-64"
          aria-hidden
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28 text-center">
          <div className="space-y-10 sm:space-y-12 md:space-y-16">
            <div className="max-w-xl mx-auto space-y-4 sm:space-y-5">
              <h2
                id="contact-heading"
                className="text-[1.75rem] sm:text-3xl font-serif font-bold text-slate-950 tracking-tight"
              >
                Contact us
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-3 text-left text-slate-700 hover:text-brand-blue transition-colors group mx-auto max-w-md"
              >
                <MapPin
                  className="w-6 h-6 text-emerald-700 shrink-0 mt-0.5 group-hover:text-brand-blue transition-colors"
                  aria-hidden
                />
                <span className="text-[1.0625rem] sm:text-lg leading-relaxed font-normal">
                  {ADDRESS_LINE}
                </span>
              </a>
            </div>

            <div className="flex flex-col items-center">
              <a
                href="tel:+639271193673"
                className="bg-brand-gradient text-white px-8 sm:px-12 py-5 sm:py-6 rounded-full font-bold text-lg sm:text-xl shadow-xl shadow-emerald-900/10 hover:shadow-2xl hover:shadow-emerald-900/15 hover:scale-105 transition-all active:scale-95 min-h-[56px] inline-flex items-center justify-center touch-manipulation"
              >
                Speak With Our Team Today
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a
                href="tel:+639271193673"
                className="flex items-center justify-center sm:justify-start space-x-4 text-slate-700 hover:text-brand-blue transition-colors group min-h-[48px] py-2 touch-manipulation"
              >
                <div className="p-3 rounded-full bg-white/70 shadow-sm ring-1 ring-emerald-200/50 group-hover:bg-white group-hover:ring-emerald-300/60 transition-colors flex-shrink-0">
                  <Phone size={22} className="text-emerald-800" />
                </div>
                <span className="font-bold text-base sm:text-lg tracking-tight">+63 (927) 119-3673</span>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 sm:gap-4 text-slate-700 hover:text-brand-blue transition-colors group min-h-[48px] py-2 max-w-md touch-manipulation"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/70 shadow-sm ring-1 ring-emerald-200/50 group-hover:bg-white group-hover:ring-emerald-300/60 transition-colors">
                  <Facebook className="h-6 w-6 text-[#1877F2]" aria-hidden />
                </span>
                <span className="font-semibold text-base sm:text-lg text-left leading-snug">
                  Eternal Embrace Facebook Page
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center gap-6 sm:gap-8 text-slate-400">
          <Logo className="h-[2.2rem] md:h-[calc(2.75rem+20px)]" />

          <div className="flex flex-col items-center gap-3 text-center max-w-lg mx-auto px-2">
            <p className="text-[0.9375rem] sm:text-sm text-slate-500 leading-relaxed">
              {ADDRESS_LINE}
            </p>
            <p className="font-medium text-[0.9375rem] sm:text-xs leading-[1.5]">
              © {year} Eternal Embrace
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
