import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28 text-center">
        <div className="space-y-10 sm:space-y-12 md:space-y-16 mb-16 sm:mb-24">
          <h2 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-950 tracking-tight leading-[1.2]">We are here for you.</h2>
          
          <div className="flex flex-col items-center space-y-8 sm:space-y-10">
            <a 
              href="tel:+639271193673"
              className="bg-brand-gradient text-white px-8 sm:px-12 py-5 sm:py-6 rounded-full font-bold text-lg sm:text-xl shadow-xl hover:scale-105 transition-transform active:scale-95 min-h-[56px] inline-flex items-center justify-center touch-manipulation"
            >
              Speak With Our Team Today
            </a>
            <p className="text-[1.125rem] sm:text-lg text-slate-400 font-normal italic">Private consultations, respectfully guided.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 pt-6 sm:pt-8">
            <a href="tel:+639271193673" className="flex items-center justify-center sm:justify-start space-x-4 text-slate-600 hover:text-brand-blue transition-colors group min-h-[48px] py-2 touch-manipulation">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors flex-shrink-0">
                <Phone size={22} />
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight">+63 (927) 119-3673</span>
            </a>
            <a href="#" className="flex items-center justify-center sm:justify-start space-x-4 text-slate-600 hover:text-brand-green transition-colors group min-h-[48px] py-2 touch-manipulation">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-emerald-50 transition-colors flex-shrink-0">
                <MessageSquare size={22} />
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight">Chat via Messenger</span>
            </a>
          </div>
        </div>

        <div className="pt-12 sm:pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 gap-8 sm:gap-10">
          <div className="flex items-center">
            <Logo className="h-8 md:h-10" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 font-medium text-[0.9375rem] sm:text-xs">
            <p className="leading-[1.5]">© 2024 Eternal Embrace Memorial Services. Honoring life with peace.</p>
            <div className="flex items-center space-x-6 sm:space-x-8">
              <a href="#" className="hover:text-brand-green transition-colors uppercase tracking-widest min-h-[44px] flex items-center touch-manipulation">Privacy</a>
              <a href="#" className="hover:text-brand-blue transition-colors uppercase tracking-widest min-h-[44px] flex items-center touch-manipulation">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};