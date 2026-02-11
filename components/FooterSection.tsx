import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

export const FooterSection: React.FC = () => {
  return (
    <footer id="contact" className="bg-white border-t border-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="space-y-16 mb-40">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-950 tracking-tight">We are here for you.</h2>
          
          <div className="flex flex-col items-center space-y-10">
            <a 
              href="tel:+639170000000"
              className="bg-brand-gradient text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-transform active:scale-95"
            >
              Speak With Our Team Today
            </a>
            <p className="text-slate-400 font-normal italic text-lg">Private consultations, respectfully guided.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-8">
            <a href="tel:+639170000000" className="flex items-center space-x-4 text-slate-600 hover:text-brand-blue transition-colors group">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-blue-50 transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight">+63 (917) 000-0000</span>
            </a>
            <a href="#" className="flex items-center space-x-4 text-slate-600 hover:text-brand-green transition-colors group">
              <div className="p-3 rounded-full bg-slate-50 group-hover:bg-emerald-50 transition-colors">
                <MessageSquare size={20} />
              </div>
              <span className="font-bold text-lg tracking-tight">Chat via Messenger</span>
            </a>
          </div>
        </div>

        <div className="pt-24 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-10">
          <div className="flex items-center">
            <Logo className="h-8 md:h-10" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 font-medium">
            <p>© 2024 Eternal Embrace Memorial Services. Honoring life with peace.</p>
            <div className="flex items-center space-x-8">
              <a href="#" className="hover:text-brand-green transition-colors uppercase tracking-widest">Privacy</a>
              <a href="#" className="hover:text-brand-blue transition-colors uppercase tracking-widest">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};